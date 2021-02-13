/**
 *	dynamic.require.js: jsbatchrun
 *
 *  @module jsbatchrun/dynamic
 *
 *//*
 *  © 2020, slashlib.org.
 *
 *  dynamic.require.js  is distributed WITHOUT ANY WARRANTY; without even the
 *  implied warranty of  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 *
 *//* eslint-disable-next-line */
"use strict";

/**
 *  Stringtable
 *  @ignore
 */
const _STRINGS = {
  DYNAMICREQUIRERESOLVE:  "resolve",
  DYNAMICREQUIRETARGET:   "require"
};

/**
 *  rollup.js compatible dynamic package resolving.
 *  Calls nodejs <code>require.resolve(request[, options])</code>.
 *
 *  @see [nodejs](https://nodejs.org/api/modules.html#modules_require_resolve_request_options)
 *
 *  @ignore
 *  @param  {string}  request
 *  @param  {object}  options
 *
 *//* istanbul ignore next */
function dynamicRequireResolve( request, options ) {
  return require.resolve( request, options );
}

/**
 *  rollup.js compatible dynamic package loading.
 *  Calls nodejs default <code>require()</code> mechanism.
 *
 *  @ignore
 *  @param  {string}  request
 *
 *//* istanbul ignore next */
function dynamicRequireTarget( request ) {
  return require( request );
}

/* eslint-disable */
// Module exports:
/**
 *  rollup.js compatible dynamic package resolving.
 *  Calls nodejs <code>require.resolve(request[, options])</code>.
 *
 *  @see [nodejs](https://nodejs.org/api/modules.html#modules_require_resolve_request_options)
 *
 *  @function module:jsbatchrun/dynamic.resolve
 *  @param  {string}  request
 *  @param  {object}  options
 */
Object.defineProperty( module.exports, _STRINGS.DYNAMICREQUIRERESOLVE,  {
       value: dynamicRequireResolve,
       writable: false, enumerable: true, configurable: false });
/**
 *  rollup.js compatible dynamic package loading.
 *  Calls nodejs default <code>require()</code> mechanism.
 *
 *  @function module:jsbatchrun/dynamic.require
 *  @param  {string}  request
 */
Object.defineProperty( module.exports, _STRINGS.DYNAMICREQUIRETARGET,   {
       value: dynamicRequireTarget,
       writable: false, enumerable: true, configurable: false });
/* eslint-enable */
