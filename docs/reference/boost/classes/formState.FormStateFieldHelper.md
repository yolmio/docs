---
id: "formState.FormStateFieldHelper"
title: "Boost"
sidebar_label: "FormStateFieldHelper"
custom_edit_url: null
pagination_prev: null
pagination_next: null
---

[formState](../namespaces/formState.md).FormStateFieldHelper

## Constructors

### constructor

• **new FormStateFieldHelper**(`recordName`, `field`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `recordName` | `string` |
| `field` | [`FormStateField`](../interfaces/formState.FormStateField.md) |

#### Defined in

[src/formState.ts:374](https://github.com/yolmio/boost/blob/b239488/src/formState.ts#L374)

## Accessors

### error

• `get` **error**(): [`SqlExpression`](../namespaces/yom.md#sqlexpression)

#### Returns

[`SqlExpression`](../namespaces/yom.md#sqlexpression)

#### Defined in

[src/formState.ts:389](https://github.com/yolmio/boost/blob/b239488/src/formState.ts#L389)

___

### hasError

• `get` **hasError**(): [`SqlExpression`](../namespaces/yom.md#sqlexpression)

#### Returns

[`SqlExpression`](../namespaces/yom.md#sqlexpression)

#### Defined in

[src/formState.ts:393](https://github.com/yolmio/boost/blob/b239488/src/formState.ts#L393)

___

### touched

• `get` **touched**(): [`SqlExpression`](../namespaces/yom.md#sqlexpression)

#### Returns

[`SqlExpression`](../namespaces/yom.md#sqlexpression)

#### Defined in

[src/formState.ts:405](https://github.com/yolmio/boost/blob/b239488/src/formState.ts#L405)

___

### value

• `get` **value**(): [`SqlExpression`](../namespaces/yom.md#sqlexpression)

#### Returns

[`SqlExpression`](../namespaces/yom.md#sqlexpression)

#### Defined in

[src/formState.ts:379](https://github.com/yolmio/boost/blob/b239488/src/formState.ts#L379)

## Methods

### setError

▸ **setError**(`error`): [`BasicStatements`](statements.BasicStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | [`SqlExpression`](../namespaces/yom.md#sqlexpression) |

#### Returns

[`BasicStatements`](statements.BasicStatements.md)

#### Defined in

[src/formState.ts:397](https://github.com/yolmio/boost/blob/b239488/src/formState.ts#L397)

___

### setTouched

▸ **setTouched**(`touched`): [`BasicStatements`](statements.BasicStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `touched` | [`SqlExpression`](../namespaces/yom.md#sqlexpression) |

#### Returns

[`BasicStatements`](statements.BasicStatements.md)

#### Defined in

[src/formState.ts:409](https://github.com/yolmio/boost/blob/b239488/src/formState.ts#L409)

___

### setValue

▸ **setValue**(`value`): [`BasicStatements`](statements.BasicStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`SqlExpression`](../namespaces/yom.md#sqlexpression) |

#### Returns

[`BasicStatements`](statements.BasicStatements.md)

#### Defined in

[src/formState.ts:383](https://github.com/yolmio/boost/blob/b239488/src/formState.ts#L383)
