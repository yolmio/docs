---
id: "statements.ScriptStatements"
title: "Boost"
sidebar_label: "ScriptStatements"
custom_edit_url: null
pagination_prev: null
pagination_next: null
---

[statements](../namespaces/statements.md).ScriptStatements

## Hierarchy

- [`StatementsBase`](statements.StatementsBase.md)<[`ScriptStatement`](../namespaces/yom.md#scriptstatement)\>

  ↳ **`ScriptStatements`**

## Constructors

### constructor

• **new ScriptStatements**()

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

▸ **[iterator]**(): `IterableIterator`<[`ScriptStatement`](../namespaces/yom.md#scriptstatement)\>

#### Returns

`IterableIterator`<[`ScriptStatement`](../namespaces/yom.md#scriptstatement)\>

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
| `statements` | `undefined` \| ``null`` \| ``false`` \| `StatementsOrFn`<[`ScriptStatements`](statements.ScriptStatements.md)\> |

#### Returns

`void`

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[addGenericStatements](statements.StatementsBase.md#addgenericstatements)

#### Defined in

@yolm/boost/dist/statements.d.ts:25

___

### addUsers

▸ **addUsers**(`query`, `outputTable?`): [`ScriptStatements`](statements.ScriptStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | [`SqlExpression`](../namespaces/yom.md#sqlexpression) |
| `outputTable?` | `string` |

#### Returns

[`ScriptStatements`](statements.ScriptStatements.md)

#### Defined in

@yolm/boost/dist/statements.d.ts:169

___

### advanceCursor

▸ **advanceCursor**(`cursor`): [`ScriptStatements`](statements.ScriptStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `cursor` | `string` |

#### Returns

[`ScriptStatements`](statements.ScriptStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[advanceCursor](statements.StatementsBase.md#advancecursor)

#### Defined in

@yolm/boost/dist/statements.d.ts:22

___

### block

▸ **block**(`body`): [`ScriptStatements`](statements.ScriptStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `body` | `StatementsOrFn`<[`ScriptStatements`](statements.ScriptStatements.md)\> |

#### Returns

[`ScriptStatements`](statements.ScriptStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[block](statements.StatementsBase.md#block)

#### Defined in

@yolm/boost/dist/statements.d.ts:41

___

### break

▸ **break**(): [`ScriptStatements`](statements.ScriptStatements.md)

#### Returns

[`ScriptStatements`](statements.ScriptStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[break](statements.StatementsBase.md#break)

#### Defined in

@yolm/boost/dist/statements.d.ts:8

___

### conditionalStatements

▸ **conditionalStatements**(`condition`, `statements`): [`ScriptStatements`](statements.ScriptStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `condition` | `boolean` |
| `statements` | `StatementsOrFn`<[`ScriptStatements`](statements.ScriptStatements.md)\> |

#### Returns

[`ScriptStatements`](statements.ScriptStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[conditionalStatements](statements.StatementsBase.md#conditionalstatements)

#### Defined in

@yolm/boost/dist/statements.d.ts:28

___

### continue

▸ **continue**(): [`ScriptStatements`](statements.ScriptStatements.md)

#### Returns

[`ScriptStatements`](statements.ScriptStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[continue](statements.StatementsBase.md#continue)

#### Defined in

@yolm/boost/dist/statements.d.ts:9

___

### createQueryCursor

▸ **createQueryCursor**(`name`, `query`): [`ScriptStatements`](statements.ScriptStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `query` | [`SqlQuery`](../namespaces/yom.md#sqlquery) |

#### Returns

[`ScriptStatements`](statements.ScriptStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[createQueryCursor](statements.StatementsBase.md#createquerycursor)

#### Defined in

@yolm/boost/dist/statements.d.ts:21

___

### debugExpr

▸ **debugExpr**(`expr`): [`ScriptStatements`](statements.ScriptStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `expr` | [`SqlExpression`](../namespaces/yom.md#sqlexpression) |

#### Returns

[`ScriptStatements`](statements.ScriptStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[debugExpr](statements.StatementsBase.md#debugexpr)

#### Defined in

@yolm/boost/dist/statements.d.ts:19

___

### debugQuery

▸ **debugQuery**(`query`): [`ScriptStatements`](statements.ScriptStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | [`SqlQuery`](../namespaces/yom.md#sqlquery) |

#### Returns

[`ScriptStatements`](statements.ScriptStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[debugQuery](statements.StatementsBase.md#debugquery)

#### Defined in

@yolm/boost/dist/statements.d.ts:20

___

### forEachCursor

▸ **forEachCursor**(`cursor`, `body`): [`ScriptStatements`](statements.ScriptStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `cursor` | `string` |
| `body` | `StatementsOrFn`<[`ScriptStatements`](statements.ScriptStatements.md)\> |

#### Returns

[`ScriptStatements`](statements.ScriptStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[forEachCursor](statements.StatementsBase.md#foreachcursor)

#### Defined in

@yolm/boost/dist/statements.d.ts:34

▸ **forEachCursor**(`opts`): [`ScriptStatements`](statements.ScriptStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `ForEachCursor`<`StatementsOrFn`<[`ScriptStatements`](statements.ScriptStatements.md)\>\> |

#### Returns

[`ScriptStatements`](statements.ScriptStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[forEachCursor](statements.StatementsBase.md#foreachcursor)

#### Defined in

@yolm/boost/dist/statements.d.ts:35

___

### forEachQuery

▸ **forEachQuery**(`table`, `cursorName`, `body`): [`ScriptStatements`](statements.ScriptStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `table` | `string` |
| `cursorName` | `string` |
| `body` | `StatementsOrFn`<[`ScriptStatements`](statements.ScriptStatements.md)\> |

#### Returns

[`ScriptStatements`](statements.ScriptStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[forEachQuery](statements.StatementsBase.md#foreachquery)

#### Defined in

@yolm/boost/dist/statements.d.ts:38

▸ **forEachQuery**(`opts`): [`ScriptStatements`](statements.ScriptStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `ForEachQuery`<`StatementsOrFn`<[`ScriptStatements`](statements.ScriptStatements.md)\>\> |

#### Returns

[`ScriptStatements`](statements.ScriptStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[forEachQuery](statements.StatementsBase.md#foreachquery)

#### Defined in

@yolm/boost/dist/statements.d.ts:39

___

### forEachTable

▸ **forEachTable**(`table`, `cursorName`, `body`): [`ScriptStatements`](statements.ScriptStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `table` | `string` |
| `cursorName` | `string` |
| `body` | `StatementsOrFn`<[`ScriptStatements`](statements.ScriptStatements.md)\> |

#### Returns

[`ScriptStatements`](statements.ScriptStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[forEachTable](statements.StatementsBase.md#foreachtable)

#### Defined in

@yolm/boost/dist/statements.d.ts:36

▸ **forEachTable**(`opts`): [`ScriptStatements`](statements.ScriptStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `ForEachTable`<`StatementsOrFn`<[`ScriptStatements`](statements.ScriptStatements.md)\>\> |

#### Returns

[`ScriptStatements`](statements.ScriptStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[forEachTable](statements.StatementsBase.md#foreachtable)

#### Defined in

@yolm/boost/dist/statements.d.ts:37

___

### if

▸ **if**(`condition`, `then`): [`ScriptStatements`](statements.ScriptStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `condition` | [`SqlExpression`](../namespaces/yom.md#sqlexpression) |
| `then` | `StatementsOrFn`<[`ScriptStatements`](statements.ScriptStatements.md)\> |

#### Returns

[`ScriptStatements`](statements.ScriptStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[if](statements.StatementsBase.md#if)

#### Defined in

@yolm/boost/dist/statements.d.ts:30

▸ **if**(`opts`): [`ScriptStatements`](statements.ScriptStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `If`<`StatementsOrFn`<[`ScriptStatements`](statements.ScriptStatements.md)\>\> |

#### Returns

[`ScriptStatements`](statements.ScriptStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[if](statements.StatementsBase.md#if)

#### Defined in

@yolm/boost/dist/statements.d.ts:31

___

### importCsv

▸ **importCsv**(`db`, `dir`): [`ScriptStatements`](statements.ScriptStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `db` | `string` |
| `dir` | `string` |

#### Returns

[`ScriptStatements`](statements.ScriptStatements.md)

#### Defined in

@yolm/boost/dist/statements.d.ts:164

___

### loadDb

▸ **loadDb**(`dir`, `db?`): [`ScriptStatements`](statements.ScriptStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dir` | `string` |
| `db?` | `string` |

#### Returns

[`ScriptStatements`](statements.ScriptStatements.md)

#### Defined in

@yolm/boost/dist/statements.d.ts:166

___

### mapArrayToStatements

▸ **mapArrayToStatements**<`T`\>(`arr`, `fn`): [`ScriptStatements`](statements.ScriptStatements.md)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | `T`[] |
| `fn` | (`item`: `T`, `s`: [`ScriptStatements`](statements.ScriptStatements.md)) => [`ScriptStatements`](statements.ScriptStatements.md) |

#### Returns

[`ScriptStatements`](statements.ScriptStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[mapArrayToStatements](statements.StatementsBase.md#maparraytostatements)

#### Defined in

@yolm/boost/dist/statements.d.ts:29

___

### modify

▸ **modify**(`sql`): [`ScriptStatements`](statements.ScriptStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `sql` | `string` |

#### Returns

[`ScriptStatements`](statements.ScriptStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[modify](statements.StatementsBase.md#modify)

#### Defined in

@yolm/boost/dist/statements.d.ts:7

___

### normalizeGenericStatements

▸ `Protected` **normalizeGenericStatements**(`s`): `undefined` \| [`ScriptStatement`](../namespaces/yom.md#scriptstatement)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `undefined` \| ``null`` \| ``false`` \| `StatementsOrFn`<[`ScriptStatements`](statements.ScriptStatements.md)\> |

#### Returns

`undefined` \| [`ScriptStatement`](../namespaces/yom.md#scriptstatement)[]

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[normalizeGenericStatements](statements.StatementsBase.md#normalizegenericstatements)

#### Defined in

@yolm/boost/dist/statements.d.ts:26

___

### popSource

▸ **popSource**(): [`ScriptStatements`](statements.ScriptStatements.md)

#### Returns

[`ScriptStatements`](statements.ScriptStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[popSource](statements.StatementsBase.md#popsource)

#### Defined in

@yolm/boost/dist/statements.d.ts:24

___

### pull

▸ **pull**(`dir?`): [`ScriptStatements`](statements.ScriptStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dir?` | `string` |

#### Returns

[`ScriptStatements`](statements.ScriptStatements.md)

#### Defined in

@yolm/boost/dist/statements.d.ts:167

___

### push

▸ **push**(): [`ScriptStatements`](statements.ScriptStatements.md)

#### Returns

[`ScriptStatements`](statements.ScriptStatements.md)

#### Defined in

@yolm/boost/dist/statements.d.ts:168

___

### pushSource

▸ **pushSource**(`source`): [`ScriptStatements`](statements.ScriptStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |

#### Returns

[`ScriptStatements`](statements.ScriptStatements.md)

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
| `statement` | [`ScriptStatement`](../namespaces/yom.md#scriptstatement) |

#### Returns

`void`

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[pushToBacking](statements.StatementsBase.md#pushtobacking)

#### Defined in

@yolm/boost/dist/statements.d.ts:5

___

### record

▸ **record**(`name`, `queryOrFields`): [`ScriptStatements`](statements.ScriptStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `queryOrFields` | `string` \| [`ProcTableField`](../interfaces/yom.ProcTableField.md)[] |

#### Returns

[`ScriptStatements`](statements.ScriptStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[record](statements.StatementsBase.md#record)

#### Defined in

@yolm/boost/dist/statements.d.ts:15

___

### return

▸ **return**(`expr?`): [`ScriptStatements`](statements.ScriptStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `expr?` | [`SqlExpression`](../namespaces/yom.md#sqlexpression) |

#### Returns

[`ScriptStatements`](statements.ScriptStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[return](statements.StatementsBase.md#return)

#### Defined in

@yolm/boost/dist/statements.d.ts:11

___

### saveDb

▸ **saveDb**(`dir`, `db?`): [`ScriptStatements`](statements.ScriptStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `dir` | `string` |
| `db?` | `string` |

#### Returns

[`ScriptStatements`](statements.ScriptStatements.md)

#### Defined in

@yolm/boost/dist/statements.d.ts:165

___

### scalar

▸ **scalar**(`name`, `ty`, `expr?`): [`ScriptStatements`](statements.ScriptStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `ty` | [`FieldType`](../namespaces/yom.md#fieldtype) |
| `expr?` | [`SqlExpression`](../namespaces/yom.md#sqlexpression) |

#### Returns

[`ScriptStatements`](statements.ScriptStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[scalar](statements.StatementsBase.md#scalar)

#### Defined in

@yolm/boost/dist/statements.d.ts:16

▸ **scalar**(`name`, `expr`): [`ScriptStatements`](statements.ScriptStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `expr` | [`SqlExpression`](../namespaces/yom.md#sqlexpression) |

#### Returns

[`ScriptStatements`](statements.ScriptStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[scalar](statements.StatementsBase.md#scalar)

#### Defined in

@yolm/boost/dist/statements.d.ts:17

___

### setDb

▸ **setDb**(`opts?`): [`ScriptStatements`](statements.ScriptStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | `Omit`<[`SetDbStatement`](../interfaces/yom.SetDbStatement.md), ``"t"``\> |

#### Returns

[`ScriptStatements`](statements.ScriptStatements.md)

#### Defined in

@yolm/boost/dist/statements.d.ts:170

___

### setScalar

▸ **setScalar**(`name`, `expr`): [`ScriptStatements`](statements.ScriptStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `expr` | [`SqlExpression`](../namespaces/yom.md#sqlexpression) |

#### Returns

[`ScriptStatements`](statements.ScriptStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[setScalar](statements.StatementsBase.md#setscalar)

#### Defined in

@yolm/boost/dist/statements.d.ts:18

___

### statements

▸ **statements**(`...statements`): [`ScriptStatements`](statements.ScriptStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...statements` | (`undefined` \| ``null`` \| ``false`` \| `StatementsOrFn`<[`ScriptStatements`](statements.ScriptStatements.md)\>)[] |

#### Returns

[`ScriptStatements`](statements.ScriptStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[statements](statements.StatementsBase.md#statements)

#### Defined in

@yolm/boost/dist/statements.d.ts:27

___

### table

▸ **table**(`name`, `query`): [`ScriptStatements`](statements.ScriptStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `query` | `string` |

#### Returns

[`ScriptStatements`](statements.ScriptStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[table](statements.StatementsBase.md#table)

#### Defined in

@yolm/boost/dist/statements.d.ts:12

▸ **table**(`name`, `fields`): [`ScriptStatements`](statements.ScriptStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `fields` | [`ProcTableField`](../interfaces/yom.ProcTableField.md)[] |

#### Returns

[`ScriptStatements`](statements.ScriptStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[table](statements.StatementsBase.md#table)

#### Defined in

@yolm/boost/dist/statements.d.ts:13

▸ **table**(`name`, `fields`, `query`): [`ScriptStatements`](statements.ScriptStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `fields` | [`ProcTableField`](../interfaces/yom.ProcTableField.md)[] |
| `query` | `string` |

#### Returns

[`ScriptStatements`](statements.ScriptStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[table](statements.StatementsBase.md#table)

#### Defined in

@yolm/boost/dist/statements.d.ts:14

___

### throwError

▸ **throwError**(`message`, `description?`): [`ScriptStatements`](statements.ScriptStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`SqlExpression`](../namespaces/yom.md#sqlexpression) |
| `description?` | [`SqlExpression`](../namespaces/yom.md#sqlexpression) |

#### Returns

[`ScriptStatements`](statements.ScriptStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[throwError](statements.StatementsBase.md#throwerror)

#### Defined in

@yolm/boost/dist/statements.d.ts:10

___

### try

▸ **try**(`opts`): [`ScriptStatements`](statements.ScriptStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `Try`<`StatementsOrFn`<[`ScriptStatements`](statements.ScriptStatements.md)\>\> |

#### Returns

[`ScriptStatements`](statements.ScriptStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[try](statements.StatementsBase.md#try)

#### Defined in

@yolm/boost/dist/statements.d.ts:40

___

### while

▸ **while**(`condition`, `body`): [`ScriptStatements`](statements.ScriptStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `condition` | [`SqlExpression`](../namespaces/yom.md#sqlexpression) |
| `body` | `StatementsOrFn`<[`ScriptStatements`](statements.ScriptStatements.md)\> |

#### Returns

[`ScriptStatements`](statements.ScriptStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[while](statements.StatementsBase.md#while)

#### Defined in

@yolm/boost/dist/statements.d.ts:32

▸ **while**(`opts`): [`ScriptStatements`](statements.ScriptStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `While`<`StatementsOrFn`<[`ScriptStatements`](statements.ScriptStatements.md)\>\> |

#### Returns

[`ScriptStatements`](statements.ScriptStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[while](statements.StatementsBase.md#while)

#### Defined in

@yolm/boost/dist/statements.d.ts:33

___

### normalize

▸ `Static` **normalize**(`p`): [`ScriptStatements`](statements.ScriptStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `p` | `undefined` \| ``null`` \| ``false`` \| [`ScriptStatementsOrFn`](../namespaces/statements.md#scriptstatementsorfn) |

#### Returns

[`ScriptStatements`](statements.ScriptStatements.md)

#### Defined in

@yolm/boost/dist/statements.d.ts:162

___

### normalizeToArray

▸ `Static` **normalizeToArray**(`p`): [`ScriptStatement`](../namespaces/yom.md#scriptstatement)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `p` | `undefined` \| ``null`` \| ``false`` \| [`ScriptStatementsOrFn`](../namespaces/statements.md#scriptstatementsorfn) |

#### Returns

[`ScriptStatement`](../namespaces/yom.md#scriptstatement)[]

#### Defined in

@yolm/boost/dist/statements.d.ts:163
