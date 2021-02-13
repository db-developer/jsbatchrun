## Commandline options and arguments ##

### --env:opt:[optionname][propertyname] ###

The <code>--env:opt:[optionname][propertyname]</code> switch will insert any environment property.  

```shell
# returned by .jsbatchrun.js: { foo: "bar", ... }
# enables calling: cmd --baz bar

> node jsbatchrun cmd --env:opt:baz:foo
```

### --env:args:use:[propertyname] ###

Uses property values as list of arguments.  
<b>Important:</b> This will fail, if arguments have been passed to the command.

```shell
# returned by .jsbatchrun.js: { foo: "bar", other: [ valueX, valueY, valueZ ]}
# fails(!) calling: cmd --switch valueX valueY valueZ value0 value1

> node jsbatchrun cmd --switch --env:args:use:other value0 value1
# this will fail, because arguments 'value0' and 'value1' already exist!
```

```shell
# returned by .jsbatchrun.js: { foo: "bar", other: [ valueX, valueY, valueZ ]}
# enables calling: cmd --switch valueX valueY valueZ

> node jsbatchrun cmd --switch --env:args:use:other
```

### --env:args:append:[propertyname] ###

Appends property values to the list of arguments

```shell
# returned by .jsbatchrun.js: { foo: "bar", other: [ valueX, valueY, valueZ ]}
# enables calling: cmd --switch value0 value1 valueX valueY valueZ

> node jsbatchrun cmd --switch --env:args:append:other value0 value1
```

### --env:args:prepend:[propertyname] ###

Prepends property values to the list of arguments

```shell
# returned by .jsbatchrun.js: { foo: "bar", other: [ valueX, valueY, valueZ ]}
# enables calling: cmd --switch valueX valueY valueZ value0 value1

> node jsbatchrun cmd --switch --env:args:prepend:other value0 value1
```

### --args:from {integer} ###

Modify list of arguments. Start with index specified by 'from'

```shell
# returned by .jsbatchrun.js: { foo: "bar", other: [ valueX, valueY, valueZ ]}
# enables calling: cmd --switch valueZ value0 value1

> node jsbatchrun cmd --switch --env:args:prepend:other --args:from 2 value0 value1
```

### --args:to {integer} ###

Modify list of arguments. Stop with index specified by 'to'

```shell
# returned by .jsbatchrun.js: { foo: "bar", other: [ valueX, valueY, valueZ ]}
# enables calling: cmd --switch valueX valueY valueZ value0

> node jsbatchrun cmd --switch --env:args:prepend:other --args:to 3 value0 value1
```

### --env:args {integer} and --args:to {integer} ###

Modify list of arguments. Start with index specified by 'from' and stop with index specified by 'to'

```shell
# returned by .jsbatchrun.js: { foo: "bar", other: [ valueX, valueY, valueZ ]}
# enables calling: cmd --switch valueZ value0

> node jsbatchrun cmd --switch --env:args:prepend:other --args:from 2 --args:to 3 value0 value1
```

### --args:index {integer} ###

Modify list of arguments. Select argument specified by 'index'  

Note: <code>--args:index</code> takes precedence over <code>--args:from</code> and <code>--args:to</code>

```shell
# returned by .jsbatchrun.js: { foo: "bar", other: [ valueX, valueY, valueZ ]}
# enables calling: cmd --switch valueZ

> node jsbatchrun cmd --switch --env:args:prepend:other --args:index 2 value0 value1
```
