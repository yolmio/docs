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

@yolm/boost/dist/statements.d.ts:6

## Methods

### [iterator]

▸ **[iterator]**(): `IterableIterator`<`Statement`\>

#### Returns

`IterableIterator`<`Statement`\>

#### Defined in

@yolm/boost/dist/statements.d.ts:42

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

@yolm/boost/dist/statements.d.ts:25

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

@yolm/boost/dist/statements.d.ts:22

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

@yolm/boost/dist/statements.d.ts:41

___

### break

▸ **break**(): [`StatementsBase`](statements.StatementsBase.md)<`Statement`\>

#### Returns

[`StatementsBase`](statements.StatementsBase.md)<`Statement`\>

#### Defined in

@yolm/boost/dist/statements.d.ts:8

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

@yolm/boost/dist/statements.d.ts:28

___

### continue

▸ **continue**(): [`StatementsBase`](statements.StatementsBase.md)<`Statement`\>

#### Returns

[`StatementsBase`](statements.StatementsBase.md)<`Statement`\>

#### Defined in

@yolm/boost/dist/statements.d.ts:9

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

@yolm/boost/dist/statements.d.ts:21

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

@yolm/boost/dist/statements.d.ts:19

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

@yolm/boost/dist/statements.d.ts:20

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

@yolm/boost/dist/statements.d.ts:34

▸ **forEachCursor**(`opts`): [`StatementsBase`](statements.StatementsBase.md)<`Statement`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `ForEachCursor`<`StatementsOrFn`<[`StatementsBase`](statements.StatementsBase.md)<`Statement`\>\>\> |

#### Returns

[`StatementsBase`](statements.StatementsBase.md)<`Statement`\>

#### Defined in

@yolm/boost/dist/statements.d.ts:35

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

@yolm/boost/dist/statements.d.ts:38

▸ **forEachQuery**(`opts`): [`StatementsBase`](statements.StatementsBase.md)<`Statement`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `ForEachQuery`<`StatementsOrFn`<[`StatementsBase`](statements.StatementsBase.md)<`Statement`\>\>\> |

#### Returns

[`StatementsBase`](statements.StatementsBase.md)<`Statement`\>

#### Defined in

@yolm/boost/dist/statements.d.ts:39

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

@yolm/boost/dist/statements.d.ts:36

▸ **forEachTable**(`opts`): [`StatementsBase`](statements.StatementsBase.md)<`Statement`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `ForEachTable`<`StatementsOrFn`<[`StatementsBase`](statements.StatementsBase.md)<`Statement`\>\>\> |

#### Returns

[`StatementsBase`](statements.StatementsBase.md)<`Statement`\>

#### Defined in

@yolm/boost/dist/statements.d.ts:37

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

@yolm/boost/dist/statements.d.ts:30

▸ **if**(`opts`): [`StatementsBase`](statements.StatementsBase.md)<`Statement`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `If`<`StatementsOrFn`<[`StatementsBase`](statements.StatementsBase.md)<`Statement`\>\>\> |

#### Returns

[`StatementsBase`](statements.StatementsBase.md)<`Statement`\>

#### Defined in

@yolm/boost/dist/statements.d.ts:31

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

@yolm/boost/dist/statements.d.ts:29

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

@yolm/boost/dist/statements.d.ts:7

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

@yolm/boost/dist/statements.d.ts:26

___

### popSource

▸ **popSource**(): [`StatementsBase`](statements.StatementsBase.md)<`Statement`\>

#### Returns

[`StatementsBase`](statements.StatementsBase.md)<`Statement`\>

#### Defined in

@yolm/boost/dist/statements.d.ts:24

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

@yolm/boost/dist/statements.d.ts:23

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

@yolm/boost/dist/statements.d.ts:5

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

@yolm/boost/dist/statements.d.ts:15

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

@yolm/boost/dist/statements.d.ts:11

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

@yolm/boost/dist/statements.d.ts:16

▸ **scalar**(`name`, `expr`): [`StatementsBase`](statements.StatementsBase.md)<`Statement`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `expr` | [`SqlExpression`](../namespaces/yom.md#sqlexpression) |

#### Returns

[`StatementsBase`](statements.StatementsBase.md)<`Statement`\>

#### Defined in

@yolm/boost/dist/statements.d.ts:17

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

@yolm/boost/dist/statements.d.ts:18

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

@yolm/boost/dist/statements.d.ts:27

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

@yolm/boost/dist/statements.d.ts:12

▸ **table**(`name`, `fields`): [`StatementsBase`](statements.StatementsBase.md)<`Statement`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `fields` | [`ProcTableField`](../interfaces/yom.ProcTableField.md)[] |

#### Returns

[`StatementsBase`](statements.StatementsBase.md)<`Statement`\>

#### Defined in

@yolm/boost/dist/statements.d.ts:13

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

@yolm/boost/dist/statements.d.ts:14

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

@yolm/boost/dist/statements.d.ts:10

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

@yolm/boost/dist/statements.d.ts:40

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

@yolm/boost/dist/statements.d.ts:32

▸ **while**(`opts`): [`StatementsBase`](statements.StatementsBase.md)<`Statement`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `While`<`StatementsOrFn`<[`StatementsBase`](statements.StatementsBase.md)<`Statement`\>\>\> |

#### Returns

[`StatementsBase`](statements.StatementsBase.md)<`Statement`\>

#### Defined in

@yolm/boost/dist/statements.d.ts:33
