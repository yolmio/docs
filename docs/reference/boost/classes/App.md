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

HOWDY BROTHER

## Constructors

### constructor

• **new App**()

## Properties

### appDomain

• `Optional` **appDomain**: `string`

#### Defined in

@yolm/boost/dist/app.d.ts:42

___

### autoTrim

• **autoTrim**: [`AutoTrim`](../namespaces/yom.md#autotrim)

#### Defined in

@yolm/boost/dist/app.d.ts:44

___

### collation

• **collation**: [`Collation`](../namespaces/yom.md#collation)

#### Defined in

@yolm/boost/dist/app.d.ts:43

___

### db

• **db**: [`Db`](Db.md)

#### Defined in

@yolm/boost/dist/app.d.ts:46

___

### dbRunMode

• **dbRunMode**: [`DbExecutionMode`](../namespaces/yom.md#dbexecutionmode)

#### Defined in

@yolm/boost/dist/app.d.ts:45

___

### displayName

• **displayName**: `string`

#### Defined in

@yolm/boost/dist/app.d.ts:38

___

### displayNameConfig

• **displayNameConfig**: [`DisplayNameConfig`](../interfaces/DisplayNameConfig.md)

#### Defined in

@yolm/boost/dist/app.d.ts:40

___

### enums

• **enums**: `Record`<`string`, [`Enum`](../interfaces/Enum.md)\>

#### Defined in

@yolm/boost/dist/app.d.ts:48

___

### name

• **name**: `string`

The name of the application it will show up at: yolm.app/{YOUR_ACCOUNT_NAME}/{APP_NAME}

It needs to be unique within an account

#### Defined in

@yolm/boost/dist/app.d.ts:33

___

### recordRuleFunctions

• **recordRuleFunctions**: `Record`<`string`, [`RecordRuleFn`](../interfaces/RecordRuleFn.md)\>

#### Defined in

@yolm/boost/dist/app.d.ts:49

___

### ruleFunctions

• **ruleFunctions**: `Record`<`string`, [`RuleFunction`](../interfaces/RuleFunction.md)\>

#### Defined in

@yolm/boost/dist/app.d.ts:50

___

### scalarFunctions

• **scalarFunctions**: `Record`<`string`, [`ScalarFunction`](../interfaces/ScalarFunction.md)\>

#### Defined in

@yolm/boost/dist/app.d.ts:51

___

### scriptDbs

• **scriptDbs**: [`ScriptDb`](../interfaces/ScriptDb.md)[]

#### Defined in

@yolm/boost/dist/app.d.ts:55

___

### scripts

• **scripts**: [`Script`](../interfaces/yom.Script.md)[]

#### Defined in

@yolm/boost/dist/app.d.ts:54

___

### searchConfig

• **searchConfig**: [`SearchConfig`](../interfaces/SearchConfig.md)

#### Defined in

@yolm/boost/dist/app.d.ts:41

___

### tableFunctions

• **tableFunctions**: `Record`<`string`, [`TableFunction`](../interfaces/TableFunction.md)\>

#### Defined in

@yolm/boost/dist/app.d.ts:52

___

### test

• **test**: [`TestModel`](../interfaces/yom.TestModel.md)

#### Defined in

@yolm/boost/dist/app.d.ts:53

___

### theme

• **theme**: `Theme`

#### Defined in

@yolm/boost/dist/app.d.ts:39

___

### title

• **title**: `string`

The title of the html document for this application

#### Defined in

@yolm/boost/dist/app.d.ts:37

___

### ui

• **ui**: [`Ui`](Ui.md)

#### Defined in

@yolm/boost/dist/app.d.ts:47

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

@yolm/boost/dist/app.d.ts:60

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

@yolm/boost/dist/app.d.ts:63

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

@yolm/boost/dist/app.d.ts:58

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

@yolm/boost/dist/app.d.ts:59

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

@yolm/boost/dist/app.d.ts:57

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

@yolm/boost/dist/app.d.ts:62

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

@yolm/boost/dist/app.d.ts:61

___

### generateYom

▸ **generateYom**(): [`Model`](../interfaces/yom.Model.md)

#### Returns

[`Model`](../interfaces/yom.Model.md)

#### Defined in

@yolm/boost/dist/app.d.ts:64

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

@yolm/boost/dist/app.d.ts:56
