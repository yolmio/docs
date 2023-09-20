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

@yolm/boost/dist/formState.d.ts:61

## Properties

### setError

• **setError**: (`error`: [`SqlExpression`](../namespaces/yom.md#sqlexpression)) => [`BasicStatements`](statements.BasicStatements.md)

#### Type declaration

▸ (`error`): [`BasicStatements`](statements.BasicStatements.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `error` | [`SqlExpression`](../namespaces/yom.md#sqlexpression) |

##### Returns

[`BasicStatements`](statements.BasicStatements.md)

#### Defined in

@yolm/boost/dist/formState.d.ts:66

___

### setTouched

• **setTouched**: (`touched`: [`SqlExpression`](../namespaces/yom.md#sqlexpression)) => [`BasicStatements`](statements.BasicStatements.md)

#### Type declaration

▸ (`touched`): [`BasicStatements`](statements.BasicStatements.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `touched` | [`SqlExpression`](../namespaces/yom.md#sqlexpression) |

##### Returns

[`BasicStatements`](statements.BasicStatements.md)

#### Defined in

@yolm/boost/dist/formState.d.ts:68

___

### setValue

• **setValue**: (`value`: [`SqlExpression`](../namespaces/yom.md#sqlexpression)) => [`BasicStatements`](statements.BasicStatements.md)

#### Type declaration

▸ (`value`): [`BasicStatements`](statements.BasicStatements.md)

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`SqlExpression`](../namespaces/yom.md#sqlexpression) |

##### Returns

[`BasicStatements`](statements.BasicStatements.md)

#### Defined in

@yolm/boost/dist/formState.d.ts:63

## Accessors

### error

• `get` **error**(): [`SqlExpression`](../namespaces/yom.md#sqlexpression)

#### Returns

[`SqlExpression`](../namespaces/yom.md#sqlexpression)

#### Defined in

@yolm/boost/dist/formState.d.ts:64

___

### hasError

• `get` **hasError**(): [`SqlExpression`](../namespaces/yom.md#sqlexpression)

#### Returns

[`SqlExpression`](../namespaces/yom.md#sqlexpression)

#### Defined in

@yolm/boost/dist/formState.d.ts:65

___

### touched

• `get` **touched**(): [`SqlExpression`](../namespaces/yom.md#sqlexpression)

#### Returns

[`SqlExpression`](../namespaces/yom.md#sqlexpression)

#### Defined in

@yolm/boost/dist/formState.d.ts:67

___

### value

• `get` **value**(): [`SqlExpression`](../namespaces/yom.md#sqlexpression)

#### Returns

[`SqlExpression`](../namespaces/yom.md#sqlexpression)

#### Defined in

@yolm/boost/dist/formState.d.ts:62
