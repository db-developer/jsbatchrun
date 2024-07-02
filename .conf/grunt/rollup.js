/**
 *  © 2020, db-developer.
 *  Licensed under the MIT license.
 */
const path        = require( "path" );
const terser      = require( "@rollup/plugin-terser" );
const commonjs    = require( "@rollup/plugin-commonjs" );

module.exports  = function ( grunt, options ) {
  return {
    options: {
      external:   [
                    "fs", "path", // node packages
                    "grunt",
                    "jsbatch-lang", "jsbatch-strings",
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
    }
  };
};
