---
id: "formState.WithUpdateFormStateOpts"
title: "Boost"
sidebar_label: "WithUpdateFormStateOpts"
custom_edit_url: null
pagination_prev: null
pagination_next: null
---

[formState](../namespaces/formState.md).WithUpdateFormStateOpts

Using this you can extend what a form state helper does when submitting

## Hierarchy

- [`UpdateFormStateOpts`](formState.UpdateFormStateOpts.md)

  ↳ **`WithUpdateFormStateOpts`**

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

[UpdateFormStateOpts](formState.UpdateFormStateOpts.md).[afterSubmitClient](formState.UpdateFormStateOpts.md#aftersubmitclient)

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

[UpdateFormStateOpts](formState.UpdateFormStateOpts.md).[afterTransactionCommit](formState.UpdateFormStateOpts.md#aftertransactioncommit)

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

[UpdateFormStateOpts](formState.UpdateFormStateOpts.md).[afterTransactionStart](formState.UpdateFormStateOpts.md#aftertransactionstart)

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

[UpdateFormStateOpts](formState.UpdateFormStateOpts.md).[beforeSubmitClient](formState.UpdateFormStateOpts.md#beforesubmitclient)

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

[UpdateFormStateOpts](formState.UpdateFormStateOpts.md).[beforeTransactionCommit](formState.UpdateFormStateOpts.md#beforetransactioncommit)

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

[UpdateFormStateOpts](formState.UpdateFormStateOpts.md).[beforeTransactionStart](formState.UpdateFormStateOpts.md#beforetransactionstart)

#### Defined in

@yolm/boost/dist/formState.d.ts:101

___

### children

• **children**: (`state`: [`UpdateFormState`](../classes/formState.UpdateFormState.md)) => [`Node`](../modules.md#node)

#### Type declaration

▸ (`state`): [`Node`](../modules.md#node)

##### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`UpdateFormState`](../classes/formState.UpdateFormState.md) |

##### Returns

[`Node`](../modules.md#node)

#### Defined in

@yolm/boost/dist/formState.d.ts:170

___

### fields

• **fields**: [`UpdateFormField`](formState.UpdateFormField.md)[]

#### Inherited from

[UpdateFormStateOpts](formState.UpdateFormStateOpts.md).[fields](formState.UpdateFormStateOpts.md#fields)

#### Defined in

@yolm/boost/dist/formState.d.ts:160

___

### initialRecord

• `Optional` **initialRecord**: `string`

#### Inherited from

[UpdateFormStateOpts](formState.UpdateFormStateOpts.md).[initialRecord](formState.UpdateFormStateOpts.md#initialrecord)

#### Defined in

@yolm/boost/dist/formState.d.ts:161

___

### recordId

• `Optional` **recordId**: `string`

#### Inherited from

[UpdateFormStateOpts](formState.UpdateFormStateOpts.md).[recordId](formState.UpdateFormStateOpts.md#recordid)

#### Defined in

@yolm/boost/dist/formState.d.ts:162

___

### table

• **table**: `string`

#### Inherited from

[UpdateFormStateOpts](formState.UpdateFormStateOpts.md).[table](formState.UpdateFormStateOpts.md#table)

#### Defined in

@yolm/boost/dist/formState.d.ts:159
