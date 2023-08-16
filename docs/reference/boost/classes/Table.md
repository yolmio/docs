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

[src/app.ts:497](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L497)

## Properties

### baseUrl

• **baseUrl**: `string` = `""`

#### Defined in

[src/app.ts:493](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L493)

___

### checks

• **checks**: [`Check`](../interfaces/Check.md)[] = `[]`

#### Defined in

[src/app.ts:483](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L483)

___

### control

• `Optional` **control**: [`TableControl`](../modules.md#tablecontrol)

#### Defined in

[src/app.ts:488](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L488)

___

### description

• `Optional` **description**: `string`

#### Defined in

[src/app.ts:490](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L490)

___

### displayName

• **displayName**: `string`

#### Defined in

[src/app.ts:500](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L500)

___

### expectedOrderOfMagnitude

• `Optional` **expectedOrderOfMagnitude**: `number`

#### Defined in

[src/app.ts:489](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L489)

___

### ext

• **ext**: `Record`<`string`, `any`\> = `{}`

#### Defined in

[src/app.ts:495](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L495)

___

### fieldGroups

• **fieldGroups**: `Record`<`string`, [`FieldGroup`](../modules.md#fieldgroup)\> = `{}`

#### Defined in

[src/app.ts:481](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L481)

___

### fields

• **fields**: `Record`<`string`, [`Field`](../modules.md#field)\> = `{}`

#### Defined in

[src/app.ts:479](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L479)

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

[src/app.ts:492](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L492)

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

[src/app.ts:486](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L486)

___

### name

• **name**: `string`

#### Defined in

[src/app.ts:499](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L499)

___

### primaryKeyFieldName

• **primaryKeyFieldName**: `string`

#### Defined in

[src/app.ts:498](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L498)

___

### recordDisplayName

• `Optional` **recordDisplayName**: [`RecordDisplayName`](../interfaces/RecordDisplayName.md)

#### Defined in

[src/app.ts:485](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L485)

___

### renameFrom

• `Optional` **renameFrom**: `string`

#### Defined in

[src/app.ts:478](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L478)

___

### searchConfig

• `Optional` **searchConfig**: [`RankedSearchTable`](../interfaces/yom.RankedSearchTable.md)

#### Defined in

[src/app.ts:487](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L487)

___

### uniqueConstraints

• **uniqueConstraints**: [`UniqueConstraint`](../interfaces/yom.UniqueConstraint.md)[] = `[]`

#### Defined in

[src/app.ts:482](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L482)

___

### virtualFields

• **virtualFields**: `Record`<`string`, [`VirtualField`](../interfaces/VirtualField.md)\> = `{}`

#### Defined in

[src/app.ts:480](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L480)

## Accessors

### identName

• `get` **identName**(): `string`

#### Returns

`string`

#### Defined in

[src/app.ts:503](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L503)

___

### primaryKeyIdent

• `get` **primaryKeyIdent**(): `string`

#### Returns

`string`

#### Defined in

[src/app.ts:507](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L507)

## Methods

### getBaseUrl

▸ **getBaseUrl**(): `string`

#### Returns

`string`

#### Defined in

[src/app.ts:511](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L511)

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

[src/app.ts:530](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L530)

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

[src/app.ts:515](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L515)
