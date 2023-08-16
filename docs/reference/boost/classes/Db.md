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

[src/app.ts:304](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L304)

___

### collation

• **collation**: [`Collation`](../namespaces/yom.md#collation)

#### Defined in

[src/app.ts:303](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L303)

___

### decisionTables

• **decisionTables**: `Record`<`string`, [`DecisionTable`](../interfaces/DecisionTable.md)\> = `{}`

#### Defined in

[src/app.ts:306](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L306)

___

### enableTransactionQueries

• **enableTransactionQueries**: `boolean` = `true`

#### Defined in

[src/app.ts:305](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L305)

___

### scalarFunctions

• **scalarFunctions**: `Record`<`string`, [`ScalarFunction`](../interfaces/ScalarFunction.md)\> = `{}`

#### Defined in

[src/app.ts:307](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L307)

___

### searchMatches

• **searchMatches**: `Record`<`string`, [`SearchMatchConfig`](../interfaces/yom.SearchMatchConfig.md)\> = `{}`

#### Defined in

[src/app.ts:309](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L309)

___

### tables

• **tables**: `Record`<`string`, [`Table`](Table.md)\> = `{}`

#### Defined in

[src/app.ts:308](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L308)

___

### userTableName

• **userTableName**: `string` = `"user"`

#### Defined in

[src/app.ts:302](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L302)

## Accessors

### catalog

• `get` **catalog**(): [`DbCatalog`](DbCatalog.md)

Predefined tables and more that speed up the definition of your database.

These also have the added benefit of integrating with other parts of the app, such as the ui and api.

#### Returns

[`DbCatalog`](DbCatalog.md)

#### Defined in

[src/app.ts:316](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L316)

## Methods

### addDecisionTable

▸ **addDecisionTable**(`dt`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dt` | `HelperDecisionTable` |

#### Returns

`void`

#### Defined in

[src/app.ts:330](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L330)

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

[src/app.ts:326](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L326)

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

[src/app.ts:320](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L320)
