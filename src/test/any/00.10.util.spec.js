/**
 *  © 2021, slashlib.org.
 *
 *  Initial tests - to be run in advance to any other test.
 *
 */ // use nodes default assertions
"use strict";
const expect  = require( "expect.js" );

describe( "00.10.util.spec.js - Testing module 'lib/util.js'", () => {
  const util  = require( "../../lib/util" );
  const lang  = require( "jsbatch-lang" );
  const reg   = { register: () => { }};
  const env   = require( "../../lib/env"  )( reg, [ "--config", ".conf/test/.jsbatchrun.js" ]);

  describe( "Testing exports of module 'util'", () => {
    it( "Function 'split' should exist", () => {
        expect( util.split ).not.to.be( undefined  );
        expect( util.split ).not.to.be( null       );
        expect( util.split ).to.be.a(   "function" );
    });
    it( "Function 'push' should exist", () => {
        expect( util.push ).not.to.be( undefined  );
        expect( util.push ).not.to.be( null       );
        expect( util.push ).to.be.a(   "function" );
    });
    it( "Function 'help' should exist", () => {
        expect( util.help ).not.to.be( undefined  );
        expect( util.help ).not.to.be( null       );
        expect( util.help ).to.be.a(   "function" );
    });
    it( "Function 'list' should exist", () => {
        expect( util.list ).not.to.be( undefined  );
        expect( util.list ).not.to.be( null       );
        expect( util.list ).to.be.a(   "function" );
    });
    it( "Function 'invoke' should exist", () => {
        expect( util.invoke ).not.to.be( undefined  );
        expect( util.invoke ).not.to.be( null       );
        expect( util.invoke ).to.be.a(   "function" );
    });
    it( "Function 'invokeSafe' should exist", () => {
        expect( util.invokeSafe ).not.to.be( undefined  );
        expect( util.invokeSafe ).not.to.be( null       );
        expect( util.invokeSafe ).to.be.a(   "function" );
    });
    it( "Function 'parse' should exist", () => {
        expect( util.parse ).not.to.be( undefined  );
        expect( util.parse ).not.to.be( null       );
        expect( util.parse ).to.be.a(   "function" );
    });
  });
  describe( "Testing function 'push' of module 'util'", () => {
    it( "should be callable without parameters", () => {
        expect(() => { util.push( ) }).not.to.throwException();
    });
    it( "should be callable with parameter 'array' {Array}", () => {
        expect(() => { util.push([]) }).not.to.throwException();
    });
    it( "should be callable with parameter 'array' {Array} and value {string}", () => {
        const array = [ ];
        const value = "value";
        expect(() => { util.push( array, value ) }).not.to.throwException();
        expect( array.includes( value )).to.be.ok();
    });
    it( "should be callable with parameter 'array' {Array} and value {Array}", () => {
        const array = [ ];
        const value = [ "value0", "value1", "value2" ];
        expect(() => { util.push( array, value ) }).not.to.throwException();
        expect( array.length === value.length ).to.be.ok();
    });
  });
  describe( "Testing function 'split' of module 'util'", () => {
    it( "should be callable without parameters", () => {
        expect(() => { util.split( ) }).not.to.throwException();

        const result = util.split( );
        expect( result ).to.be.an( Object );
        expect( result.cmd ).to.be( undefined );
        expect( result.args ).to.be.an( Array );
        expect( result.args.length === 0 ).to.be.ok();
    });
    it( "should be callable without parameter 'args' {[]}", () => {
        const args = [];
        expect(() => { util.split( args ) }).not.to.throwException();

        const result = util.split( args );
        expect( result ).to.be.an( Object );
        expect( result.cmd ).to.be( undefined );
        expect( result.args ).to.be.an( Array );
        expect( result.args.length === 0 ).to.be.ok();
    });
    it( "should be callable without parameter 'args' {[ --string ]}", () => {
        const arg    = "--test";
        const args   = [ arg ];
        expect(() => { util.split( args ) }).not.to.throwException();

        const result = util.split( args );
        expect( result ).to.be.an( Object );
        expect( result.cmd ).to.be( undefined );
        expect( result.args ).to.be.an( Array );
        expect( result.args.length === 1 ).to.be.ok();
        expect( result.args[ 0 ] === arg ).to.be.ok();
    });
    it( "should be callable without parameter 'args' {[ string, --string ]}", () => {
        const cmd  = "fun";
        const arg  = "--test";
        const args   = [ cmd, arg ];
        expect(() => { util.split( args ) }).not.to.throwException();

        const result = util.split( args );
        expect( result ).to.be.an( Object );
        expect( result.cmd ).to.be.a( "string" );
        expect( result.cmd === cmd ).to.be.ok();
        expect( result.args ).to.be.an( Array );
        expect( result.args.length === 1 ).to.be.ok();
        expect( result.args[ 0 ] === arg ).to.be.ok();
    });
  });
  describe( "Testing function 'help' of module 'util'", () => {
    it( "should not be callable without parameters", () => {
        let   msg     = undefined;
        const log     = ( input ) => { msg = input; };
        const errmsg  = "Parameter must be of type 'registry'.";
        expect(() => { util.help( undefined, undefined, log ) }).to.throwException(( error ) => {
          // console.log( error )
          expect( error ).to.be.a( TypeError );
          expect( error.message === errmsg ).to.be.ok();
        });
    });
    it( "should be callable with parameter 'registry' {object}", () => {
        const registry = lang.registry( "testcommand" );
        expect(() => { util.help( registry ); }).not.to.throwException();
    });
    it( "should be callable with parameter 'registry' {object}", () => {
        let   msg = undefined;
        const log = ( input ) => { msg = input; };
        const reg = { id:   "currentcommand",
                      cmd:  { },
                      help: { test: () => { }, other: "wrong type" }};
        expect(() => { util.help( reg, undefined, log ) }).not.to.throwException();
        expect( msg ).to.be.a( "string" );
        expect( msg === "No commands registered for currentcommand." ).to.be.ok();
    });
    it( "should be callable with parameter 'registry' {object}", () => {
        let   msg   = undefined;
        const log   = ( input ) => { msg = input; };
        const reg   = { id:   "currentcommand",
                        cmd:  { },
                        help: { test: () => { }, other: "wrong type" }};
        const args  = [ "nextcommand", "--test" ]
        expect(() => { util.help( reg, args, log ) }).not.to.throwException();
        expect( msg ).to.be.a( "string" );
        expect( msg === "No commands registered for currentcommand." ).to.be.ok();
    });
    it( "should be callable with parameter 'registry' {object}", () => {
        let   msg   = undefined;
        const log   = ( input ) => { msg = input; };
        const reg   = { id: "currentcommand", cmd:  { }, help: { test: () => { return "help for subcommand test" }, other: "wrong type" }};
        const args  = [ "test", "--test" ]
        expect(() => { util.help( reg, args, log ) }).not.to.throwException();
        expect( msg ).to.be.a( "string" );
        expect( msg === "help for subcommand test" ).to.be.ok();
    });
  });
  describe( "Testing function 'list' of module 'util'", () => {
    it( "should be callable without parameters", () => {
        const errmsg  = "Parameter must be of type 'registry'.";
        expect(() => { util.list( ) }).to.throwException(( error ) => {
          expect( error ).to.be.a( TypeError );
          expect( error.message === errmsg ).to.be.ok();
        });
    });
    it( "should be callable without parameters", () => {
        const reg     = { id:   "currentcommand",
                          cmd:  { nextcommand: () => { return Promise.resolve(); }},
                          help: { }
                        };
        const errmsg  = "Parameter 'registry' must be of type 'object'.";
        expect(() => { util.list( reg ) }).not.to.throwException();
    });
  });
  describe( "Testing function 'invoke' of module 'util'", () => {
    it( "should not be callable without parameters", () => {
        let   msg = undefined;
        const log = ( input ) => { msg = input; };
        const errmsg  = "Parameter must be of type 'registry'.";
        expect(() => { util.invoke( undefined, undefined, log ) }).to.throwException(( error ) => {
          expect( error ).to.be.a( TypeError );
          expect( error.message === errmsg ).to.be.ok();
        });
    });
    it( "should be callable with parameters 'registry' {object} 'cmd' {string} and 'args' {Array}", () => {
        let   msg  = undefined;
        const log  = ( input ) => { msg = input; };
        const cmd  = "nextcommand";
        const arg  = "--nextarg";
        const args = [ cmd, arg ];
        const reg  = { id: "currentcommand", cmd: { }, help: { }};
        expect(() => { util.invoke( reg, args, log ) }).not.to.throwException();
        expect( msg === "No commands registered for currentcommand." ).to.be.ok();
    });
    it( "should not be callable without parameters", () => {
        const reg  = { id: "currentcommand", cmd: { }, help: { }};
        expect(() => { util.invoke( reg, undefined, undefined ) }).not.to.throwException();
    });
    it( "should be callable with parameters 'registry' {object} 'cmd' {string} and 'args' {Array}", () => {
        let   msg  = undefined;
        const log  = ( input ) => { msg = input; };
        const cmd  = "nextcommand";
        const arg  = "--nextarg";
        const args = [ cmd, arg ];
        const reg  = { id:   "currentcommand",
                       cmd:  { nextcommand: () => { return Promise.resolve(); }},
                       help: { }
                     };
        expect(() => { util.invoke( reg, args, log ) }).not.to.throwException();
        expect( msg ).to.be( undefined );
        expect( util.invoke( reg, args, log )).to.be.a( Promise );
    });
  });
  describe( "Testing function 'invokeSafe' of module 'util'", () => {
    it( "should be callable without parameters but get rejected", ( done ) => {
        let   msg    = null;
        const log    = ( input ) => { msg = input; };
        const errmsg = "'invoke' is not a function";
        expect(() => { util.invokeSafe( undefined, undefined, undefined, log )
                           .then(( value ) => { done( new Error( "Should be rejected" )); },
                                 ( error ) => {
                                   // console.log( error )
                                   expect( error ).to.be.a( TypeError );
                                   expect( error.message === errmsg ).to.be.ok();
                                   done();
                                })
                           .catch(( error ) => { done( error ); });
                     }).not.to.throwException();
    });
    it( "should be callable without parameter 'invoke' {string} but get rejected", ( done ) => {
        let   msg    = null;
        const log    = ( input ) => { msg = input; };
        const errmsg = "'invoke' is not a function";
        expect(() => { util.invokeSafe( undefined, "invoke.wrong.type", undefined, log )
                           .then(( value ) => { done( new Error( "Should be rejected" )); },
                                 ( error ) => {
                                   // console.log( error )
                                   expect( error ).to.be.a( TypeError );
                                   expect( error.message === errmsg ).to.be.ok();
                                   done();
                                })
                           .catch(( error ) => { done( error ); });
                     }).not.to.throwException();
    });
    it( "should be callable without parameter 'invoke' {Function} and 'help' {undefined} but get rejected", ( done ) => {
        let   msg    = null;
        const log    = ( input ) => { msg = input; };
        const invoke = ( args  ) => { return Promise.resolve(); };
        const errmsg = "'help' is not a function";
        expect(() => { util.invokeSafe( undefined, invoke, undefined, log )
                           .then(( value ) => { done( new Error( "Should be rejected" )); },
                                 ( error ) => {
                                   // console.log( error )
                                   expect( error ).to.be.a( TypeError );
                                   expect( error.message === errmsg ).to.be.ok();
                                   done();
                                })
                           .catch(( error ) => { done( error ); });
                     }).not.to.throwException();
    });
    it( "should be callable without parameter 'invoke' {Function} and 'help' {string} but get rejected", ( done ) => {
        let   msg    = null;
        const log    = ( input ) => { msg = input; };
        const invoke = ( args  ) => { return Promise.resolve(); };
        const errmsg = "'help' is not a function";
        expect(() => { util.invokeSafe( undefined, invoke, "help.wrong.type", log )
                           .then(( value ) => { done( new Error( "Should be rejected" )); },
                                 ( error ) => {
                                   // console.log( error )
                                   expect( error ).to.be.a( TypeError );
                                   expect( error.message === errmsg ).to.be.ok();
                                   done();
                                })
                           .catch(( error ) => { done( error ); });
                     }).not.to.throwException();
    });
    it( "should be callable without parameter 'invoke' {Function} and 'help' {Function} and get rejected", ( done ) => {
        let   msg    = null;
        const args   = [ ];
        const log    = ( input ) => { msg = input; };
        const help   = ( args  ) => { return "helpstring" };
        const invoke = ( args  ) => { return Promise.reject(); };
        expect(() => { util.invokeSafe( args, invoke, invoke, undefined )
                           .then(( value ) => { done( new Error( "Should be rejected" )); },
                                 ( error ) => { done(); })
                           .catch(( error ) => { done( error ); });
                     }).not.to.throwException();
    });
    it( "should be callable without parameter 'invoke' {Function} and 'help' {Function} and get rejected", ( done ) => {
        let   msg    = null;
        const args   = [ "--ignoreerrors" ];
        const log    = ( input ) => { msg = input; };
        const help   = ( args  ) => { return "helpstring" };
        const invoke = ( args  ) => { return Promise.reject(); };
        expect(() => { util.invokeSafe( args, invoke, invoke, undefined )
                           .then((  value ) => { done(); })
                           .catch(( error ) => { done( error ); });
                     }).not.to.throwException();
    });
    it( "should be callable without parameter 'invoke' {Function} and 'help' {Function} and resolve", ( done ) => {
        let   msg    = null;
        const args   = [ ];
        const log    = ( input ) => { msg = input; };
        const help   = ( args  ) => { return "helpstring" };
        const invoke = ( args  ) => { return Promise.resolve(); };
        expect(() => { util.invokeSafe( args, invoke, invoke, undefined )
                           .then((  value ) => { done(); })
                           .catch(( error ) => { done( error ); });
                     }).not.to.throwException();
    });
    it( "should be callable without parameter 'args' {object:--help} 'invoke' {Function} and 'help' {Function} and resolve", ( done ) => {
        let   msg    = null;
        const args   = [ "--help" ];
        const log    = ( input ) => { msg = input; };
        const help   = ( args  ) => { return "helpstring" };
        const invoke = ( args  ) => { return Promise.resolve(); };
        expect(() => { util.invokeSafe( args, invoke, invoke, undefined )
                           .then((  value ) => { done(); })
                           .catch(( error ) => { done( error ); });
                     }).not.to.throwException();
    });
  });
  describe( "Testing function 'parse' of module 'util'", () => {
    it( "should be callable without parameters", () => {
        expect(() => { util.parse( ) }).not.to.throwException();
    });
    it( "should be callable with parameter 'args' {[ ... ]}", () => {
        const args    = [ "--env:args:use:projectdirs", "--", "testdir1", "testdir2" ];
        const errmsg  = "Cannot overwrite existing arguments";
        expect(() => { util.parse( args ) }).to.throwException(( error ) => {
          // console.log( error );
          expect( error ).to.be.an( Error );
          expect( error.message === errmsg ).to.be.ok();
        });
    });
    it( "should be callable with parameter 'args' {[ ... ]}", () => {
        const args  = [ "--env:args:use:projectdirs" ];
        expect(() => { util.parse( args ) }).not.to.throwException();
        const ret   = util.parse( args );
        expect( ret ).to.be.an( Object );
    });
    it( "should be callable with parameter 'args' {[ ... ]}", () => {
        const args  = [ "--env:args:prepend:projectdirs", "--", "testdir1", "testdir2" ];
        expect(() => { util.parse( args ) }).not.to.throwException();
        const ret   = util.parse( args );
        expect( ret ).to.be.an( Object );
    });
    it( "should be callable with parameter 'args' {[ ... ]}", () => {
        const args  = [ "--env:args:append:projectdirs", "--", "testdir1", "testdir2" ];
        expect(() => { util.parse( args ) }).not.to.throwException();
        const ret   = util.parse( args );
        expect( ret ).to.be.an( Object );
    });
    it( "should be callable with parameter 'args' {[ ... ]}", () => {
        const args = [ "--test", "-a", "-b", "dir1", "dir2" ];
        expect(() => { util.parse( args ) }).not.to.throwException();
    });
    it( "should be callable with parameter 'args' {[ --env:projectdirs ... ]}", () => {
        const args = [ "--test", "-a", "-b", "--env:projectdirs", "dir1", "dir2" ];
        expect(() => { util.parse( args ) }).not.to.throwException();
        expect( util.parse( args )[ "env:projectdirs" ]).to.be.ok();
    });
    it( "should be callable with parameter 'args' {[ --env:opt:fun:bar ... ]}", () => {
        const args = [ "--test", "-a", "-b", "--env:opt:fun:bar", "--env:opt::bar", "--env:opt:tmp:" ];
        expect(() => { util.parse( args ) }).not.to.throwException();
        expect( util.parse( args )[ "fun" ] === "buzz").to.be.ok();
    });
    it( "should be callable with parameter 'args' {[ --args:index ... ]}", () => {
        const args = [ "--test", "-a", "-b", "--env:projectdirs", "--args:index", 1, "dir1", "dir2" ];
        expect(() => { util.parse( args ) }).not.to.throwException(( error ) => { console.log( error )});
        expect( util.parse( args )[ "args:index" ] === 1 ).to.be.ok();
    });
    it( "should be callable with parameter 'args' {[ --args:from ... ]}", () => {
        const args = [ "--test", "-a", "-b", "--args:from", 2, "dir0", "dir1", "dir2", "dir3" ];
        expect(() => { util.parse( args ) }).not.to.throwException(( error ) => { console.log( error )});
        expect( util.parse( args )[ "args:from" ] === 2 ).to.be.ok();
        expect( util.parse( args ).args ).to.be.an( Array );
        expect( util.parse( args ).args.length === 2 ).to.be.ok();
        expect( util.parse( args ).args[ 0 ]   === "dir2" ).to.be.ok();
    });
    it( "should be callable with parameter 'args' {[ --args:to ... ]}", () => {
        const args = [ "--test", "-a", "-b", "--args:to", 2, "dir0", "dir1", "dir2", "dir3" ];
        expect(() => { util.parse( args ) }).not.to.throwException(( error ) => { console.log( error )});
        expect( util.parse( args )[ "args:to" ] === 2 ).to.be.ok();
        expect( util.parse( args ).args ).to.be.an( Array );
        expect( util.parse( args ).args.length === 3 ).to.be.ok();
        expect( util.parse( args ).args[ 2 ]   === "dir2" ).to.be.ok();
    });
    it( "should be callable with parameter 'args' {[ --args:from, --args:to, ... ]}", () => {
        const args = [ "--test", "--args:from", 1, "--args:to", 2, "dir0", "dir1", "dir2", "dir3" ];
        expect(() => { util.parse( args ) }).not.to.throwException(( error ) => { console.log( error )});
        expect( util.parse( args )[ "args:from" ] === 1 ).to.be.ok();
        expect( util.parse( args )[ "args:to"   ] === 2 ).to.be.ok();
        expect( util.parse( args ).args ).to.be.an( Array );
        expect( util.parse( args ).args.length === 2 ).to.be.ok();
        expect( util.parse( args ).args[ 0 ]   === "dir1" ).to.be.ok();
        expect( util.parse( args ).args[ 1 ]   === "dir2" ).to.be.ok();
    });
    it( "should be callable with parameter 'args' {[ --args:index ... ]}", () => {
        const args = [ "--test", "--args:index", 3, "dir0", "dir1", "dir2", "dir3" ];
        expect(() => { util.parse( args ) }).not.to.throwException(( error ) => { console.log( error )});
        expect( util.parse( args )[ "args:index" ] === 3 ).to.be.ok();
        expect( util.parse( args ).args ).to.be.an( Array );
        expect( util.parse( args ).args.length === 1 ).to.be.ok();
        expect( util.parse( args ).args[ 0 ]   === "dir3" ).to.be.ok();
    });
    it( "should be callable with parameter 'args' {[ --args:from, --args:to, --args:index,... ]}", () => {
        const args = [ "--test", "--args:from", 1, "--args:to", 2, "--args:index", 3, "dir0", "dir1", "dir2", "dir3" ];
        expect(() => { util.parse( args ) }).not.to.throwException(( error ) => { console.log( error )});
        // --args:index always wins!
        expect( util.parse( args )[ "args:index" ] === 3 ).to.be.ok();
        expect( util.parse( args )[ "args:from"  ] === 3 ).to.be.ok();
        expect( util.parse( args )[ "args:to"    ] === 3 ).to.be.ok();
        expect( util.parse( args ).args ).to.be.an( Array );
        expect( util.parse( args ).args.length === 1 ).to.be.ok();
        expect( util.parse( args ).args[ 0 ]   === "dir3" ).to.be.ok();
    });
  });
});
