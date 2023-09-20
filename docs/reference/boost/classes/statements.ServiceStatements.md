---
id: "statements.ServiceStatements"
title: "Boost"
sidebar_label: "ServiceStatements"
custom_edit_url: null
pagination_prev: null
pagination_next: null
---

[statements](../namespaces/statements.md).ServiceStatements

## Hierarchy

- [`StatementsBase`](statements.StatementsBase.md)<[`ServiceProcStatement`](../namespaces/yom.md#serviceprocstatement)\>

  ↳ **`ServiceStatements`**

## Constructors

### constructor

• **new ServiceStatements**()

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[constructor](statements.StatementsBase.md#constructor)

## Accessors

### statementsIsEmpty

• `get` **statementsIsEmpty**(): `boolean`

#### Returns

`boolean`

#### Inherited from

StatementsBase.statementsIsEmpty

#### Defined in

@yolm/boost/dist/statements.d.ts:6

## Methods

### [iterator]

▸ **[iterator]**(): `IterableIterator`<[`ServiceProcStatement`](../namespaces/yom.md#serviceprocstatement)\>

#### Returns

`IterableIterator`<[`ServiceProcStatement`](../namespaces/yom.md#serviceprocstatement)\>

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[[iterator]](statements.StatementsBase.md#[iterator])

#### Defined in

@yolm/boost/dist/statements.d.ts:42

___

### addGenericStatements

▸ `Protected` **addGenericStatements**(`statements`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `statements` | `undefined` \| ``null`` \| ``false`` \| `StatementsOrFn`<[`ServiceStatements`](statements.ServiceStatements.md)\> |

#### Returns

`void`

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[addGenericStatements](statements.StatementsBase.md#addgenericstatements)

#### Defined in

@yolm/boost/dist/statements.d.ts:25

___

### addUsers

▸ **addUsers**(`query`, `outputTable?`): [`ServiceStatements`](statements.ServiceStatements.md)

This is how you actually add the users to our authorization system, just inserting into the users table is not enough.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `query` | [`SqlExpression`](../namespaces/yom.md#sqlexpression) | Expects a sql query with the following fields: db_id: biguint (id of the user in the database) eamil: string (email of the user, will be sent an email and invited to yolm) notification_type: string (either "none" or "new_app" or "user") |
| `outputTable?` | `string` | The name of the table that should be created to store the users that have been added. It has the following fields: db_id: biguint (id of the user in the database) global_id: uuid (id of the user in yolm's authentication system) |

#### Returns

[`ServiceStatements`](statements.ServiceStatements.md)

#### Defined in

@yolm/boost/dist/statements.d.ts:148

___

### advanceCursor

▸ **advanceCursor**(`cursor`): [`ServiceStatements`](statements.ServiceStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `cursor` | `string` |

#### Returns

[`ServiceStatements`](statements.ServiceStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[advanceCursor](statements.StatementsBase.md#advancecursor)

#### Defined in

@yolm/boost/dist/statements.d.ts:22

___

### block

▸ **block**(`body`): [`ServiceStatements`](statements.ServiceStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `body` | `StatementsOrFn`<[`ServiceStatements`](statements.ServiceStatements.md)\> |

#### Returns

[`ServiceStatements`](statements.ServiceStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[block](statements.StatementsBase.md#block)

#### Defined in

@yolm/boost/dist/statements.d.ts:41

___

### break

▸ **break**(): [`ServiceStatements`](statements.ServiceStatements.md)

#### Returns

[`ServiceStatements`](statements.ServiceStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[break](statements.StatementsBase.md#break)

#### Defined in

@yolm/boost/dist/statements.d.ts:8

___

### commitTransaction

▸ **commitTransaction**(): [`ServiceStatements`](statements.ServiceStatements.md)

#### Returns

[`ServiceStatements`](statements.ServiceStatements.md)

#### Defined in

@yolm/boost/dist/statements.d.ts:122

___

### conditionalStatements

▸ **conditionalStatements**(`condition`, `statements`): [`ServiceStatements`](statements.ServiceStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `condition` | `boolean` |
| `statements` | `StatementsOrFn`<[`ServiceStatements`](statements.ServiceStatements.md)\> |

#### Returns

[`ServiceStatements`](statements.ServiceStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[conditionalStatements](statements.StatementsBase.md#conditionalstatements)

#### Defined in

@yolm/boost/dist/statements.d.ts:28

___

### continue

▸ **continue**(): [`ServiceStatements`](statements.ServiceStatements.md)

#### Returns

[`ServiceStatements`](statements.ServiceStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[continue](statements.StatementsBase.md#continue)

#### Defined in

@yolm/boost/dist/statements.d.ts:9

___

### createQueryCursor

▸ **createQueryCursor**(`name`, `query`): [`ServiceStatements`](statements.ServiceStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `query` | [`SqlQuery`](../namespaces/yom.md#sqlquery) |

#### Returns

[`ServiceStatements`](statements.ServiceStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[createQueryCursor](statements.StatementsBase.md#createquerycursor)

#### Defined in

@yolm/boost/dist/statements.d.ts:21

___

### debugExpr

▸ **debugExpr**(`expr`): [`ServiceStatements`](statements.ServiceStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `expr` | [`SqlExpression`](../namespaces/yom.md#sqlexpression) |

#### Returns

[`ServiceStatements`](statements.ServiceStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[debugExpr](statements.StatementsBase.md#debugexpr)

#### Defined in

@yolm/boost/dist/statements.d.ts:19

___

### debugQuery

▸ **debugQuery**(`query`): [`ServiceStatements`](statements.ServiceStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | [`SqlQuery`](../namespaces/yom.md#sqlquery) |

#### Returns

[`ServiceStatements`](statements.ServiceStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[debugQuery](statements.StatementsBase.md#debugquery)

#### Defined in

@yolm/boost/dist/statements.d.ts:20

___

### dynamicModify

▸ **dynamicModify**(`sql`): [`ServiceStatements`](statements.ServiceStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `sql` | [`SqlExpression`](../namespaces/yom.md#sqlexpression) |

#### Returns

[`ServiceStatements`](statements.ServiceStatements.md)

#### Defined in

@yolm/boost/dist/statements.d.ts:125

___

### dynamicQuery

▸ **dynamicQuery**(`props`): [`ServiceStatements`](statements.ServiceStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `Omit`<[`DynamicQueryStatement`](../interfaces/yom.DynamicQueryStatement.md), ``"t"``\> |

#### Returns

[`ServiceStatements`](statements.ServiceStatements.md)

#### Defined in

@yolm/boost/dist/statements.d.ts:124

___

### dynamicQueryToCsv

▸ **dynamicQueryToCsv**(`query`, `scalar`): [`ServiceStatements`](statements.ServiceStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | [`SqlExpression`](../namespaces/yom.md#sqlexpression) |
| `scalar` | `string` |

#### Returns

[`ServiceStatements`](statements.ServiceStatements.md)

#### Defined in

@yolm/boost/dist/statements.d.ts:123

___

### forEachCursor

▸ **forEachCursor**(`cursor`, `body`): [`ServiceStatements`](statements.ServiceStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `cursor` | `string` |
| `body` | `StatementsOrFn`<[`ServiceStatements`](statements.ServiceStatements.md)\> |

#### Returns

[`ServiceStatements`](statements.ServiceStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[forEachCursor](statements.StatementsBase.md#foreachcursor)

#### Defined in

@yolm/boost/dist/statements.d.ts:34

▸ **forEachCursor**(`opts`): [`ServiceStatements`](statements.ServiceStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `ForEachCursor`<`StatementsOrFn`<[`ServiceStatements`](statements.ServiceStatements.md)\>\> |

#### Returns

[`ServiceStatements`](statements.ServiceStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[forEachCursor](statements.StatementsBase.md#foreachcursor)

#### Defined in

@yolm/boost/dist/statements.d.ts:35

___

### forEachQuery

▸ **forEachQuery**(`table`, `cursorName`, `body`): [`ServiceStatements`](statements.ServiceStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `table` | `string` |
| `cursorName` | `string` |
| `body` | `StatementsOrFn`<[`ServiceStatements`](statements.ServiceStatements.md)\> |

#### Returns

[`ServiceStatements`](statements.ServiceStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[forEachQuery](statements.StatementsBase.md#foreachquery)

#### Defined in

@yolm/boost/dist/statements.d.ts:38

▸ **forEachQuery**(`opts`): [`ServiceStatements`](statements.ServiceStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `ForEachQuery`<`StatementsOrFn`<[`ServiceStatements`](statements.ServiceStatements.md)\>\> |

#### Returns

[`ServiceStatements`](statements.ServiceStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[forEachQuery](statements.StatementsBase.md#foreachquery)

#### Defined in

@yolm/boost/dist/statements.d.ts:39

___

### forEachTable

▸ **forEachTable**(`table`, `cursorName`, `body`): [`ServiceStatements`](statements.ServiceStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `table` | `string` |
| `cursorName` | `string` |
| `body` | `StatementsOrFn`<[`ServiceStatements`](statements.ServiceStatements.md)\> |

#### Returns

[`ServiceStatements`](statements.ServiceStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[forEachTable](statements.StatementsBase.md#foreachtable)

#### Defined in

@yolm/boost/dist/statements.d.ts:36

▸ **forEachTable**(`opts`): [`ServiceStatements`](statements.ServiceStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `ForEachTable`<`StatementsOrFn`<[`ServiceStatements`](statements.ServiceStatements.md)\>\> |

#### Returns

[`ServiceStatements`](statements.ServiceStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[forEachTable](statements.StatementsBase.md#foreachtable)

#### Defined in

@yolm/boost/dist/statements.d.ts:37

___

### if

▸ **if**(`condition`, `then`): [`ServiceStatements`](statements.ServiceStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `condition` | [`SqlExpression`](../namespaces/yom.md#sqlexpression) |
| `then` | `StatementsOrFn`<[`ServiceStatements`](statements.ServiceStatements.md)\> |

#### Returns

[`ServiceStatements`](statements.ServiceStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[if](statements.StatementsBase.md#if)

#### Defined in

@yolm/boost/dist/statements.d.ts:30

▸ **if**(`opts`): [`ServiceStatements`](statements.ServiceStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `If`<`StatementsOrFn`<[`ServiceStatements`](statements.ServiceStatements.md)\>\> |

#### Returns

[`ServiceStatements`](statements.ServiceStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[if](statements.StatementsBase.md#if)

#### Defined in

@yolm/boost/dist/statements.d.ts:31

___

### mapArrayToStatements

▸ **mapArrayToStatements**<`T`\>(`arr`, `fn`): [`ServiceStatements`](statements.ServiceStatements.md)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | `T`[] |
| `fn` | (`item`: `T`, `s`: [`ServiceStatements`](statements.ServiceStatements.md)) => [`ServiceStatements`](statements.ServiceStatements.md) |

#### Returns

[`ServiceStatements`](statements.ServiceStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[mapArrayToStatements](statements.StatementsBase.md#maparraytostatements)

#### Defined in

@yolm/boost/dist/statements.d.ts:29

___

### modify

▸ **modify**(`sql`): [`ServiceStatements`](statements.ServiceStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `sql` | `string` |

#### Returns

[`ServiceStatements`](statements.ServiceStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[modify](statements.StatementsBase.md#modify)

#### Defined in

@yolm/boost/dist/statements.d.ts:7

___

### navigate

▸ **navigate**(`to`, `replace?`): [`ServiceStatements`](statements.ServiceStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `to` | `string` |
| `replace?` | `string` |

#### Returns

[`ServiceStatements`](statements.ServiceStatements.md)

#### Defined in

@yolm/boost/dist/statements.d.ts:128

___

### normalizeGenericStatements

▸ `Protected` **normalizeGenericStatements**(`s`): `undefined` \| [`ServiceProcStatement`](../namespaces/yom.md#serviceprocstatement)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `undefined` \| ``null`` \| ``false`` \| `StatementsOrFn`<[`ServiceStatements`](statements.ServiceStatements.md)\> |

#### Returns

`undefined` \| [`ServiceProcStatement`](../namespaces/yom.md#serviceprocstatement)[]

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[normalizeGenericStatements](statements.StatementsBase.md#normalizegenericstatements)

#### Defined in

@yolm/boost/dist/statements.d.ts:26

___

### popSource

▸ **popSource**(): [`ServiceStatements`](statements.ServiceStatements.md)

#### Returns

[`ServiceStatements`](statements.ServiceStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[popSource](statements.StatementsBase.md#popsource)

#### Defined in

@yolm/boost/dist/statements.d.ts:24

___

### pushSource

▸ **pushSource**(`source`): [`ServiceStatements`](statements.ServiceStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |

#### Returns

[`ServiceStatements`](statements.ServiceStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[pushSource](statements.StatementsBase.md#pushsource)

#### Defined in

@yolm/boost/dist/statements.d.ts:23

___

### pushToBacking

▸ `Protected` **pushToBacking**(`statement`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `statement` | [`ServiceProcStatement`](../namespaces/yom.md#serviceprocstatement) |

#### Returns

`void`

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[pushToBacking](statements.StatementsBase.md#pushtobacking)

#### Defined in

@yolm/boost/dist/statements.d.ts:5

___

### record

▸ **record**(`name`, `queryOrFields`): [`ServiceStatements`](statements.ServiceStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `queryOrFields` | `string` \| [`ProcTableField`](../interfaces/yom.ProcTableField.md)[] |

#### Returns

[`ServiceStatements`](statements.ServiceStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[record](statements.StatementsBase.md#record)

#### Defined in

@yolm/boost/dist/statements.d.ts:15

___

### removeFiles

▸ **removeFiles**(`query`): [`ServiceStatements`](statements.ServiceStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | [`SqlExpression`](../namespaces/yom.md#sqlexpression) |

#### Returns

[`ServiceStatements`](statements.ServiceStatements.md)

#### Defined in

@yolm/boost/dist/statements.d.ts:150

___

### removeUsers

▸ **removeUsers**(`query`): [`ServiceStatements`](statements.ServiceStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | [`SqlExpression`](../namespaces/yom.md#sqlexpression) |

#### Returns

[`ServiceStatements`](statements.ServiceStatements.md)

#### Defined in

@yolm/boost/dist/statements.d.ts:149

___

### return

▸ **return**(`expr?`): [`ServiceStatements`](statements.ServiceStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `expr?` | [`SqlExpression`](../namespaces/yom.md#sqlexpression) |

#### Returns

[`ServiceStatements`](statements.ServiceStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[return](statements.StatementsBase.md#return)

#### Defined in

@yolm/boost/dist/statements.d.ts:11

___

### scalar

▸ **scalar**(`name`, `ty`, `expr?`): [`ServiceStatements`](statements.ServiceStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `ty` | [`FieldType`](../namespaces/yom.md#fieldtype) |
| `expr?` | [`SqlExpression`](../namespaces/yom.md#sqlexpression) |

#### Returns

[`ServiceStatements`](statements.ServiceStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[scalar](statements.StatementsBase.md#scalar)

#### Defined in

@yolm/boost/dist/statements.d.ts:16

▸ **scalar**(`name`, `expr`): [`ServiceStatements`](statements.ServiceStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `expr` | [`SqlExpression`](../namespaces/yom.md#sqlexpression) |

#### Returns

[`ServiceStatements`](statements.ServiceStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[scalar](statements.StatementsBase.md#scalar)

#### Defined in

@yolm/boost/dist/statements.d.ts:17

___

### search

▸ **search**(`opts`): [`ServiceStatements`](statements.ServiceStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `Omit`<[`SearchStatement`](../interfaces/yom.SearchStatement.md), ``"t"``\> |

#### Returns

[`ServiceStatements`](statements.ServiceStatements.md)

#### Defined in

@yolm/boost/dist/statements.d.ts:127

___

### setQueryParam

▸ **setQueryParam**(`param`, `value`, `replace?`): [`ServiceStatements`](statements.ServiceStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `param` | `string` |
| `value` | `string` |
| `replace?` | `string` |

#### Returns

[`ServiceStatements`](statements.ServiceStatements.md)

#### Defined in

@yolm/boost/dist/statements.d.ts:151

___

### setScalar

▸ **setScalar**(`name`, `expr`): [`ServiceStatements`](statements.ServiceStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `expr` | [`SqlExpression`](../namespaces/yom.md#sqlexpression) |

#### Returns

[`ServiceStatements`](statements.ServiceStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[setScalar](statements.StatementsBase.md#setscalar)

#### Defined in

@yolm/boost/dist/statements.d.ts:18

___

### startTransaction

▸ **startTransaction**(`opts?`): [`ServiceStatements`](statements.ServiceStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | `Omit`<[`StartTransactionStatement`](../interfaces/yom.StartTransactionStatement.md), ``"t"``\> |

#### Returns

[`ServiceStatements`](statements.ServiceStatements.md)

#### Defined in

@yolm/boost/dist/statements.d.ts:121

___

### statements

▸ **statements**(`...statements`): [`ServiceStatements`](statements.ServiceStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...statements` | (`undefined` \| ``null`` \| ``false`` \| `StatementsOrFn`<[`ServiceStatements`](statements.ServiceStatements.md)\>)[] |

#### Returns

[`ServiceStatements`](statements.ServiceStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[statements](statements.StatementsBase.md#statements)

#### Defined in

@yolm/boost/dist/statements.d.ts:27

___

### table

▸ **table**(`name`, `query`): [`ServiceStatements`](statements.ServiceStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `query` | `string` |

#### Returns

[`ServiceStatements`](statements.ServiceStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[table](statements.StatementsBase.md#table)

#### Defined in

@yolm/boost/dist/statements.d.ts:12

▸ **table**(`name`, `fields`): [`ServiceStatements`](statements.ServiceStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `fields` | [`ProcTableField`](../interfaces/yom.ProcTableField.md)[] |

#### Returns

[`ServiceStatements`](statements.ServiceStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[table](statements.StatementsBase.md#table)

#### Defined in

@yolm/boost/dist/statements.d.ts:13

▸ **table**(`name`, `fields`, `query`): [`ServiceStatements`](statements.ServiceStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `fields` | [`ProcTableField`](../interfaces/yom.ProcTableField.md)[] |
| `query` | `string` |

#### Returns

[`ServiceStatements`](statements.ServiceStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[table](statements.StatementsBase.md#table)

#### Defined in

@yolm/boost/dist/statements.d.ts:14

___

### throwError

▸ **throwError**(`message`, `description?`): [`ServiceStatements`](statements.ServiceStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`SqlExpression`](../namespaces/yom.md#sqlexpression) |
| `description?` | [`SqlExpression`](../namespaces/yom.md#sqlexpression) |

#### Returns

[`ServiceStatements`](statements.ServiceStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[throwError](statements.StatementsBase.md#throwerror)

#### Defined in

@yolm/boost/dist/statements.d.ts:10

___

### try

▸ **try**(`opts`): [`ServiceStatements`](statements.ServiceStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `Try`<`StatementsOrFn`<[`ServiceStatements`](statements.ServiceStatements.md)\>\> |

#### Returns

[`ServiceStatements`](statements.ServiceStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[try](statements.StatementsBase.md#try)

#### Defined in

@yolm/boost/dist/statements.d.ts:40

___

### undoTx

▸ **undoTx**(`txId`): [`ServiceStatements`](statements.ServiceStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `txId` | [`SqlExpression`](../namespaces/yom.md#sqlexpression) |

#### Returns

[`ServiceStatements`](statements.ServiceStatements.md)

#### Defined in

@yolm/boost/dist/statements.d.ts:126

___

### while

▸ **while**(`condition`, `body`): [`ServiceStatements`](statements.ServiceStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `condition` | [`SqlExpression`](../namespaces/yom.md#sqlexpression) |
| `body` | `StatementsOrFn`<[`ServiceStatements`](statements.ServiceStatements.md)\> |

#### Returns

[`ServiceStatements`](statements.ServiceStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[while](statements.StatementsBase.md#while)

#### Defined in

@yolm/boost/dist/statements.d.ts:32

▸ **while**(`opts`): [`ServiceStatements`](statements.ServiceStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `While`<`StatementsOrFn`<[`ServiceStatements`](statements.ServiceStatements.md)\>\> |

#### Returns

[`ServiceStatements`](statements.ServiceStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[while](statements.StatementsBase.md#while)

#### Defined in

@yolm/boost/dist/statements.d.ts:33

___

### normalize

▸ `Static` **normalize**(`p`): [`ServiceStatements`](statements.ServiceStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `p` | `undefined` \| ``null`` \| ``false`` \| [`ServiceStatementsOrFn`](../namespaces/statements.md#servicestatementsorfn) |

#### Returns

[`ServiceStatements`](statements.ServiceStatements.md)

#### Defined in

@yolm/boost/dist/statements.d.ts:119

___

### normalizeToArray

▸ `Static` **normalizeToArray**(`p`): [`ServiceProcStatement`](../namespaces/yom.md#serviceprocstatement)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `p` | `undefined` \| ``null`` \| ``false`` \| [`ServiceStatementsOrFn`](../namespaces/statements.md#servicestatementsorfn) |

#### Returns

[`ServiceProcStatement`](../namespaces/yom.md#serviceprocstatement)[]

#### Defined in

@yolm/boost/dist/statements.d.ts:120
