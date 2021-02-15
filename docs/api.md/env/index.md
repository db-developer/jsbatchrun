
<br><a name="module_jsbatchrun/env"></a>

## jsbatchrun/env
> index.js: @org.slashlib/jsbatchrun/env> >  Setup a command environment.>    - require a configuration file, which can either be:>      - process.cwd()/.jsbatchrun.js>      - process.cwd()/.conf/jsbatchrun/.jsbatchrun.js>    - call the configfiles "module.exports" as function:>      require( ... )( env );>    - make env accessable via parameters. e.g.:>      --env:myproperty>    - enable injecting additional arguments>      --env:args:append:myproperty>      --env:args:prepend:myproperty


* [jsbatchrun/env](#module_jsbatchrun/env)
    * _static_
        * [._(args, log)](#module_jsbatchrun/env._)
    * _inner_
        * [~register()](#module_jsbatchrun/env..register)
        * [~get()](#module_jsbatchrun/env..get)


<br><a name="module_jsbatchrun/env._"></a>

### jsbatchrun/env.\_(args, log)
> Load configuration file


| Param | Type | Description |
| --- | --- | --- |
| args | <code>Array</code> | Array of arguments. Should get 'process.argv' passed in. |
| log | <code>function</code> | Function to do logging. Defaults to console.log |


<br><a name="module_jsbatchrun/env..register"></a>

### jsbatchrun/env~register()
> Register command plugins.


<br><a name="module_jsbatchrun/env..get"></a>

### jsbatchrun/env~get()
> Returns an environment.

