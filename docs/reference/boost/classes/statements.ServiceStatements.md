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

[src/statements.ts:13](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L13)

## Methods

### [iterator]

▸ **[iterator]**(): `IterableIterator`<[`ServiceProcStatement`](../namespaces/yom.md#serviceprocstatement)\>

#### Returns

`IterableIterator`<[`ServiceProcStatement`](../namespaces/yom.md#serviceprocstatement)\>

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
| `statements` | `undefined` \| ``null`` \| ``false`` \| `StatementsOrFn`<[`ServiceStatements`](statements.ServiceStatements.md)\> |

#### Returns

`void`

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[addGenericStatements](statements.StatementsBase.md#addgenericstatements)

#### Defined in

[src/statements.ts:148](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L148)

___

### addUsers

▸ **addUsers**(`query`, `outputTable?`): [`ServiceStatements`](statements.ServiceStatements.md)

This is how you actually add the users to our authorization system, just inserting into the users table is not enough.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `query` | [`SqlExpression`](../namespaces/yom.md#sqlexpression) | `undefined` | Expects a sql query with the following fields: db_id: biguint (id of the user in the database) eamil: string (email of the user, will be sent an email and invited to yolm) notification_type: string (either "none" or "new_app" or "user") |
| `outputTable` | `string` | `"added_user"` | The name of the table that should be created to store the users that have been added. It has the following fields: db_id: biguint (id of the user in the database) global_id: uuid (id of the user in yolm's authentication system) |

#### Returns

[`ServiceStatements`](statements.ServiceStatements.md)

#### Defined in

[src/statements.ts:647](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L647)

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

[src/statements.ts:127](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L127)

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

[src/statements.ts:351](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L351)

___

### break

▸ **break**(): [`ServiceStatements`](statements.ServiceStatements.md)

#### Returns

[`ServiceStatements`](statements.ServiceStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[break](statements.StatementsBase.md#break)

#### Defined in

[src/statements.ts:22](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L22)

___

### commitTransaction

▸ **commitTransaction**(): [`ServiceStatements`](statements.ServiceStatements.md)

#### Returns

[`ServiceStatements`](statements.ServiceStatements.md)

#### Defined in

[src/statements.ts:593](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L593)

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

[src/statements.ts:193](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L193)

___

### continue

▸ **continue**(): [`ServiceStatements`](statements.ServiceStatements.md)

#### Returns

[`ServiceStatements`](statements.ServiceStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[continue](statements.StatementsBase.md#continue)

#### Defined in

[src/statements.ts:27](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L27)

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

[src/statements.ts:118](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L118)

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

[src/statements.ts:102](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L102)

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

[src/statements.ts:110](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L110)

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

[src/statements.ts:608](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L608)

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

[src/statements.ts:603](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L603)

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

[src/statements.ts:598](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L598)

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

[src/statements.ts:259](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L259)

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

[src/statements.ts:260](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L260)

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

[src/statements.ts:311](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L311)

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

[src/statements.ts:316](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L316)

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

[src/statements.ts:282](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L282)

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

[src/statements.ts:287](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L287)

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

[src/statements.ts:207](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L207)

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

[src/statements.ts:208](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L208)

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

[src/statements.ts:200](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L200)

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

[src/statements.ts:17](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L17)

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

[src/statements.ts:623](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L623)

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

[src/statements.ts:165](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L165)

___

### popSource

▸ **popSource**(): [`ServiceStatements`](statements.ServiceStatements.md)

#### Returns

[`ServiceStatements`](statements.ServiceStatements.md)

#### Inherited from

[StatementsBase](statements.StatementsBase.md).[popSource](statements.StatementsBase.md#popsource)

#### Defined in

[src/statements.ts:143](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L143)

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

[src/statements.ts:135](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L135)

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

[src/statements.ts:9](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L9)

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

[src/statements.ts:71](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L71)

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

[src/statements.ts:657](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L657)

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

[src/statements.ts:652](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L652)

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

[src/statements.ts:41](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L41)

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

[src/statements.ts:81](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L81)

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

[src/statements.ts:82](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L82)

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

[src/statements.ts:618](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L618)

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

[src/statements.ts:662](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L662)

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

[src/statements.ts:97](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L97)

___

### startTransaction

▸ **startTransaction**(`opts?`): [`ServiceStatements`](statements.ServiceStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `Omit`<[`StartTransactionStatement`](../interfaces/yom.StartTransactionStatement.md), ``"t"``\> |

#### Returns

[`ServiceStatements`](statements.ServiceStatements.md)

#### Defined in

[src/statements.ts:588](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L588)

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

[src/statements.ts:184](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L184)

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

[src/statements.ts:49](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L49)

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

[src/statements.ts:50](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L50)

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

[src/statements.ts:51](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L51)

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

[src/statements.ts:32](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L32)

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

[src/statements.ts:340](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L340)

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

[src/statements.ts:613](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L613)

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

[src/statements.ts:236](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L236)

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

[src/statements.ts:237](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L237)

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

[src/statements.ts:578](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L578)

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

[src/statements.ts:584](https://github.com/yolmio/boost/blob/5cada48/src/statements.ts#L584)
