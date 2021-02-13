
<br><a name="module_jsbatchrun/jsbatchrun"></a>

## jsbatchrun/jsbatchrun
> jsbatchrun.js: @org.slashlib/jsbatchrun


* [jsbatchrun/jsbatchrun](#module_jsbatchrun/jsbatchrun)
    * [~main(...argv)](#module_jsbatchrun/jsbatchrun..main) ⇒ <code>Promise</code>
    * [~run(...argv)](#module_jsbatchrun/jsbatchrun..run)
    * [~rejected(error, [errlog])](#module_jsbatchrun/jsbatchrun..rejected)
    * [~exitprocess(value)](#module_jsbatchrun/jsbatchrun..exitprocess)


<br><a name="module_jsbatchrun/jsbatchrun..main"></a>

### jsbatchrun/jsbatchrun~main(...argv) ⇒ <code>Promise</code>
> Main function - call this when embedding jsbatchrun.>  This function is exported and returns a Promise on>  each call.

**Returns**: <code>Promise</code> - for each call.  

| Param | Type | Description |
| --- | --- | --- |
| ...argv | <code>Array</code> | Equals process.argv |


<br><a name="module_jsbatchrun/jsbatchrun..run"></a>

### jsbatchrun/jsbatchrun~run(...argv)
> Invokes the main function.>  This is called if jsbatchrun is run manually (on the commandline).>  It must not return anything must handle rejected command promises.


| Param | Type | Description |
| --- | --- | --- |
| ...argv | <code>Array</code> | Equals process.argv |


<br><a name="module_jsbatchrun/jsbatchrun..rejected"></a>

### jsbatchrun/jsbatchrun~rejected(error, [errlog])
> Handle errors of rejected promises...


| Param | Type | Description |
| --- | --- | --- |
| error | <code>any</code> | The object returned by promise( ..., (error)) |
| [errlog] | <code>function</code> | A function to log errors (testing purposes) |


<br><a name="module_jsbatchrun/jsbatchrun..exitprocess"></a>

### jsbatchrun/jsbatchrun~exitprocess(value)
> Indirection for <code>process.exit( ... )</code>>  Set <code>process.env.NODE_ENV</code> to 'grunt'>  to avoid exits (see gruntfile.js - useful for>  running tests without unwanted exits ;-)


| Param | Type | Description |
| --- | --- | --- |
| value | <code>integer</code> | Passed to <code>process.exit( value )</code> |

