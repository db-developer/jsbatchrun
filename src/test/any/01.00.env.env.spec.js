/**
 *  © 2021, slashlib.org.
 *
 *  Initial tests - to be run in advance to any other test.
 *
 */ // use nodes default assertions
"use strict";
const expect  = require( "expect.js" );
const path    = require( "path" );

describe( "01.00.env.env.spec.js - Testing module 'lib/env/env.js'", () => {
  const env  = require( "../../lib/env/env" );

  describe( "Testing exports of module 'env'", () => {
    it( "Export of 'env' should exist and be callable", () => {
        expect( env ).not.to.be( undefined  );
        expect( env ).not.to.be( null       );
        expect( env ).to.be.a(   "function" );
    });
  });
  describe( "Testing module 'env'", () => {
    it( "it should be callable without parameters", () => {
        expect(() => { env() }).not.to.throwException();
        const retval = env();
        expect( retval ).not.to.be( null      );
        expect( retval ).not.to.be( undefined );
        expect( retval ).to.be.an(  Object    );
    });
    it( "it should be callable with parameter 'log' {Function}", () => {
        let   msg   = undefined;
        const reg   = undefined;
        const args  = undefined;
        const log   = ( input ) => { msg = input; };
        expect(() => { env( reg, args, log ) }).not.to.throwException();
        expect( msg === "Configurationfile not found: .jsbatchrun.js" ).to.be.ok();

        const retval  = env( reg, args, log );
        expect( retval ).not.to.be( null      );
        expect( retval ).not.to.be( undefined );
        expect( retval ).to.be.an(  Object    );
    });
    it( "it should be callable with parameter 'args' {Array} and 'log' {Function}", () => {
        let   msg   = undefined;
        const reg   = undefined;
        const args  = [ ];
        const log   = ( input ) => { msg = input; };
        expect(() => { env( reg, args, log ) }).not.to.throwException();

        const retval  = env( reg, args, log );
        expect( retval ).not.to.be( null      );
        expect( retval ).not.to.be( undefined );
        expect( retval ).to.be.an(  Object    );
    });
    it( "it should be callable with parameter 'args' {[ --config .cfgfile ]} and 'log' {Function}", () => {
        let   msg   = undefined;
        const log   = ( input ) => { msg = input; };
        const cfg   = ".cfgfile.js";
        const args  = [ "--config", cfg ];
        const reg   = undefined;
        expect(() => { env( reg, args, log ) }).not.to.throwException();
        expect( msg === `Configurationfile not found: ${ cfg }` ).to.be.ok();

        const retval  = env( reg, args, log );
        expect( retval ).not.to.be( null      );
        expect( retval ).not.to.be( undefined );
        expect( retval ).to.be.an(  Object    );
    });
    it( "it should be callable with parameter 'args' {[ '--config', 'absolute path']} and 'log' {Function}", () => {
        let   msg   = undefined;
        const log   = ( input ) => { msg = input; };
        const cfg   = path.join( process.cwd(), ".conf", "test", ".jsbatchrun.js" );
        const args  = [ "--config", cfg ];
        const reg   = () => { };
        expect(() => { env( reg, args, log ) }).not.to.throwException();
        expect( msg ).to.be( undefined );

        const retval  = env( reg, args, log );
        expect( retval ).not.to.be( null      );
        expect( retval ).not.to.be( undefined );
        expect( retval ).to.be.an(  Object    );
    });
    it( "it should be callable with parameter 'args' {[ '--config', 'relative path']} and 'log' {Function}", () => {
        let   msg   = undefined;
        const log   = ( input ) => { msg = input; };
        const cfg   = path.join( ".conf", "test", ".jsbatchrun.js" );
        const args  = [ "--config", cfg ];
        const reg   = () => { };
        expect(() => { env( reg, args, log ) }).not.to.throwException();
        expect( msg ).to.be( undefined );

        const retval  = env( reg, args, log );
        expect( retval ).not.to.be( null      );
        expect( retval ).not.to.be( undefined );
        expect( retval ).to.be.an(  Object    );
    });
    // expect(() => { env( process.argv ) }).not.to.throwException();
  });
});
