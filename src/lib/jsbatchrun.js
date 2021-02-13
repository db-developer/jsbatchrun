/**
 *	jsbatchrun.js: @org.slashlib/jsbatchrun
 *
 *  @module jsbatchrun/jsbatchrun
 *
 *//*
 *  © 2021, slashlib.org.
 *
 *  jsbatchrun.js  is distributed  WITHOUT  ANY WARRANTY;  without even  the
 *  implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 *
 *//* eslint-disable-next-line */
"use strict";

/**
 *  Module initializer
 *  @ignore
 */
const _m = {
  lang:         require( "jsbatch-lang" ),
  env:          require( "./env"        ),
  registry:     require( "./registry"   )
};

/**
 *  Stringtable
 *  @ignore
 */
const _STRINGS = {
  ARG_DEBUG:    "--debug",
  DBG_MSG:      "jsbatchrun called with args",
  EXITPROCESS:  "exitprocess",
  GRUNT:        "grunt",
  MAIN:         "main",
  REJECTED:     "rejected",
  RUN:          "run"
};

/**
 *  Main function - call this when embedding jsbatchrun.
 *  This function is exported and returns a Promise on
 *  each call.
 *
 *  @param  {Array} argv  - Equals process.argv
 *  @return {Promise} for each call.
 */
function main( ...argv ) {
  if ( argv.includes( _STRINGS.ARG_DEBUG )) {
       // print debug message if --debug is set
       console.log( `${ _STRINGS.DBG_MSG }: ${ argv.slice( 2 ) }` );
  }
  // load environment
  _m.env( _m.registry, process.argv );

  return _m.registry.invoke( argv.slice( 2 ));
}

/**
 *  Invokes the main function.
 *  This is called if jsbatchrun is run manually (on the commandline).
 *  It must not return anything must handle rejected command promises.
 *
 *  @param  {Array} argv  - Equals process.argv
 */
function run( ...argv ) {
  const retval = main( ...argv );
  /* istanbul ignore else */
  if ( retval instanceof Promise ) {
       retval.then((       ) => { exitprocess( 0 );  },
                   /* istanbul ignore next */
                   ( error ) => { rejected( argv, error ); });
  }
}

/**
 *  Handle errors of rejected promises...
 *
 *  @param  {any}       error     - The object returned by promise( ..., (error))
 *  @param  {function}  [errlog]  - A function to log errors (testing purposes)
 */
function rejected( argv, error, errlog ) {
  argv   = _m.lang.exists(  argv  ) ? argv   : [ ];
  errlog = _m.lang.exists( errlog ) ? errlog : console.error;
  if ( _m.lang.exists( error )) {
       if ( argv.includes( _STRINGS.ARG_DEBUG )) {
            // print stacktrace if '--debug' is set
            errlog( error );
       }
       else errlog( error.toString());
  }
  exitprocess( 1 );
}

/**
 *  Indirection for <code>process.exit( ... )</code>
 *  Set <code>process.env.NODE_ENV</code> to 'grunt'
 *  to avoid exits (see gruntfile.js - useful for
 *  running tests without unwanted exits ;-)
 *
 *  @param  {integer} value - Passed to <code>process.exit( value )</code>
 */
function exitprocess( value ) {
  /* istanbul ignore if */
  if ( process.env.NODE_ENV !==  _STRINGS.GRUNT ) {
       process.exit( value );
  }
}

// Module exports:
Object.defineProperty( module.exports, _STRINGS.EXITPROCESS,  {
  value:    exitprocess,
  writable: false, enumerable: true, configurable: false });
Object.defineProperty( module.exports, _STRINGS.MAIN,     {
  value:    main,
  writable: false, enumerable: true, configurable: false });
Object.defineProperty( module.exports, _STRINGS.REJECTED, {
  value:    rejected,
  writable: false, enumerable: true, configurable: false });
Object.defineProperty( module.exports, _STRINGS.RUN,      {
  value:    run,
  writable: false, enumerable: true, configurable: false });
