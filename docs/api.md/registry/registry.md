
<br><a name="module_jsbatchrun/registry/registry"></a>

## jsbatchrun/registry/registry
> registry.js: @org.slashlib/jsbatchrun/registry


* [jsbatchrun/registry/registry](#module_jsbatchrun/registry/registry)
    * [~register(exports)](#module_jsbatchrun/registry/registry..register)
    * [~help()](#module_jsbatchrun/registry/registry..help)
    * [~invoke(args, [log])](#module_jsbatchrun/registry/registry..invoke)


<br><a name="module_jsbatchrun/registry/registry..register"></a>

### jsbatchrun/registry/registry~register(exports)
> Register a command with a module for executing the command.


| Param | Type | Description |
| --- | --- | --- |
| exports | <code>object</code> | A modules exports, which must provide all                              properties to make up a registry.                              See: <code>'jsbatch-lang'.isRegistry</code> |


<br><a name="module_jsbatchrun/registry/registry..help"></a>

### jsbatchrun/registry/registry~help()
> Invoke help (will list all registered commands)


<br><a name="module_jsbatchrun/registry/registry..invoke"></a>

### jsbatchrun/registry/registry~invoke(args, [log])
> Invoke registered commands


| Param | Type | Description |
| --- | --- | --- |
| args | <code>Array</code> | Commandline arguments |
| [log] | <code>function</code> | A logging function (for testing purposes) |

