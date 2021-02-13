/**
 *	util.js: @org.slashlib/jsbatchrun
 *
 *  @module jsbatchrun/util
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
 *  Module initializer
 *  @ignore
 */
const _m = {
  lang:             require( "jsbatch-lang" ),
  minimist:         require( "minimist"     ),
  path:             require( "path"         ),
  env:              require( "./env"        ),
  strings:          require( "./strings"    )
};

/**
 *  Stringtable initializer
 *  @ignore
 */
function _init_STRINGS() {
  const args  = "args";
  const delim = ":";
  const env   = "env";
  const opt   = "opt";

  const strings    = {
    ARGS_FROM:                        `${ args }${ delim }from`,
    ARGS_INDEX:                       `${ args }${ delim }index`,
    ARGS_TO:                          `${ args }${ delim }to`,
    CMD_HELP:                         _m.strings.HELP,
    CMD_INVOKE:                       _m.strings.INVOKE,
    CMD_INVOKESAFE:                   "invokeSafe",
    CMD_LIST:                         "list",
    CMD_PARSE:                        "parse",
    DELIMITER:                        delim,
    EMPTY:                            "",
    ENV_ARGS_APPEND:                  `${ env }${ delim }${ args }${ delim }append${ delim }`,
    ENV_ARGS_PREPEND:                 `${ env }${ delim }${ args }${ delim }prepend${ delim }`,
    ENV_ARGS_USE:                     `${ env }${ delim }${ args }${ delim }use${ delim }`,
    ENV_OPT:                          `${ env }${ delim }${ opt  }${ delim }`,
    ERR_MSG_NOT_A_FUNCTION:           "is not a function",
    FUNCTION:                         "function",
    MSG_LIST_OF_CMD:                  "List of available subcommands for",
    MSG_NO_CMD_REGISTERED:            "No commands registered for",
    NO_CMD_TO_LIST_SUBCMD:            "No command available to list subcommands.",
    MSG_NO_HELP_REGISTERED:           "No help registered",
    MSG_NO_HELP_CALLBACK_REGISTERED:  "No help callback registered for",
    MSG_MISSING_SUBCOMMAND:           "Missing subcommand for",
    MSG_NO_SUCH_CMD:                  "No such command",
    OPTION_PREFIX:                    "-",
    PROJECTDIRS:                      "projectdirs",
    PUSH:                             "push",
    REGISTRY:                         "registry",
    SLASHLIBSCOPE:                    "@org.slashlib",
    SPLIT:                            "split",
    TYPE_OBJECT:                      "object",
    TYPE_STRING:                      "string",
  };
  return Object.assign( strings, _m.strings.STRINGS );
}

/**
 *  Stringtable
 *  @ignore
 */
const _STRINGS  = _init_STRINGS();

/**
 *  Split command from arguments.
 *
 *  @param  {Array}   args
 *  @return {object}  {cmd,args}
 */
function split( args ) {
  args = (( args !== null      ) &&
          ( args !== undefined )) ? args : [ ];
  if (( args.length <= 0 ) ||
      ( args[ 0 ].startsWith( _STRINGS.OPTION_PREFIX ))) {
        return { cmd: undefined, args };
  }
  else  return { cmd: args[ 0 ], args: args.slice( 1 ) };
}

/**
 *  Help strings for all registry commands.
 *
 *  @param  {object}    registry        - A command registry
 *  @param  {object}    registry.help   - Registered help functions
 *  @param  {object}    registry.cmd    - Registered command functions
 *  @param  {Array}     args            - Array of arguments
 *  @param  {Function}  [log]           - A log function which defaults to console.log
 */
function help( registry, args, log ) {
  registry    = _m.lang.validateRegistry( registry );

  log         = _m.lang.exists( log  ) ? log  : console.log;
  args        = _m.lang.exists( args ) ? args : [ ];

  const cmd   = registry.id;
  const obj   = split( args );
  const funct = registry.help[ obj.cmd ];
  if (( funct === null ) || ( funct === undefined )) {
        let errmsg = undefined;
        if (( obj.cmd !== null ) && ( obj.cmd !== undefined )) {
              errmsg = `${ _STRINGS.MSG_NO_HELP_CALLBACK_REGISTERED } '${ cmd }' '${ obj.cmd }'`;
        }
        else  errmsg = `${ _STRINGS.MSG_MISSING_SUBCOMMAND }: ${ cmd }`;
        log( errmsg );
        list( registry, log );
        return Promise.reject( new Error( errmsg ));
  }
  else return Promise.resolve( log( funct( `${ cmd } ${ obj.cmd }`, obj.args )));
}

