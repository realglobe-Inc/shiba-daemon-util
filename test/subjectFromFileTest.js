/**
 * Test for subjectFromFile.
 * Runs with mocha.
 */
'use strict'

const subjectFromFile = require('../lib/subjectFromFile')
const {ok, equal} = require('assert')

describe('subject-from-file', () => {
  before(() => {
  })

  after(() => {
  })

  it('Do test', async () => {
    const example01 = subjectFromFile(
      `${__dirname}/../example/jp.realglobe.shiba.daemon.util.example01`
    )
    equal(
      await example01.sayHi('hoge'),
      'Hi, hoge and'
    )
  })
})

/* global describe, before, after, it */
