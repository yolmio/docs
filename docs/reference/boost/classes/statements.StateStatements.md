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

[src/statements.ts:13](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L13)

## Methods

### [iterator]

▸ **[iterator]**(): `IterableIterator`<[`StateStatement`](../namespaces/yom.md#statestatement)\>

#### Returns

`IterableIterator`<[`StateStatement`](../namespaces/yom.md#statestatement)\>

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
| `statements` | `undefined` \| ``null`` \| ``false`` \| `StatementsOrFn`<[`StateStatements`](statements.StateStatements.md)\> |

#### Returns

`void`

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[addGenericStatements](statements.StatementsBase.md#addgenericstatements)

#### Defined in

[src/statements.ts:148](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L148)

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

[src/statements.ts:127](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L127)

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

[src/statements.ts:351](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L351)

___

### break

▸ **break**(): [`StateStatements`](statements.StateStatements.md)

#### Returns

[`StateStatements`](statements.StateStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[break](statements.StatementsBase.md#break)

#### Defined in

[src/statements.ts:22](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L22)

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

[src/statements.ts:193](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L193)

___

### continue

▸ **continue**(): [`StateStatements`](statements.StateStatements.md)

#### Returns

[`StateStatements`](statements.StateStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[continue](statements.StatementsBase.md#continue)

#### Defined in

[src/statements.ts:27](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L27)

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

[src/statements.ts:118](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L118)

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

[src/statements.ts:102](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L102)

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

[src/statements.ts:110](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L110)

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

[src/statements.ts:686](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L686)

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

[src/statements.ts:259](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L259)

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

[src/statements.ts:260](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L260)

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

[src/statements.ts:311](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L311)

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

[src/statements.ts:316](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L316)

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

[src/statements.ts:282](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L282)

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

[src/statements.ts:287](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L287)

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

[src/statements.ts:207](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L207)

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

[src/statements.ts:208](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L208)

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

[src/statements.ts:200](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L200)

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

[src/statements.ts:17](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L17)

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

[src/statements.ts:165](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L165)

___

### popSource

▸ **popSource**(): [`StateStatements`](statements.StateStatements.md)

#### Returns

[`StateStatements`](statements.StateStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[popSource](statements.StatementsBase.md#popsource)

#### Defined in

[src/statements.ts:143](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L143)

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

[src/statements.ts:135](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L135)

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

[src/statements.ts:9](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L9)

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

[src/statements.ts:71](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L71)

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

[src/statements.ts:41](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L41)

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

[src/statements.ts:81](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L81)

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

[src/statements.ts:82](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L82)

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

[src/statements.ts:681](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L681)

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

[src/statements.ts:97](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L97)

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

[src/statements.ts:184](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L184)

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

[src/statements.ts:49](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L49)

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

[src/statements.ts:50](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L50)

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

[src/statements.ts:51](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L51)

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

[src/statements.ts:32](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L32)

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

[src/statements.ts:340](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L340)

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

[src/statements.ts:236](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L236)

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

[src/statements.ts:237](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L237)

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

[src/statements.ts:671](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L671)

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

[src/statements.ts:677](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L677)
