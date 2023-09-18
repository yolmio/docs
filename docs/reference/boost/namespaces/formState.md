---
id: "formState"
title: "Boost"
sidebar_label: "formState"
sidebar_position: 0
custom_edit_url: null
pagination_prev: null
pagination_next: null
---

## Classes

- [FormState](../classes/formState.FormState.md)
- [FormStateFieldHelper](../classes/formState.FormStateFieldHelper.md)
- [FormStateTableCursor](../classes/formState.FormStateTableCursor.md)
- [InsertFormState](../classes/formState.InsertFormState.md)
- [MultiInsertFormState](../classes/formState.MultiInsertFormState.md)
- [UpdateFormState](../classes/formState.UpdateFormState.md)

## Interfaces

- [FormStateField](../interfaces/formState.FormStateField.md)
- [FormStateOpts](../interfaces/formState.FormStateOpts.md)
- [FormStateProcedureExtensions](../interfaces/formState.FormStateProcedureExtensions.md)
- [FormStateTable](../interfaces/formState.FormStateTable.md)
- [InsertFormField](../interfaces/formState.InsertFormField.md)
- [InsertFormRelation](../interfaces/formState.InsertFormRelation.md)
- [InsertFormStateOpts](../interfaces/formState.InsertFormStateOpts.md)
- [MultiInsertFormOpts](../interfaces/formState.MultiInsertFormOpts.md)
- [UpdateFormField](../interfaces/formState.UpdateFormField.md)
- [UpdateFormStateOpts](../interfaces/formState.UpdateFormStateOpts.md)
- [WithFormStateOpts](../interfaces/formState.WithFormStateOpts.md)
- [WithMultiInsertFormOpts](../interfaces/formState.WithMultiInsertFormOpts.md)
- [WithUpdateFormStateOpts](../interfaces/formState.WithUpdateFormStateOpts.md)
- [withInsertFormStateOpts](../interfaces/formState.withInsertFormStateOpts.md)

## Functions

### defaultInitialValue

▸ **defaultInitialValue**(`field`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `field` | [`Field`](../modules.md#field) |

#### Returns

`string`

#### Defined in

[src/formState.ts:968](https://github.com/yolmio/boost/blob/5cada48/src/formState.ts#L968)

___

### defaultValidate

▸ **defaultValidate**(`field`, `«destructured»`, `statements`): `undefined` \| [`DomStatements`](../classes/statements.DomStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `field` | [`Field`](../modules.md#field) |
| `«destructured»` | [`FormStateFieldHelper`](../classes/formState.FormStateFieldHelper.md) |
| `statements` | [`DomStatements`](../classes/statements.DomStatements.md) |

#### Returns

`undefined` \| [`DomStatements`](../classes/statements.DomStatements.md)

#### Defined in

[src/formState.ts:1007](https://github.com/yolmio/boost/blob/5cada48/src/formState.ts#L1007)

___

### formFieldType

▸ **formFieldType**(`field`): [`FieldType`](yom.md#fieldtype)

#### Parameters

| Name | Type |
| :------ | :------ |
| `field` | [`Field`](../modules.md#field) |

#### Returns

[`FieldType`](yom.md#fieldtype)

#### Defined in

[src/formState.ts:465](https://github.com/yolmio/boost/blob/5cada48/src/formState.ts#L465)

___

### getNormalizedValue

▸ **getNormalizedValue**(`field`, `valueExpr`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `field` | [`Field`](../modules.md#field) |
| `valueExpr` | `string` |

#### Returns

`string`

#### Defined in

[src/formState.ts:430](https://github.com/yolmio/boost/blob/5cada48/src/formState.ts#L430)

___

### withFormState

▸ **withFormState**(`opts`): [`StateNode`](../modules.md#statenode)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`WithFormStateOpts`](../interfaces/formState.WithFormStateOpts.md) |

#### Returns

[`StateNode`](../modules.md#statenode)

#### Defined in

[src/formState.ts:422](https://github.com/yolmio/boost/blob/5cada48/src/formState.ts#L422)

___

### withInsertFormState

▸ **withInsertFormState**(`opts`): [`StateNode`](../modules.md#statenode)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`withInsertFormStateOpts`](../interfaces/formState.withInsertFormStateOpts.md) |

#### Returns

[`StateNode`](../modules.md#statenode)

#### Defined in

[src/formState.ts:960](https://github.com/yolmio/boost/blob/5cada48/src/formState.ts#L960)

___

### withMultiInsertFormState

▸ **withMultiInsertFormState**(`opts`): [`StateNode`](../modules.md#statenode)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`WithMultiInsertFormOpts`](../interfaces/formState.WithMultiInsertFormOpts.md) |

#### Returns

[`StateNode`](../modules.md#statenode)

#### Defined in

[src/formState.ts:704](https://github.com/yolmio/boost/blob/5cada48/src/formState.ts#L704)

___

### withUpdateFormState

▸ **withUpdateFormState**(`opts`): [`StateNode`](../modules.md#statenode)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`WithUpdateFormStateOpts`](../interfaces/formState.WithUpdateFormStateOpts.md) |

#### Returns

[`StateNode`](../modules.md#statenode)

#### Defined in

[src/formState.ts:1359](https://github.com/yolmio/boost/blob/5cada48/src/formState.ts#L1359)
