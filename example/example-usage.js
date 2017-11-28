'use strict'

const shibaDaemonUtil = require('shiba-daemon-util')

async function tryExample () {
  const example01 = subjectFromFile(
    'jp.realglobe.shiba.daemon.util.example01'
  )

  await example01.sayHi()
}

tryExample().catch((err) => console.error(err))
