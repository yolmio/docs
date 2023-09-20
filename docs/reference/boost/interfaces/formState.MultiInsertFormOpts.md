---
id: "formState.MultiInsertFormOpts"
title: "Boost"
sidebar_label: "MultiInsertFormOpts"
custom_edit_url: null
pagination_prev: null
pagination_next: null
---

[formState](../namespaces/formState.md).MultiInsertFormOpts

Using this you can extend what a form state helper does when submitting

## Hierarchy

- [`FormStateProcedureExtensions`](formState.FormStateProcedureExtensions.md)

  ↳ **`MultiInsertFormOpts`**

  ↳↳ [`WithMultiInsertFormOpts`](formState.WithMultiInsertFormOpts.md)

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

[FormStateProcedureExtensions](formState.FormStateProcedureExtensions.md).[afterSubmitClient](formState.FormStateProcedureExtensions.md#aftersubmitclient)

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

[FormStateProcedureExtensions](formState.FormStateProcedureExtensions.md).[afterTransactionCommit](formState.FormStateProcedureExtensions.md#aftertransactioncommit)

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

[FormStateProcedureExtensions](formState.FormStateProcedureExtensions.md).[afterTransactionStart](formState.FormStateProcedureExtensions.md#aftertransactionstart)

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

[FormStateProcedureExtensions](formState.FormStateProcedureExtensions.md).[beforeSubmitClient](formState.FormStateProcedureExtensions.md#beforesubmitclient)

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

[FormStateProcedureExtensions](formState.FormStateProcedureExtensions.md).[beforeTransactionCommit](formState.FormStateProcedureExtensions.md#beforetransactioncommit)

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

[FormStateProcedureExtensions](formState.FormStateProcedureExtensions.md).[beforeTransactionStart](formState.FormStateProcedureExtensions.md#beforetransactionstart)

#### Defined in

@yolm/boost/dist/formState.d.ts:101

___

### fields

• **fields**: [`InsertFormField`](formState.InsertFormField.md)[]

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

#### Defined in

@yolm/boost/dist/formState.d.ts:81

___

### sharedFields

• `Optional` **sharedFields**: [`InsertFormField`](formState.InsertFormField.md)[]

#### Defined in

@yolm/boost/dist/formState.d.ts:79

___

### sharedStaticValues

• `Optional` **sharedStaticValues**: `Record`<`string`, `string`\>

#### Defined in

@yolm/boost/dist/formState.d.ts:80

___

### table

• **table**: `string`

#### Defined in

@yolm/boost/dist/formState.d.ts:77
