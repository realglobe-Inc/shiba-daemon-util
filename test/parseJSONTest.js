/**
 * Test for parseJSON.
 * Runs with mocha.
 */
'use strict'

const parseJSON = require('../lib/helpers/parseJSON')
const {ok, deepEqual} = require('assert')

describe('parse-j-s-o-n', () => {
  before(() => {
  })

  after(() => {
  })

  it('Do test', () => {
    deepEqual(
      parseJSON('{"foo": "bar"}'),
      {foo: 'bar'}
    )
  })
})

/* global describe, before, after, it */
