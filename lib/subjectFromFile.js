/**
 * Define subject for
 * @function subjectForFile
 * @param {string} filename - Filename to daemonize
 * @param {Object} [options={}]
 * @returns {Object}
 */
'use strict'

const {spawn} = require('child_process')
const path = require('path')
const parseJSON = require('./helpers/parseJSON')
const reservedMethodNames = require('./constants/reservedMethodNames')
const debug = require('debug')('shiba:daemon:util')

/** @lends subjectForFile */
function subjectForFile (filename, options = {}) {
  const {
    verbose = false,
    subject,
    prefix = 'shiba:daemon',
    onStdout = null,
    onStderr = null,
  } = options

  const target = {}
  return new Proxy(target, {
    get (target, name) {
      const isMethod = !reservedMethodNames.includes(name)
      if (!isMethod) {
        return target[name]
      }
      if (typeof name === 'symbol') {
        return target[name]
      }
      debug('proxy.get', name)
      const verb = String(name).trim()
      filename = path.resolve(filename)
      return async function execFileProxy (...args) {
        return new Promise((resolve, reject) => {
          const spawned = spawn(filename, [subject, verb, ...args])
          spawned.on('error', (err) => reject(err && err.message || `Call failed : "${name}"`))
          let stdout = ''
          let stderr = ''
          spawned.stdout.on('data', (chunk) => {
            stdout += chunk
            onStdout && onStdout(chunk)
          })
          spawned.stderr.on('data', (chunk) => {
            stderr += chunk
            onStderr && onStderr(chunk)
          })
          spawned.on('close', () => {
            debug('exec', filename, {subject, verb, args})
            if (verbose) {
              console.log(`[${prefix}] Call "${subject}.${verb}"`)
            }
            if (stderr) {
              const message = String(stderr || stdout).trim() || err.message || `Call failed : "${name}"`
              reject(new Error(message))
            } else {
              const result = parseJSON(String(stdout))
              resolve(result)
            }
          })
        })
      }
    }
  })
}

module.exports = subjectForFile