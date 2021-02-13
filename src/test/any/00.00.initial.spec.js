/**
 *  © 2021, slashlib.org.
 *
 *  Initial tests - to be run in advance to any other test.
 *
 */ // use nodes default assertions
const assert = require( "assert" );

describe( "00.00.initial.spec.ts", () => {
  describe( "Testing for prerequisites.", () => {
    it( "Check 'process.env.NODE_ENV' to equal 'grunt'", () => {
        assert.ok( process.env.NODE_ENV === "grunt",
                   "Value of NODE_ENV is not set to 'grunt' (check gruntfile.js)" );
    });
    it( "Check for availability of assertion library 'expect.js'", () => {
        assert.doesNotThrow(() => {
           const test = require( "expect.js" );
        }, undefined, "Missing assertion framework 'expect.js'" );
    });
    it( "Check for availability of library 'glob'", () => {
        assert.doesNotThrow(() => {
           const test = require( "glob" );
        }, undefined, "Missing library 'glob'" );
    });
    it( "Check for availability of library 'grunt'", () => {
        assert.doesNotThrow(() => {
           const test = require( "grunt" );
        }, undefined, "Missing framework 'grunt'" );
    });
    it( "Check for availability of library 'minimist'", () => {
        assert.doesNotThrow(() => {
           const test = require( "minimist" );
        }, undefined, "Missing library 'minimist'" );
    });
  });
});
