/**
 * Test for reservedMethodNames.
 * Runs with mocha.
 */
'use strict'

const reservedMethodNames = require('../lib/constants/reservedMethodNames')
const {ok, equal} = require('assert')

describe('reserved-method-names', () => {
  before(() => {
  })

  after(() => {
  })

  it('Do test', () => {
    for (const reservedMethodName of reservedMethodNames) {
      ok(reservedMethodName)
    }
  })
})

/* global describe, before, after, it */
