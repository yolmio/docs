---
id: "Db"
title: "Boost"
sidebar_label: "Db"
sidebar_position: 0
custom_edit_url: null
pagination_prev: null
pagination_next: null
---

## Constructors

### constructor

• **new Db**()

## Properties

### autoTrim

• **autoTrim**: [`AutoTrim`](../namespaces/yom.md#autotrim)

#### Defined in

[src/app.ts:313](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L313)

___

### collation

• **collation**: [`Collation`](../namespaces/yom.md#collation)

#### Defined in

[src/app.ts:312](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L312)

___

### enableTransactionQueries

• **enableTransactionQueries**: `boolean` = `true`

#### Defined in

[src/app.ts:314](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L314)

___

### recordRuleFunctions

• **recordRuleFunctions**: `Record`<`string`, [`RecordRuleFn`](../interfaces/RecordRuleFn.md)\> = `{}`

#### Defined in

[src/app.ts:315](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L315)

___

### ruleFunctions

• **ruleFunctions**: `Record`<`string`, [`RuleFunction`](../interfaces/RuleFunction.md)\> = `{}`

#### Defined in

[src/app.ts:316](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L316)

___

### scalarFunctions

• **scalarFunctions**: `Record`<`string`, [`ScalarFunction`](../interfaces/ScalarFunction.md)\> = `{}`

#### Defined in

[src/app.ts:317](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L317)

___

### searchMatches

• **searchMatches**: `Record`<`string`, [`SearchMatchConfig`](../interfaces/yom.SearchMatchConfig.md)\> = `{}`

#### Defined in

[src/app.ts:319](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L319)

___

### tables

• **tables**: `Record`<`string`, [`Table`](Table.md)\> = `{}`

#### Defined in

[src/app.ts:318](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L318)

___

### userTableName

• **userTableName**: `string` = `"user"`

#### Defined in

[src/app.ts:311](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L311)

## Accessors

### catalog

• `get` **catalog**(): [`DbCatalog`](DbCatalog.md)

Predefined tables and more that speed up the definition of your database.

These also have the added benefit of integrating with other parts of the app, such as the ui and api.

#### Returns

[`DbCatalog`](DbCatalog.md)

#### Defined in

[src/app.ts:326](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L326)

## Methods

### addRecordRuleFunction

▸ **addRecordRuleFunction**(`rrfn`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rrfn` | `HelperRecordRuleFn` |

#### Returns

`void`

#### Defined in

[src/app.ts:340](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L340)

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

[src/app.ts:344](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L344)

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

[src/app.ts:336](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L336)

___

### addTable

▸ **addTable**(`name`, `f`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `f` | (`builder`: [`TableBuilder`](TableBuilder.md)) => `void` |

#### Returns

`void`

#### Defined in

[src/app.ts:330](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L330)
