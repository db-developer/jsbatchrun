/**
 *  © 2021, slashlib.org.
 *
 */ // use nodes default assertions
"use strict";
const expect  = require( "expect.js" );
const path    = require( "path" );
const lang    = require( "jsbatch-lang" );

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
        expect(() => { registry.invoke( args, () => { }) }).not.to.throwException();
    });
    it( "should be callable with parameter 'args' {[ 'help' ]}", () => {
        const args = [ "help" ];
        expect(() => { registry.invoke( args, () => { }) }).not.to.throwException();
    });
    it( "should be callable with parameter 'args' {[ 'help', 'npm' ]}", () => {
        const args  = [ "help", "xxx" ];
        expect(() => { registry.invoke( args, () => { }) }).not.to.throwException();
    });
    it( "should be callable with parameter 'args' {[ 'help', 'npm' ]}", () => {
        const args  = [ "help", "fun" ];
        const reg   = lang.registry( "fun" );
        expect(() => { registry.register( reg );
                       registry.invoke( args, () => { }) }).not.to.throwException();
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
    it( "should be callable with parameter 'exports' {registry}", () => {
        const reg = lang.registry( "blubb" );
        expect(() => { registry.register( reg ) }).not.to.throwException();
    });
    it( "should not accept the same registry id twice", () => {
        const reg     = lang.registry( "blubb" );
        const errmsg  = "Cannot redefine property: blubb";
        expect(() => { registry.register( reg ) }).to.throwException(( error ) => {
          // console.log( error )
          expect( error ).to.be.a( TypeError );
          expect( error.message === errmsg ).to.be.ok();
        });
    });
  });
});
