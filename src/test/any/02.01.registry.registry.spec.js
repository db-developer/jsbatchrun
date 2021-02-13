/**
 *  © 2021, slashlib.org.
 *
 */ // use nodes default assertions
"use strict";
const expect  = require( "expect.js" );
const path    = require( "path" );

describe( "02.01.registry.registry.spec.js - Testing module 'lib/registry/registry.js'", () => {
  const registry = require( "../../lib/registry/registry" );

  describe( "Testing exports of module 'registry'", () => {
    it( "Function 'help' should exist", () => {
        expect( registry.help     ).not.to.be( undefined  );
        expect( registry.help     ).not.to.be( null       );
        expect( registry.help     ).to.be.a(   "function" );
    });
    it( "Function 'invoke' should exist", () => {
        expect( registry.invoke   ).not.to.be( undefined  );
        expect( registry.invoke   ).not.to.be( null       );
        expect( registry.invoke   ).to.be.a(   "function" );
    });
    it( "Function 'register' should exist", () => {
        expect( registry.register ).not.to.be( undefined  );
        expect( registry.register ).not.to.be( null       );
        expect( registry.register ).to.be.a(   "function" );
    });
  });
  describe( "Testing function 'help' of module 'registry'", () => {
    it( "should be callable without parameters", () => {
        expect(() => { registry.help( ) }).not.to.throwException();
    });
  });
  describe( "Testing function 'invoke' of module 'registry'", () => {
    it( "should be callable without parameters", () => {
        expect(() => { registry.invoke() }).not.to.throwException();
    });
    it( "should be callable without parameters", () => {
        expect(() => { registry.invoke( undefined, () => { }) }).not.to.throwException();
    });
    it( "should be callable without parameters", () => {
        const args = [ "--first", "--second" ];
        expect(() => { registry.invoke( args, () => { }) }).not.to.throwException();
    });
    it( "should be callable without parameters", () => {
        const args = [ "fun", "--first", "--second" ];
        expect(() => { registry.invoke( args, () => { }) }).not.to.throwException();
    });
    it( "should be callable without parameters", () => {
        const args = [ "npm", "--first", "--second" ];
        expect(() => { registry.invoke( args, () => { }) }).not.to.throwException(( error ) => { console.log( error )});
    });
    it( "should be callable with parameter 'args' {[ 'help' ]}", () => {
        const args = [ "help" ];
        expect(() => { registry.invoke( args, () => { }) }).not.to.throwException(( error ) => { console.log( error )});
    });
    it( "should be callable with parameter 'args' {[ 'help', 'npm' ]}", () => {
        const args = [ "help", "npm" ];
        expect(() => { registry.invoke( args, () => { }) }).not.to.throwException(( error ) => { console.log( error )});
    });
  });
  describe( "Testing function 'invokeHelp' of module 'registry'", () => {
    it( "should be callable without parameters", () => {
        expect(() => { registry.invokeHelp() }).not.to.throwException();
    });
    it( "should be callable with parameter 'log' {Function}", () => {
        expect(() => { registry.invokeHelp( undefined, console.log ) }).not.to.throwException();
    });
  });
  describe( "Testing function 'register' of module 'registry'", () => {
    it( "should not be callable without parameters", () => {
        const errmsg  = "Environment::register( cmdname, module ) - Parameter 'module' (exports) must be of type 'object' {registry}.";
        expect(() => { registry.register( ) }).to.throwException(( error ) => {
          // console.log( error );
          expect( error ).to.be.a( TypeError );
          expect( error.message === errmsg ).to.be.ok();
        });
    });
  });
});
