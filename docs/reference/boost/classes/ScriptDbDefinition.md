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

[src/app.ts:409](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L409)

## Properties

### name

• **name**: `string`

#### Defined in

[src/app.ts:409](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L409)

___

### tables

• **tables**: `Record`<`string`, [`Table`](Table.md)\> = `{}`

#### Defined in

[src/app.ts:407](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L407)

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

[src/app.ts:411](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L411)
