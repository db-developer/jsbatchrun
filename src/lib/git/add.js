/**
 *	add.js: @org.slashlib/jsbatchrun/git
 *
 *  @module jsbatchrun/git/add
 *
 *//*
 *  © 2021, slashlib.org.
 *
 *  add.js  is  distributed WITHOUT ANY WARRANTY; without even the implied
 *  warranty of  MERCHANTABILITY  or  FITNESS  FOR  A PARTICULAR  PURPOSE.
 *
 *//* eslint-disable-next-line */
"use strict";

/**
 *  Module initializer
 *  @ignore
 */
const _m = {
  lang:     require( "jsbatch-lang" ),
  grunt:    require( "grunt"        ),
  strings:  require( "../strings"   )
};

/**
 *  Stringtable initializer
 *  @ignore
 */
function _init_STRINGS() {
  const add   = "add";
  const usage = `${ _m.strings.TAB3 } jsbr git ${ add } <options> [directories]`;

  const strings = {
    ADD:                      `${ add }`,
    CMD_ADD:                  `${ add }`,
    CMDUSAGE:                 usage,
    CONFIG:                   "config",
    GRUNT_PLUGIN_GIT:         "grunt-git",
    GRUNT_TASK_GIT_ADD:       "gitadd",
    ID_VALUE:                 `${ add }`
  };
  return Object.assign( strings, _m.strings.STRINGS );
}

/**
 *  Stringtable
 *  @ignore
 */
const _STRINGS = _init_STRINGS();

function validateArgs( args ) {
  if (( ! args.all ) && ( ! args.file )) {
        throw new Error( "Missing option. Command git add requires '--all' or '--file'" );
  }
  else return true;
}

/**
 *  Run 'git add' with validated arguments.
 *
 *  @param  {object} args
 */
function invoke( args ) {
  if ( ! _m.lang.exists( args )) {
       return Promise.reject( new ReferenceError( "Missing parameter 'args'." ));
  }
  else return new Promise(( resolve, reject ) => {
    _m.grunt.task.init  = function() {};
    _m.grunt.loadNpmTasks( _STRINGS.GRUNT_PLUGIN_GIT );

    try { validateArgs( args ); }
    catch( error ) { return reject( error ); }

    const dirs    = Array.isArray( args.args ) ? args.args : [ ];
    const failed  = [ ];
    const promise = dirs.reduce(( promise, dir, index ) => {
      // reset errorcount & warncount
      _m.grunt.fail.errorcount = 0;
      _m.grunt.fail.warncount  = 0;

      return promise.then(() => {
        return new Promise(( resolve /*, reject */) => {
          const tasks = [ _STRINGS.GRUNT_TASK_GIT_ADD ];
          _m.grunt.config.init( config( dir, args ));
          _m.grunt.tasks( tasks, { force: true }, () => {
            /* istanbul ignore if */
            if ( _m.grunt.fail.errorcount > 1 ) {
                 failed.push({ index, dir })
                 _m.grunt.log.error( dir );
            }
            else _m.grunt.log.ok( dir );
            // always resolve!
            resolve();
          });
        });
      });
    }, Promise.resolve());

    // finally resolve or reject our promise ...
    promise.then(( /*v*/ ) => {
                   /* istanbul ignore if */
                   if ( failed.length > 0 ) { reject( failed ); }
                   else resolve(); },
                 /* istanbul ignore next */
                 ( error ) => { reject( error )});
  });
}

/**
 *  Returns a grunt configuration for npm clean
 *  @param  {string}  projectdir
 *  @return {object}  grunt configuration
 */
function config( projectdir, args ) {
  projectdir  = projectdir ? projectdir : ".";
  args        = args       ? args       : { };

  if ( args.all ) { // if all && file => all wins!
       const options = { cwd: projectdir, all: true };
       return { gitadd: { npm: { options }}};
  }
  else if ( args.file ) {
       const src     = Array.isArray( args.file ) ? args.file : [ args.file ];
       const options = { cwd: projectdir };
       const files   = { src };
       return { gitadd: { npm: { options, files }}};
  }
  else validateArgs( args ); // something went wrong!
}

/**
 *  Help string for 'npm clean' command
 *
 *//* eslint-disable-next-line no-unused-vars */
function help( cmdstr, args ) {
  return `${ _STRINGS.USAGE }\n\r${ _STRINGS.CMDUSAGE }

options:
  --all             add all changes to stageing
  --file <string>   add file(s) to staging

  ${ _STRINGS.USAGEOPTS }

arguments:
  one or more directories, which hold package.json files.
  ${ _STRINGS.USAGEARGS }`;
}

// Module exports:
Object.defineProperty( module.exports, _STRINGS.CONFIG,  {
  value:    config,
  writable: false, enumerable: true, configurable: false });
Object.defineProperty( module.exports, _STRINGS.HELP,    {
  value:    help,
  writable: false, enumerable: true, configurable: false });
Object.defineProperty( module.exports, _STRINGS.ID,      {
  value:    _STRINGS.ID_VALUE,
  writable: false, enumerable: true, configurable: false });
Object.defineProperty( module.exports, _STRINGS.INVOKE,  {
  value:    invoke,
  writable: false, enumerable: true, configurable: false });
