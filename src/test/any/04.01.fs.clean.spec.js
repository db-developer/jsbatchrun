/**
 *  © 2021, slashlib.org.
 *
 */ // use nodes default assertions
"use strict";
const expect  = require( "expect.js" );
const path    = require( "path" );

describe( "04.01.fs.clean.spec.js - Testing module 'lib/fs/clean.js'", () => {
  const inst = require( "../../lib/fs/clean" );

  describe( "Testing exports of module 'fs/clean'", () => {
    it( "Identifier 'id' {string} (interface) should exist", () => {
        expect( inst.id     ).not.to.be( undefined  );
        expect( inst.id     ).not.to.be( null       );
        expect( inst.id     ).to.be.a(   "string"   );
    });
    it( "Function 'help' (interface) should exist", () => {
        expect( inst.help   ).not.to.be( undefined  );
        expect( inst.help   ).not.to.be( null       );
        expect( inst.help   ).to.be.a(   "function" );
    });
    it( "Function 'invoke' (interface) should exist", () => {
        expect( inst.invoke ).not.to.be( undefined  );
        expect( inst.invoke ).not.to.be( null       );
        expect( inst.invoke ).to.be.a(   "function" );
    });
    it( "Function 'config' should exist", () => {
        expect( inst.config  ).not.to.be( undefined  );
        expect( inst.config  ).not.to.be( null       );
        expect( inst.config  ).to.be.a(   "function" );
    });
  });
  describe( "Testing 'id' of module 'fs/clean'", () => {
    it( "should be equal to 'install'", () => {
        expect( inst.id === "clean" ).to.be.ok();
    });
  });
  describe( "Testing function 'help' of module 'fs/clean'", () => {
    it( "should be callable without arguments", () => {
        expect(() => { inst.help(); }).not.to.throwException();
        expect( inst.help()).to.be.a( "string" );
    });
  });
  describe( "Testing function 'config' of module 'fs/clean'", () => {
    it( "should be callable without arguments", () => {
        expect(() => { inst.config(); }).not.to.throwException();
    });
    it( "should be callable with argument 'projectdir' {string}", () => {
        const projectdir = "";
        expect(() => { inst.config( projectdir ); }).not.to.throwException();
    });
    it( "should be callable with argument 'projectdir' {string} and 'args' {object}", () => {
        const projectdir = "somedir";
        const args       = { };
        expect(() => { inst.config( projectdir, args ); }).not.to.throwException();
    });
    it( "should be callable with argument 'projectdir' {string} and 'args' { file: []}", () => {
        const projectdir = "";
        const args       = { file: [ "first", "second" ]};
        expect(() => { inst.config( projectdir, args ); }).not.to.throwException();
    });
    it( "should be callable with argument 'projectdir' {string} and 'args' { file: [], nowrite: true}", () => {
        const projectdir = "";
        const args       = { file: [ "first", "second" ], nowrite: true };
        expect(() => { inst.config( projectdir, args ); }).not.to.throwException();
    });
  });
  describe( "Testing function 'invoke' of module 'fs/clean'", () => {
    it( "should be callable without arguments but get rejected", ( done ) => {
        expect(() => { inst.invoke()
                           .then(( value ) => { done( new Error( "Should get rejectd" ))},
                                 ( error ) => {
                                   expect( error ).to.be.a( ReferenceError );
                                   done();
                            })
                           .catch(( error ) => { done( error ); });
                     }).not.to.throwException();
    });
    it( "should be callable with argument 'args' { } but get rejected", ( done ) => {
        const errmsg = "Missing option. Command npm clean requires '--file' {string}";
        expect(() => { inst.invoke({ })
                           .then(( value ) => { done( new Error( "should get rejected" )); },
                                 ( error ) => {
                                   expect( error ).to.be.an( Error );
                                   expect( error.message === errmsg ).to.be.ok();
                                   done();
                            })
                           .catch(( error ) => { done( error ); });
                     }).not.to.throwException();
    });
    it( "should be callable with argument 'args' { ... } (complete and valid) and resolve", ( done ) => {
        const args     = { file: "fun.txt" };
        expect(() => { inst.invoke( args )
                           .then(( value ) => { done() })
                           .catch(( error ) => { done( error ); });
                     }).not.to.throwException();
    });
    it( "should be callable with argument 'args' { ... } (complete and valid) and resolve", ( done ) => {
        const projects = [ "project-00", "project-01" ];
        const dirs     = projects.map(( dir ) => {
                           return path.join( process.cwd(), "src", "test", "tmp", dir );
                         });
        const args     = { args: dirs, file: [ "dummy.txt", "fun.txt" ] };
        expect(() => { inst.invoke( args )
                           .then((  value ) => { done(); })
                           .catch(( error ) => { done( error ); });
                     }).not.to.throwException();
    });
    it( "should be callable with argument 'args' { ... } (complete but invalid directory) and resolve", ( done ) => {
        const projects = [ "does.not.exist" ];
        const dirs     = projects.map(( dir ) => {
                           return path.join( process.cwd(), "src", "test", "tmp", dir );
                         });
        const args     = { args: dirs, file: "fun.txt" };
        expect(() => { inst.invoke( args )
                           .then((  value ) => { done(); })
                           .catch(( error ) => { done( error ); });
                     }).not.to.throwException();
    });
  });
});
