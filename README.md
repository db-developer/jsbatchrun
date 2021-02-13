# jsbatchrun #

batchrun javascript commands

[![npm version](https://img.shields.io/npm/v/jsbatchrun?color=blue)](https://www.npmjs.com/package/jsbatchrun)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![jsdoc](https://img.shields.io/static/v1?label=jsdoc&message=%20api%20&color=blue)](https://jsdoc.app/)
[![Built with Grunt](https://cdn.gruntjs.com/builtwith.svg)](https://gruntjs.com/)
[![codecov](https://codecov.io/gh/db-developer/jsbatchrun/branch/master/graph/badge.svg)](https://codecov.io/gh/db-developer/jsbatchrun)
[![Build Status](https://travis-ci.com/db-developer/jsbatchrun.svg?branch=master)](https://travis-ci.com/db-developer/jsbatchrun)
[![dependencies](https://david-dm.org/db-developer/jsbatchrun.svg)](https://david-dm.org/)

jsbatchrun is a cli for running predefined javascript tasks. All of the predefined tasks currently use
the [grunt.js](https://gruntjs.com/) framework and are platform independent. All jobs follow a scheme:

```shell
# Note: jsbr is an alias for 'jsbatchrun'
> jsbr command subcommand [ subcommand ...] <options and flags> argument [ argument ...]
```

The following example would run 'npm install' in each and every directory listed as argument.

```shell
> jsbr npm install ~/project/project1 ~/project/project2 ~/project/project3 ~/project/project4
```

Given a configuration which defines a property 'projectlist' {Array<projectpaths>} one might
call:

```shell
> jsbr npm install --env:args:use:projectlist
```

## content ##

* Usage (see further down this page)
  * [Getting started guide](#getting-started)
  * [Usage and examples](#usage)

* Developers
  * [Testing jsbatchrun](docs/grunt.md#testing)
  * [Code coverage of tests for jsbatchrun](docs/grunt.md#code-coverage)
  * [Build jsbatchrun from scratch](docs/grunt.md#building)
  * [NPM integration of jsbatchrun](docs/grunt.md#npm_integration)
  * [Frameworks used for testing, building, etc.](docs/frameworks.md)
  * [API of package jsbatchrun](docs/api.index.md) (self generated with jsbatchrun)

## getting started ##

### install ###

This guide assumes, that you are familiar with the use of [npm](https://npmjs.com "Homepage of npm").  

<code>npm install jsbatchrun --save</code>

### prerequisites ###

jsbatchrun makes use of [grunt.js](https://gruntjs.com/) and [grunt plugins](https://gruntjs.com/plugins).
In case your own projects make use of grunt as well, it's not recommended to install jsbatchrun globally.
Instead you will be better off creating a [jsbatchrun project](docs/jsbr.project.md).

## usage ##

Run <code>jsbr help</code> or <code>jsbr --help</code> to get a list of available commands:

```shell
# Note the hint about a configuration file. This can be fixed by creating one!

> jsbr --help
Configurationfile not found: .jsbatchrun.js
Usage: jsbr [command(s)] [options] [arguments]

List of available commands:
  fs
  git
  npm
>  
```

You can call --help on any stage, like:

```shell
> jsbr npm --help
Missing subcommand for: npm
  List of available subcommands for npm:
    help
    dependency
    install
>  
```
```shell
> jsbr npm dependency --help
npm dependency <options> [directories]
---------------------------------------------------
  options:
    --pkg <string>        a package name
    --version <string>    a version matching semver format
    --dev <boolean>       a flag to indicate 'pkg' being a 'developer' dependency.
>  
```
