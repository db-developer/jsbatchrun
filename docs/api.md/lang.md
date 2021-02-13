
<br><a name="module_jsbatchrun/lang"></a>

## jsbatchrun/lang
> lang.js: @org.slashlib/jsbatchrun


* [jsbatchrun/lang](#module_jsbatchrun/lang)
    * [~exists(value)](#module_jsbatchrun/lang..exists) ⇒ <code>boolean</code>
    * [~isEmpty(valoue)](#module_jsbatchrun/lang..isEmpty) ⇒ <code>boolean</code>
    * [~isFunction(value)](#module_jsbatchrun/lang..isFunction) ⇒ <code>boolean</code>
    * [~isNotEmpty(valoue)](#module_jsbatchrun/lang..isNotEmpty) ⇒ <code>boolean</code>
    * [~isRegistry(valoue)](#module_jsbatchrun/lang..isRegistry) ⇒ <code>boolean</code>
    * [~isString(valoue)](#module_jsbatchrun/lang..isString) ⇒ <code>boolean</code>
    * [~registry(cmd)](#module_jsbatchrun/lang..registry) ⇒ <code>object</code>
    * [~validateInteger(value, min, max, in)](#module_jsbatchrun/lang..validateInteger)
    * [~validateRegistry(value)](#module_jsbatchrun/lang..validateRegistry) ⇒ <code>object</code>


<br><a name="module_jsbatchrun/lang..exists"></a>

### jsbatchrun/lang~exists(value) ⇒ <code>boolean</code>
> Check if value exists. Returns true, if so; false otherwise.>  Definition: A value exists if it is neither null nor undefined.

**Returns**: <code>boolean</code> - true if value exists; false otherwise.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>any</code> | The value which is to be checked for existance. |


<br><a name="module_jsbatchrun/lang..isEmpty"></a>

### jsbatchrun/lang~isEmpty(valoue) ⇒ <code>boolean</code>
> Check if a value is empty.>  Definition: A value must not exist or be a string matching '' (empty).

**Returns**: <code>boolean</code> - true if value is 'not empty'; false otherwise.  

| Param | Type | Description |
| --- | --- | --- |
| valoue | <code>any</code> | The value which is checked to be 'not empty'. |


<br><a name="module_jsbatchrun/lang..isFunction"></a>

### jsbatchrun/lang~isFunction(value) ⇒ <code>boolean</code>
> Returns true, if value is a function.

**Returns**: <code>boolean</code> - true if value is a function; false otherwise.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>any</code> | The value which is to be checked for being a function. |


<br><a name="module_jsbatchrun/lang..isNotEmpty"></a>

### jsbatchrun/lang~isNotEmpty(valoue) ⇒ <code>boolean</code>
> Check if a value is not empty.

**Returns**: <code>boolean</code> - true if value is 'not empty'; false otherwise.  

| Param | Type | Description |
| --- | --- | --- |
| valoue | <code>any</code> | The value which is checked to be 'not empty'. |


<br><a name="module_jsbatchrun/lang..isRegistry"></a>

### jsbatchrun/lang~isRegistry(valoue) ⇒ <code>boolean</code>
> Returns true, if value is of type object, which matches the constraints>  of a registry.

**Returns**: <code>boolean</code> - true if value is a Registry; false otherwise.  

| Param | Type | Description |
| --- | --- | --- |
| valoue | <code>any</code> | The value which is checked for being a Registry. |


<br><a name="module_jsbatchrun/lang..isString"></a>

### jsbatchrun/lang~isString(valoue) ⇒ <code>boolean</code>
> Returns true, if value is of type string or an instance of string.

**Returns**: <code>boolean</code> - true if value is a string; false otherwise.  

| Param | Type | Description |
| --- | --- | --- |
| valoue | <code>any</code> | The value which is checked for being a string. |


<br><a name="module_jsbatchrun/lang..registry"></a>

### jsbatchrun/lang~registry(cmd) ⇒ <code>object</code>
> Returns a registry instance>  FUTURE:  make this a class with properties (getter/no setter)

**Returns**: <code>object</code> - with command and help property  

| Param | Type | Description |
| --- | --- | --- |
| cmd | <code>string</code> | The commmand which registers subcommands                          in its registry. |


<br><a name="module_jsbatchrun/lang..validateInteger"></a>

### jsbatchrun/lang~validateInteger(value, min, max, in)
> Validate 'value' to be an integer within the specified range.>  If value exeeds the min max range, the min or max value will>  be returned.


| Param | Type | Description |
| --- | --- | --- |
| value | <code>integer</code> |  |
| min | <code>integer</code> | The lowest possible value of value |
| max | <code>integer</code> | The highest possible value of value |
| in | <code>undefined</code>, <code>Integer</code> | the range of [min, max] |


<br><a name="module_jsbatchrun/lang..validateRegistry"></a>

### jsbatchrun/lang~validateRegistry(value) ⇒ <code>object</code>
> Validates 'value' to be a registry. Will return the registry or throw>  a TypeError, if 'value' is not a valid registry object.

**Returns**: <code>object</code> - registry, if value is a valid registry object.  
**Throw**: <code>TypeError</code> will be thrown if value ist not a valid registry.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>any</code> | Object to check for being a valid registry                              instance. |

