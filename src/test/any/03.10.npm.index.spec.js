/**
 *  © 2021, slashlib.org.
 *
 */ // use nodes default assertions
"use strict";
const expect  = require( "expect.js"    );
const lang    = require( "jsbatch-lang" );

describe( "03.10.npm.index.spec.js - Testing module 'lib/npm/index.js'", () => {
  const npm   = require( "../../lib/npm" );

  describe( "Testing exports of module 'npm'", () => {
    it( "Module export should be a function", () => {
        expect( npm ).not.to.be( undefined );
        expect( npm ).not.to.be( null      );
        expect( npm ).to.be.an(  "object"  );
    });
  });
  describe( "Testing module 'npm'", () => {
    it( "should return an 'object' which is a valid registry", () => {
        expect( lang.isRegistry( npm )).to.be.ok();
    });
  });
});
