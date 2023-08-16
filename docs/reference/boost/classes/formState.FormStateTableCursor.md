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

[src/formState.ts:315](https://github.com/yolmio/boost/blob/b239488/src/formState.ts#L315)

## Accessors

### cursorName

• `get` **cursorName**(): `string`

#### Returns

`string`

#### Defined in

[src/formState.ts:325](https://github.com/yolmio/boost/blob/b239488/src/formState.ts#L325)

___

### delete

• `get` **delete**(): [`BasicStatements`](statements.BasicStatements.md)

#### Returns

[`BasicStatements`](statements.BasicStatements.md)

#### Defined in

[src/formState.ts:343](https://github.com/yolmio/boost/blob/b239488/src/formState.ts#L343)

___

### hasRecordError

• `get` **hasRecordError**(): [`SqlExpression`](../namespaces/yom.md#sqlexpression)

#### Returns

[`SqlExpression`](../namespaces/yom.md#sqlexpression)

#### Defined in

[src/formState.ts:355](https://github.com/yolmio/boost/blob/b239488/src/formState.ts#L355)

___

### idField

• `get` **idField**(): [`SqlExpression`](../namespaces/yom.md#sqlexpression)

#### Returns

[`SqlExpression`](../namespaces/yom.md#sqlexpression)

#### Defined in

[src/formState.ts:329](https://github.com/yolmio/boost/blob/b239488/src/formState.ts#L329)

___

### recordError

• `get` **recordError**(): [`SqlExpression`](../namespaces/yom.md#sqlexpression)

#### Returns

[`SqlExpression`](../namespaces/yom.md#sqlexpression)

#### Defined in

[src/formState.ts:351](https://github.com/yolmio/boost/blob/b239488/src/formState.ts#L351)

___

### tableName

• `get` **tableName**(): `string`

#### Returns

`string`

#### Defined in

[src/formState.ts:321](https://github.com/yolmio/boost/blob/b239488/src/formState.ts#L321)

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

[src/formState.ts:333](https://github.com/yolmio/boost/blob/b239488/src/formState.ts#L333)

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

[src/formState.ts:359](https://github.com/yolmio/boost/blob/b239488/src/formState.ts#L359)