/**
 *  List all available registry commands.
 *
 *  @param  {object}    registry        - A command registry
 *  @param  {object}    registry.help   - Registered help functions
 *  @param  {object}    registry.cmd    - Registered command functions
 *  @param  {string}    cmd             - Actual command
 *  @param  {Function}  [log]           - A log function which defaults to console.log
 */
function list( registry, log ) {
  registry = _m.lang.validateRegistry( registry );
  log      = _m.lang.exists( log  ) ? log  : console.log;

  if ( Object.keys( registry.cmd ).length > 0 ) {
       const usage   = `       jsbr ${ registry.id } [subcommand(s)] [options] [arguments]`;
       const message = `${ _m.strings.USAGE }\n\r${ usage }\n\r\n\r`
       log( `${ message }${ _STRINGS.MSG_LIST_OF_CMD } ${ registry.id }:
  ${ Object.keys( registry.cmd ).join( "\n\r  " ) }\n\r`);
  }
  else log( `${ _STRINGS.MSG_NO_CMD_REGISTERED } ${ registry.id }.` );
}

/**
 *  Invoke registered (sub) commands.
 *  This method can be called by command modules and plugins.
 *
 *  @param  {object}    registry        - A command and help registry
 *  @param  {object}    registry.cmd    - Registered commands
 *  @param  {object}    registry.help   - Registered help
 *  @param  {Array}     args            - Array of arguments
 *  @param  {Function}  [log]           - A log function which defaults to console.log
 *
 *  @return {Promise} from invoking a command.
 */
function invoke( registry, args, log ) {
  registry    = _m.lang.validateRegistry( registry );
  log         = _m.lang.exists( log  ) ? log  : console.log;
  args        = _m.lang.exists( args ) ? args : [ ];

  const obj   = split( args );

  if ( _m.lang.exists( obj.cmd ) && ( obj.cmd !== _STRINGS.HELP )) {
       const funct = registry.cmd[  obj.cmd ];
       const help  = registry.help[ obj.cmd ];
       if (( funct === null ) || ( funct === undefined )) {
             const errmsg = `${ _STRINGS.MSG_NO_SUCH_CMD }: ${ registry.id } ${ obj.cmd }\n\r`;
             log( errmsg );
             list( registry, log );
             return Promise.reject( new Error( errmsg ));
       }
       else  return invokeSafe( obj.args, funct, help, log );
  }
  else return help( registry, obj.args, log );
}

/**
 *  Invoke 'funct' in a safe manner.
 *  This method can be called by command modules to invoke their 'invoke' function.
 *
 *  @param  {Array}     args      - Array of arguments
 *  @param  {Function}  invoke    - Command invoke(...) function
 *  @param  {Function}  help      - Command help function
 *  @param  {Function}  [log]     - A log function which defaults to console.log
 *
 *  @return {Promise} from calling a commands invoke or help function.
 */
function invokeSafe( args, invoke, help, log ) {
  log  = (( log  === null ) || ( log  === undefined )) ? console.log : log;
  args = (( args !== null ) && ( args !== undefined )) ? args : [ ];

  if (( ! _m.lang.exists( invoke ))  || ( ! _m.lang.isFunction( invoke ))) {
        const error = new TypeError( `'invoke' ${ _STRINGS.ERR_MSG_NOT_A_FUNCTION }` );
        return Promise.reject( error );
  }

  if (( ! _m.lang.exists( help   ))  || ( ! _m.lang.isFunction( help   ))) {
        const error = new TypeError( `'help' ${ _STRINGS.ERR_MSG_NOT_A_FUNCTION }` );
        return Promise.reject( error );
  }

  const  argv    = parse( args );
  const  promise = ( ! argv.help ) ? invoke( argv, log ) :
                     new Promise(( resolve ) => { log( help( argv )); resolve();});
  return promise.then(( value ) => { return value; },
                      ( error ) => { if ( argv.ignoreerrors ) { return error; }
                                     else throw  error; });
}

/**
 *  Push a value to array.
 *
 *  @param  {Array}   array
 *  @param  {any}     value
 */
function push( array, value ) {
  if (( value !== null ) && ( value !== undefined )) {
        if ( Array.isArray( value )) { array.push( ...value ); }
        else array.push( value );
  }
}

