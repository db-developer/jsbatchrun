# jsbatchrun #

batchrun javascript commands

[![npm version](https://img.shields.io/npm/v/jsbatchrun?color=blue)](https://www.npmjs.com/package/jsbatchrun)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![jsdoc](https://img.shields.io/static/v1?label=jsdoc&message=%20api%20&color=blue)](https://jsdoc.app/)
[![Built with Grunt](https://cdn.gruntjs.com/builtwith.svg)](https://gruntjs.com/)
[![codecov](https://codecov.io/gh/db-developer/jsbatchrun/branch/master/graph/badge.svg)](https://codecov.io/gh/db-developer/jsbatchrun)
[![Build Status](https://travis-ci.com/db-developer/jsbatchrun.svg?branch=master)](https://travis-ci.com/db-developer/jsbatchrun)
[![dependencies](https://david-dm.org/db-developer/jsbatchrun.svg)](https://david-dm.org/)

While [grunt.js](https://gruntjs.com/) is a great tool for managing vertical tasks within a project,
its capabilities to do the same jobs automated and repeatedly for more than one project are limited.  
jsbatchrun is a cli for running horizontal jobs, which means repeatedly calling predefined tasks for
a number of projects (directories with a package.json file).  
All of jsbatchruns predefined tasks are packaged into 'plugins' which are simply called with options
and arguments, that can be passed in to jsbatchrun manually or they can be read from a configuration
file or 'generated' on the fly.  
Currently all jsbatchrun plugins utilize [grunt.js](https://gruntjs.com/) to be platform independent.  

## content ##

* Usage (see further down this page)
  * [Getting started guide](#getting-started)
  * [Usage and examples](#usage)
  * [Using confguration files](docs/env/env.md)
  * [Commandline options and arguments](docs/env/commandline.md)
  * [Plugins (TODO)]()

* Developers
  * [Testing jsbatchrun](docs/grunt.md#testing)
  * [Code coverage of tests for jsbatchrun](docs/grunt.md#code-coverage)
  * [Build jsbatchrun from scratch](docs/grunt.md#building)
  * [NPM integration of jsbatchrun](docs/grunt.md#npm_integration)
  * [Frameworks used for testing, building, etc.](docs/frameworks.md)
  * [API of package jsbatchrun](docs/api.index.md) (self generated with jsbatchrun)

* [Changelog](docs/changelog.md)

## getting started ##

### install ###

This guide assumes, that you are familiar with the use of [npm](https://npmjs.com "Homepage of npm").  

<code>npm install jsbatchrun --save</code>

### prerequisites ###

jsbatchrun and its plugins utilize [grunt plugins](https://gruntjs.com/plugins).  
In case your own projects make use of grunt as well, it's not recommended to install
jsbatchrun globally. You might be better off creating a
[jsbatchrun project](docs/jsbr.project.md).

## usage ##

### syntax ###

All jobs follow one scheme:

```shell
# Note: jsbr is an alias for 'jsbatchrun'
> jsbr [command] [options and flags] [--] [ argument, ...]
```

#### commands ####

The first value in the list of <code>process.argv</code> is interpreted as command.  
It will be used for looking up a "matching" plugin.

```shell
# lookup plugin 'npm'
> jsbr npm
```

There is (as always) one exception: 'help'  
Help is a valid command, but it's no plugin. Instead 'help' is used to invoke help
on a plugin (which must be named next in the list of <code>process.argv</code>).

```shell
# invoke help on 'nothing' => this will list all registered 'plugins' (aka commands)
> jsbr help

# invoke help on plugin 'npm' => this will list all subcommands of plugin 'npm'
> jsbr help npm
```

### using configuration files ###

Configuration files provide a way to
* load plugins (more commands)
* provide properties that can be used with options or arguments

<code>--config path</code>

path may be an absolute path to a configuration file or it must be relative to
the current working directory (cwd) or (cwd)/.conf/jsbatchrun/

[Read more on configuration files (Follow the link)](docs/enf/env.md)

### options and flags ###

Parsing of options and flags is done by invoking
[minimist](https://www.npmjs.com/package/minimist) on the 'rest' of
<code>process.argv</code> after all commands have been stripped away.

Tip:  
Pass in 'flags' (options with no values) first, to avoid interference with
arguments or use the "--" switch to signal the end of options and the
beginning of arguments to 'minimist'

```shell
# will result in args.flag === "path1" and args._ === [ "path2", "path3" ]
> jsbr command subcommand --flag path1 path2 path3

# will result in args.flag === true and args._ === [ "path1", "path2", "path3" ]
> jsbr command subcommand --flag -- path1 path2 path3
```
### injecting options ###

[You might want to look at the list of special options](docs/env/commandline.md)  

jsbatchrun aims to reduce manual work with monkeyjobs. Therefor it provides a way
to inject options (create them on the fly) with predefined values:  

<code>--env:opt:[propertyname]:[optionname]</code>

```shell
# in case there is a configfile at 'path1' which provides a property named 'foo'
# that has a value 'douchebag', the following will result in calling the
# 'subcommand' of 'command' with the option --bar "douchebag"
> jsbr command subcommand --env:opt:foo:bar --config path1

# The above would be equal to:
> jsbr command subcommand --bar "douchebag"
```

This shows its true power in conjunction with jsbatchruns capability to inject
arguments from properties, defined in a configuration file.

### arguments ###

All values which are no commands and no options are passed to commands as part
of the list of arguments. Simple as that, jsbatchrun provides special options
to 'narrow down' or 'widen' the list of arguments.

### injecting arguments ###

[You might want to look at the list of special options](docs/env/commandline.md)  
jsbatchrun provides three ways of injecting values as arguments.

1. inject arguments if no arguments are provided via the commandline:  

  <code>--env:args:use:[propertyname]</code>
  ```shell
  # this expects the default configuration file to exist and to provide a
  # property named 'directorylist'. All values of 'directorylist' will be
  # passed as arguments to subcommand.
  > jsbr command subcommand --env:args:use:directorylist

  # The following will fail, because arguments are already provided!
  > jsbr command subcommand --env:args:use:directorylist -- ~/projects/project-00 ...

  ```
2. append arguments to the list of arguments:  

  <code>--env:args:append:[propertyname]</code>
  ```shell
  # this expects the default configuration file to exist and to provide a
  # property named 'directorylist'. All values of 'directorylist' will be
  # passed as arguments to subcommand.
  > jsbr command subcommand --env:args:append:directorylist

  # The following will not fail. All values of 'directorylist' will follow
  # after the arguments already provided
  > jsbr command subcommand --env:args:append:directorylist -- ~/projects/project-00 ...

  ```
3. prepend arguments to the list of arguments:  

  <code>--env:args:prepend:[propertyname]</code>
  ```shell
  # this expects the default configuration file to exist and to provide a
  # property named 'directorylist'. All values of 'directorylist' will be
  # passed as arguments to subcommand.
  > jsbr command subcommand --env:args:append:directorylist

  # All values of 'directorylist' will be inserted before the arguments already
  # provided
  > jsbr command subcommand --env:args:prepend:directorylist -- ~/projects/project-00 ...

  ```

### narrowing of arguments ###

In case your previous command failed with argument (project) no. X in your list
of arguments. Would you like to retype your command with the remaining number of
n arguments?  

To avoid that, arguments can be narrowed, no matter how many arguments have been
prepended to, used by or appended to your list of arguments.

[You might want to look at the list of special options](docs/env/commandline.md)

1. Start argument processing at a given position:

  <code>--args:from</code>
  ```shell
  # this will pass all arguments to subcommand, starting with and including the
  # seventh argument, up to the last argument of the list of arguments.
  > jsbr command subcommand --args:from 7 --env:args:[type]:[property] [more arguments]

  # Note: in case there are less then "7" arguments, nothing will happen ;-)
  ```
2. Stop processing arguments at a given position:

  <code>--args:to</code>
  ```shell
  # this will pass all arguments to subcommand, starting with the first argument of the
  # list of arguments and stopping at but including the seventh argument.
  > jsbr command subcommand --args:to 7 --env:args:[type]:[property] [more arguments]

  # Note: in case there are less then "7" arguments, only the available number of arguments
  #       can and will be processed.
  ```
3. Start and stop processing arguments at a given position:

  ```shell
  > jsbr command subcommand --args:from 3 --args:to 7 --env:args:[type]:[property] [more arguments]
  ```
4. Process an argument at a given position:

  ```shell
  > jsbr command subcommand --args:index 3 --env:args:[type]:[property] [more arguments]
  ```
