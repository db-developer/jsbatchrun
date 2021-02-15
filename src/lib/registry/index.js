/**
 *	index.js: @org.slashlib/jsbatchrun/registry
 *
 *  @module jsbatchrun/registry
 *
 *//*
 *  © 2021, slashlib.org.
 *
 *  index.js  is distributed WITHOUT ANY WARRANTY; without even the implied
 *  warranty  of  MERCHANTABILITY  or  FITNESS  FOR  A PARTICULAR  PURPOSE.
 *
 *//* eslint-disable-next-line */
"use strict";

/**
 *  Moduletable
 *  @ignore
 */
const _m = { registry: require( "./registry" ) };

/**
 *  Stringtable
 *  @ignore
 */
const _STRINGS = { INVOKE: "invoke", REGISTER: "register" };

// Module exports:
/**
 *  @function module:jsbatchrun/registry.invoke
 *  @param  {Array} args  - Commandline arguments
 */
Object.defineProperty( module.exports, _STRINGS.INVOKE,   {
  value:    _m.registry.invoke,
  writable: false, enumerable: true, configurable: false });
/**
 *  @function module:jsbatchrun/registry.register
 */
Object.defineProperty( module.exports, _STRINGS.REGISTER, {
  value:    _m.registry.register,
  writable: false, enumerable: true, configurable: false });
