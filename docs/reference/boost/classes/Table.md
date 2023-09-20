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

@yolm/boost/dist/app.d.ts:245

## Properties

### baseUrl

• **baseUrl**: `string`

#### Defined in

@yolm/boost/dist/app.d.ts:243

___

### checks

• **checks**: [`Check`](../interfaces/Check.md)[]

#### Defined in

@yolm/boost/dist/app.d.ts:234

___

### control

• `Optional` **control**: [`TableControl`](../modules.md#tablecontrol)

#### Defined in

@yolm/boost/dist/app.d.ts:238

___

### description

• `Optional` **description**: `string`

#### Defined in

@yolm/boost/dist/app.d.ts:240

___

### displayName

• **displayName**: `string`

#### Defined in

@yolm/boost/dist/app.d.ts:229

___

### expectedOrderOfMagnitude

• `Optional` **expectedOrderOfMagnitude**: `number`

#### Defined in

@yolm/boost/dist/app.d.ts:239

___

### ext

• **ext**: `Record`<`string`, `any`\>

#### Defined in

@yolm/boost/dist/app.d.ts:244

___

### fieldGroups

• **fieldGroups**: `Record`<`string`, [`FieldGroup`](../modules.md#fieldgroup)\>

#### Defined in

@yolm/boost/dist/app.d.ts:232

___

### fields

• **fields**: `Record`<`string`, [`Field`](../modules.md#field)\>

#### Defined in

@yolm/boost/dist/app.d.ts:231

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

@yolm/boost/dist/app.d.ts:242

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

@yolm/boost/dist/app.d.ts:236

___

### name

• **name**: `string`

#### Defined in

@yolm/boost/dist/app.d.ts:228

___

### primaryKeyFieldName

• **primaryKeyFieldName**: `string`

#### Defined in

@yolm/boost/dist/app.d.ts:227

___

### recordDisplayName

• `Optional` **recordDisplayName**: [`RecordDisplayName`](../interfaces/RecordDisplayName.md)

#### Defined in

@yolm/boost/dist/app.d.ts:235

___

### renameFrom

• `Optional` **renameFrom**: `string`

#### Defined in

@yolm/boost/dist/app.d.ts:230

___

### searchConfig

• `Optional` **searchConfig**: [`RankedSearchTable`](../interfaces/yom.RankedSearchTable.md)

#### Defined in

@yolm/boost/dist/app.d.ts:237

___

### uniqueConstraints

• **uniqueConstraints**: [`UniqueConstraint`](../interfaces/yom.UniqueConstraint.md)[]

#### Defined in

@yolm/boost/dist/app.d.ts:233

## Accessors

### identName

• `get` **identName**(): `string`

#### Returns

`string`

#### Defined in

@yolm/boost/dist/app.d.ts:246

___

### primaryKeyIdent

• `get` **primaryKeyIdent**(): `string`

#### Returns

`string`

#### Defined in

@yolm/boost/dist/app.d.ts:247

## Methods

### getBaseUrl

▸ **getBaseUrl**(): `string`

#### Returns

`string`

#### Defined in

@yolm/boost/dist/app.d.ts:248

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

@yolm/boost/dist/app.d.ts:255

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

@yolm/boost/dist/app.d.ts:249
