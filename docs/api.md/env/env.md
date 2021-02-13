
<br><a name="module_jsbatchrun/env/env"></a>

## jsbatchrun/env/env
> env.js: @org.slashlib/jsbatchrun/env


* [jsbatchrun/env/env](#module_jsbatchrun/env/env)
    * _static_
        * [._(args, log)](#module_jsbatchrun/env/env._)
    * _inner_
        * [~loadConfigModule()](#module_jsbatchrun/env/env..loadConfigModule)
        * [~callConfigModule()](#module_jsbatchrun/env/env..callConfigModule)


<br><a name="module_jsbatchrun/env/env._"></a>

### jsbatchrun/env/env.\_(args, log)
> Load configuration file


| Param | Type | Description |
| --- | --- | --- |
| args | <code>Array</code> | Array of arguments. Should get 'process.argv' passed in. |
| log | <code>function</code> | Function to do logging. Defaults to console.log |


<br><a name="module_jsbatchrun/env/env..loadConfigModule"></a>

### jsbatchrun/env/env~loadConfigModule()
> Locate and load a config module


<br><a name="module_jsbatchrun/env/env..callConfigModule"></a>

### jsbatchrun/env/env~callConfigModule()
> Run a config module to provide the configuration.

