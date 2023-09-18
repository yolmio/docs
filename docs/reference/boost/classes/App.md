---
id: "App"
title: "Boost"
sidebar_label: "App"
sidebar_position: 0
custom_edit_url: null
pagination_prev: null
pagination_next: null
---

The app singleton.

This is where everything about the app is configured, the database, the ui, the api, everything.

## Constructors

### constructor

• **new App**()

## Properties

### appDomain

• `Optional` **appDomain**: `string`

#### Defined in

[src/app.ts:79](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L79)

___

### autoTrim

• **autoTrim**: [`AutoTrim`](../namespaces/yom.md#autotrim)

#### Defined in

[src/app.ts:81](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L81)

___

### collation

• **collation**: [`Collation`](../namespaces/yom.md#collation)

#### Defined in

[src/app.ts:80](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L80)

___

### db

• **db**: [`Db`](Db.md)

#### Defined in

[src/app.ts:83](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L83)

___

### dbRunMode

• **dbRunMode**: [`DbExecutionMode`](../namespaces/yom.md#dbexecutionmode)

#### Defined in

[src/app.ts:82](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L82)

___

### displayName

• **displayName**: `string` = `"Please Rename"`

#### Defined in

[src/app.ts:55](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L55)

___

### displayNameConfig

• **displayNameConfig**: [`DisplayNameConfig`](../interfaces/DisplayNameConfig.md)

#### Defined in

[src/app.ts:57](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L57)

___

### enums

• **enums**: `Record`<`string`, [`Enum`](../interfaces/Enum.md)\> = `{}`

#### Defined in

[src/app.ts:85](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L85)

___

### name

• **name**: `string` = `"please-rename"`

The name of the application it will show up at: yolm.app/{YOUR_ACCOUNT_NAME}/{APP_NAME}

It needs to be unique within an account

#### Defined in

[src/app.ts:47](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L47)

___

### recordRuleFunctions

• **recordRuleFunctions**: `Record`<`string`, [`RecordRuleFn`](../interfaces/RecordRuleFn.md)\> = `{}`

#### Defined in

[src/app.ts:86](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L86)

___

### ruleFunctions

• **ruleFunctions**: `Record`<`string`, [`RuleFunction`](../interfaces/RuleFunction.md)\> = `{}`

#### Defined in

[src/app.ts:87](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L87)

___

### scalarFunctions

• **scalarFunctions**: `Record`<`string`, [`ScalarFunction`](../interfaces/ScalarFunction.md)\> = `{}`

#### Defined in

[src/app.ts:88](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L88)

___

### scriptDbs

• **scriptDbs**: [`ScriptDb`](../interfaces/ScriptDb.md)[] = `[]`

#### Defined in

[src/app.ts:96](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L96)

___

### scripts

• **scripts**: [`Script`](../interfaces/yom.Script.md)[] = `[]`

#### Defined in

[src/app.ts:95](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L95)

___

### searchConfig

• **searchConfig**: [`SearchConfig`](../interfaces/SearchConfig.md)

#### Defined in

[src/app.ts:64](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L64)

___

### tableFunctions

• **tableFunctions**: `Record`<`string`, [`TableFunction`](../interfaces/TableFunction.md)\> = `{}`

#### Defined in

[src/app.ts:89](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L89)

___

### test

• **test**: [`TestModel`](../interfaces/yom.TestModel.md)

#### Defined in

[src/app.ts:90](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L90)

___

### theme

• **theme**: `Theme`

#### Defined in

[src/app.ts:56](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L56)

___

### title

• **title**: `string` = `"please-rename"`

The title of the html document for this application

#### Defined in

[src/app.ts:51](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L51)

___

### ui

• **ui**: [`Ui`](Ui.md)

#### Defined in

[src/app.ts:84](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L84)

## Methods

### addEnum

▸ **addEnum**(`enum_`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `enum_` | [`HelperEnum`](../interfaces/HelperEnum.md) |

#### Returns

`void`

#### Defined in

[src/app.ts:114](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L114)

___

### addMigrationScript

▸ **addMigrationScript**(`opts`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `MigrationScriptOpts` |

#### Returns

`void`

#### Defined in

[src/app.ts:205](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L205)

___

### addRecordRuleFunction

▸ **addRecordRuleFunction**(`rrfn`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rrfn` | `HelperRecordRuleFn` |

#### Returns

`void`

#### Defined in

[src/app.ts:106](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L106)

___

### addRuleFunction

▸ **addRuleFunction**(`rfn`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rfn` | `HelperRuleFunction` |

#### Returns

`void`

#### Defined in

[src/app.ts:110](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L110)

___

### addScalarFunction

▸ **addScalarFunction**(`f`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `f` | `HelperScalarFunction` |

#### Returns

`void`

#### Defined in

[src/app.ts:102](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L102)

___

### addScript

▸ **addScript**(`name`, `procedure`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `procedure` | [`ScriptStatementsOrFn`](../namespaces/statements.md#scriptstatementsorfn) |

#### Returns

`void`

#### Defined in

[src/app.ts:198](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L198)

___

### addScriptDbDefinition

▸ **addScriptDbDefinition**(`name`, `f`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `f` | (`builder`: [`ScriptDbDefinition`](ScriptDbDefinition.md)) => `void` |

#### Returns

`void`

#### Defined in

[src/app.ts:186](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L186)

___

### generateYom

▸ **generateYom**(): [`Model`](../interfaces/yom.Model.md)

#### Returns

[`Model`](../interfaces/yom.Model.md)

#### Defined in

[src/app.ts:209](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L209)

___

### setTheme

▸ **setTheme**(`themeOptions`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `themeOptions` | `ThemeOpts` |

#### Returns

`void`

#### Defined in

[src/app.ts:98](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L98)
