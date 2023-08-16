---
id: "statements.BasicStatements"
title: "Boost"
sidebar_label: "BasicStatements"
custom_edit_url: null
pagination_prev: null
pagination_next: null
---

[statements](../namespaces/statements.md).BasicStatements

## Hierarchy

- [`StatementsBase`](statements.StatementsBase.md)<[`BasicStatement`](../namespaces/yom.md#basicstatement)\>

  ↳ **`BasicStatements`**

## Constructors

### constructor

• **new BasicStatements**()

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

[src/statements.ts:13](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L13)

## Methods

### [iterator]

▸ **[iterator]**(): `IterableIterator`<[`BasicStatement`](../namespaces/yom.md#basicstatement)\>

#### Returns

`IterableIterator`<[`BasicStatement`](../namespaces/yom.md#basicstatement)\>

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[[iterator]](statements.StatementsBase.md#[iterator])

#### Defined in

[src/statements.ts:359](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L359)

___

### addGenericStatements

▸ `Protected` **addGenericStatements**(`statements`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `statements` | `undefined` \| ``null`` \| ``false`` \| `StatementsOrFn`<[`BasicStatements`](statements.BasicStatements.md)\> |

#### Returns

`void`

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[addGenericStatements](statements.StatementsBase.md#addgenericstatements)

#### Defined in

[src/statements.ts:148](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L148)

___

### advanceCursor

▸ **advanceCursor**(`cursor`): [`BasicStatements`](statements.BasicStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `cursor` | `string` |

#### Returns

[`BasicStatements`](statements.BasicStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[advanceCursor](statements.StatementsBase.md#advancecursor)

#### Defined in

[src/statements.ts:127](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L127)

___

### block

▸ **block**(`body`): [`BasicStatements`](statements.BasicStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `body` | `StatementsOrFn`<[`BasicStatements`](statements.BasicStatements.md)\> |

#### Returns

[`BasicStatements`](statements.BasicStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[block](statements.StatementsBase.md#block)

#### Defined in

[src/statements.ts:351](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L351)

___

### break

▸ **break**(): [`BasicStatements`](statements.BasicStatements.md)

#### Returns

[`BasicStatements`](statements.BasicStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[break](statements.StatementsBase.md#break)

#### Defined in

[src/statements.ts:22](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L22)

___

### conditionalStatements

▸ **conditionalStatements**(`condition`, `statements`): [`BasicStatements`](statements.BasicStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `condition` | `boolean` |
| `statements` | `StatementsOrFn`<[`BasicStatements`](statements.BasicStatements.md)\> |

#### Returns

[`BasicStatements`](statements.BasicStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[conditionalStatements](statements.StatementsBase.md#conditionalstatements)

#### Defined in

[src/statements.ts:193](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L193)

___

### continue

▸ **continue**(): [`BasicStatements`](statements.BasicStatements.md)

#### Returns

[`BasicStatements`](statements.BasicStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[continue](statements.StatementsBase.md#continue)

#### Defined in

[src/statements.ts:27](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L27)

___

### createQueryCursor

▸ **createQueryCursor**(`name`, `query`): [`BasicStatements`](statements.BasicStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `query` | [`SqlQuery`](../namespaces/yom.md#sqlquery) |

#### Returns

[`BasicStatements`](statements.BasicStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[createQueryCursor](statements.StatementsBase.md#createquerycursor)

#### Defined in

[src/statements.ts:118](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L118)

___

### debugExpr

▸ **debugExpr**(`expr`): [`BasicStatements`](statements.BasicStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `expr` | [`SqlExpression`](../namespaces/yom.md#sqlexpression) |

#### Returns

[`BasicStatements`](statements.BasicStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[debugExpr](statements.StatementsBase.md#debugexpr)

#### Defined in

[src/statements.ts:102](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L102)

___

### debugQuery

▸ **debugQuery**(`query`): [`BasicStatements`](statements.BasicStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | [`SqlQuery`](../namespaces/yom.md#sqlquery) |

#### Returns

[`BasicStatements`](statements.BasicStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[debugQuery](statements.StatementsBase.md#debugquery)

#### Defined in

[src/statements.ts:110](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L110)

___

### forEachCursor

▸ **forEachCursor**(`cursor`, `body`): [`BasicStatements`](statements.BasicStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `cursor` | `string` |
| `body` | `StatementsOrFn`<[`BasicStatements`](statements.BasicStatements.md)\> |

#### Returns

[`BasicStatements`](statements.BasicStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[forEachCursor](statements.StatementsBase.md#foreachcursor)

#### Defined in

[src/statements.ts:259](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L259)

▸ **forEachCursor**(`opts`): [`BasicStatements`](statements.BasicStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `ForEachCursor`<`StatementsOrFn`<[`BasicStatements`](statements.BasicStatements.md)\>\> |

#### Returns

[`BasicStatements`](statements.BasicStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[forEachCursor](statements.StatementsBase.md#foreachcursor)

#### Defined in

[src/statements.ts:260](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L260)

___

### forEachQuery

▸ **forEachQuery**(`table`, `cursorName`, `body`): [`BasicStatements`](statements.BasicStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `table` | `string` |
| `cursorName` | `string` |
| `body` | `StatementsOrFn`<[`BasicStatements`](statements.BasicStatements.md)\> |

#### Returns

[`BasicStatements`](statements.BasicStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[forEachQuery](statements.StatementsBase.md#foreachquery)

#### Defined in

[src/statements.ts:311](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L311)

▸ **forEachQuery**(`opts`): [`BasicStatements`](statements.BasicStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `ForEachQuery`<`StatementsOrFn`<[`BasicStatements`](statements.BasicStatements.md)\>\> |

#### Returns

[`BasicStatements`](statements.BasicStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[forEachQuery](statements.StatementsBase.md#foreachquery)

#### Defined in

[src/statements.ts:316](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L316)

___

### forEachTable

▸ **forEachTable**(`table`, `cursorName`, `body`): [`BasicStatements`](statements.BasicStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `table` | `string` |
| `cursorName` | `string` |
| `body` | `StatementsOrFn`<[`BasicStatements`](statements.BasicStatements.md)\> |

#### Returns

[`BasicStatements`](statements.BasicStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[forEachTable](statements.StatementsBase.md#foreachtable)

#### Defined in

[src/statements.ts:282](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L282)

▸ **forEachTable**(`opts`): [`BasicStatements`](statements.BasicStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `ForEachTable`<`StatementsOrFn`<[`BasicStatements`](statements.BasicStatements.md)\>\> |

#### Returns

[`BasicStatements`](statements.BasicStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[forEachTable](statements.StatementsBase.md#foreachtable)

#### Defined in

[src/statements.ts:287](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L287)

___

### if

▸ **if**(`condition`, `then`): [`BasicStatements`](statements.BasicStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `condition` | [`SqlExpression`](../namespaces/yom.md#sqlexpression) |
| `then` | `StatementsOrFn`<[`BasicStatements`](statements.BasicStatements.md)\> |

#### Returns

[`BasicStatements`](statements.BasicStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[if](statements.StatementsBase.md#if)

#### Defined in

[src/statements.ts:207](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L207)

▸ **if**(`opts`): [`BasicStatements`](statements.BasicStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `If`<`StatementsOrFn`<[`BasicStatements`](statements.BasicStatements.md)\>\> |

#### Returns

[`BasicStatements`](statements.BasicStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[if](statements.StatementsBase.md#if)

#### Defined in

[src/statements.ts:208](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L208)

___

### mapArrayToStatements

▸ **mapArrayToStatements**<`T`\>(`arr`, `fn`): [`BasicStatements`](statements.BasicStatements.md)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | `T`[] |
| `fn` | (`item`: `T`, `s`: [`BasicStatements`](statements.BasicStatements.md)) => [`BasicStatements`](statements.BasicStatements.md) |

#### Returns

[`BasicStatements`](statements.BasicStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[mapArrayToStatements](statements.StatementsBase.md#maparraytostatements)

#### Defined in

[src/statements.ts:200](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L200)

___

### modify

▸ **modify**(`sql`): [`BasicStatements`](statements.BasicStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `sql` | `string` |

#### Returns

[`BasicStatements`](statements.BasicStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[modify](statements.StatementsBase.md#modify)

#### Defined in

[src/statements.ts:17](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L17)

___

### normalizeGenericStatements

▸ `Protected` **normalizeGenericStatements**(`s`): `undefined` \| [`BasicStatement`](../namespaces/yom.md#basicstatement)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `undefined` \| ``null`` \| ``false`` \| `StatementsOrFn`<[`BasicStatements`](statements.BasicStatements.md)\> |

#### Returns

`undefined` \| [`BasicStatement`](../namespaces/yom.md#basicstatement)[]

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[normalizeGenericStatements](statements.StatementsBase.md#normalizegenericstatements)

#### Defined in

[src/statements.ts:165](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L165)

___

### popSource

▸ **popSource**(): [`BasicStatements`](statements.BasicStatements.md)

#### Returns

[`BasicStatements`](statements.BasicStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[popSource](statements.StatementsBase.md#popsource)

#### Defined in

[src/statements.ts:143](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L143)

___

### pushSource

▸ **pushSource**(`source`): [`BasicStatements`](statements.BasicStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |

#### Returns

[`BasicStatements`](statements.BasicStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[pushSource](statements.StatementsBase.md#pushsource)

#### Defined in

[src/statements.ts:135](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L135)

___

### pushToBacking

▸ `Protected` **pushToBacking**(`statement`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `statement` | [`BasicStatement`](../namespaces/yom.md#basicstatement) |

#### Returns

`void`

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[pushToBacking](statements.StatementsBase.md#pushtobacking)

#### Defined in

[src/statements.ts:9](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L9)

___

### record

▸ **record**(`name`, `queryOrFields`): [`BasicStatements`](statements.BasicStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `queryOrFields` | `string` \| [`ProcTableField`](../interfaces/yom.ProcTableField.md)[] |

#### Returns

[`BasicStatements`](statements.BasicStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[record](statements.StatementsBase.md#record)

#### Defined in

[src/statements.ts:71](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L71)

___

### return

▸ **return**(`expr?`): [`BasicStatements`](statements.BasicStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `expr?` | [`SqlExpression`](../namespaces/yom.md#sqlexpression) |

#### Returns

[`BasicStatements`](statements.BasicStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[return](statements.StatementsBase.md#return)

#### Defined in

[src/statements.ts:41](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L41)

___

### scalar

▸ **scalar**(`name`, `ty`, `expr?`): [`BasicStatements`](statements.BasicStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `ty` | [`FieldType`](../namespaces/yom.md#fieldtype) |
| `expr?` | [`SqlExpression`](../namespaces/yom.md#sqlexpression) |

#### Returns

[`BasicStatements`](statements.BasicStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[scalar](statements.StatementsBase.md#scalar)

#### Defined in

[src/statements.ts:81](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L81)

▸ **scalar**(`name`, `expr`): [`BasicStatements`](statements.BasicStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `expr` | [`SqlExpression`](../namespaces/yom.md#sqlexpression) |

#### Returns

[`BasicStatements`](statements.BasicStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[scalar](statements.StatementsBase.md#scalar)

#### Defined in

[src/statements.ts:82](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L82)

___

### setScalar

▸ **setScalar**(`name`, `expr`): [`BasicStatements`](statements.BasicStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `expr` | [`SqlExpression`](../namespaces/yom.md#sqlexpression) |

#### Returns

[`BasicStatements`](statements.BasicStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[setScalar](statements.StatementsBase.md#setscalar)

#### Defined in

[src/statements.ts:97](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L97)

___

### statements

▸ **statements**(`...statements`): [`BasicStatements`](statements.BasicStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...statements` | (`undefined` \| ``null`` \| ``false`` \| `StatementsOrFn`<[`BasicStatements`](statements.BasicStatements.md)\>)[] |

#### Returns

[`BasicStatements`](statements.BasicStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[statements](statements.StatementsBase.md#statements)

#### Defined in

[src/statements.ts:184](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L184)

___

### table

▸ **table**(`name`, `query`): [`BasicStatements`](statements.BasicStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `query` | `string` |

#### Returns

[`BasicStatements`](statements.BasicStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[table](statements.StatementsBase.md#table)

#### Defined in

[src/statements.ts:49](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L49)

▸ **table**(`name`, `fields`): [`BasicStatements`](statements.BasicStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `fields` | [`ProcTableField`](../interfaces/yom.ProcTableField.md)[] |

#### Returns

[`BasicStatements`](statements.BasicStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[table](statements.StatementsBase.md#table)

#### Defined in

[src/statements.ts:50](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L50)

▸ **table**(`name`, `fields`, `query`): [`BasicStatements`](statements.BasicStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `fields` | [`ProcTableField`](../interfaces/yom.ProcTableField.md)[] |
| `query` | `string` |

#### Returns

[`BasicStatements`](statements.BasicStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[table](statements.StatementsBase.md#table)

#### Defined in

[src/statements.ts:51](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L51)

___

### throwError

▸ **throwError**(`message`, `description?`): [`BasicStatements`](statements.BasicStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`SqlExpression`](../namespaces/yom.md#sqlexpression) |
| `description?` | [`SqlExpression`](../namespaces/yom.md#sqlexpression) |

#### Returns

[`BasicStatements`](statements.BasicStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[throwError](statements.StatementsBase.md#throwerror)

#### Defined in

[src/statements.ts:32](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L32)

___

### try

▸ **try**(`opts`): [`BasicStatements`](statements.BasicStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `Try`<`StatementsOrFn`<[`BasicStatements`](statements.BasicStatements.md)\>\> |

#### Returns

[`BasicStatements`](statements.BasicStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[try](statements.StatementsBase.md#try)

#### Defined in

[src/statements.ts:340](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L340)

___

### while

▸ **while**(`condition`, `body`): [`BasicStatements`](statements.BasicStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `condition` | [`SqlExpression`](../namespaces/yom.md#sqlexpression) |
| `body` | `StatementsOrFn`<[`BasicStatements`](statements.BasicStatements.md)\> |

#### Returns

[`BasicStatements`](statements.BasicStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[while](statements.StatementsBase.md#while)

#### Defined in

[src/statements.ts:236](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L236)

▸ **while**(`opts`): [`BasicStatements`](statements.BasicStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `While`<`StatementsOrFn`<[`BasicStatements`](statements.BasicStatements.md)\>\> |

#### Returns

[`BasicStatements`](statements.BasicStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[while](statements.StatementsBase.md#while)

#### Defined in

[src/statements.ts:237](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L237)

___

### normalize

▸ `Static` **normalize**(`p`): [`BasicStatements`](statements.BasicStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `p` | `undefined` \| ``null`` \| ``false`` \| [`BasicStatementsOrFn`](../namespaces/statements.md#basicstatementsorfn) |

#### Returns

[`BasicStatements`](statements.BasicStatements.md)

#### Defined in

[src/statements.ts:408](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L408)

___

### normalizeToArray

▸ `Static` **normalizeToArray**(`p`): [`BasicStatement`](../namespaces/yom.md#basicstatement)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `p` | `undefined` \| ``null`` \| ``false`` \| [`BasicStatementsOrFn`](../namespaces/statements.md#basicstatementsorfn) |

#### Returns

[`BasicStatement`](../namespaces/yom.md#basicstatement)[]

#### Defined in

[src/statements.ts:414](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L414)
