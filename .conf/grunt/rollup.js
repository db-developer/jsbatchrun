/**
 *  © 2020, db-developer.
 *  Licensed under the MIT license.
 */
const path        = require( "path" );
const terser      = require( "rollup-plugin-terser" ).terser;
const commonjs    = require( "@rollup/plugin-commonjs" );

module.exports  = function ( grunt, options ) {
  return {
    options: {
      external:   [
                    "fs", "path", // node packages
                    "grunt",
                    "minimist",
                    "resolve"
                  ],
      format:     "cjs",
      plugins:    function() { return [ commonjs({ dynamicRequireTargets: [ "./src/lib/dynamic.require.js" ]}), terser()]; },
      sourcemap:  "inline"
    },
    index:  {
      src:        path.join( options.LIBDIR, "index.js" ),
      dest:       path.join( options.BUILDDIR, options.STRINGS.LIB, "index.js" )
    },
    fs:  {
      src:        path.join( options.LIBDIR, "fs", "index.js" ),
      dest:       path.join( options.BUILDDIR, options.STRINGS.LIB, "fs", "index.js" )
    },
    git:  {
      src:        path.join( options.LIBDIR, "git", "index.js" ),
      dest:       path.join( options.BUILDDIR, options.STRINGS.LIB, "git", "index.js" )
    },
    npm:  {
      src:        path.join( options.LIBDIR, "npm", "index.js" ),
      dest:       path.join( options.BUILDDIR, options.STRINGS.LIB, "npm", "index.js" )
    }
  }
};
