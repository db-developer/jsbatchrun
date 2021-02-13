### setting up a jsbr project ###

1. make sure you can call 'node' and 'npm'
2. create a directory for a project
3. cd into the directory
4. call 'npm init'  
   it's not important how you name the project. simply create it.
5. call 'npm install jsbatchrun --save'

### setting up a configuration file ###

using a configuration file with jsbatchrun can simplify running jobs.
by default, jsbatchrun tries to locate its configuration file in the directory where you call it.
so simply create a (hidden) file named '.jsbatchrun.js' and copy the following content:

```javascript
module.exports = function( args ) {
  return {
    foo:          "bar",
    other:        [ "values" ],
    projectdirs:  [
                    "path/to/project1",  
                    "path/to/project2"
                  ]
  };
}
// this will provide the environment properties 'foo', 'other' and 'projectdirs' to all of your jobs.
// feel free to extend and adjust them to your needs...
```
in case you intend to use different configuration files for your jobs, you can use the
<code>--config configfilename.js</code> option

```shell
> jsbr command subcommand --config "path/to/my/configfile.js"
```

[here you can read more about jsbatchrun configuration files](env/env.md)

### using properties defined in your environment ###

to make use of your environment properties, simply pass them to your commands.

```shell
> jsbr command subcommand --env:args:use:projectdirs

# the above will be substituted like this:
# > jsbr command subcommand "path/to/project1" "path/to/project2"
```
