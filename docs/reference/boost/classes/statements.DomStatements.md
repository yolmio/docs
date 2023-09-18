---
id: "statements.DomStatements"
title: "Boost"
sidebar_label: "DomStatements"
custom_edit_url: null
pagination_prev: null
pagination_next: null
---

[statements](../namespaces/statements.md).DomStatements

## Hierarchy

- [`StatementsBase`](statements.StatementsBase.md)<[`DomProcStatement`](../namespaces/yom.md#domprocstatement)\>

  ↳ **`DomStatements`**

## Constructors

### constructor

• **new DomStatements**()

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

▸ **[iterator]**(): `IterableIterator`<[`DomProcStatement`](../namespaces/yom.md#domprocstatement)\>

#### Returns

`IterableIterator`<[`DomProcStatement`](../namespaces/yom.md#domprocstatement)\>

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[[iterator]](statements.StatementsBase.md#[iterator])

#### Defined in

[src/statements.ts:359](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L359)

___

### abortTask

▸ **abortTask**(`handle`): [`DomStatements`](statements.DomStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `handle` | `string` |

#### Returns

[`DomStatements`](statements.DomStatements.md)

#### Defined in

[src/statements.ts:499](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L499)

___

### addFile

▸ **addFile**(`opts`): [`DomStatements`](statements.DomStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `Omit`<[`AddFileStatement`](../interfaces/yom.AddFileStatement.md), ``"t"``\> |

#### Returns

[`DomStatements`](statements.DomStatements.md)

#### Defined in

[src/statements.ts:543](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L543)

___

### addGenericStatements

▸ `Protected` **addGenericStatements**(`statements`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `statements` | `undefined` \| ``null`` \| ``false`` \| `StatementsOrFn`<[`DomStatements`](statements.DomStatements.md)\> |

#### Returns

`void`

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[addGenericStatements](statements.StatementsBase.md#addgenericstatements)

#### Defined in

[src/statements.ts:148](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L148)

___

### addImage

▸ **addImage**(`opts`): [`DomStatements`](statements.DomStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `Omit`<[`AddImageStatement`](../interfaces/yom.AddImageStatement.md), ``"t"``\> |

#### Returns

[`DomStatements`](statements.DomStatements.md)

#### Defined in

[src/statements.ts:538](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L538)

___

### advanceCursor

▸ **advanceCursor**(`cursor`): [`DomStatements`](statements.DomStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `cursor` | `string` |

#### Returns

[`DomStatements`](statements.DomStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[advanceCursor](statements.StatementsBase.md#advancecursor)

#### Defined in

[src/statements.ts:127](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L127)

___

### block

▸ **block**(`body`): [`DomStatements`](statements.DomStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `body` | `StatementsOrFn`<[`DomStatements`](statements.DomStatements.md)\> |

#### Returns

[`DomStatements`](statements.DomStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[block](statements.StatementsBase.md#block)

#### Defined in

[src/statements.ts:351](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L351)

___

### break

▸ **break**(): [`DomStatements`](statements.DomStatements.md)

#### Returns

[`DomStatements`](statements.DomStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[break](statements.StatementsBase.md#break)

#### Defined in

[src/statements.ts:22](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L22)

___

### commitUiChanges

▸ **commitUiChanges**(): [`DomStatements`](statements.DomStatements.md)

#### Returns

[`DomStatements`](statements.DomStatements.md)

#### Defined in

[src/statements.ts:455](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L455)

___

### conditionalStatements

▸ **conditionalStatements**(`condition`, `statements`): [`DomStatements`](statements.DomStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `condition` | `boolean` |
| `statements` | `StatementsOrFn`<[`DomStatements`](statements.DomStatements.md)\> |

#### Returns

[`DomStatements`](statements.DomStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[conditionalStatements](statements.StatementsBase.md#conditionalstatements)

#### Defined in

[src/statements.ts:193](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L193)

___

### continue

▸ **continue**(): [`DomStatements`](statements.DomStatements.md)

#### Returns

[`DomStatements`](statements.DomStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[continue](statements.StatementsBase.md#continue)

#### Defined in

[src/statements.ts:27](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L27)

___

### createQueryCursor

▸ **createQueryCursor**(`name`, `query`): [`DomStatements`](statements.DomStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `query` | [`SqlQuery`](../namespaces/yom.md#sqlquery) |

#### Returns

[`DomStatements`](statements.DomStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[createQueryCursor](statements.StatementsBase.md#createquerycursor)

#### Defined in

[src/statements.ts:118](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L118)

___

### debugExpr

▸ **debugExpr**(`expr`): [`DomStatements`](statements.DomStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `expr` | [`SqlExpression`](../namespaces/yom.md#sqlexpression) |

#### Returns

[`DomStatements`](statements.DomStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[debugExpr](statements.StatementsBase.md#debugexpr)

#### Defined in

[src/statements.ts:102](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L102)

___

### debugQuery

▸ **debugQuery**(`query`): [`DomStatements`](statements.DomStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | [`SqlQuery`](../namespaces/yom.md#sqlquery) |

#### Returns

[`DomStatements`](statements.DomStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[debugQuery](statements.StatementsBase.md#debugquery)

#### Defined in

[src/statements.ts:110](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L110)

___

### delay

▸ **delay**(`ms`): [`DomStatements`](statements.DomStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `ms` | `string` |

#### Returns

[`DomStatements`](statements.DomStatements.md)

#### Defined in

[src/statements.ts:450](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L450)

___

### download

▸ **download**(`filename`, `content`): [`DomStatements`](statements.DomStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `filename` | `string` |
| `content` | `string` |

#### Returns

[`DomStatements`](statements.DomStatements.md)

#### Defined in

[src/statements.ts:435](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L435)

___

### focusEl

▸ **focusEl**(`el`): [`DomStatements`](statements.DomStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `el` | `string` |

#### Returns

[`DomStatements`](statements.DomStatements.md)

#### Defined in

[src/statements.ts:528](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L528)

___

### forEachCursor

▸ **forEachCursor**(`cursor`, `body`): [`DomStatements`](statements.DomStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `cursor` | `string` |
| `body` | `StatementsOrFn`<[`DomStatements`](statements.DomStatements.md)\> |

#### Returns

[`DomStatements`](statements.DomStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[forEachCursor](statements.StatementsBase.md#foreachcursor)

#### Defined in

[src/statements.ts:259](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L259)

▸ **forEachCursor**(`opts`): [`DomStatements`](statements.DomStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `ForEachCursor`<`StatementsOrFn`<[`DomStatements`](statements.DomStatements.md)\>\> |

#### Returns

[`DomStatements`](statements.DomStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[forEachCursor](statements.StatementsBase.md#foreachcursor)

#### Defined in

[src/statements.ts:260](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L260)

___

### forEachQuery

▸ **forEachQuery**(`table`, `cursorName`, `body`): [`DomStatements`](statements.DomStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `table` | `string` |
| `cursorName` | `string` |
| `body` | `StatementsOrFn`<[`DomStatements`](statements.DomStatements.md)\> |

#### Returns

[`DomStatements`](statements.DomStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[forEachQuery](statements.StatementsBase.md#foreachquery)

#### Defined in

[src/statements.ts:311](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L311)

▸ **forEachQuery**(`opts`): [`DomStatements`](statements.DomStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `ForEachQuery`<`StatementsOrFn`<[`DomStatements`](statements.DomStatements.md)\>\> |

#### Returns

[`DomStatements`](statements.DomStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[forEachQuery](statements.StatementsBase.md#foreachquery)

#### Defined in

[src/statements.ts:316](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L316)

___

### forEachTable

▸ **forEachTable**(`table`, `cursorName`, `body`): [`DomStatements`](statements.DomStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `table` | `string` |
| `cursorName` | `string` |
| `body` | `StatementsOrFn`<[`DomStatements`](statements.DomStatements.md)\> |

#### Returns

[`DomStatements`](statements.DomStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[forEachTable](statements.StatementsBase.md#foreachtable)

#### Defined in

[src/statements.ts:282](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L282)

▸ **forEachTable**(`opts`): [`DomStatements`](statements.DomStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `ForEachTable`<`StatementsOrFn`<[`DomStatements`](statements.DomStatements.md)\>\> |

#### Returns

[`DomStatements`](statements.DomStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[forEachTable](statements.StatementsBase.md#foreachtable)

#### Defined in

[src/statements.ts:287](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L287)

___

### getBoundingClientRect

▸ **getBoundingClientRect**(`el`, `record`): [`DomStatements`](statements.DomStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `el` | `string` |
| `record` | `string` |

#### Returns

[`DomStatements`](statements.DomStatements.md)

#### Defined in

[src/statements.ts:553](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L553)

___

### getElProperty

▸ **getElProperty**(`property`, `scalar`, `el`): [`DomStatements`](statements.DomStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `property` | [`ElProperty`](../namespaces/yom.md#elproperty) |
| `scalar` | `string` |
| `el` | `string` |

#### Returns

[`DomStatements`](statements.DomStatements.md)

#### Defined in

[src/statements.ts:558](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L558)

___

### getWindowProperty

▸ **getWindowProperty**(`property`, `scalar`): [`DomStatements`](statements.DomStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `property` | [`WindowProperty`](../namespaces/yom.md#windowproperty) |
| `scalar` | `string` |

#### Returns

[`DomStatements`](statements.DomStatements.md)

#### Defined in

[src/statements.ts:548](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L548)

___

### if

▸ **if**(`condition`, `then`): [`DomStatements`](statements.DomStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `condition` | [`SqlExpression`](../namespaces/yom.md#sqlexpression) |
| `then` | `StatementsOrFn`<[`DomStatements`](statements.DomStatements.md)\> |

#### Returns

[`DomStatements`](statements.DomStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[if](statements.StatementsBase.md#if)

#### Defined in

[src/statements.ts:207](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L207)

▸ **if**(`opts`): [`DomStatements`](statements.DomStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `If`<`StatementsOrFn`<[`DomStatements`](statements.DomStatements.md)\>\> |

#### Returns

[`DomStatements`](statements.DomStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[if](statements.StatementsBase.md#if)

#### Defined in

[src/statements.ts:208](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L208)

___

### joinTasks

▸ **joinTasks**(`tasks`): [`DomStatements`](statements.DomStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tasks` | `string`[] |

#### Returns

[`DomStatements`](statements.DomStatements.md)

#### Defined in

[src/statements.ts:489](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L489)

___

### logOut

▸ **logOut**(): [`DomStatements`](statements.DomStatements.md)

#### Returns

[`DomStatements`](statements.DomStatements.md)

#### Defined in

[src/statements.ts:460](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L460)

___

### logout

▸ **logout**(): [`DomStatements`](statements.DomStatements.md)

#### Returns

[`DomStatements`](statements.DomStatements.md)

#### Defined in

[src/statements.ts:563](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L563)

___

### mapArrayToStatements

▸ **mapArrayToStatements**<`T`\>(`arr`, `fn`): [`DomStatements`](statements.DomStatements.md)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `arr` | `T`[] |
| `fn` | (`item`: `T`, `s`: [`DomStatements`](statements.DomStatements.md)) => [`DomStatements`](statements.DomStatements.md) |

#### Returns

[`DomStatements`](statements.DomStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[mapArrayToStatements](statements.StatementsBase.md#maparraytostatements)

#### Defined in

[src/statements.ts:200](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L200)

___

### modify

▸ **modify**(`sql`): [`DomStatements`](statements.DomStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `sql` | `string` |

#### Returns

[`DomStatements`](statements.DomStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[modify](statements.StatementsBase.md#modify)

#### Defined in

[src/statements.ts:17](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L17)

___

### navigate

▸ **navigate**(`to`, `replace?`): [`DomStatements`](statements.DomStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `to` | `string` |
| `replace?` | `string` |

#### Returns

[`DomStatements`](statements.DomStatements.md)

#### Defined in

[src/statements.ts:430](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L430)

___

### normalizeGenericStatements

▸ `Protected` **normalizeGenericStatements**(`s`): `undefined` \| [`DomProcStatement`](../namespaces/yom.md#domprocstatement)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `undefined` \| ``null`` \| ``false`` \| `StatementsOrFn`<[`DomStatements`](statements.DomStatements.md)\> |

#### Returns

`undefined` \| [`DomProcStatement`](../namespaces/yom.md#domprocstatement)[]

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[normalizeGenericStatements](statements.StatementsBase.md#normalizegenericstatements)

#### Defined in

[src/statements.ts:165](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L165)

___

### popSource

▸ **popSource**(): [`DomStatements`](statements.DomStatements.md)

#### Returns

[`DomStatements`](statements.DomStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[popSource](statements.StatementsBase.md#popsource)

#### Defined in

[src/statements.ts:143](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L143)

___

### preventDefault

▸ **preventDefault**(): [`DomStatements`](statements.DomStatements.md)

#### Returns

[`DomStatements`](statements.DomStatements.md)

#### Defined in

[src/statements.ts:440](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L440)

___

### pushSource

▸ **pushSource**(`source`): [`DomStatements`](statements.DomStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `string` |

#### Returns

[`DomStatements`](statements.DomStatements.md)

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
| `statement` | [`DomProcStatement`](../namespaces/yom.md#domprocstatement) |

#### Returns

`void`

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[pushToBacking](statements.StatementsBase.md#pushtobacking)

#### Defined in

[src/statements.ts:9](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L9)

___

### queryToCsv

▸ **queryToCsv**(`query`, `scalar`): [`DomStatements`](statements.DomStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `string` |
| `scalar` | `string` |

#### Returns

[`DomStatements`](statements.DomStatements.md)

#### Defined in

[src/statements.ts:533](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L533)

___

### record

▸ **record**(`name`, `queryOrFields`): [`DomStatements`](statements.DomStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `queryOrFields` | `string` \| [`ProcTableField`](../interfaces/yom.ProcTableField.md)[] |

#### Returns

[`DomStatements`](statements.DomStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[record](statements.StatementsBase.md#record)

#### Defined in

[src/statements.ts:71](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L71)

___

### return

▸ **return**(`expr?`): [`DomStatements`](statements.DomStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `expr?` | [`SqlExpression`](../namespaces/yom.md#sqlexpression) |

#### Returns

[`DomStatements`](statements.DomStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[return](statements.StatementsBase.md#return)

#### Defined in

[src/statements.ts:41](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L41)

___

### scalar

▸ **scalar**(`name`, `ty`, `expr?`): [`DomStatements`](statements.DomStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `ty` | [`FieldType`](../namespaces/yom.md#fieldtype) |
| `expr?` | [`SqlExpression`](../namespaces/yom.md#sqlexpression) |

#### Returns

[`DomStatements`](statements.DomStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[scalar](statements.StatementsBase.md#scalar)

#### Defined in

[src/statements.ts:81](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L81)

▸ **scalar**(`name`, `expr`): [`DomStatements`](statements.DomStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `expr` | [`SqlExpression`](../namespaces/yom.md#sqlexpression) |

#### Returns

[`DomStatements`](statements.DomStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[scalar](statements.StatementsBase.md#scalar)

#### Defined in

[src/statements.ts:82](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L82)

___

### scrollElIntoView

▸ **scrollElIntoView**(`el`): [`DomStatements`](statements.DomStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `el` | [`SqlExpression`](../namespaces/yom.md#sqlexpression) \| `Omit`<[`ScrollIntoViewStatement`](../interfaces/yom.ScrollIntoViewStatement.md), ``"t"``\> |

#### Returns

[`DomStatements`](statements.DomStatements.md)

#### Defined in

[src/statements.ts:517](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L517)

___

### selectTasks

▸ **selectTasks**(`tasks`): [`DomStatements`](statements.DomStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tasks` | `string`[] |

#### Returns

[`DomStatements`](statements.DomStatements.md)

#### Defined in

[src/statements.ts:494](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L494)

___

### serviceProc

▸ **serviceProc**(`statements`): [`DomStatements`](statements.DomStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `statements` | `StatementsOrFn`<[`ServiceStatements`](statements.ServiceStatements.md)\> |

#### Returns

[`DomStatements`](statements.DomStatements.md)

#### Defined in

[src/statements.ts:509](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L509)

___

### setQueryParam

▸ **setQueryParam**(`param`, `value`, `replace?`): [`DomStatements`](statements.DomStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `param` | `string` |
| `value` | `string` |
| `replace?` | `string` |

#### Returns

[`DomStatements`](statements.DomStatements.md)

#### Defined in

[src/statements.ts:504](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L504)

___

### setScalar

▸ **setScalar**(`name`, `expr`): [`DomStatements`](statements.DomStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `expr` | [`SqlExpression`](../namespaces/yom.md#sqlexpression) |

#### Returns

[`DomStatements`](statements.DomStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[setScalar](statements.StatementsBase.md#setscalar)

#### Defined in

[src/statements.ts:97](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L97)

___

### spawn

▸ **spawn**(`procedure`): [`DomStatements`](statements.DomStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `procedure` | `StatementsOrFn`<[`DomStatements`](statements.DomStatements.md)\> |

#### Returns

[`DomStatements`](statements.DomStatements.md)

#### Defined in

[src/statements.ts:465](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L465)

▸ **spawn**(`opts`): [`DomStatements`](statements.DomStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `SpawnOpts`<[`DomStatements`](statements.DomStatements.md)\> |

#### Returns

[`DomStatements`](statements.DomStatements.md)

#### Defined in

[src/statements.ts:466](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L466)

___

### statements

▸ **statements**(`...statements`): [`DomStatements`](statements.DomStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `...statements` | (`undefined` \| ``null`` \| ``false`` \| `StatementsOrFn`<[`DomStatements`](statements.DomStatements.md)\>)[] |

#### Returns

[`DomStatements`](statements.DomStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[statements](statements.StatementsBase.md#statements)

#### Defined in

[src/statements.ts:184](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L184)

___

### stopPropagation

▸ **stopPropagation**(): [`DomStatements`](statements.DomStatements.md)

#### Returns

[`DomStatements`](statements.DomStatements.md)

#### Defined in

[src/statements.ts:445](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L445)

___

### table

▸ **table**(`name`, `query`): [`DomStatements`](statements.DomStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `query` | `string` |

#### Returns

[`DomStatements`](statements.DomStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[table](statements.StatementsBase.md#table)

#### Defined in

[src/statements.ts:49](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L49)

▸ **table**(`name`, `fields`): [`DomStatements`](statements.DomStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `fields` | [`ProcTableField`](../interfaces/yom.ProcTableField.md)[] |

#### Returns

[`DomStatements`](statements.DomStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[table](statements.StatementsBase.md#table)

#### Defined in

[src/statements.ts:50](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L50)

▸ **table**(`name`, `fields`, `query`): [`DomStatements`](statements.DomStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `fields` | [`ProcTableField`](../interfaces/yom.ProcTableField.md)[] |
| `query` | `string` |

#### Returns

[`DomStatements`](statements.DomStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[table](statements.StatementsBase.md#table)

#### Defined in

[src/statements.ts:51](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L51)

___

### throwError

▸ **throwError**(`message`, `description?`): [`DomStatements`](statements.DomStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`SqlExpression`](../namespaces/yom.md#sqlexpression) |
| `description?` | [`SqlExpression`](../namespaces/yom.md#sqlexpression) |

#### Returns

[`DomStatements`](statements.DomStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[throwError](statements.StatementsBase.md#throwerror)

#### Defined in

[src/statements.ts:32](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L32)

___

### try

▸ **try**(`opts`): [`DomStatements`](statements.DomStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `Try`<`StatementsOrFn`<[`DomStatements`](statements.DomStatements.md)\>\> |

#### Returns

[`DomStatements`](statements.DomStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[try](statements.StatementsBase.md#try)

#### Defined in

[src/statements.ts:340](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L340)

___

### waitOnTask

▸ **waitOnTask**(`handle`): [`DomStatements`](statements.DomStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `handle` | `string` |

#### Returns

[`DomStatements`](statements.DomStatements.md)

#### Defined in

[src/statements.ts:484](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L484)

___

### while

▸ **while**(`condition`, `body`): [`DomStatements`](statements.DomStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `condition` | [`SqlExpression`](../namespaces/yom.md#sqlexpression) |
| `body` | `StatementsOrFn`<[`DomStatements`](statements.DomStatements.md)\> |

#### Returns

[`DomStatements`](statements.DomStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[while](statements.StatementsBase.md#while)

#### Defined in

[src/statements.ts:236](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L236)

▸ **while**(`opts`): [`DomStatements`](statements.DomStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `While`<`StatementsOrFn`<[`DomStatements`](statements.DomStatements.md)\>\> |

#### Returns

[`DomStatements`](statements.DomStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[while](statements.StatementsBase.md#while)

#### Defined in

[src/statements.ts:237](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L237)

___

### normalize

▸ `Static` **normalize**(`p`): [`DomStatements`](statements.DomStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `p` | `undefined` \| ``null`` \| ``false`` \| [`DomStatementsOrFn`](../namespaces/statements.md#domstatementsorfn) |

#### Returns

[`DomStatements`](statements.DomStatements.md)

#### Defined in

[src/statements.ts:422](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L422)

___

### normalizeToArray

▸ `Static` **normalizeToArray**(`p`): [`DomProcStatement`](../namespaces/yom.md#domprocstatement)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `p` | `undefined` \| ``null`` \| ``false`` \| [`DomStatementsOrFn`](../namespaces/statements.md#domstatementsorfn) |

#### Returns

[`DomProcStatement`](../namespaces/yom.md#domprocstatement)[]

#### Defined in

[src/statements.ts:426](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L426)
