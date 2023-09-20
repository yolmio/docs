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

@yolm/boost/dist/app.d.ts:482

## Methods

### addAddressFields

▸ **addAddressFields**(`opts?`): `void`

Adds fields which represents an address.

Integrates with addressCard and addressesCards.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`AddressFieldGroupOpts`](../interfaces/AddressFieldGroupOpts.md) |

#### Returns

`void`

#### Defined in

@yolm/boost/dist/app.d.ts:493

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

@yolm/boost/dist/app.d.ts:494

___

### addRequiredUserFields

▸ **addRequiredUserFields**(): `void`

Adds the fields that are required on the `user` table for our integrated authentication
system.

#### Returns

`void`

#### Defined in

@yolm/boost/dist/app.d.ts:487

___

### addSimpleImageSet

▸ **addSimpleImageSet**(`groupName?`): `void`

Adds a field group of two fields that integrates with the datagrid and record grid page header.

Creates a field group with the following fields:
image_full: uuid
image_thumb: uuid

#### Parameters

| Name | Type |
| :------ | :------ |
| `groupName?` | `string` |

#### Returns

`void`

#### Defined in

@yolm/boost/dist/app.d.ts:502
