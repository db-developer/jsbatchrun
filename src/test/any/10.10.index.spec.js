/**
 *  © 2021, slashlib.org.
 *
 */ // use nodes default assertions
"use strict";
const expect  = require( "expect.js" );

describe( "10.10.index.spec.js - Testing module 'lib/index.js'", () => {
  const lib = require( "../../lib" );

  describe( "Testing exports of lib", () => {
    it( "Export of 'main' should exist and be of type 'function'", () => {
        expect( lib.main ).not.to.be( undefined  );
        expect( lib.main ).not.to.be( null       );
        expect( lib.main ).to.be.a(   "function" );
    });
    it( "Export of 'run' should exist and be of type 'function'", () => {
        expect( lib.run  ).not.to.be( undefined  );
        expect( lib.run  ).not.to.be( null       );
        expect( lib.run  ).to.be.a(   "function" );
    });
  });
  describe( "Testing function 'main' of lib", () => {
    it( "should be callable without parameter 'args' {Array}", () => {
        expect(() => { lib.main( ) }).not.to.throwException(( error ) => { console.log( error )});
    });
  });
  describe( "Testing function 'run' of lib", () => {
    it( "should be callable without parameter 'args' {Array}", () => {
        expect(() => { lib.run() }).not.to.throwException(( error ) => { console.log( error )});
    });
  });
});
