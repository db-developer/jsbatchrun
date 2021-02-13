/**
 *	strings.js: @org.slashlib/jsbatchrun
 *
 *  @module jsbatchrun/strings
 *
 *//*
 *  © 2021, slashlib.org.
 *
 *  util.js  is distributed WITHOUT ANY WARRANTY; without even the implied
 *  warranty of  MERCHANTABILITY  or  FITNESS  FOR  A PARTICULAR  PURPOSE.
 *
 *//* eslint-disable-next-line */
"use strict";

/**
 *  Stringtable
 *  @ignore
 */
const _STRINGS = {
  EXPORTS:    "exports",
  STRINGS:    "STRINGS"
};

const _USAGEARGS = `arguments can be taken from environment by:
    --env:args:use:<property>
    --env:args:prepend:<property>
    --env:args:append:<property>
  arguments can be narrowed down by:
    --args:from  <index>
    --args:to    <index>
    --args:index <index>`;

const _USAGEOPTS = `special:
  --env:opt:<property>:<optionname>
  --help
  --debug`;

/**
 *  Strings to export
 */
const STRINGS = {
  EMPTY:      "",
  HELP:       "help",
  ID:         "id",
  INVOKE:     "invoke",
  TAB1:       "  ",
  TAB2:       "    ",
  TAB3:       "      ",
  USAGE:      "Usage: jsbr [command(s)] [options] [arguments]",
  USAGEARGS:  _USAGEARGS,
  USAGEOPTS:  _USAGEOPTS
};

// add the object of strings to itself, freeze and seal it ...
STRINGS[ _STRINGS.STRINGS ] = STRINGS;
Object.freeze( STRINGS[ _STRINGS.STRINGS ]);
Object.seal(   STRINGS[ _STRINGS.STRINGS ]);

Object.defineProperty( module, _STRINGS.EXPORTS,         {
  value:    STRINGS,
  writable: false, enumerable: true, configurable: false });
