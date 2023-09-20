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

@yolm/boost/dist/app.d.ts:111

___

### collation

• **collation**: [`Collation`](../namespaces/yom.md#collation)

#### Defined in

@yolm/boost/dist/app.d.ts:110

___

### enableTransactionQueries

• **enableTransactionQueries**: `boolean`

#### Defined in

@yolm/boost/dist/app.d.ts:112

___

### recordRuleFunctions

• **recordRuleFunctions**: `Record`<`string`, [`RecordRuleFn`](../interfaces/RecordRuleFn.md)\>

#### Defined in

@yolm/boost/dist/app.d.ts:113

___

### ruleFunctions

• **ruleFunctions**: `Record`<`string`, [`RuleFunction`](../interfaces/RuleFunction.md)\>

#### Defined in

@yolm/boost/dist/app.d.ts:114

___

### scalarFunctions

• **scalarFunctions**: `Record`<`string`, [`ScalarFunction`](../interfaces/ScalarFunction.md)\>

#### Defined in

@yolm/boost/dist/app.d.ts:115

___

### searchMatches

• **searchMatches**: `Record`<`string`, [`SearchMatchConfig`](../interfaces/yom.SearchMatchConfig.md)\>

#### Defined in

@yolm/boost/dist/app.d.ts:117

___

### tables

• **tables**: `Record`<`string`, [`Table`](Table.md)\>

#### Defined in

@yolm/boost/dist/app.d.ts:116

___

### userTableName

• **userTableName**: `string`

#### Defined in

@yolm/boost/dist/app.d.ts:109

## Accessors

### catalog

• `get` **catalog**(): [`DbCatalog`](DbCatalog.md)

Predefined tables and more that speed up the definition of your database.

These also have the added benefit of integrating with other parts of the app, such as the ui and api.

#### Returns

[`DbCatalog`](DbCatalog.md)

#### Defined in

@yolm/boost/dist/app.d.ts:123

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

@yolm/boost/dist/app.d.ts:126

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

@yolm/boost/dist/app.d.ts:127

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

@yolm/boost/dist/app.d.ts:125

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

@yolm/boost/dist/app.d.ts:124
