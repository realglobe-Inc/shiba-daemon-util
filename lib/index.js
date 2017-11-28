/**
 * Daemon utility for shiba(v/w)
 * @module shiba-daemon-util
 */
'use strict'

const subjectFromFile = require('./subjectFromFile')

const lib = subjectFromFile.bind(this)

Object.assign(lib, {
  subjectFromFile
})

module.exports = lib
