
<br><a name="module_jsbatchrun/registry/registry"></a>

## jsbatchrun/registry/registry
> registry.js: @org.slashlib/jsbatchrun/registry


* [jsbatchrun/registry/registry](#module_jsbatchrun/registry/registry)
    * [~register(mod)](#module_jsbatchrun/registry/registry..register)
    * [~help()](#module_jsbatchrun/registry/registry..help)
    * [~invoke(args, [log])](#module_jsbatchrun/registry/registry..invoke)
    * [~invokeHelp(args, log)](#module_jsbatchrun/registry/registry..invokeHelp)


<br><a name="module_jsbatchrun/registry/registry..register"></a>

### jsbatchrun/registry/registry~register(mod)
> Register a command with a module for executing the command.


| Param | Type | Description |
| --- | --- | --- |
| mod | <code>module</code> | The module (exports) to call for                          executing a command. |


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


<br><a name="module_jsbatchrun/registry/registry..invokeHelp"></a>

### jsbatchrun/registry/registry~invokeHelp(args, log)
> Invoke command 'help'>  Note: Removed from its own module to resolve circular>        dependency: registry <=> help


| Param | Type | Description |
| --- | --- | --- |
| args | <code>object</code> | Commandline arguments |
| log | <code>function</code> | Logging function |

