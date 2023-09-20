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

@yolm/boost/dist/formState.d.ts:71

___

### fields

• `Optional` **fields**: [`FormStateField`](formState.FormStateField.md)[]

#### Inherited from

[FormStateOpts](formState.FormStateOpts.md).[fields](formState.FormStateOpts.md#fields)

#### Defined in

@yolm/boost/dist/formState.d.ts:16

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

@yolm/boost/dist/formState.d.ts:22

___

### tables

• `Optional` **tables**: [`FormStateTable`](formState.FormStateTable.md)[]

#### Inherited from

[FormStateOpts](formState.FormStateOpts.md).[tables](formState.FormStateOpts.md#tables)

#### Defined in

@yolm/boost/dist/formState.d.ts:17
