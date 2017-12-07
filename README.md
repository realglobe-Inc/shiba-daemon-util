shiba-daemon-util
==========

<!---
This file is generated by ape-tmpl. Do not update manually.
--->

<!-- Badge Start -->
<a name="badges"></a>

[![Build Status][bd_travis_shield_url]][bd_travis_url]
[![npm Version][bd_npm_shield_url]][bd_npm_url]
[![JS Standard][bd_standard_shield_url]][bd_standard_url]

[bd_repo_url]: https://github.com/realglobe-Inc/shiba-daemon-util
[bd_travis_url]: http://travis-ci.org/realglobe-Inc/shiba-daemon-util
[bd_travis_shield_url]: http://img.shields.io/travis/realglobe-Inc/shiba-daemon-util.svg?style=flat
[bd_travis_com_url]: http://travis-ci.com/realglobe-Inc/shiba-daemon-util
[bd_travis_com_shield_url]: https://api.travis-ci.com/realglobe-Inc/shiba-daemon-util.svg?token=
[bd_license_url]: https://github.com/realglobe-Inc/shiba-daemon-util/blob/master/LICENSE
[bd_codeclimate_url]: http://codeclimate.com/github/realglobe-Inc/shiba-daemon-util
[bd_codeclimate_shield_url]: http://img.shields.io/codeclimate/github/realglobe-Inc/shiba-daemon-util.svg?style=flat
[bd_codeclimate_coverage_shield_url]: http://img.shields.io/codeclimate/coverage/github/realglobe-Inc/shiba-daemon-util.svg?style=flat
[bd_gemnasium_url]: https://gemnasium.com/realglobe-Inc/shiba-daemon-util
[bd_gemnasium_shield_url]: https://gemnasium.com/realglobe-Inc/shiba-daemon-util.svg
[bd_npm_url]: http://www.npmjs.org/package/shiba-daemon-util
[bd_npm_shield_url]: http://img.shields.io/npm/v/shiba-daemon-util.svg?style=flat
[bd_standard_url]: http://standardjs.com/
[bd_standard_shield_url]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg

<!-- Badge End -->


<!-- Description Start -->
<a name="description"></a>

Daemon utility for shiba(v/w)

<!-- Description End -->


<!-- Overview Start -->
<a name="overview"></a>



<!-- Overview End -->


<!-- Sections Start -->
<a name="sections"></a>

<!-- Section from "doc/guides/01.Installation.md.hbs" Start -->

<a name="section-doc-guides-01-installation-md"></a>

Installation
-----

```bash
$ npm install shiba-daemon-util --save
```


<!-- Section from "doc/guides/01.Installation.md.hbs" End -->

<!-- Section from "doc/guides/02.Usage.md.hbs" Start -->

<a name="section-doc-guides-02-usage-md"></a>

Usage
---------

```javascript
'use strict'

const {subjectFromFile} = require('shiba-daemon-util')

async function tryExample () {
  const example01 = subjectFromFile(
    'jp.realglobe.shiba.daemon.util.example01'
  )

  await example01.sayHi()
}

tryExample().catch((err) => console.error(err))

```


**jp.realglobe.shiba.daemon.util.example01**
```bash
#!/bin/bash
#

subject=$1
verb=$2
object1=$3
object2=$4

if [[ ${verb} == *"sayHi"* ]]
then
  echo "Hi, ${object1} and ${object2}"
  exit
fi

echo "Unknown verb ${verb}"
exit 1
```

<!-- Section from "doc/guides/02.Usage.md.hbs" End -->

<!-- Section from "doc/guides/10.API Guide.md.hbs" Start -->

<a name="section-doc-guides-10-a-p-i-guide-md"></a>

API Guide
-----

+ [shiba-daemon-util@2.0.1](./doc/api/api.md)


<!-- Section from "doc/guides/10.API Guide.md.hbs" End -->


<!-- Sections Start -->


<!-- LICENSE Start -->
<a name="license"></a>

License
-------
This software is released under the [MIT License](https://github.com/realglobe-Inc/shiba-daemon-util/blob/master/LICENSE).

<!-- LICENSE End -->


<!-- Links Start -->
<a name="links"></a>

Links
------

+ [v][v_url]
+ [w][w_url]
+ [Realglobe, Inc.][realglobe,_inc__url]

[v_url]: https://github.com/realglobe-Inc/v
[w_url]: https://github.com/realglobe-Inc/w
[realglobe,_inc__url]: http://realglobe.jp

<!-- Links End -->
