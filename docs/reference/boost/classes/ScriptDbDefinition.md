---
id: "ScriptDbDefinition"
title: "Boost"
sidebar_label: "ScriptDbDefinition"
sidebar_position: 0
custom_edit_url: null
pagination_prev: null
pagination_next: null
---

## Constructors

### constructor

• **new ScriptDbDefinition**(`name`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Defined in

[src/app.ts:395](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L395)

## Properties

### name

• **name**: `string`

#### Defined in

[src/app.ts:395](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L395)

___

### tables

• **tables**: `Record`<`string`, [`Table`](Table.md)\> = `{}`

#### Defined in

[src/app.ts:393](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L393)

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

[src/app.ts:397](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L397)
