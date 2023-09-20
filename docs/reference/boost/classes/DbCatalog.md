---
id: "DbCatalog"
title: "Boost"
sidebar_label: "DbCatalog"
sidebar_position: 0
custom_edit_url: null
pagination_prev: null
pagination_next: null
---

## Constructors

### constructor

• **new DbCatalog**(`db`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `db` | [`Db`](Db.md) |

#### Defined in

@yolm/boost/dist/app.d.ts:131

## Methods

### addAttachmentsTable

▸ **addAttachmentsTable**(`mainTable`): `void`

Add a related attachments table to the given main table.

The attachments table will be named `${mainTable}_attachment`, and will have a foreign key to the main table.

The attachments table will have the following fields:
name: string
file: uuid (This is the id of the file in our file storage which you can use to create a public url to the file)

#### Parameters

| Name | Type |
| :------ | :------ |
| `mainTable` | `string` |

#### Returns

`void`

#### Defined in

@yolm/boost/dist/app.d.ts:151

___

### addNotesTable

▸ **addNotesTable**(`mainTable`): `void`

Add a related notes table to the given main table.

The notes table will be named `${mainTable}_note`, and will have a foreign key to the main table.

The notes table will have the following fields:
content: string
date: date

#### Parameters

| Name | Type |
| :------ | :------ |
| `mainTable` | `string` |

#### Returns

`void`

#### Defined in

@yolm/boost/dist/app.d.ts:141
