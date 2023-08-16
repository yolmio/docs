---
id: "DeviceDb"
title: "Boost"
sidebar_label: "DeviceDb"
sidebar_position: 0
custom_edit_url: null
pagination_prev: null
pagination_next: null
---

## Constructors

### constructor

• **new DeviceDb**()

## Properties

### defaultUniqueDistinctNulls

• **defaultUniqueDistinctNulls**: `boolean` = `true`

#### Defined in

[src/app.ts:405](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L405)

___

### tables

• **tables**: `Record`<`string`, [`Table`](Table.md)\> = `{}`

#### Defined in

[src/app.ts:406](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L406)

## Methods

### addTable

▸ **addTable**(`name`, `f`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `f` | (`builder`: [`TableBuilder`](TableBuilder.md)) => `void` |

#### Returns

`void`

#### Defined in

[src/app.ts:408](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L408)
