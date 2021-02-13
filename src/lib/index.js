/**
 *	index.js: @org.slashlib/jsbatchrun
 *
 *  @module jsbatchrun
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
 *  Moduletable
 *  @ignore
 */
const _m = { jsbatchrun: require( "./jsbatchrun" ) };

/**
 *  Stringtable
 *  @ignore
 */
const _STRINGS = { MAIN: "main", RUN: "run" };

/**
 *  Main function - call this when embedding jsbatchrun.
 *  This function is exported and returns a Promise on
 *  each call.
 *
 *  @return {Promise} for each call.
 */
function main() { return _m.jsbatchrun.main( ...process.argv ); }

/**
 *  Will invoke the main function.
 *  This is called if jsbatchrun is called manually (via commandline).
 *  It does not return anything and handles rejected command promises.
 */
function run() { _m.jsbatchrun.run( ...process.argv ); }


// Run main, if module is called directly
/* istanbul ignore if: this is not available for testing*/
if ( require.main === module ) { run(); }

// Module exports:
Object.defineProperty( module.exports, _STRINGS.MAIN,    {
  value:    main,
  writable: false, enumerable: true, configurable: false });
Object.defineProperty( module.exports, _STRINGS.RUN,     {
  value:    run,
  writable: false, enumerable: true, configurable: false });
