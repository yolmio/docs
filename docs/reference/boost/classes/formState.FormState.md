---
id: "formState.FormState"
title: "Boost"
sidebar_label: "FormState"
custom_edit_url: null
pagination_prev: null
pagination_next: null
---

[formState](../namespaces/formState.md).FormState

## Hierarchy

- **`FormState`**

  ↳ [`MultiInsertFormState`](formState.MultiInsertFormState.md)

  ↳ [`InsertFormState`](formState.InsertFormState.md)

  ↳ [`UpdateFormState`](formState.UpdateFormState.md)

## Constructors

### constructor

• **new FormState**(`opts`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`FormStateOpts`](../interfaces/formState.FormStateOpts.md) |

#### Defined in

[src/formState.ts:70](https://github.com/yolmio/boost/blob/5cada48/src/formState.ts#L70)

## Accessors

### debugFormState

• `get` **debugFormState**(): [`BasicStatements`](statements.BasicStatements.md)

#### Returns

[`BasicStatements`](statements.BasicStatements.md)

#### Defined in

[src/formState.ts:246](https://github.com/yolmio/boost/blob/5cada48/src/formState.ts#L246)

___

### formError

• `get` **formError**(): [`SqlExpression`](../namespaces/yom.md#sqlexpression)

#### Returns

[`SqlExpression`](../namespaces/yom.md#sqlexpression)

#### Defined in

[src/formState.ts:227](https://github.com/yolmio/boost/blob/5cada48/src/formState.ts#L227)

___

### hasAnyError

• `get` **hasAnyError**(): [`SqlExpression`](../namespaces/yom.md#sqlexpression)

#### Returns

[`SqlExpression`](../namespaces/yom.md#sqlexpression)

#### Defined in

[src/formState.ts:256](https://github.com/yolmio/boost/blob/5cada48/src/formState.ts#L256)

___

### hasAnyFieldsError

• `get` **hasAnyFieldsError**(): [`SqlExpression`](../namespaces/yom.md#sqlexpression)

#### Returns

[`SqlExpression`](../namespaces/yom.md#sqlexpression)

#### Defined in

[src/formState.ts:157](https://github.com/yolmio/boost/blob/5cada48/src/formState.ts#L157)

___

### hasFormError

• `get` **hasFormError**(): [`SqlExpression`](../namespaces/yom.md#sqlexpression)

#### Returns

[`SqlExpression`](../namespaces/yom.md#sqlexpression)

#### Defined in

[src/formState.ts:230](https://github.com/yolmio/boost/blob/5cada48/src/formState.ts#L230)

___

### resetErrorState

• `get` **resetErrorState**(): [`BasicStatements`](statements.BasicStatements.md)

#### Returns

[`BasicStatements`](statements.BasicStatements.md)

#### Defined in

[src/formState.ts:273](https://github.com/yolmio/boost/blob/5cada48/src/formState.ts#L273)

___

### resetErrorStateFields

• `get` **resetErrorStateFields**(): [`BasicStatements`](statements.BasicStatements.md)

#### Returns

[`BasicStatements`](statements.BasicStatements.md)

#### Defined in

[src/formState.ts:149](https://github.com/yolmio/boost/blob/5cada48/src/formState.ts#L149)

___

### setTouchedAll

• `get` **setTouchedAll**(): [`BasicStatements`](statements.BasicStatements.md)

#### Returns

[`BasicStatements`](statements.BasicStatements.md)

#### Defined in

[src/formState.ts:286](https://github.com/yolmio/boost/blob/5cada48/src/formState.ts#L286)

___

### setTouchedAllFields

• `get` **setTouchedAllFields**(): [`BasicStatements`](statements.BasicStatements.md)

#### Returns

[`BasicStatements`](statements.BasicStatements.md)

#### Defined in

[src/formState.ts:133](https://github.com/yolmio/boost/blob/5cada48/src/formState.ts#L133)

___

### setTouchedNone

• `get` **setTouchedNone**(): [`BasicStatements`](statements.BasicStatements.md)

#### Returns

[`BasicStatements`](statements.BasicStatements.md)

#### Defined in

[src/formState.ts:297](https://github.com/yolmio/boost/blob/5cada48/src/formState.ts#L297)

___

### setTouchedNoneFields

• `get` **setTouchedNoneFields**(): [`BasicStatements`](statements.BasicStatements.md)

#### Returns

[`BasicStatements`](statements.BasicStatements.md)

#### Defined in

[src/formState.ts:141](https://github.com/yolmio/boost/blob/5cada48/src/formState.ts#L141)

___

### stateProcedure

• `get` **stateProcedure**(): [`StateStatements`](statements.StateStatements.md)

#### Returns

[`StateStatements`](statements.StateStatements.md)

#### Defined in

[src/formState.ts:93](https://github.com/yolmio/boost/blob/5cada48/src/formState.ts#L93)

___

### submitting

• `get` **submitting**(): [`SqlExpression`](../namespaces/yom.md#sqlexpression)

#### Returns

[`SqlExpression`](../namespaces/yom.md#sqlexpression)

#### Defined in

[src/formState.ts:236](https://github.com/yolmio/boost/blob/5cada48/src/formState.ts#L236)

## Methods

### addRecordToTable

▸ **addRecordToTable**(`tableName`, `fields`): [`BasicStatements`](statements.BasicStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tableName` | `string` |
| `fields` | `Record`<`string`, [`SqlExpression`](../namespaces/yom.md#sqlexpression)\> |

#### Returns

[`BasicStatements`](statements.BasicStatements.md)

#### Defined in

[src/formState.ts:204](https://github.com/yolmio/boost/blob/5cada48/src/formState.ts#L204)

___

### each

▸ **each**(`tableName`, `render`): [`EachNode`](../modules.md#eachnode)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tableName` | `string` |
| `render` | (`opts`: [`FormStateTableCursor`](formState.FormStateTableCursor.md)) => [`Node`](../modules.md#node) |

#### Returns

[`EachNode`](../modules.md#eachnode)

#### Defined in

[src/formState.ts:173](https://github.com/yolmio/boost/blob/5cada48/src/formState.ts#L173)

___

### field

▸ **field**(`name`): [`FormStateFieldHelper`](formState.FormStateFieldHelper.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`FormStateFieldHelper`](formState.FormStateFieldHelper.md)

#### Defined in

[src/formState.ts:165](https://github.com/yolmio/boost/blob/5cada48/src/formState.ts#L165)

___

### iterTableCursor

▸ **iterTableCursor**(`tableName`): [`FormStateTableCursor`](formState.FormStateTableCursor.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tableName` | `string` |

#### Returns

[`FormStateTableCursor`](formState.FormStateTableCursor.md)

#### Defined in

[src/formState.ts:194](https://github.com/yolmio/boost/blob/5cada48/src/formState.ts#L194)

___

### setFormError

▸ **setFormError**(`value`): [`BasicStatements`](statements.BasicStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`SqlExpression`](../namespaces/yom.md#sqlexpression) |

#### Returns

[`BasicStatements`](statements.BasicStatements.md)

#### Defined in

[src/formState.ts:233](https://github.com/yolmio/boost/blob/5cada48/src/formState.ts#L233)

___

### setSubmitting

▸ **setSubmitting**(`waiting`): [`BasicStatements`](statements.BasicStatements.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `waiting` | [`SqlExpression`](../namespaces/yom.md#sqlexpression) |

#### Returns

[`BasicStatements`](statements.BasicStatements.md)

#### Defined in

[src/formState.ts:239](https://github.com/yolmio/boost/blob/5cada48/src/formState.ts#L239)
