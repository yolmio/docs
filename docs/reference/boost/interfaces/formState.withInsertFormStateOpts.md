---
id: "formState.withInsertFormStateOpts"
title: "Boost"
sidebar_label: "withInsertFormStateOpts"
custom_edit_url: null
pagination_prev: null
pagination_next: null
---

[formState](../namespaces/formState.md).withInsertFormStateOpts

Using this you can extend what a form state helper does when submitting

## Hierarchy

- [`InsertFormStateOpts`](formState.InsertFormStateOpts.md)

  ↳ **`withInsertFormStateOpts`**

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

[InsertFormStateOpts](formState.InsertFormStateOpts.md).[afterSubmitClient](formState.InsertFormStateOpts.md#aftersubmitclient)

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

[InsertFormStateOpts](formState.InsertFormStateOpts.md).[afterTransactionCommit](formState.InsertFormStateOpts.md#aftertransactioncommit)

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

[InsertFormStateOpts](formState.InsertFormStateOpts.md).[afterTransactionStart](formState.InsertFormStateOpts.md#aftertransactionstart)

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

[InsertFormStateOpts](formState.InsertFormStateOpts.md).[beforeSubmitClient](formState.InsertFormStateOpts.md#beforesubmitclient)

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

[InsertFormStateOpts](formState.InsertFormStateOpts.md).[beforeTransactionCommit](formState.InsertFormStateOpts.md#beforetransactioncommit)

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

[InsertFormStateOpts](formState.InsertFormStateOpts.md).[beforeTransactionStart](formState.InsertFormStateOpts.md#beforetransactionstart)

#### Defined in

[src/formState.ts:526](https://github.com/yolmio/boost/blob/5cada48/src/formState.ts#L526)

___

### children

• **children**: (`state`: [`InsertFormState`](../classes/formState.InsertFormState.md)) => [`Node`](../modules.md#node)

#### Type declaration

▸ (`state`): [`Node`](../modules.md#node)

##### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`InsertFormState`](../classes/formState.InsertFormState.md) |

##### Returns

[`Node`](../modules.md#node)

#### Defined in

[src/formState.ts:957](https://github.com/yolmio/boost/blob/5cada48/src/formState.ts#L957)

___

### fields

• **fields**: [`InsertFormField`](formState.InsertFormField.md)[]

#### Inherited from

[InsertFormStateOpts](formState.InsertFormStateOpts.md).[fields](formState.InsertFormStateOpts.md#fields)

#### Defined in

[src/formState.ts:951](https://github.com/yolmio/boost/blob/5cada48/src/formState.ts#L951)

___

### relations

• `Optional` **relations**: [`InsertFormRelation`](formState.InsertFormRelation.md)[]

#### Inherited from

[InsertFormStateOpts](formState.InsertFormStateOpts.md).[relations](formState.InsertFormStateOpts.md#relations)

#### Defined in

[src/formState.ts:952](https://github.com/yolmio/boost/blob/5cada48/src/formState.ts#L952)

___

### table

• **table**: `string`

#### Inherited from

[InsertFormStateOpts](formState.InsertFormStateOpts.md).[table](formState.InsertFormStateOpts.md#table)

#### Defined in

[src/formState.ts:950](https://github.com/yolmio/boost/blob/5cada48/src/formState.ts#L950)

___

### withValues

• `Optional` **withValues**: `Record`<`string`, `string`\>

#### Inherited from

[InsertFormStateOpts](formState.InsertFormStateOpts.md).[withValues](formState.InsertFormStateOpts.md#withvalues)

#### Defined in

[src/formState.ts:953](https://github.com/yolmio/boost/blob/5cada48/src/formState.ts#L953)
