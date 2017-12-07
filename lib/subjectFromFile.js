/**
 * Define subject for
 * @function subjectFor
 * @param {string} filename - Filename to daemonize
 * @param {Object} [options={}]
 * @returns {Object}
 */
'use strict'

const {execFile} = require('child_process')
const path = require('path')
const parseJSON = require('./helpers/parseJSON')
const reservedMethodNames = require('./constants/reservedMethodNames')
const debug = require('debug')('shiba:daemon:util')

/** @lends subjectFor */
function subjectFor (filename, options = {}) {
  const {
    verbose = false,
    subject,
    prefix = 'shiba:daemon'
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
          execFile(filename, [subject, verb, ...args], (err, stdout, stderr) => {
            debug('exec', filename, {subject, verb, args})
            if (verbose) {
              console.log(`[${prefix}] Call "${subject}.${verb}"`)
            }
            if (stderr || err) {
              const message = String(stderr || stdout).trim() || err.message || `Call failed : "${name}"`
              reject(new Error(message))
            } else {
              const result = parseJSON(String(stdout).trim())
              resolve(result)
            }
          })
        })
      }
    }
  })
}

module.exports = subjectFor