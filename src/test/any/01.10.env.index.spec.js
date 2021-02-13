/**
 *  © 2021, slashlib.org.
 *
 */ // use nodes default assertions
"use strict";
const expect  = require( "expect.js" );
const path    = require( "path" );

describe( "01.10.env.index.spec.js - Testing module 'lib/env/index.js'", () => {
  const env  = require( "../../lib/env" );

  describe( "Testing exports of module 'env'", () => {
    it( "Export of 'env' should exist and of type 'function'", () => {
        expect( env ).not.to.be( undefined  );
        expect( env ).not.to.be( null       );
        expect( env ).to.be.a(   "function" );
    });
  });
  it( "it should be callable with parameter 'args' {Array}", () => {
      const args = [ "--opt1", "value1", "--opt2", "value2" ];
      expect(() => { env( args ) }).not.to.throwException();
  });
  it( "it should be callable without parameters", () => {
      expect(() => { env() }).not.to.throwException();
      const environment = env();
      expect( environment ).not.to.be( undefined );
      expect( environment ).not.to.be( null      );
      expect( environment ).to.be.an(  "object"  );
  });
});
