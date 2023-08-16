---
id: "formState.WithFormStateOpts"
title: "Boost"
sidebar_label: "WithFormStateOpts"
custom_edit_url: null
pagination_prev: null
pagination_next: null
---

[formState](../namespaces/formState.md).WithFormStateOpts

## Hierarchy

- [`FormStateOpts`](formState.FormStateOpts.md)

  ↳ **`WithFormStateOpts`**

## Properties

### children

• **children**: (`state`: [`FormState`](../classes/formState.FormState.md)) => [`Node`](../modules.md#node)

#### Type declaration

▸ (`state`): [`Node`](../modules.md#node)

##### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`FormState`](../classes/formState.FormState.md) |

##### Returns

[`Node`](../modules.md#node)

#### Defined in

[src/formState.ts:419](https://github.com/yolmio/boost/blob/b239488/src/formState.ts#L419)

___

### fields

• `Optional` **fields**: [`FormStateField`](formState.FormStateField.md)[]

#### Inherited from

[FormStateOpts](formState.FormStateOpts.md).[fields](formState.FormStateOpts.md#fields)

#### Defined in

[src/formState.ts:56](https://github.com/yolmio/boost/blob/b239488/src/formState.ts#L56)

___

### initializeFormState

• `Optional` **initializeFormState**: (`state`: [`FormState`](../classes/formState.FormState.md), `s`: [`StateStatements`](../classes/statements.StateStatements.md)) => `unknown`

#### Type declaration

▸ (`state`, `s`): `unknown`

This is called as part of the initialization of the form state, so you can add empty table records,
set a field error, set something touched, etc.

##### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`FormState`](../classes/formState.FormState.md) |
| `s` | [`StateStatements`](../classes/statements.StateStatements.md) |

##### Returns

`unknown`

#### Inherited from

[FormStateOpts](formState.FormStateOpts.md).[initializeFormState](formState.FormStateOpts.md#initializeformstate)

#### Defined in

[src/formState.ts:62](https://github.com/yolmio/boost/blob/b239488/src/formState.ts#L62)

___

### tables

• `Optional` **tables**: [`FormStateTable`](formState.FormStateTable.md)[]

#### Inherited from

[FormStateOpts](formState.FormStateOpts.md).[tables](formState.FormStateOpts.md#tables)

#### Defined in

[src/formState.ts:57](https://github.com/yolmio/boost/blob/b239488/src/formState.ts#L57)
