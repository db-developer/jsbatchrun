## plugins ##

### loading plugins ###

Using configuration files enables loading plugins:

```javascript
// .conf/jsbatchrun/.jsbatchrun.js

const fs  = require( "jsbatchrun-fs"  );
const git = require( "jsbatchrun-git" );
const npm = require( "jsbatchrun-npm" );

module.exports = function( register, args, log ) {
  try{
    // either register all together
    register( fs, git, npm );
    // ... or one by one:
    // register( fs  );
    // register( git );
    // register( npm );
  }
  catch( error ) { console.error( error ); }

  const projectdirs = [
    path.join( process.cwd(), "src", "test", "template", "project-00"   ),
    // ... and many more
    path.join( process.cwd(), "src", "test", "template", "project-last" )
  ];

  return { projectdirs, silent: true };
};
```

After loading 'fs', 'git' and 'npm' from a configuration file, they will be
listed as commands:

```bash
> jsbr help
Usage: jsbr [command(s)] [options] [arguments]

List of available commands:
  fs
  git
  help
  npm

```

### writing plugins ###

Tip:
If you want to help others finding your plugin, you may use the following tags in
your package.json file:

* jsbatchrun
* plugin

Checkout the following repositories to find out more on plugins:

* [jsbatchrun-fs](https://github.com/db-developer/jsbatchrun-fs)
* [jsbatchrun-git](https://github.com/db-developer/jsbatchrun-git)
* [jsbatchrun-npm](https://github.com/db-developer/jsbatchrun-npm)


### basics ###

Setup your plugin as commenjs package and set a 'main' script in its package.json
file.

```javascript
// blueprint for a commonjs index.js
const lang = require( "jsbatch-lang"  );
const sub1 = require( "./subcommand1" );
const sub2 = require( "./subcommand2" );

// this will be listed among jsbatchruns commands:
const PLUGIN_ID = "mycommand";

// Build a command registry for your plugin
const REGISTRY = _m.lang.registry( PLUGIN_ID );

// Append subcommands to the registry
REGISTRY.help[ sub1.id ] = sub1.help;
REGISTRY.cmd[  sub1.id ] = sub1.invoke;

REGISTRY.help[ sub2.id ] = sub2.help;
REGISTRY.cmd[  sub2.id ] = sub2.invoke;

// export the registry ... that's all.
module.exports = REGISTRY
```

```javascript
const strings = require( "jsbatch-strings" );

// subcommand interface
// this will be listed among the subcommands of your plugin:
const COMMAND_ID = "subcommand";

/**
 *  Invoke your subcommand
 *
 *  @param  {object}  args        - Args object like returned by minimist.
 *  @param  {Array}   args.args   - An extended or narrowed version of args._
 *                                  depending on --env:args[use|prepend|append]
 *                                  and --args:[from|to|index]
 *  @param  {Promise} reject/resolve depending on the result of your processing.
 */
function invoke( args ) {
  return new Promise(( ... ) => { ... })
}

/**
 *  Help string for 'npm install' command
 *
 */
function help() {
  const usage = `${ strings.TAB3 } jsbr mycommand ${ COMMAND_ID } [options] [directories]`;

  return `${ strings.USAGE }\n\r${ usage }

options:
  --myoption <type>     Explanation...

${ strings.USAGEOPTS }

arguments:
  one or more directories, which hold package.json files.
  ${ strings.USAGEARGS }`;
}

// module exports
module.exports.id     = COMMAND_ID;
module.exports.invoke = invoke;
module.exports.help   = help;
```
