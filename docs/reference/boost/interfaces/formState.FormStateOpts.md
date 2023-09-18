---
id: "formState.FormStateOpts"
title: "Boost"
sidebar_label: "FormStateOpts"
custom_edit_url: null
pagination_prev: null
pagination_next: null
---

[formState](../namespaces/formState.md).FormStateOpts

## Hierarchy

- **`FormStateOpts`**

  ↳ [`WithFormStateOpts`](formState.WithFormStateOpts.md)

## Properties

### fields

• `Optional` **fields**: [`FormStateField`](formState.FormStateField.md)[]

#### Defined in

[src/formState.ts:56](https://github.com/yolmio/boost/blob/5cada48/src/formState.ts#L56)

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

#### Defined in

[src/formState.ts:62](https://github.com/yolmio/boost/blob/5cada48/src/formState.ts#L62)

___

### tables

• `Optional` **tables**: [`FormStateTable`](formState.FormStateTable.md)[]

#### Defined in

[src/formState.ts:57](https://github.com/yolmio/boost/blob/5cada48/src/formState.ts#L57)
