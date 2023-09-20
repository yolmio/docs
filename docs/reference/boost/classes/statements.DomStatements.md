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

@yolm/boost/dist/statements.d.ts:6

## Methods

### [iterator]

▸ **[iterator]**(): `IterableIterator`<[`DomProcStatement`](../namespaces/yom.md#domprocstatement)\>

#### Returns

`IterableIterator`<[`DomProcStatement`](../namespaces/yom.md#domprocstatement)\>

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[[iterator]](statements.StatementsBase.md#[iterator])

#### Defined in

@yolm/boost/dist/statements.d.ts:42

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

@yolm/boost/dist/statements.d.ts:99

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

@yolm/boost/dist/statements.d.ts:106

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

@yolm/boost/dist/statements.d.ts:25

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

@yolm/boost/dist/statements.d.ts:105

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

@yolm/boost/dist/statements.d.ts:22

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

@yolm/boost/dist/statements.d.ts:41

___

### break

▸ **break**(): [`DomStatements`](statements.DomStatements.md)

#### Returns

[`DomStatements`](statements.DomStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[break](statements.StatementsBase.md#break)

#### Defined in

@yolm/boost/dist/statements.d.ts:8

___

### commitUiChanges

▸ **commitUiChanges**(): [`DomStatements`](statements.DomStatements.md)

#### Returns

[`DomStatements`](statements.DomStatements.md)

#### Defined in

@yolm/boost/dist/statements.d.ts:92

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

@yolm/boost/dist/statements.d.ts:28

___

### continue

▸ **continue**(): [`DomStatements`](statements.DomStatements.md)

#### Returns

[`DomStatements`](statements.DomStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[continue](statements.StatementsBase.md#continue)

#### Defined in

@yolm/boost/dist/statements.d.ts:9

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

@yolm/boost/dist/statements.d.ts:21

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

@yolm/boost/dist/statements.d.ts:19

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

@yolm/boost/dist/statements.d.ts:20

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

@yolm/boost/dist/statements.d.ts:91

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

@yolm/boost/dist/statements.d.ts:88

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

@yolm/boost/dist/statements.d.ts:103

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

@yolm/boost/dist/statements.d.ts:34

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

@yolm/boost/dist/statements.d.ts:35

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

@yolm/boost/dist/statements.d.ts:38

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

@yolm/boost/dist/statements.d.ts:39

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

@yolm/boost/dist/statements.d.ts:36

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

@yolm/boost/dist/statements.d.ts:37

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

@yolm/boost/dist/statements.d.ts:108

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

@yolm/boost/dist/statements.d.ts:109

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

@yolm/boost/dist/statements.d.ts:107

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

@yolm/boost/dist/statements.d.ts:30

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

@yolm/boost/dist/statements.d.ts:31

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

@yolm/boost/dist/statements.d.ts:97

___

### logOut

▸ **logOut**(): [`DomStatements`](statements.DomStatements.md)

#### Returns

[`DomStatements`](statements.DomStatements.md)

#### Defined in

@yolm/boost/dist/statements.d.ts:93

___

### logout

▸ **logout**(): [`DomStatements`](statements.DomStatements.md)

#### Returns

[`DomStatements`](statements.DomStatements.md)

#### Defined in

@yolm/boost/dist/statements.d.ts:110

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

@yolm/boost/dist/statements.d.ts:29

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

@yolm/boost/dist/statements.d.ts:7

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

@yolm/boost/dist/statements.d.ts:87

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

@yolm/boost/dist/statements.d.ts:26

___

### popSource

▸ **popSource**(): [`DomStatements`](statements.DomStatements.md)

#### Returns

[`DomStatements`](statements.DomStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[popSource](statements.StatementsBase.md#popsource)

#### Defined in

@yolm/boost/dist/statements.d.ts:24

___

### preventDefault

▸ **preventDefault**(): [`DomStatements`](statements.DomStatements.md)

#### Returns

[`DomStatements`](statements.DomStatements.md)

#### Defined in

@yolm/boost/dist/statements.d.ts:89

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

@yolm/boost/dist/statements.d.ts:23

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

@yolm/boost/dist/statements.d.ts:5

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

@yolm/boost/dist/statements.d.ts:104

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

@yolm/boost/dist/statements.d.ts:15

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

@yolm/boost/dist/statements.d.ts:11

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

@yolm/boost/dist/statements.d.ts:16

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

@yolm/boost/dist/statements.d.ts:17

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

@yolm/boost/dist/statements.d.ts:102

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

@yolm/boost/dist/statements.d.ts:98

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

@yolm/boost/dist/statements.d.ts:101

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

@yolm/boost/dist/statements.d.ts:100

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

@yolm/boost/dist/statements.d.ts:18

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

@yolm/boost/dist/statements.d.ts:94

▸ **spawn**(`opts`): [`DomStatements`](statements.DomStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `SpawnOpts`<[`DomStatements`](statements.DomStatements.md)\> |

#### Returns

[`DomStatements`](statements.DomStatements.md)

#### Defined in

@yolm/boost/dist/statements.d.ts:95

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

@yolm/boost/dist/statements.d.ts:27

___

### stopPropagation

▸ **stopPropagation**(): [`DomStatements`](statements.DomStatements.md)

#### Returns

[`DomStatements`](statements.DomStatements.md)

#### Defined in

@yolm/boost/dist/statements.d.ts:90

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

@yolm/boost/dist/statements.d.ts:12

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

@yolm/boost/dist/statements.d.ts:13

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

@yolm/boost/dist/statements.d.ts:14

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

@yolm/boost/dist/statements.d.ts:10

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

@yolm/boost/dist/statements.d.ts:40

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

@yolm/boost/dist/statements.d.ts:96

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

@yolm/boost/dist/statements.d.ts:32

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

@yolm/boost/dist/statements.d.ts:33

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

@yolm/boost/dist/statements.d.ts:85

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

@yolm/boost/dist/statements.d.ts:86