/**
 *  Parse and normalize incoming arguments to:
 *
 *  @example:
 *    args = parse( args );
 *    args._                  {Array<string>}   - An array of project directories
 *    args["env:projectdirs"] {boolean}         - additionally append directories of project
 *                                                list
 *    args["args:index"]      {integer}         - Only run this index in the list of project
 *                                                directories
 *    args["args:from"]       {integer}         - Start index (including) within the list of
 *                                                project directories
 *    args["args:to"]         {integer}         - End index (including) within the list of
 *                                                project directories
 */
function parse( args ) {
  args     = (( args     !== null      ) &&
              ( args     !== undefined )) ? args : [ ];
  let argv = _m.minimist( args );

  const append  = [];
  const prepend = [];
  const env     = _m.env();
  Object.keys( argv ).forEach(( key ) => {
    // ENV_ARGS_APPEND:     "env:args:append:property",
    // ENV_ARGS_PREPEND:    "env:args:prepend:property",
    if ( key.startsWith( _STRINGS.ENV_ARGS_PREPEND )) {
         const envkey = key.substring( 17 );
         push( prepend, env[ envkey ]);
    }
    else if ( key.startsWith( _STRINGS.ENV_ARGS_APPEND )) {
         const envkey = key.substring( 16 );
         push( append, env[ envkey ]);
    }
    else if ( key.startsWith( _STRINGS.ENV_ARGS_USE )) {
      if (( _m.lang.exists( argv._ )) && ( Array.isArray( argv._ )) &&
          ( argv._.length > 0 )) {
            throw Error( "Cannot overwrite existing arguments" );
      }
      else {
            const envkey = key.substring( 13 );
                  argv._ = [ ];
            push( argv._, env[ envkey ]);
      }
    }
    else if ( key.startsWith( _STRINGS.ENV_OPT )) {
      const envstr = key.substring( 8 );
      const delim  = envstr.indexOf( _STRINGS.DELIMITER );
      const envopt = envstr.substring( 0, delim );
      const envkey = envstr.substring( delim + 1 );

      if ( _m.lang.isNotEmpty( envopt )) {
           argv[ envopt ] = env[ envkey ];
      }
    }
  });
  argv._ = [ ...prepend, ...argv._, ...append ];

  if ( argv[ _STRINGS.ARGS_FROM  ]) {
       argv[ _STRINGS.ARGS_FROM  ] = _m.lang.validateInteger( argv[ _STRINGS.ARGS_FROM  ], 0, argv._.length - 1 );
  }
  if ( argv[ _STRINGS.ARGS_TO    ]) {
       argv[ _STRINGS.ARGS_TO    ] = _m.lang.validateInteger( argv[ _STRINGS.ARGS_TO    ], 0, argv._.length - 1 );
  }

  const assignee = { };
        assignee[ _STRINGS.ARGS_FROM ] = 0;
        assignee[ _STRINGS.ARGS_TO   ] = ( argv._.length - 1 );

  argv = Object.assign( assignee, argv );

  if ( argv[ _STRINGS.ARGS_INDEX ]) {
       argv[ _STRINGS.ARGS_INDEX ]  = _m.lang.validateInteger( argv[ _STRINGS.ARGS_INDEX ], 0, argv._.length - 1 );
  }

  if ( argv[ _STRINGS.ARGS_INDEX ]) {
       argv[ _STRINGS.ARGS_FROM ] = argv[ _STRINGS.ARGS_INDEX ];
       argv[ _STRINGS.ARGS_TO   ] = argv[ _STRINGS.ARGS_INDEX ];
  }

  argv.args = argv._.slice( argv[ _STRINGS.ARGS_FROM ], ( argv[ _STRINGS.ARGS_TO ] + 1 ));

  return argv;
}

// Module exports:
Object.defineProperty( module.exports, _STRINGS.CMD_HELP,     {
  value:    help,
  writable: false, enumerable: true, configurable: false });
Object.defineProperty( module.exports, _STRINGS.CMD_INVOKE,   {
  value:    invoke,
  writable: false, enumerable: true, configurable: false });
Object.defineProperty( module.exports, _STRINGS.CMD_INVOKESAFE, {
  value:    invokeSafe,
  writable: false, enumerable: true, configurable: false });
Object.defineProperty( module.exports, _STRINGS.CMD_LIST,     {
  value:    list,
  writable: false, enumerable: true, configurable: false });
Object.defineProperty( module.exports, _STRINGS.CMD_PARSE,    {
  value:    parse,
  writable: false, enumerable: true, configurable: false });
Object.defineProperty( module.exports, _STRINGS.PUSH,     {
  value:    push,
  writable: false, enumerable: true, configurable: false });
Object.defineProperty( module.exports, _STRINGS.SPLIT,    {
  value:    split,
  writable: false, enumerable: true, configurable: false });
