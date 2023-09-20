---
id: "formState.FormStateTableCursor"
title: "Boost"
sidebar_label: "FormStateTableCursor"
custom_edit_url: null
pagination_prev: null
pagination_next: null
---

[formState](../namespaces/formState.md).FormStateTableCursor

## Constructors

### constructor

• **new FormStateTableCursor**(`tableName`, `recordName`, `fields`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tableName` | `string` |
| `recordName` | `string` |
| `fields` | [`FormStateField`](../interfaces/formState.FormStateField.md)[] |

#### Defined in

@yolm/boost/dist/formState.d.ts:49

## Accessors

### cursorName

• `get` **cursorName**(): `string`

#### Returns

`string`

#### Defined in

@yolm/boost/dist/formState.d.ts:51

___

### delete

• `get` **delete**(): [`BasicStatements`](statements.BasicStatements.md)

#### Returns

[`BasicStatements`](statements.BasicStatements.md)

#### Defined in

@yolm/boost/dist/formState.d.ts:54

___

### hasRecordError

• `get` **hasRecordError**(): [`SqlExpression`](../namespaces/yom.md#sqlexpression)

#### Returns

[`SqlExpression`](../namespaces/yom.md#sqlexpression)

#### Defined in

@yolm/boost/dist/formState.d.ts:56

___

### idField

• `get` **idField**(): [`SqlExpression`](../namespaces/yom.md#sqlexpression)

#### Returns

[`SqlExpression`](../namespaces/yom.md#sqlexpression)

#### Defined in

@yolm/boost/dist/formState.d.ts:52

___

### recordError

• `get` **recordError**(): [`SqlExpression`](../namespaces/yom.md#sqlexpression)

#### Returns

[`SqlExpression`](../namespaces/yom.md#sqlexpression)

#### Defined in

@yolm/boost/dist/formState.d.ts:55

___

### tableName

• `get` **tableName**(): `string`

#### Returns

`string`

#### Defined in

@yolm/boost/dist/formState.d.ts:50

## Methods

### field

▸ **field**(`name`): [`FormStateFieldHelper`](formState.FormStateFieldHelper.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`FormStateFieldHelper`](formState.FormStateFieldHelper.md)

#### Defined in

@yolm/boost/dist/formState.d.ts:53

___

### setRecordError

▸ **setRecordError**(`error`): [`BasicStatements`](statements.BasicStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | [`SqlExpression`](../namespaces/yom.md#sqlexpression) |

#### Returns

[`BasicStatements`](statements.BasicStatements.md)

#### Defined in

@yolm/boost/dist/formState.d.ts:57
