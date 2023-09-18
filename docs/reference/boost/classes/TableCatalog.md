---
id: "TableCatalog"
title: "Boost"
sidebar_label: "TableCatalog"
sidebar_position: 0
custom_edit_url: null
pagination_prev: null
pagination_next: null
---

## Constructors

### constructor

• **new TableCatalog**(`builder`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `builder` | [`TableBuilder`](TableBuilder.md) |

#### Defined in

[src/app.ts:1279](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L1279)

## Methods

### addAddressFields

▸ **addAddressFields**(`opts?`): `void`

Adds fields which represents an address.

Integrates with addressCard and addressesCards.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`AddressFieldGroupOpts`](../interfaces/AddressFieldGroupOpts.md) |

#### Returns

`void`

#### Defined in

[src/app.ts:1298](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L1298)

___

### addImageSet

▸ **addImageSet**(`opts`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ImageSetOpts`](../interfaces/ImageSetOpts.md) |

#### Returns

`void`

#### Defined in

[src/app.ts:1367](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L1367)

___

### addRequiredUserFields

▸ **addRequiredUserFields**(): `void`

Adds the fields that are required on the `user` table for our integrated authentication
system.

#### Returns

`void`

#### Defined in

[src/app.ts:1287](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L1287)

___

### addSimpleImageSet

▸ **addSimpleImageSet**(`groupName?`): `void`

Adds a field group of two fields that integrates with the datagrid and record grid page header.

Creates a field group with the following fields:
image_full: uuid
image_thumb: uuid

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `groupName` | `string` | `"image"` |

#### Returns

`void`

#### Defined in

[src/app.ts:1386](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L1386)
