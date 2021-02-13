/**
 *	index.js: @org.slashlib/jsbatchrun/npm
 *
 *  @module jsbatchrun/npm
 *
 *//*
 *  © 2021, slashlib.org.
 *
 *  index.js is distributed WITHOUT ANY WARRANTY; without even the implied
 *  warranty  of  MERCHANTABILITY  or  FITNESS  FOR  A PARTICULAR  PURPOSE.
 *
 *//* eslint-disable-next-line */
"use strict";

/**
 *  Module initializer
 *  @ignore
 */
const _m = {
  lang:                 require( "jsbatch-lang" ),
  clean:                require( "./clean"      )
};

/**
 *  Stringtable
 *  @ignore
 */
const _STRINGS =  {
  EXPORTS:              "exports",
  FS:                   "fs"
};

/**
 *  Registry for npm commands
 *  @ignore
 */
const _REGISTRY = _m.lang.registry( _STRINGS.FS );

// clean
Object.defineProperty( _REGISTRY.cmd, _m.clean.id,       {
  value:    _m.clean.invoke,
  writable: false, enumerable: true, configurable: false });
Object.defineProperty( _REGISTRY.help, _m.clean.id,      {
  value:    _m.clean.help,
  writable: false, enumerable: true, configurable: false });

// Module exports:
Object.defineProperty( module, _STRINGS.EXPORTS,         {
  value:    _REGISTRY,
  writable: false, enumerable: true, configurable: false });
