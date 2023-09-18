---
id: "AddressFieldGroupOpts"
title: "Boost"
sidebar_label: "AddressFieldGroupOpts"
sidebar_position: 0
custom_edit_url: null
pagination_prev: null
pagination_next: null
---

## Properties

### createFields

• `Optional` **createFields**: `Object`

Control which fields are created

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `city?` | `string` \| `boolean` | City, name is city by default **`Default`** ```ts true ``` |
| `country?` | `string` \| `boolean` | Country, name is country by default **`Default`** ```ts true ``` |
| `name?` | `string` \| `boolean` | Address name field, not the street, but the name of the company or person at the address. **`Default`** ```ts false ``` |
| `state?` | `string` \| `boolean` | State, name is state by default **`Default`** ```ts true ``` |
| `street?` | `string` \| `boolean` | Street address line 1 (often all that is neede), name is street by default **`Default`** ```ts true ``` |
| `streetTwo?` | `string` \| `boolean` | Street address line 2, name is street_two by default **`Default`** ```ts false ``` |
| `zip?` | `string` \| `boolean` | Zip code/Postal code, name is zip by default **`Default`** ```ts true ``` |

#### Defined in

[src/app.ts:1418](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L1418)

___

### name

• `Optional` **name**: `string`

Name of the field group. Defaults to `address`.

#### Defined in

[src/app.ts:1408](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L1408)

___

### prefix

• `Optional` **prefix**: `string`

Add a prefix to all the fields in the group.
Useful if you want to add multiple address field groups to a table.
For example: billing_, shipping_, etc.

#### Defined in

[src/app.ts:1414](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L1414)
