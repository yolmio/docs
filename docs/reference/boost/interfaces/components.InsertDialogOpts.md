---
id: "components.InsertDialogOpts"
title: "Boost"
sidebar_label: "InsertDialogOpts"
custom_edit_url: null
pagination_prev: null
pagination_next: null
---

[components](../namespaces/components.md).InsertDialogOpts

Using this you can extend what a form state helper does when submitting

## Hierarchy

- [`FormStateProcedureExtensions`](formState.FormStateProcedureExtensions.md)

  ↳ **`InsertDialogOpts`**

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

[src/formState.ts:545](https://github.com/yolmio/boost/blob/5cada48/src/formState.ts#L545)

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

[src/formState.ts:541](https://github.com/yolmio/boost/blob/5cada48/src/formState.ts#L541)

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

[src/formState.ts:531](https://github.com/yolmio/boost/blob/5cada48/src/formState.ts#L531)

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

[src/formState.ts:519](https://github.com/yolmio/boost/blob/5cada48/src/formState.ts#L519)

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

[src/formState.ts:537](https://github.com/yolmio/boost/blob/5cada48/src/formState.ts#L537)

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

[src/formState.ts:526](https://github.com/yolmio/boost/blob/5cada48/src/formState.ts#L526)

___

### content

• **content**: `InsertFormContent`

#### Defined in

[src/components/insertDialog.ts:24](https://github.com/yolmio/boost/blob/5cada48/src/components/insertDialog.ts#L24)

___

### onClose

• **onClose**: [`DomStatementsOrFn`](../namespaces/statements.md#domstatementsorfn)

#### Defined in

[src/components/insertDialog.ts:22](https://github.com/yolmio/boost/blob/5cada48/src/components/insertDialog.ts#L22)

___

### open

• **open**: `string`

#### Defined in

[src/components/insertDialog.ts:21](https://github.com/yolmio/boost/blob/5cada48/src/components/insertDialog.ts#L21)

___

### table

• **table**: `string`

#### Defined in

[src/components/insertDialog.ts:23](https://github.com/yolmio/boost/blob/5cada48/src/components/insertDialog.ts#L23)

___

### title

• `Optional` **title**: `string`

#### Defined in

[src/components/insertDialog.ts:26](https://github.com/yolmio/boost/blob/5cada48/src/components/insertDialog.ts#L26)

___

### withValues

• `Optional` **withValues**: `Record`<`string`, `string`\>

#### Defined in

[src/components/insertDialog.ts:25](https://github.com/yolmio/boost/blob/5cada48/src/components/insertDialog.ts#L25)
