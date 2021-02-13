
<br><a name="module_jsbatchrun/util"></a>

## jsbatchrun/util
> util.js: @org.slashlib/jsbatchrun


* [jsbatchrun/util](#module_jsbatchrun/util)
    * [~split(args)](#module_jsbatchrun/util..split) ⇒ <code>object</code>
    * [~help(registry, args, [log])](#module_jsbatchrun/util..help)
    * [~list(registry, cmd, [log])](#module_jsbatchrun/util..list)
    * [~invoke(registry, args, [log])](#module_jsbatchrun/util..invoke) ⇒ <code>Promise</code>
    * [~invokeSafe(args, invoke, help, [log])](#module_jsbatchrun/util..invokeSafe) ⇒ <code>Promise</code>
    * [~push(array, value)](#module_jsbatchrun/util..push)
    * [~parse()](#module_jsbatchrun/util..parse)


<br><a name="module_jsbatchrun/util..split"></a>

### jsbatchrun/util~split(args) ⇒ <code>object</code>
> Split command from arguments.

**Returns**: <code>object</code> - {cmd,args}  

| Param | Type |
| --- | --- |
| args | <code>Array</code> | 


<br><a name="module_jsbatchrun/util..help"></a>

### jsbatchrun/util~help(registry, args, [log])
> Help strings for all registry commands.


| Param | Type | Description |
| --- | --- | --- |
| registry | <code>object</code> | A command registry |
| registry.help | <code>object</code> | Registered help functions |
| registry.cmd | <code>object</code> | Registered command functions |
| args | <code>Array</code> | Array of arguments |
| [log] | <code>function</code> | A log function which defaults to console.log |


<br><a name="module_jsbatchrun/util..list"></a>

### jsbatchrun/util~list(registry, cmd, [log])
> List all available registry commands.


| Param | Type | Description |
| --- | --- | --- |
| registry | <code>object</code> | A command registry |
| registry.help | <code>object</code> | Registered help functions |
| registry.cmd | <code>object</code> | Registered command functions |
| cmd | <code>string</code> | Actual command |
| [log] | <code>function</code> | A log function which defaults to console.log |


<br><a name="module_jsbatchrun/util..invoke"></a>

### jsbatchrun/util~invoke(registry, args, [log]) ⇒ <code>Promise</code>
> Invoke registered (sub) commands.>  This method can be called by command modules and plugins.

**Returns**: <code>Promise</code> - from invoking a command.  

| Param | Type | Description |
| --- | --- | --- |
| registry | <code>object</code> | A command and help registry |
| registry.cmd | <code>object</code> | Registered commands |
| registry.help | <code>object</code> | Registered help |
| args | <code>Array</code> | Array of arguments |
| [log] | <code>function</code> | A log function which defaults to console.log |


<br><a name="module_jsbatchrun/util..invokeSafe"></a>

### jsbatchrun/util~invokeSafe(args, invoke, help, [log]) ⇒ <code>Promise</code>
> Invoke 'funct' in a safe manner.>  This method can be called by command modules to invoke their 'invoke' function.

**Returns**: <code>Promise</code> - from calling a commands invoke or help function.  

| Param | Type | Description |
| --- | --- | --- |
| args | <code>Array</code> | Array of arguments |
| invoke | <code>function</code> | Command invoke(...) function |
| help | <code>function</code> | Command help function |
| [log] | <code>function</code> | A log function which defaults to console.log |


<br><a name="module_jsbatchrun/util..push"></a>

### jsbatchrun/util~push(array, value)
> Push a value to array.


| Param | Type |
| --- | --- |
| array | <code>Array</code> | 
| value | <code>any</code> | 


<br><a name="module_jsbatchrun/util..parse"></a>

### jsbatchrun/util~parse()
> Parse and normalize incoming arguments to:

**Example:**: args = parse( args );   args._                  {Array<string>}   - An array of project directories   args["env:projectdirs"] {boolean}         - additionally append directories of project                                               list   args["args:index"]      {integer}         - Only run this index in the list of project                                               directories   args["args:from"]       {integer}         - Start index (including) within the list of                                               project directories   args["args:to"]         {integer}         - End index (including) within the list of                                               project directories  
