/**
 *	env.js: @org.slashlib/jsbatchrun/env
 *
 *  @module jsbatchrun/env/env
 *
 *//*
 *  © 2021, slashlib.org.
 *
 *  env.js  is distributed WITHOUT ANY WARRANTY; without even the implied
 *  warranty of  MERCHANTABILITY or  FITNESS  FOR  A PARTICULAR  PURPOSE.
 *
 *//* eslint-disable-next-line */
"use strict";

/**
 *  Moduletable
 *  @ignore
 */
const _m = {
  lang:       require( "jsbatch-lang" ),
  minimist:   require( "minimist"     ),
  resolve:    require( "resolve"      ),
  path:       require( "path"         ),
  dynamic:    require( "../dynamic.require" )
};

/**
 *  Stringtable initializer
 *  @ignore
 */
 function _init_STRINGS() {
   const configpath = _m.path.join( ".conf", "jsbatchrun" );

   return {
     CFGFILENAME:       ".jsbatchrun",
     CONFIG_NOT_FOUND:  "Configurationfile not found",
     CONFIGPATH:        configpath,
     EXPORTS:           "exports",
     MODULE_NOT_FOUND:  "MODULE_NOT_FOUND"
   };
 }

/**
 *  Stringtable
 *  @ignore
 */
const _STRINGS = _init_STRINGS();

const _RESOLVE = { basedir: process.cwd() };

/**
 *  Locate and load a config module
 */
function loadConfigModule( argv, paths ) {
  const file  = _m.lang.exists( argv.config ) ? argv.config : _STRINGS.CFGFILENAME;
  const opts  = Object.assign( JSON.parse( JSON.stringify( _RESOLVE )), { paths });
  return _m.dynamic.require( _m.resolve.sync( file, opts ));
}

/**
 *  Run a config module to provide the configuration.
 */
function callConfigModule( register, argv, paths, log ) {
  const module = loadConfigModule( argv, paths );
  /* istanbul ignore else */
  if ( _m.lang.exists( module )) {
       return module( register, argv, log );
  }
  else return { };
}

/**
 *  Load configuration file
 *
 *  @ignore
 *  @param  {Function}  register  - A function to register a command module
 *  @param  {Array}     args      - Array of arguments. Should get 'process.argv' passed in.
 *  @param  {Function}  log       - Function to do logging. Defaults to console.log
 */
function env( register, args, log ) {
      args = _m.lang.exists( args ) ? args : [ ];
      log  = _m.lang.exists( log  ) ? log  : console.log;
  let argv = _m.minimist( args );
  try {
    const  paths  = [
                      process.cwd(),
                      _m.path.join( process.cwd(), _STRINGS.CONFIGPATH )
                    ];
    return callConfigModule( register, argv, paths, log );
  }
  catch( error ) {
    /* istanbul ignore else */
    if ( error.code === _STRINGS.MODULE_NOT_FOUND ) {
         const cfg = ( argv.config ) ? argv.config : `${ _STRINGS.CFGFILENAME }.js`;
         log( `${ _STRINGS.CONFIG_NOT_FOUND }: ${ cfg }` );
         return { };
    }
    else {
         log( error );
         process.exit( 1 );
    }
  }
}

// Module exports:
/**
 *  Load configuration file
 *
 *  @function module:jsbatchrun/env/env._
 *
 *  @param  {Array}     args    - Array of arguments. Should get 'process.argv' passed in.
 *  @param  {Function}  log     - Function to do logging. Defaults to console.log
 */
Object.defineProperty( module, _STRINGS.EXPORTS, {
  value:    env,
  writable: false, enumerable: true, configurable: false });
