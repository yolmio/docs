---
id: "statements.StateStatements"
title: "Boost"
sidebar_label: "StateStatements"
custom_edit_url: null
pagination_prev: null
pagination_next: null
---

[statements](../namespaces/statements.md).StateStatements

## Hierarchy

- [`StatementsBase`](statements.StatementsBase.md)<[`StateStatement`](../namespaces/yom.md#statestatement)\>

  ↳ **`StateStatements`**

## Constructors

### constructor

• **new StateStatements**()

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

▸ **[iterator]**(): `IterableIterator`<[`StateStatement`](../namespaces/yom.md#statestatement)\>

#### Returns

`IterableIterator`<[`StateStatement`](../namespaces/yom.md#statestatement)\>

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
| `statements` | `undefined` \| ``null`` \| ``false`` \| `StatementsOrFn`<[`StateStatements`](statements.StateStatements.md)\> |

#### Returns

`void`

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[addGenericStatements](statements.StatementsBase.md#addgenericstatements)

#### Defined in

@yolm/boost/dist/statements.d.ts:25

___

### advanceCursor

▸ **advanceCursor**(`cursor`): [`StateStatements`](statements.StateStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `cursor` | `string` |

#### Returns

[`StateStatements`](statements.StateStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[advanceCursor](statements.StatementsBase.md#advancecursor)

#### Defined in

@yolm/boost/dist/statements.d.ts:22

___

### block

▸ **block**(`body`): [`StateStatements`](statements.StateStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `body` | `StatementsOrFn`<[`StateStatements`](statements.StateStatements.md)\> |

#### Returns

[`StateStatements`](statements.StateStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[block](statements.StatementsBase.md#block)

#### Defined in

@yolm/boost/dist/statements.d.ts:41

___

### break

▸ **break**(): [`StateStatements`](statements.StateStatements.md)

#### Returns

[`StateStatements`](statements.StateStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[break](statements.StatementsBase.md#break)

#### Defined in

@yolm/boost/dist/statements.d.ts:8

___

### conditionalStatements

▸ **conditionalStatements**(`condition`, `statements`): [`StateStatements`](statements.StateStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `condition` | `boolean` |
| `statements` | `StatementsOrFn`<[`StateStatements`](statements.StateStatements.md)\> |

#### Returns

[`StateStatements`](statements.StateStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[conditionalStatements](statements.StatementsBase.md#conditionalstatements)

#### Defined in

@yolm/boost/dist/statements.d.ts:28

___

### continue

▸ **continue**(): [`StateStatements`](statements.StateStatements.md)

#### Returns

[`StateStatements`](statements.StateStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[continue](statements.StatementsBase.md#continue)

#### Defined in

@yolm/boost/dist/statements.d.ts:9

___

### createQueryCursor

▸ **createQueryCursor**(`name`, `query`): [`StateStatements`](statements.StateStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `query` | [`SqlQuery`](../namespaces/yom.md#sqlquery) |

#### Returns

[`StateStatements`](statements.StateStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[createQueryCursor](statements.StatementsBase.md#createquerycursor)

#### Defined in

@yolm/boost/dist/statements.d.ts:21

___

### debugExpr

▸ **debugExpr**(`expr`): [`StateStatements`](statements.StateStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `expr` | [`SqlExpression`](../namespaces/yom.md#sqlexpression) |

#### Returns

[`StateStatements`](statements.StateStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[debugExpr](statements.StatementsBase.md#debugexpr)

#### Defined in

@yolm/boost/dist/statements.d.ts:19

___

### debugQuery

▸ **debugQuery**(`query`): [`StateStatements`](statements.StateStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | [`SqlQuery`](../namespaces/yom.md#sqlquery) |

#### Returns

[`StateStatements`](statements.StateStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[debugQuery](statements.StatementsBase.md#debugquery)

#### Defined in

@yolm/boost/dist/statements.d.ts:20

___

### dynamicQuery

▸ **dynamicQuery**(`props`): [`StateStatements`](statements.StateStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `Omit`<[`DynamicQueryStatement`](../interfaces/yom.DynamicQueryStatement.md), ``"t"``\> |

#### Returns

[`StateStatements`](statements.StateStatements.md)

#### Defined in

@yolm/boost/dist/statements.d.ts:158

___

### forEachCursor

▸ **forEachCursor**(`cursor`, `body`): [`StateStatements`](statements.StateStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `cursor` | `string` |
| `body` | `StatementsOrFn`<[`StateStatements`](statements.StateStatements.md)\> |

#### Returns

[`StateStatements`](statements.StateStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[forEachCursor](statements.StatementsBase.md#foreachcursor)

#### Defined in

@yolm/boost/dist/statements.d.ts:34

▸ **forEachCursor**(`opts`): [`StateStatements`](statements.StateStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `ForEachCursor`<`StatementsOrFn`<[`StateStatements`](statements.StateStatements.md)\>\> |

#### Returns

[`StateStatements`](statements.StateStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[forEachCursor](statements.StatementsBase.md#foreachcursor)

#### Defined in

@yolm/boost/dist/statements.d.ts:35

___

### forEachQuery

▸ **forEachQuery**(`table`, `cursorName`, `body`): [`StateStatements`](statements.StateStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `table` | `string` |
| `cursorName` | `string` |
| `body` | `StatementsOrFn`<[`StateStatements`](statements.StateStatements.md)\> |

#### Returns

[`StateStatements`](statements.StateStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[forEachQuery](statements.StatementsBase.md#foreachquery)

#### Defined in

@yolm/boost/dist/statements.d.ts:38

▸ **forEachQuery**(`opts`): [`StateStatements`](statements.StateStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `ForEachQuery`<`StatementsOrFn`<[`StateStatements`](statements.StateStatements.md)\>\> |

#### Returns

[`StateStatements`](statements.StateStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[forEachQuery](statements.StatementsBase.md#foreachquery)

#### Defined in

@yolm/boost/dist/statements.d.ts:39

___

### forEachTable

▸ **forEachTable**(`table`, `cursorName`, `body`): [`StateStatements`](statements.StateStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `table` | `string` |
| `cursorName` | `string` |
| `body` | `StatementsOrFn`<[`StateStatements`](statements.StateStatements.md)\> |

#### Returns

[`StateStatements`](statements.StateStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[forEachTable](statements.StatementsBase.md#foreachtable)

#### Defined in

@yolm/boost/dist/statements.d.ts:36

▸ **forEachTable**(`opts`): [`StateStatements`](statements.StateStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `ForEachTable`<`StatementsOrFn`<[`StateStatements`](statements.StateStatements.md)\>\> |

#### Returns

[`StateStatements`](statements.StateStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[forEachTable](statements.StatementsBase.md#foreachtable)

#### Defined in

@yolm/boost/dist/statements.d.ts:37

___

### if

▸ **if**(`condition`, `then`): [`StateStatements`](statements.StateStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `condition` | [`SqlExpression`](../namespaces/yom.md#sqlexpression) |
| `then` | `StatementsOrFn`<[`StateStatements`](statements.StateStatements.md)\> |

#### Returns

[`StateStatements`](statements.StateStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[if](statements.StatementsBase.md#if)

#### Defined in

@yolm/boost/dist/statements.d.ts:30

▸ **if**(`opts`): [`StateStatements`](statements.StateStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `If`<`StatementsOrFn`<[`StateStatements`](statements.StateStatements.md)\>\> |

#### Returns

[`StateStatements`](statements.StateStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[if](statements.StatementsBase.md#if)

#### Defined in

@yolm/boost/dist/statements.d.ts:31

___

### mapArrayToStatements

▸ **mapArrayToStatements**<`T`\>(`arr`, `fn`): [`StateStatements`](statements.StateStatements.md)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | `T`[] |
| `fn` | (`item`: `T`, `s`: [`StateStatements`](statements.StateStatements.md)) => [`StateStatements`](statements.StateStatements.md) |

#### Returns

[`StateStatements`](statements.StateStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[mapArrayToStatements](statements.StatementsBase.md#maparraytostatements)

#### Defined in

@yolm/boost/dist/statements.d.ts:29

___

### modify

▸ **modify**(`sql`): [`StateStatements`](statements.StateStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `sql` | `string` |

#### Returns

[`StateStatements`](statements.StateStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[modify](statements.StatementsBase.md#modify)

#### Defined in

@yolm/boost/dist/statements.d.ts:7

___

### normalizeGenericStatements

▸ `Protected` **normalizeGenericStatements**(`s`): `undefined` \| [`StateStatement`](../namespaces/yom.md#statestatement)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `undefined` \| ``null`` \| ``false`` \| `StatementsOrFn`<[`StateStatements`](statements.StateStatements.md)\> |

#### Returns

`undefined` \| [`StateStatement`](../namespaces/yom.md#statestatement)[]

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[normalizeGenericStatements](statements.StatementsBase.md#normalizegenericstatements)

#### Defined in

@yolm/boost/dist/statements.d.ts:26

___

### popSource

▸ **popSource**(): [`StateStatements`](statements.StateStatements.md)

#### Returns

[`StateStatements`](statements.StateStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[popSource](statements.StatementsBase.md#popsource)

#### Defined in

@yolm/boost/dist/statements.d.ts:24

___

### pushSource

▸ **pushSource**(`source`): [`StateStatements`](statements.StateStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |

#### Returns

[`StateStatements`](statements.StateStatements.md)

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
| `statement` | [`StateStatement`](../namespaces/yom.md#statestatement) |

#### Returns

`void`

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[pushToBacking](statements.StatementsBase.md#pushtobacking)

#### Defined in

@yolm/boost/dist/statements.d.ts:5

___

### record

▸ **record**(`name`, `queryOrFields`): [`StateStatements`](statements.StateStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `queryOrFields` | `string` \| [`ProcTableField`](../interfaces/yom.ProcTableField.md)[] |

#### Returns

[`StateStatements`](statements.StateStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[record](statements.StatementsBase.md#record)

#### Defined in

@yolm/boost/dist/statements.d.ts:15

___

### return

▸ **return**(`expr?`): [`StateStatements`](statements.StateStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `expr?` | [`SqlExpression`](../namespaces/yom.md#sqlexpression) |

#### Returns

[`StateStatements`](statements.StateStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[return](statements.StatementsBase.md#return)

#### Defined in

@yolm/boost/dist/statements.d.ts:11

___

### scalar

▸ **scalar**(`name`, `ty`, `expr?`): [`StateStatements`](statements.StateStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `ty` | [`FieldType`](../namespaces/yom.md#fieldtype) |
| `expr?` | [`SqlExpression`](../namespaces/yom.md#sqlexpression) |

#### Returns

[`StateStatements`](statements.StateStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[scalar](statements.StatementsBase.md#scalar)

#### Defined in

@yolm/boost/dist/statements.d.ts:16

▸ **scalar**(`name`, `expr`): [`StateStatements`](statements.StateStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `expr` | [`SqlExpression`](../namespaces/yom.md#sqlexpression) |

#### Returns

[`StateStatements`](statements.StateStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[scalar](statements.StatementsBase.md#scalar)

#### Defined in

@yolm/boost/dist/statements.d.ts:17

___

### search

▸ **search**(`opts`): [`StateStatements`](statements.StateStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `Omit`<[`SearchStatement`](../interfaces/yom.SearchStatement.md), ``"t"``\> |

#### Returns

[`StateStatements`](statements.StateStatements.md)

#### Defined in

@yolm/boost/dist/statements.d.ts:157

___

### setScalar

▸ **setScalar**(`name`, `expr`): [`StateStatements`](statements.StateStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `expr` | [`SqlExpression`](../namespaces/yom.md#sqlexpression) |

#### Returns

[`StateStatements`](statements.StateStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[setScalar](statements.StatementsBase.md#setscalar)

#### Defined in

@yolm/boost/dist/statements.d.ts:18

___

### statements

▸ **statements**(`...statements`): [`StateStatements`](statements.StateStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...statements` | (`undefined` \| ``null`` \| ``false`` \| `StatementsOrFn`<[`StateStatements`](statements.StateStatements.md)\>)[] |

#### Returns

[`StateStatements`](statements.StateStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[statements](statements.StatementsBase.md#statements)

#### Defined in

@yolm/boost/dist/statements.d.ts:27

___

### table

▸ **table**(`name`, `query`): [`StateStatements`](statements.StateStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `query` | `string` |

#### Returns

[`StateStatements`](statements.StateStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[table](statements.StatementsBase.md#table)

#### Defined in

@yolm/boost/dist/statements.d.ts:12

▸ **table**(`name`, `fields`): [`StateStatements`](statements.StateStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `fields` | [`ProcTableField`](../interfaces/yom.ProcTableField.md)[] |

#### Returns

[`StateStatements`](statements.StateStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[table](statements.StatementsBase.md#table)

#### Defined in

@yolm/boost/dist/statements.d.ts:13

▸ **table**(`name`, `fields`, `query`): [`StateStatements`](statements.StateStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `fields` | [`ProcTableField`](../interfaces/yom.ProcTableField.md)[] |
| `query` | `string` |

#### Returns

[`StateStatements`](statements.StateStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[table](statements.StatementsBase.md#table)

#### Defined in

@yolm/boost/dist/statements.d.ts:14

___

### throwError

▸ **throwError**(`message`, `description?`): [`StateStatements`](statements.StateStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`SqlExpression`](../namespaces/yom.md#sqlexpression) |
| `description?` | [`SqlExpression`](../namespaces/yom.md#sqlexpression) |

#### Returns

[`StateStatements`](statements.StateStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[throwError](statements.StatementsBase.md#throwerror)

#### Defined in

@yolm/boost/dist/statements.d.ts:10

___

### try

▸ **try**(`opts`): [`StateStatements`](statements.StateStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `Try`<`StatementsOrFn`<[`StateStatements`](statements.StateStatements.md)\>\> |

#### Returns

[`StateStatements`](statements.StateStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[try](statements.StatementsBase.md#try)

#### Defined in

@yolm/boost/dist/statements.d.ts:40

___

### while

▸ **while**(`condition`, `body`): [`StateStatements`](statements.StateStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `condition` | [`SqlExpression`](../namespaces/yom.md#sqlexpression) |
| `body` | `StatementsOrFn`<[`StateStatements`](statements.StateStatements.md)\> |

#### Returns

[`StateStatements`](statements.StateStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[while](statements.StatementsBase.md#while)

#### Defined in

@yolm/boost/dist/statements.d.ts:32

▸ **while**(`opts`): [`StateStatements`](statements.StateStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `While`<`StatementsOrFn`<[`StateStatements`](statements.StateStatements.md)\>\> |

#### Returns

[`StateStatements`](statements.StateStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[while](statements.StatementsBase.md#while)

#### Defined in

@yolm/boost/dist/statements.d.ts:33

___

### normalize

▸ `Static` **normalize**(`p`): [`StateStatements`](statements.StateStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `p` | `undefined` \| ``null`` \| ``false`` \| [`StateStatementsOrFn`](../namespaces/statements.md#statestatementsorfn) |

#### Returns

[`StateStatements`](statements.StateStatements.md)

#### Defined in

@yolm/boost/dist/statements.d.ts:155

___

### normalizeToArray

▸ `Static` **normalizeToArray**(`p`): [`StateStatement`](../namespaces/yom.md#statestatement)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `p` | `undefined` \| ``null`` \| ``false`` \| [`StateStatementsOrFn`](../namespaces/statements.md#statestatementsorfn) |

#### Returns

[`StateStatement`](../namespaces/yom.md#statestatement)[]

#### Defined in

@yolm/boost/dist/statements.d.ts:156
