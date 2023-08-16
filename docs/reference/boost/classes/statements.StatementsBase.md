---
id: "statements.StatementsBase"
title: "Boost"
sidebar_label: "StatementsBase"
custom_edit_url: null
pagination_prev: null
pagination_next: null
---

[statements](../namespaces/statements.md).StatementsBase

## Type parameters

| Name | Type |
| :------ | :------ |
| `Statement` | extends `object` |

## Hierarchy

- **`StatementsBase`**

  ↳ [`BasicStatements`](statements.BasicStatements.md)

  ↳ [`DomStatements`](statements.DomStatements.md)

  ↳ [`ServiceStatements`](statements.ServiceStatements.md)

  ↳ [`StateStatements`](statements.StateStatements.md)

  ↳ [`ScriptStatements`](statements.ScriptStatements.md)

## Constructors

### constructor

• **new StatementsBase**<`Statement`\>()

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Statement` | extends `object` |

## Accessors

### statementsIsEmpty

• `get` **statementsIsEmpty**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/statements.ts:13](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L13)

## Methods

### [iterator]

▸ **[iterator]**(): `IterableIterator`<`Statement`\>

#### Returns

`IterableIterator`<`Statement`\>

#### Defined in

[src/statements.ts:359](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L359)

___

### addGenericStatements

▸ `Protected` **addGenericStatements**(`statements`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `statements` | `undefined` \| ``null`` \| ``false`` \| `StatementsOrFn`<[`StatementsBase`](statements.StatementsBase.md)<`Statement`\>\> |

#### Returns

`void`

#### Defined in

[src/statements.ts:148](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L148)

___

### advanceCursor

▸ **advanceCursor**(`cursor`): [`StatementsBase`](statements.StatementsBase.md)<`Statement`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `cursor` | `string` |

#### Returns

[`StatementsBase`](statements.StatementsBase.md)<`Statement`\>

#### Defined in

[src/statements.ts:127](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L127)

___

### block

▸ **block**(`body`): [`StatementsBase`](statements.StatementsBase.md)<`Statement`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `body` | `StatementsOrFn`<[`StatementsBase`](statements.StatementsBase.md)<`Statement`\>\> |

#### Returns

[`StatementsBase`](statements.StatementsBase.md)<`Statement`\>

#### Defined in

[src/statements.ts:351](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L351)

___

### break

▸ **break**(): [`StatementsBase`](statements.StatementsBase.md)<`Statement`\>

#### Returns

[`StatementsBase`](statements.StatementsBase.md)<`Statement`\>

#### Defined in

[src/statements.ts:22](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L22)

___

### conditionalStatements

▸ **conditionalStatements**(`condition`, `statements`): [`StatementsBase`](statements.StatementsBase.md)<`Statement`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `condition` | `boolean` |
| `statements` | `StatementsOrFn`<[`StatementsBase`](statements.StatementsBase.md)<`Statement`\>\> |

#### Returns

[`StatementsBase`](statements.StatementsBase.md)<`Statement`\>

#### Defined in

[src/statements.ts:193](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L193)

___

### continue

▸ **continue**(): [`StatementsBase`](statements.StatementsBase.md)<`Statement`\>

#### Returns

[`StatementsBase`](statements.StatementsBase.md)<`Statement`\>

#### Defined in

[src/statements.ts:27](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L27)

___

### createQueryCursor

▸ **createQueryCursor**(`name`, `query`): [`StatementsBase`](statements.StatementsBase.md)<`Statement`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `query` | [`SqlQuery`](../namespaces/yom.md#sqlquery) |

#### Returns

[`StatementsBase`](statements.StatementsBase.md)<`Statement`\>

#### Defined in

[src/statements.ts:118](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L118)

___

### debugExpr

▸ **debugExpr**(`expr`): [`StatementsBase`](statements.StatementsBase.md)<`Statement`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `expr` | [`SqlExpression`](../namespaces/yom.md#sqlexpression) |

#### Returns

[`StatementsBase`](statements.StatementsBase.md)<`Statement`\>

#### Defined in

[src/statements.ts:102](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L102)

___

### debugQuery

▸ **debugQuery**(`query`): [`StatementsBase`](statements.StatementsBase.md)<`Statement`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | [`SqlQuery`](../namespaces/yom.md#sqlquery) |

#### Returns

[`StatementsBase`](statements.StatementsBase.md)<`Statement`\>

#### Defined in

[src/statements.ts:110](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L110)

___

### forEachCursor

▸ **forEachCursor**(`cursor`, `body`): [`StatementsBase`](statements.StatementsBase.md)<`Statement`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `cursor` | `string` |
| `body` | `StatementsOrFn`<[`StatementsBase`](statements.StatementsBase.md)<`Statement`\>\> |

#### Returns

[`StatementsBase`](statements.StatementsBase.md)<`Statement`\>

#### Defined in

[src/statements.ts:259](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L259)

▸ **forEachCursor**(`opts`): [`StatementsBase`](statements.StatementsBase.md)<`Statement`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `ForEachCursor`<`StatementsOrFn`<[`StatementsBase`](statements.StatementsBase.md)<`Statement`\>\>\> |

#### Returns

[`StatementsBase`](statements.StatementsBase.md)<`Statement`\>

#### Defined in

[src/statements.ts:260](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L260)

___

### forEachQuery

▸ **forEachQuery**(`table`, `cursorName`, `body`): [`StatementsBase`](statements.StatementsBase.md)<`Statement`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `table` | `string` |
| `cursorName` | `string` |
| `body` | `StatementsOrFn`<[`StatementsBase`](statements.StatementsBase.md)<`Statement`\>\> |

#### Returns

[`StatementsBase`](statements.StatementsBase.md)<`Statement`\>

#### Defined in

[src/statements.ts:311](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L311)

▸ **forEachQuery**(`opts`): [`StatementsBase`](statements.StatementsBase.md)<`Statement`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `ForEachQuery`<`StatementsOrFn`<[`StatementsBase`](statements.StatementsBase.md)<`Statement`\>\>\> |

#### Returns

[`StatementsBase`](statements.StatementsBase.md)<`Statement`\>

#### Defined in

[src/statements.ts:316](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L316)

___

### forEachTable

▸ **forEachTable**(`table`, `cursorName`, `body`): [`StatementsBase`](statements.StatementsBase.md)<`Statement`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `table` | `string` |
| `cursorName` | `string` |
| `body` | `StatementsOrFn`<[`StatementsBase`](statements.StatementsBase.md)<`Statement`\>\> |

#### Returns

[`StatementsBase`](statements.StatementsBase.md)<`Statement`\>

#### Defined in

[src/statements.ts:282](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L282)

▸ **forEachTable**(`opts`): [`StatementsBase`](statements.StatementsBase.md)<`Statement`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `ForEachTable`<`StatementsOrFn`<[`StatementsBase`](statements.StatementsBase.md)<`Statement`\>\>\> |

#### Returns

[`StatementsBase`](statements.StatementsBase.md)<`Statement`\>

#### Defined in

[src/statements.ts:287](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L287)

___

### if

▸ **if**(`condition`, `then`): [`StatementsBase`](statements.StatementsBase.md)<`Statement`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `condition` | [`SqlExpression`](../namespaces/yom.md#sqlexpression) |
| `then` | `StatementsOrFn`<[`StatementsBase`](statements.StatementsBase.md)<`Statement`\>\> |

#### Returns

[`StatementsBase`](statements.StatementsBase.md)<`Statement`\>

#### Defined in

[src/statements.ts:207](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L207)

▸ **if**(`opts`): [`StatementsBase`](statements.StatementsBase.md)<`Statement`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `If`<`StatementsOrFn`<[`StatementsBase`](statements.StatementsBase.md)<`Statement`\>\>\> |

#### Returns

[`StatementsBase`](statements.StatementsBase.md)<`Statement`\>

#### Defined in

[src/statements.ts:208](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L208)

___

### mapArrayToStatements

▸ **mapArrayToStatements**<`T`\>(`arr`, `fn`): [`StatementsBase`](statements.StatementsBase.md)<`Statement`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | `T`[] |
| `fn` | (`item`: `T`, `s`: [`StatementsBase`](statements.StatementsBase.md)<`Statement`\>) => [`StatementsBase`](statements.StatementsBase.md)<`Statement`\> |

#### Returns

[`StatementsBase`](statements.StatementsBase.md)<`Statement`\>

#### Defined in

[src/statements.ts:200](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L200)

___

### modify

▸ **modify**(`sql`): [`StatementsBase`](statements.StatementsBase.md)<`Statement`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `sql` | `string` |

#### Returns

[`StatementsBase`](statements.StatementsBase.md)<`Statement`\>

#### Defined in

[src/statements.ts:17](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L17)

___

### normalizeGenericStatements

▸ `Protected` **normalizeGenericStatements**(`s`): `undefined` \| `Statement`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `undefined` \| ``null`` \| ``false`` \| `StatementsOrFn`<[`StatementsBase`](statements.StatementsBase.md)<`Statement`\>\> |

#### Returns

`undefined` \| `Statement`[]

#### Defined in

[src/statements.ts:165](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L165)

___

### popSource

▸ **popSource**(): [`StatementsBase`](statements.StatementsBase.md)<`Statement`\>

#### Returns

[`StatementsBase`](statements.StatementsBase.md)<`Statement`\>

#### Defined in

[src/statements.ts:143](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L143)

___

### pushSource

▸ **pushSource**(`source`): [`StatementsBase`](statements.StatementsBase.md)<`Statement`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |

#### Returns

[`StatementsBase`](statements.StatementsBase.md)<`Statement`\>

#### Defined in

[src/statements.ts:135](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L135)

___

### pushToBacking

▸ `Protected` **pushToBacking**(`statement`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `statement` | `Statement` |

#### Returns

`void`

#### Defined in

[src/statements.ts:9](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L9)

___

### record

▸ **record**(`name`, `queryOrFields`): [`StatementsBase`](statements.StatementsBase.md)<`Statement`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `queryOrFields` | `string` \| [`ProcTableField`](../interfaces/yom.ProcTableField.md)[] |

#### Returns

[`StatementsBase`](statements.StatementsBase.md)<`Statement`\>

#### Defined in

[src/statements.ts:71](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L71)

___

### return

▸ **return**(`expr?`): [`StatementsBase`](statements.StatementsBase.md)<`Statement`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `expr?` | [`SqlExpression`](../namespaces/yom.md#sqlexpression) |

#### Returns

[`StatementsBase`](statements.StatementsBase.md)<`Statement`\>

#### Defined in

[src/statements.ts:41](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L41)

___

### scalar

▸ **scalar**(`name`, `ty`, `expr?`): [`StatementsBase`](statements.StatementsBase.md)<`Statement`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `ty` | [`FieldType`](../namespaces/yom.md#fieldtype) |
| `expr?` | [`SqlExpression`](../namespaces/yom.md#sqlexpression) |

#### Returns

[`StatementsBase`](statements.StatementsBase.md)<`Statement`\>

#### Defined in

[src/statements.ts:81](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L81)

▸ **scalar**(`name`, `expr`): [`StatementsBase`](statements.StatementsBase.md)<`Statement`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `expr` | [`SqlExpression`](../namespaces/yom.md#sqlexpression) |

#### Returns

[`StatementsBase`](statements.StatementsBase.md)<`Statement`\>

#### Defined in

[src/statements.ts:82](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L82)

___

### setScalar

▸ **setScalar**(`name`, `expr`): [`StatementsBase`](statements.StatementsBase.md)<`Statement`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `expr` | [`SqlExpression`](../namespaces/yom.md#sqlexpression) |

#### Returns

[`StatementsBase`](statements.StatementsBase.md)<`Statement`\>

#### Defined in

[src/statements.ts:97](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L97)

___

### statements

▸ **statements**(`...statements`): [`StatementsBase`](statements.StatementsBase.md)<`Statement`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `...statements` | (`undefined` \| ``null`` \| ``false`` \| `StatementsOrFn`<[`StatementsBase`](statements.StatementsBase.md)<`Statement`\>\>)[] |

#### Returns

[`StatementsBase`](statements.StatementsBase.md)<`Statement`\>

#### Defined in

[src/statements.ts:184](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L184)

___

### table

▸ **table**(`name`, `query`): [`StatementsBase`](statements.StatementsBase.md)<`Statement`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `query` | `string` |

#### Returns

[`StatementsBase`](statements.StatementsBase.md)<`Statement`\>

#### Defined in

[src/statements.ts:49](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L49)

▸ **table**(`name`, `fields`): [`StatementsBase`](statements.StatementsBase.md)<`Statement`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `fields` | [`ProcTableField`](../interfaces/yom.ProcTableField.md)[] |

#### Returns

[`StatementsBase`](statements.StatementsBase.md)<`Statement`\>

#### Defined in

[src/statements.ts:50](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L50)

▸ **table**(`name`, `fields`, `query`): [`StatementsBase`](statements.StatementsBase.md)<`Statement`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `fields` | [`ProcTableField`](../interfaces/yom.ProcTableField.md)[] |
| `query` | `string` |

#### Returns

[`StatementsBase`](statements.StatementsBase.md)<`Statement`\>

#### Defined in

[src/statements.ts:51](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L51)

___

### throwError

▸ **throwError**(`message`, `description?`): [`StatementsBase`](statements.StatementsBase.md)<`Statement`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`SqlExpression`](../namespaces/yom.md#sqlexpression) |
| `description?` | [`SqlExpression`](../namespaces/yom.md#sqlexpression) |

#### Returns

[`StatementsBase`](statements.StatementsBase.md)<`Statement`\>

#### Defined in

[src/statements.ts:32](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L32)

___

### try

▸ **try**(`opts`): [`StatementsBase`](statements.StatementsBase.md)<`Statement`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `Try`<`StatementsOrFn`<[`StatementsBase`](statements.StatementsBase.md)<`Statement`\>\>\> |

#### Returns

[`StatementsBase`](statements.StatementsBase.md)<`Statement`\>

#### Defined in

[src/statements.ts:340](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L340)

___

### while

▸ **while**(`condition`, `body`): [`StatementsBase`](statements.StatementsBase.md)<`Statement`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `condition` | [`SqlExpression`](../namespaces/yom.md#sqlexpression) |
| `body` | `StatementsOrFn`<[`StatementsBase`](statements.StatementsBase.md)<`Statement`\>\> |

#### Returns

[`StatementsBase`](statements.StatementsBase.md)<`Statement`\>

#### Defined in

[src/statements.ts:236](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L236)

▸ **while**(`opts`): [`StatementsBase`](statements.StatementsBase.md)<`Statement`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `While`<`StatementsOrFn`<[`StatementsBase`](statements.StatementsBase.md)<`Statement`\>\>\> |

#### Returns

[`StatementsBase`](statements.StatementsBase.md)<`Statement`\>

#### Defined in

[src/statements.ts:237](https://github.com/yolmio/boost/blob/b239488/src/statements.ts#L237)
