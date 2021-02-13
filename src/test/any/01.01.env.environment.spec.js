/**
 *  © 2021, slashlib.org.
 *
 */ // use nodes default assertions
"use strict";
const expect  = require( "expect.js" );
const path    = require( "path" );

describe( "01.01.env.environment.spec.js - Testing module 'lib/env/environment.js'", () => {
  const env  = require( "../../lib/env/environment" );

  describe( "Testing exports of module 'environment'", () => {
    it( "Class 'Environment' should exist", () => {
        expect( env.Environment ).not.to.be( undefined  );
        expect( env.Environment ).not.to.be( null       );
        expect( env.Environment ).to.be.a(   "function" );
    });
  });
  describe( "Testing class 'Environment' of module 'environment'", () => {
    const Environment = env.Environment;
    describe( "Testing constructor of class 'Environment''", () => {
      it( "it should be callable without parameter.", () => {
          expect(() => { new Environment(); }).not.to.throwException();
      });
      it( "it should be callable with parameter.", () => {
          const values = { property1: "property1", property2: "property2" };
          expect(() => { new Environment( values ); }).not.to.throwException();
      });
    });
    describe( "Testing properties of class 'Environment''", () => {
      const values    = { property1: "property1", property2: "property2" };
      const instance  = new Environment( values );
      it( "it should be callable without parameter.", () => {
          expect( instance.property1 ).to.be.a( "string" );
          expect( instance.property1 === "property1" ).to.be.ok();
      });
    });
  });
});
