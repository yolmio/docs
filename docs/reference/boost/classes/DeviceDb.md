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

[src/app.ts:419](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L419)

___

### tables

• **tables**: `Record`<`string`, [`Table`](Table.md)\> = `{}`

#### Defined in

[src/app.ts:420](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L420)

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

[src/app.ts:422](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L422)
