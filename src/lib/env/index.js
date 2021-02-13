/**
 *	index.js: @org.slashlib/jsbatchrun/env
 *
 *  Setup a command environment.
 *    - require a configuration file, which can either be:
 *      - process.cwd()/.jsbatchrun.js
 *      - process.cwd()/.conf/jsbatchrun/.jsbatchrun.js
 *    - call the configfiles "module.exports" as function:
 *      require( ... )( env );
 *    - make env accessable via parameters. e.g.:
 *      --env:myproperty
 *    - enable injecting additional arguments
 *      --env:args:append:myproperty
 *      --env:args:prepend:myproperty
 *
 *  @module jsbatchrun/env
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
  env:          require( "./env" ),
  environment:  require( "./environment" )
};

/*
 *  Make class Environment available.
 */
const Environment = _m.environment.Environment;

/**
 *  Stringtable
 *  @ignore
 */
const _STRINGS =  {
  EXPORTS:      "exports"
};

/**
 *  Singleton instance of class Environment.
 *  @ignore
 */
let _ENVIRONMENT = undefined;

/**
 *
 */
function get( registry, args, log ) {
  if ( ! _ENVIRONMENT ) {
       // disable direct access to registry by indirection
       const register = ( commandname, module ) => {
         registry.register( commandname, module );
       }
       _ENVIRONMENT = new Environment( _m.env( register, args, log ));
  }
  return _ENVIRONMENT;
}

// Module exports:
/**
 *  Load configuration file
 *
 *  @function module:jsbatchrun/env._
 *
 *  @param  {Array}     args    - Array of arguments. Should get 'process.argv' passed in.
 *  @param  {Function}  log     - Function to do logging. Defaults to console.log
 */
Object.defineProperty( module, _STRINGS.EXPORTS, {
  value:    get,
  writable: false, enumerable: true, configurable: false });
