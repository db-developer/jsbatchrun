/**
 *  © 2021, slashlib.org.
 *
 */ // use nodes default assertions
"use strict";
const expect  = require( "expect.js" );
const path    = require( "path" );

describe( "02.10.env.index.spec.js - Testing module 'lib/registry/index.js'", () => {
  const registry = require( "../../lib/registry" );

  describe( "Testing exports of module 'registry'", () => {
    it( "Export of 'invoke' should exist and be of type 'function'", () => {
        expect( registry.invoke ).not.to.be( undefined  );
        expect( registry.invoke ).not.to.be( null       );
        expect( registry.invoke ).to.be.a(   "function" );
    });
  });
});
