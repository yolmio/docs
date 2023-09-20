---
id: "formState.WithMultiInsertFormOpts"
title: "Boost"
sidebar_label: "WithMultiInsertFormOpts"
custom_edit_url: null
pagination_prev: null
pagination_next: null
---

[formState](../namespaces/formState.md).WithMultiInsertFormOpts

Using this you can extend what a form state helper does when submitting

## Hierarchy

- [`MultiInsertFormOpts`](formState.MultiInsertFormOpts.md)

  ↳ **`WithMultiInsertFormOpts`**

## Properties

### afterSubmitClient

• `Optional` **afterSubmitClient**: (`state`: [`FormState`](../classes/formState.FormState.md), `s`: [`DomStatements`](../classes/statements.DomStatements.md)) => `unknown`

#### Type declaration

▸ (`state`, `s`): `unknown`

Runs on the client after the service procedure has completed successfully.

##### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`FormState`](../classes/formState.FormState.md) |
| `s` | [`DomStatements`](../classes/statements.DomStatements.md) |

##### Returns

`unknown`

#### Inherited from

[MultiInsertFormOpts](formState.MultiInsertFormOpts.md).[afterSubmitClient](formState.MultiInsertFormOpts.md#aftersubmitclient)

#### Defined in

@yolm/boost/dist/formState.d.ts:120

___

### afterTransactionCommit

• `Optional` **afterTransactionCommit**: (`state`: [`FormState`](../classes/formState.FormState.md), `s`: [`ServiceStatements`](../classes/statements.ServiceStatements.md)) => `unknown`

#### Type declaration

▸ (`state`, `s`): `unknown`

Runs after the commit of the transaction, this lets you reference anything done and committed in the transaction body.

##### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`FormState`](../classes/formState.FormState.md) |
| `s` | [`ServiceStatements`](../classes/statements.ServiceStatements.md) |

##### Returns

`unknown`

#### Inherited from

[MultiInsertFormOpts](formState.MultiInsertFormOpts.md).[afterTransactionCommit](formState.MultiInsertFormOpts.md#aftertransactioncommit)

#### Defined in

@yolm/boost/dist/formState.d.ts:116

___

### afterTransactionStart

• `Optional` **afterTransactionStart**: (`state`: [`FormState`](../classes/formState.FormState.md), `s`: [`ServiceStatements`](../classes/statements.ServiceStatements.md)) => `unknown`

#### Type declaration

▸ (`state`, `s`): `unknown`

Runs after the start of the transaction, here you can set up any variables you would like to use
in the body of the transaction or you can just do some additional updates or inserts or deletes.

##### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`FormState`](../classes/formState.FormState.md) |
| `s` | [`ServiceStatements`](../classes/statements.ServiceStatements.md) |

##### Returns

`unknown`

#### Inherited from

[MultiInsertFormOpts](formState.MultiInsertFormOpts.md).[afterTransactionStart](formState.MultiInsertFormOpts.md#aftertransactionstart)

#### Defined in

@yolm/boost/dist/formState.d.ts:106

___

### beforeSubmitClient

• `Optional` **beforeSubmitClient**: (`state`: [`FormState`](../classes/formState.FormState.md), `s`: [`DomStatements`](../classes/statements.DomStatements.md)) => `unknown`

#### Type declaration

▸ (`state`, `s`): `unknown`

Runs before the service proc starts

You can set errors in the form state here and we will not start the service proc if there are errors.

##### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`FormState`](../classes/formState.FormState.md) |
| `s` | [`DomStatements`](../classes/statements.DomStatements.md) |

##### Returns

`unknown`

#### Inherited from

[MultiInsertFormOpts](formState.MultiInsertFormOpts.md).[beforeSubmitClient](formState.MultiInsertFormOpts.md#beforesubmitclient)

#### Defined in

@yolm/boost/dist/formState.d.ts:94

___

### beforeTransactionCommit

• `Optional` **beforeTransactionCommit**: (`state`: [`FormState`](../classes/formState.FormState.md), `s`: [`ServiceStatements`](../classes/statements.ServiceStatements.md)) => `unknown`

#### Type declaration

▸ (`state`, `s`): `unknown`

Runs after the body of the transaction but before the commit, this lets you reference anything done
in the transaction body. For example if you insert a record and need to reference the id of the record
for an insert into another table you can do that here.

##### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`FormState`](../classes/formState.FormState.md) |
| `s` | [`ServiceStatements`](../classes/statements.ServiceStatements.md) |

##### Returns

`unknown`

#### Inherited from

[MultiInsertFormOpts](formState.MultiInsertFormOpts.md).[beforeTransactionCommit](formState.MultiInsertFormOpts.md#beforetransactioncommit)

#### Defined in

@yolm/boost/dist/formState.d.ts:112

___

### beforeTransactionStart

• `Optional` **beforeTransactionStart**: (`state`: [`FormState`](../classes/formState.FormState.md), `s`: [`ServiceStatements`](../classes/statements.ServiceStatements.md)) => `unknown`

#### Type declaration

▸ (`state`, `s`): `unknown`

Runs on the data service before the start of the transaction

You can set errors in the form state here and we will not run the transaction if there are errors
and instead return the error to the client.

##### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`FormState`](../classes/formState.FormState.md) |
| `s` | [`ServiceStatements`](../classes/statements.ServiceStatements.md) |

##### Returns

`unknown`

#### Inherited from

[MultiInsertFormOpts](formState.MultiInsertFormOpts.md).[beforeTransactionStart](formState.MultiInsertFormOpts.md#beforetransactionstart)

#### Defined in

@yolm/boost/dist/formState.d.ts:101

___

### children

• **children**: (`state`: [`MultiInsertFormState`](../classes/formState.MultiInsertFormState.md)) => [`Node`](../modules.md#node)

#### Type declaration

▸ (`state`): [`Node`](../modules.md#node)

##### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`MultiInsertFormState`](../classes/formState.MultiInsertFormState.md) |

##### Returns

[`Node`](../modules.md#node)

#### Defined in

@yolm/boost/dist/formState.d.ts:128

___

### fields

• **fields**: [`InsertFormField`](formState.InsertFormField.md)[]

#### Inherited from

[MultiInsertFormOpts](formState.MultiInsertFormOpts.md).[fields](formState.MultiInsertFormOpts.md#fields)

#### Defined in

@yolm/boost/dist/formState.d.ts:78

___

### initializeFormState

• `Optional` **initializeFormState**: (`state`: [`FormState`](../classes/formState.FormState.md), `s`: [`StateStatements`](../classes/statements.StateStatements.md)) => `unknown`

#### Type declaration

▸ (`state`, `s`): `unknown`

##### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`FormState`](../classes/formState.FormState.md) |
| `s` | [`StateStatements`](../classes/statements.StateStatements.md) |

##### Returns

`unknown`

#### Inherited from

[MultiInsertFormOpts](formState.MultiInsertFormOpts.md).[initializeFormState](formState.MultiInsertFormOpts.md#initializeformstate)

#### Defined in

@yolm/boost/dist/formState.d.ts:81

___

### sharedFields

• `Optional` **sharedFields**: [`InsertFormField`](formState.InsertFormField.md)[]

#### Inherited from

[MultiInsertFormOpts](formState.MultiInsertFormOpts.md).[sharedFields](formState.MultiInsertFormOpts.md#sharedfields)

#### Defined in

@yolm/boost/dist/formState.d.ts:79

___

### sharedStaticValues

• `Optional` **sharedStaticValues**: `Record`<`string`, `string`\>

#### Inherited from

[MultiInsertFormOpts](formState.MultiInsertFormOpts.md).[sharedStaticValues](formState.MultiInsertFormOpts.md#sharedstaticvalues)

#### Defined in

@yolm/boost/dist/formState.d.ts:80

___

### table

• **table**: `string`

#### Inherited from

[MultiInsertFormOpts](formState.MultiInsertFormOpts.md).[table](formState.MultiInsertFormOpts.md#table)

#### Defined in

@yolm/boost/dist/formState.d.ts:77
