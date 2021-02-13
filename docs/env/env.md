## environment ##

The execution environment is being loaded during startup and is available via module 'env'.

### default locations and name for configuration files ###

By default <code>jsbatchrun</code> is looking up a file called <code>.jsbatchrun.js</code>.
It expects the file to be located in one of the following directories, relative to <code>process.cwd()</code>:

* "."
* ".conf/jsbatchrun/"

### choosing your own configurationfile location and name ###

Use the option <code>--config "path/to/my/configfile.js"</code> to override defaults.

```shell
> jsbr command subcommand --config "path/to/my/configfile.js"

# lookup 'path/to/my/configfile.js' relative to the default locations (s.a.)
```

```shell
> jsbr command subcommand --config "/path/to/my/configfile.js"

# use absolute path to configfile '/path/to/my/configfile.js'
```

### configuration file <code>.jsbatchrun.js</code> ###

All properties returned by the export function will be available through commandline options.

```javascript
//  © 2021, db-developer.

/**
 *  Returns an environment object.
 *
 *  @param  {Array}     args
 *  @param  {Function}  log
 *
 *  @return {object} environment.
 */
module.exports = function( args, log ) {
  return {
    foo:    "bar",
    other:  [ "values" ]
  };
}
```
[How to use environment properties with jsbatchrun](commandline.md)
