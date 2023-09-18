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

[src/statements.ts:13](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L13)

## Methods

### [iterator]

▸ **[iterator]**(): `IterableIterator`<[`ScriptStatement`](../namespaces/yom.md#scriptstatement)\>

#### Returns

`IterableIterator`<[`ScriptStatement`](../namespaces/yom.md#scriptstatement)\>

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[[iterator]](statements.StatementsBase.md#[iterator])

#### Defined in

[src/statements.ts:359](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L359)

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

[src/statements.ts:148](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L148)

___

### addUsers

▸ **addUsers**(`query`, `outputTable?`): [`ScriptStatements`](statements.ScriptStatements.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `query` | [`SqlExpression`](../namespaces/yom.md#sqlexpression) | `undefined` |
| `outputTable` | `string` | `"added_user"` |

#### Returns

[`ScriptStatements`](statements.ScriptStatements.md)

#### Defined in

[src/statements.ts:730](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L730)

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

[src/statements.ts:127](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L127)

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

[src/statements.ts:351](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L351)

___

### break

▸ **break**(): [`ScriptStatements`](statements.ScriptStatements.md)

#### Returns

[`ScriptStatements`](statements.ScriptStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[break](statements.StatementsBase.md#break)

#### Defined in

[src/statements.ts:22](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L22)

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

[src/statements.ts:193](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L193)

___

### continue

▸ **continue**(): [`ScriptStatements`](statements.ScriptStatements.md)

#### Returns

[`ScriptStatements`](statements.ScriptStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[continue](statements.StatementsBase.md#continue)

#### Defined in

[src/statements.ts:27](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L27)

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

[src/statements.ts:118](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L118)

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

[src/statements.ts:102](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L102)

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

[src/statements.ts:110](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L110)

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

[src/statements.ts:259](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L259)

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

[src/statements.ts:260](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L260)

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

[src/statements.ts:311](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L311)

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

[src/statements.ts:316](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L316)

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

[src/statements.ts:282](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L282)

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

[src/statements.ts:287](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L287)

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

[src/statements.ts:207](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L207)

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

[src/statements.ts:208](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L208)

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

[src/statements.ts:705](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L705)

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

[src/statements.ts:715](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L715)

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

[src/statements.ts:200](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L200)

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

[src/statements.ts:17](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L17)

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

[src/statements.ts:165](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L165)

___

### popSource

▸ **popSource**(): [`ScriptStatements`](statements.ScriptStatements.md)

#### Returns

[`ScriptStatements`](statements.ScriptStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[popSource](statements.StatementsBase.md#popsource)

#### Defined in

[src/statements.ts:143](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L143)

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

[src/statements.ts:720](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L720)

___

### push

▸ **push**(): [`ScriptStatements`](statements.ScriptStatements.md)

#### Returns

[`ScriptStatements`](statements.ScriptStatements.md)

#### Defined in

[src/statements.ts:725](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L725)

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

[src/statements.ts:135](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L135)

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

[src/statements.ts:9](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L9)

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

[src/statements.ts:71](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L71)

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

[src/statements.ts:41](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L41)

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

[src/statements.ts:710](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L710)

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

[src/statements.ts:81](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L81)

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

[src/statements.ts:82](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L82)

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

[src/statements.ts:735](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L735)

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

[src/statements.ts:97](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L97)

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

[src/statements.ts:184](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L184)

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

[src/statements.ts:49](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L49)

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

[src/statements.ts:50](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L50)

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

[src/statements.ts:51](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L51)

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

[src/statements.ts:32](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L32)

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

[src/statements.ts:340](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L340)

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

[src/statements.ts:236](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L236)

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

[src/statements.ts:237](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L237)

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

[src/statements.ts:695](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L695)

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

[src/statements.ts:701](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L701)
