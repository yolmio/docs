---
id: "Table"
title: "Boost"
sidebar_label: "Table"
sidebar_position: 0
custom_edit_url: null
pagination_prev: null
pagination_next: null
---

## Constructors

### constructor

• **new Table**(`primaryKeyFieldName`, `name`, `displayName`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `primaryKeyFieldName` | `string` |
| `name` | `string` |
| `displayName` | `string` |

#### Defined in

[src/app.ts:510](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L510)

## Properties

### baseUrl

• **baseUrl**: `string` = `""`

#### Defined in

[src/app.ts:506](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L506)

___

### checks

• **checks**: [`Check`](../interfaces/Check.md)[] = `[]`

#### Defined in

[src/app.ts:496](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L496)

___

### control

• `Optional` **control**: [`TableControl`](../modules.md#tablecontrol)

#### Defined in

[src/app.ts:501](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L501)

___

### description

• `Optional` **description**: `string`

#### Defined in

[src/app.ts:503](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L503)

___

### displayName

• **displayName**: `string`

#### Defined in

[src/app.ts:513](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L513)

___

### expectedOrderOfMagnitude

• `Optional` **expectedOrderOfMagnitude**: `number`

#### Defined in

[src/app.ts:502](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L502)

___

### ext

• **ext**: `Record`<`string`, `any`\> = `{}`

#### Defined in

[src/app.ts:508](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L508)

___

### fieldGroups

• **fieldGroups**: `Record`<`string`, [`FieldGroup`](../modules.md#fieldgroup)\> = `{}`

#### Defined in

[src/app.ts:494](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L494)

___

### fields

• **fields**: `Record`<`string`, [`Field`](../modules.md#field)\> = `{}`

#### Defined in

[src/app.ts:493](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L493)

___

### getHrefToRecord

• `Optional` **getHrefToRecord**: (`id`: [`SqlExpression`](../namespaces/yom.md#sqlexpression)) => [`SqlExpression`](../namespaces/yom.md#sqlexpression)

#### Type declaration

▸ (`id`): [`SqlExpression`](../namespaces/yom.md#sqlexpression)

Return an expression which should be the href to the given id

##### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`SqlExpression`](../namespaces/yom.md#sqlexpression) |

##### Returns

[`SqlExpression`](../namespaces/yom.md#sqlexpression)

#### Defined in

[src/app.ts:505](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L505)

___

### inlineRecordDisplay

• `Optional` **inlineRecordDisplay**: (`id`: [`SqlExpression`](../namespaces/yom.md#sqlexpression)) => [`Node`](../modules.md#node)

#### Type declaration

▸ (`id`): [`Node`](../modules.md#node)

##### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`SqlExpression`](../namespaces/yom.md#sqlexpression) |

##### Returns

[`Node`](../modules.md#node)

#### Defined in

[src/app.ts:499](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L499)

___

### name

• **name**: `string`

#### Defined in

[src/app.ts:512](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L512)

___

### primaryKeyFieldName

• **primaryKeyFieldName**: `string`

#### Defined in

[src/app.ts:511](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L511)

___

### recordDisplayName

• `Optional` **recordDisplayName**: [`RecordDisplayName`](../interfaces/RecordDisplayName.md)

#### Defined in

[src/app.ts:498](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L498)

___

### renameFrom

• `Optional` **renameFrom**: `string`

#### Defined in

[src/app.ts:492](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L492)

___

### searchConfig

• `Optional` **searchConfig**: [`RankedSearchTable`](../interfaces/yom.RankedSearchTable.md)

#### Defined in

[src/app.ts:500](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L500)

___

### uniqueConstraints

• **uniqueConstraints**: [`UniqueConstraint`](../interfaces/yom.UniqueConstraint.md)[] = `[]`

#### Defined in

[src/app.ts:495](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L495)

## Accessors

### identName

• `get` **identName**(): `string`

#### Returns

`string`

#### Defined in

[src/app.ts:516](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L516)

___

### primaryKeyIdent

• `get` **primaryKeyIdent**(): `string`

#### Returns

`string`

#### Defined in

[src/app.ts:520](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L520)

## Methods

### getBaseUrl

▸ **getBaseUrl**(): `string`

#### Returns

`string`

#### Defined in

[src/app.ts:524](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L524)

___

### getFkFieldToTable

▸ **getFkFieldToTable**(`table`): `undefined` \| [`ForeignKeyField`](ForeignKeyField.md)

Get the field which is a foreign key to the given table, if any.

Returns the first foreign key field found.

#### Parameters

| Name | Type |
| :------ | :------ |
| `table` | `string` |

#### Returns

`undefined` \| [`ForeignKeyField`](ForeignKeyField.md)

#### Defined in

[src/app.ts:543](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L543)

___

### getRecordDisplayNameExpr

▸ **getRecordDisplayNameExpr**(`record?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `record?` | `string` |

#### Returns

`string`

#### Defined in

[src/app.ts:528](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L528)
