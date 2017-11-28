/**
 * @function parseJSON
 * @param {string} str
 * @returns {*} Parsed
 */
'use strict'

/** @lends parseJSON */
function parseJSON (str) {
  try {
    return JSON.parse(str)
  } catch (e) {
    return str
  }
}

module.exports = parseJSON
