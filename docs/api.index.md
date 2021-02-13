# API Index #
## Modules

* [jsbatchrun](api.md/index.md#module_jsbatchrun)
    * [~main()](api.md/index.md#module_jsbatchrun..main) ⇒ <code>Promise</code>
    * [~run()](api.md/index.md#module_jsbatchrun..run)
* [jsbatchrun/dynamic](api.md/dynamic.require.md#module_jsbatchrun/dynamic)
    * [.resolve(request, options)](api.md/dynamic.require.md#module_jsbatchrun/dynamic.resolve)
    * [.require(request)](api.md/dynamic.require.md#module_jsbatchrun/dynamic.require)
* [jsbatchrun/env](api.md/env/index.md#module_jsbatchrun/env)
    * _static_
        * [._(args, log)](api.md/env/index.md#module_jsbatchrun/env._)
    * _inner_
        * [~get()](api.md/env/index.md#module_jsbatchrun/env..get)
* [jsbatchrun/env/env](api.md/env/env.md#module_jsbatchrun/env/env)
    * _static_
        * [._(args, log)](api.md/env/env.md#module_jsbatchrun/env/env._)
    * _inner_
        * [~loadConfigModule()](api.md/env/env.md#module_jsbatchrun/env/env..loadConfigModule)
        * [~callConfigModule()](api.md/env/env.md#module_jsbatchrun/env/env..callConfigModule)
* [jsbatchrun/env/environment](api.md/env/environment.md#module_jsbatchrun/env/environment)
* [jsbatchrun/jsbatchrun](api.md/jsbatchrun.md#module_jsbatchrun/jsbatchrun)
    * [~main(...argv)](api.md/jsbatchrun.md#module_jsbatchrun/jsbatchrun..main) ⇒ <code>Promise</code>
    * [~run(...argv)](api.md/jsbatchrun.md#module_jsbatchrun/jsbatchrun..run)
    * [~rejected(error, [errlog])](api.md/jsbatchrun.md#module_jsbatchrun/jsbatchrun..rejected)
    * [~exitprocess(value)](api.md/jsbatchrun.md#module_jsbatchrun/jsbatchrun..exitprocess)
* [jsbatchrun/registry](api.md/registry/index.md#module_jsbatchrun/registry)
    * [.invoke(args)](api.md/registry/index.md#module_jsbatchrun/registry.invoke)
* [jsbatchrun/registry/registry](api.md/registry/registry.md#module_jsbatchrun/registry/registry)
    * [~register(mod)](api.md/registry/registry.md#module_jsbatchrun/registry/registry..register)
    * [~help()](api.md/registry/registry.md#module_jsbatchrun/registry/registry..help)
    * [~invoke(args, [log])](api.md/registry/registry.md#module_jsbatchrun/registry/registry..invoke)
    * [~invokeHelp(args, log)](api.md/registry/registry.md#module_jsbatchrun/registry/registry..invokeHelp)
* [jsbatchrun/util](api.md/util.md#module_jsbatchrun/util)
    * [~split(args)](api.md/util.md#module_jsbatchrun/util..split) ⇒ <code>object</code>
    * [~help(registry, args, [log])](api.md/util.md#module_jsbatchrun/util..help)
    * [~list(registry, cmd, [log])](api.md/util.md#module_jsbatchrun/util..list)
    * [~invoke(registry, args, [log])](api.md/util.md#module_jsbatchrun/util..invoke) ⇒ <code>Promise</code>
    * [~invokeSafe(args, invoke, help, [log])](api.md/util.md#module_jsbatchrun/util..invokeSafe) ⇒ <code>Promise</code>
    * [~push(array, value)](api.md/util.md#module_jsbatchrun/util..push)
    * [~parse()](api.md/util.md#module_jsbatchrun/util..parse)
