/**
 *  © 2021, slashjsbr.org.
 *
 */ // use nodes default assertions
"use strict";
const expect  = require( "expect.js" );

describe( "10.01.jsbatchrun.spec.js - Testing module 'jsbr/jsbatchrun.js'", () => {
  const jsbr = require( "../../lib/jsbatchrun" );

  describe( "Testing exports of jsbr", () => {
    it( "Export of 'main' should exist and be of type 'function'", () => {
        expect( jsbr.main ).not.to.be( undefined  );
        expect( jsbr.main ).not.to.be( null       );
        expect( jsbr.main ).to.be.a(   "function" );
    });
    it( "Export of 'run' should exist and be of type 'function'", () => {
        expect( jsbr.run  ).not.to.be( undefined  );
        expect( jsbr.run  ).not.to.be( null       );
        expect( jsbr.run  ).to.be.a(   "function" );
    });
    it( "Export of 'rejected' should exist and be of type 'function'", () => {
        expect( jsbr.rejected ).not.to.be( undefined  );
        expect( jsbr.rejected ).not.to.be( null       );
        expect( jsbr.rejected ).to.be.a(   "function" );
    });
    it( "Export of 'exitprocess' should exist and be of type 'function'", () => {
        expect( jsbr.exitprocess ).not.to.be( undefined  );
        expect( jsbr.exitprocess ).not.to.be( null       );
        expect( jsbr.exitprocess ).to.be.a(   "function" );
    });
  });
  describe( "Testing function 'main' of jsbr", () => {
    it( "should be callable without parameter 'args' {Array}", () => {
        expect(() => { jsbr.main( ) }).not.to.throwException();
    });
    it( "should be callable with 'args' {Array}", () => {
        const args = [ "help", "--debug" ]
        expect(() => { jsbr.main( ...args ) }).not.to.throwException(( error ) => { console.log( error )});
    });
  });
  describe( "Testing function 'run' of jsbr", () => {
    it( "should be callable without parameter 'args' {Array}", () => {
        expect(() => { jsbr.run() }).not.to.throwException();
    });
    it( "should be callable without parameter 'args' {Array}", () => {
        const args = [ "npm", "help" ]
        expect(() => { jsbr.run( ...args ) }).not.to.throwException(( error ) => { console.log( error )});
    });
  });
  describe( "Testing function 'rejected' of jsbr", () => {
    it( "should be callable without parameter 'args' {Array}", () => {
        expect(() => { jsbr.rejected() }).not.to.throwException();
    });
    it( "should be callable with parameter 'errlog' {Function}", () => {
        const errlog = () => { };
        expect(() => { jsbr.rejected( undefined, undefined, errlog ) }).not.to.throwException();
    });
    it( "should be callable with parameters 'error' {Error} and 'errlog' {Function}", () => {
        let   msg     = undefined;
        const errlog  = ( input ) => { msg = input; };
        const errmsg  = "Out of fun";
        const error   = new Error( errmsg );
        expect(() => { jsbr.rejected( undefined, error, errlog ) }).not.to.throwException();
        expect( msg === `Error: ${ errmsg }` ).to.be.ok();
    });
    it( "should be callable with parameters 'error' {Error} and 'errlog' {Function}", () => {
        let   msg     = undefined;
        const errlog  = ( input ) => { msg = input; };
        const errmsg  = "Out of fun";
        const error   = new Error( errmsg );
        expect(() => { jsbr.rejected([ "--debug" ], error, errlog ) }).not.to.throwException();
        expect( msg === error ).to.be.ok();
    });
  });
});
