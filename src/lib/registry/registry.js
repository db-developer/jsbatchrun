/**
 *	registry.js: @org.slashlib/jsbatchrun/registry
 *
 *  @module jsbatchrun/registry/registry
 *
 *//*
 *  © 2021, slashlib.org.
 *
 *  registry.js  is  distributed  WITHOUT  ANY  WARRANTY;  without  even the
 *  implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 *
 *//* eslint-disable-next-line */
"use strict";

/**
 *  Moduletable
 *  @ignore
 */
const _m = {
  lang:                 require( "jsbatch-lang"       ),
  strings:              require( "jsbatch-strings"    ),
  dynamic:              require( "../dynamic.require" ),
  util:                 require( "../util"            )
};

/**
 *  Stringtable initializer
 *  @ignore
 */
function _init_STRINGS() {
  const help = _m.strings.HELP;

  const strings = {
    CLASS_MEMBER_REGISTER:  "Environment::register( cmdname, module )",
    ERR_MSG_EXP_WRONG_TYPE: " - Parameter 'module' (exports) must be of type 'object' {registry}.",
    INVOKEHELP:             "invokeHelp",
    MSG_LIST_OF_CMD:        "List of available commands",
    MSG_UNKNOWN_CMD:        "Unknown command",
    OPTION_PREFIX:          "-",
    REGISTER:               "register",
    REGISTRY_KEY_FS:        "fs",
    REGISTRY_KEY_GIT:       "git",
    REGISTRY_KEY_HELP:      `${ help }`,
    REGISTRY_KEY_NPM:       "npm"
  };
  return Object.assign( strings, _m.strings );
}
/**
 *  Stringtable
 *  @ignore
 */
const _STRINGS = _init_STRINGS();

/**
 *  Registry for build commands
 *  @ignore
 */
const _REGISTRY = { }

/**
 *  Register a command with a module for executing the command.
 *
 *  @param  {object}  exports - A modules exports, which must provide all
 *                              properties to make up a registry.
 *                              See: <code>'jsbatch-lang'.isRegistry</code>
 */
function register( exports ) {
  if ( ! _m.lang.isRegistry( exports )) {
       const msg = `${ _STRINGS.CLASS_MEMBER_REGISTER }${ _STRINGS.ERR_MSG_EXP_WRONG_TYPE }`;
       throw new TypeError( msg );
  }
  else Object.defineProperty( _REGISTRY, exports.id, { value: exports, writable:
                              false, enumerable: true, configurable: false });
}

/**
 *  Invoke help (will list all registered commands)
 */
function help( msg ) {
  const tab = _m.lang.isNotEmpty( msg ) ? _STRINGS.TAB2 : _STRINGS.EMPTY;
  return `${ msg }${ _STRINGS.USAGE }\n\r
${ _STRINGS.MSG_LIST_OF_CMD }:
  ${ tab }${ Object.keys( _REGISTRY ).join( `\n\r  ${ tab }` ) }`;
}

/**
 *  Invoke registered commands
 *
 *  @param  {Array}     args  - Commandline arguments
 *  @param  {function}  [log] - A logging function (for testing purposes)
 */
function invoke( args, log ) {
        args      = _m.lang.exists( args ) ? args : [ ];
        log       = _m.lang.exists( log  ) ? log  : console.log;
  const obj       = _m.util.split( args );
  let   registry  = _REGISTRY[ obj.cmd ];
  /* istanbul ignore else: tested by '00.10.uti.spec.js' */
  if ( ! _m.lang.exists( registry )) {
       if (( _m.lang.isNotEmpty( obj.cmd )) && ( obj.cmd !== _STRINGS.HELP )) {
             const message = `${ _STRINGS.MSG_UNKNOWN_CMD }: '${ obj.cmd }'`;
             return Promise.resolve( log( help( `${ message }\n\r\n\r` )));
       }
       else  if (( _m.lang.isNotEmpty( obj.cmd )) && ( obj.cmd === _STRINGS.HELP )) {
             const subobj = _m.util.split( obj.args );
             const submod = _REGISTRY[ subobj.cmd ];
             if ( ! _m.lang.exists( subobj.cmd )) {
                  return Promise.resolve( log( help( _STRINGS.EMPTY )));
             }
             else if ( ! _m.lang.exists( submod )) {
                  const msg = `${ _STRINGS.MSG_UNKNOWN_CMD }: '${ subobj.cmd }'`;
                  return Promise.reject( log( help( `${ msg }\n\r\n\r` )));
             }
             else return _m.util.help( submod, [ _STRINGS.HELP, ...subobj.args ], log );
       }
       else  return Promise.resolve( log( help( _STRINGS.EMPTY )));
  }
  else return _m.util.invoke( registry, obj.args, log );
}

// Module exports:
Object.defineProperty( module.exports, _STRINGS.HELP,     {
  value:    help,
  writable: false, enumerable: true, configurable: false });
Object.defineProperty( module.exports, _STRINGS.INVOKE,   {
  value:    invoke,
  writable: false, enumerable: true, configurable: false });
Object.defineProperty( module.exports, _STRINGS.REGISTER, {
  value:    register,
  writable: false, enumerable: true, configurable: false });
