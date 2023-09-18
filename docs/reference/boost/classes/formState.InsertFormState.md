---
id: "formState.InsertFormState"
title: "Boost"
sidebar_label: "InsertFormState"
custom_edit_url: null
pagination_prev: null
pagination_next: null
---

[formState](../namespaces/formState.md).InsertFormState

## Hierarchy

- [`FormState`](formState.FormState.md)

  ↳ **`InsertFormState`**

## Constructors

### constructor

• **new InsertFormState**(`opts`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`InsertFormStateOpts`](../interfaces/formState.InsertFormStateOpts.md) |

#### Overrides

[FormState](formState.FormState.md).[constructor](formState.FormState.md#constructor)

#### Defined in

[src/formState.ts:742](https://github.com/yolmio/boost/blob/5cada48/src/formState.ts#L742)

## Accessors

### debugFormState

• `get` **debugFormState**(): [`BasicStatements`](statements.BasicStatements.md)

#### Returns

[`BasicStatements`](statements.BasicStatements.md)

#### Inherited from

FormState.debugFormState

#### Defined in

[src/formState.ts:246](https://github.com/yolmio/boost/blob/5cada48/src/formState.ts#L246)

___

### formError

• `get` **formError**(): [`SqlExpression`](../namespaces/yom.md#sqlexpression)

#### Returns

[`SqlExpression`](../namespaces/yom.md#sqlexpression)

#### Inherited from

FormState.formError

#### Defined in

[src/formState.ts:227](https://github.com/yolmio/boost/blob/5cada48/src/formState.ts#L227)

___

### hasAnyError

• `get` **hasAnyError**(): [`SqlExpression`](../namespaces/yom.md#sqlexpression)

#### Returns

[`SqlExpression`](../namespaces/yom.md#sqlexpression)

#### Inherited from

FormState.hasAnyError

#### Defined in

[src/formState.ts:256](https://github.com/yolmio/boost/blob/5cada48/src/formState.ts#L256)

___

### hasAnyFieldsError

• `get` **hasAnyFieldsError**(): [`SqlExpression`](../namespaces/yom.md#sqlexpression)

#### Returns

[`SqlExpression`](../namespaces/yom.md#sqlexpression)

#### Inherited from

FormState.hasAnyFieldsError

#### Defined in

[src/formState.ts:157](https://github.com/yolmio/boost/blob/5cada48/src/formState.ts#L157)

___

### hasFormError

• `get` **hasFormError**(): [`SqlExpression`](../namespaces/yom.md#sqlexpression)

#### Returns

[`SqlExpression`](../namespaces/yom.md#sqlexpression)

#### Inherited from

FormState.hasFormError

#### Defined in

[src/formState.ts:230](https://github.com/yolmio/boost/blob/5cada48/src/formState.ts#L230)

___

### onSubmit

• `get` **onSubmit**(): [`DomStatements`](statements.DomStatements.md)

#### Returns

[`DomStatements`](statements.DomStatements.md)

#### Defined in

[src/formState.ts:832](https://github.com/yolmio/boost/blob/5cada48/src/formState.ts#L832)

___

### resetErrorState

• `get` **resetErrorState**(): [`BasicStatements`](statements.BasicStatements.md)

#### Returns

[`BasicStatements`](statements.BasicStatements.md)

#### Inherited from

FormState.resetErrorState

#### Defined in

[src/formState.ts:273](https://github.com/yolmio/boost/blob/5cada48/src/formState.ts#L273)

___

### resetErrorStateFields

• `get` **resetErrorStateFields**(): [`BasicStatements`](statements.BasicStatements.md)

#### Returns

[`BasicStatements`](statements.BasicStatements.md)

#### Inherited from

FormState.resetErrorStateFields

#### Defined in

[src/formState.ts:149](https://github.com/yolmio/boost/blob/5cada48/src/formState.ts#L149)

___

### setTouchedAll

• `get` **setTouchedAll**(): [`BasicStatements`](statements.BasicStatements.md)

#### Returns

[`BasicStatements`](statements.BasicStatements.md)

#### Inherited from

FormState.setTouchedAll

#### Defined in

[src/formState.ts:286](https://github.com/yolmio/boost/blob/5cada48/src/formState.ts#L286)

___

### setTouchedAllFields

• `get` **setTouchedAllFields**(): [`BasicStatements`](statements.BasicStatements.md)

#### Returns

[`BasicStatements`](statements.BasicStatements.md)

#### Inherited from

FormState.setTouchedAllFields

#### Defined in

[src/formState.ts:133](https://github.com/yolmio/boost/blob/5cada48/src/formState.ts#L133)

___

### setTouchedNone

• `get` **setTouchedNone**(): [`BasicStatements`](statements.BasicStatements.md)

#### Returns

[`BasicStatements`](statements.BasicStatements.md)

#### Inherited from

FormState.setTouchedNone

#### Defined in

[src/formState.ts:297](https://github.com/yolmio/boost/blob/5cada48/src/formState.ts#L297)

___

### setTouchedNoneFields

• `get` **setTouchedNoneFields**(): [`BasicStatements`](statements.BasicStatements.md)

#### Returns

[`BasicStatements`](statements.BasicStatements.md)

#### Inherited from

FormState.setTouchedNoneFields

#### Defined in

[src/formState.ts:141](https://github.com/yolmio/boost/blob/5cada48/src/formState.ts#L141)

___

### stateProcedure

• `get` **stateProcedure**(): [`StateStatements`](statements.StateStatements.md)

#### Returns

[`StateStatements`](statements.StateStatements.md)

#### Inherited from

FormState.stateProcedure

#### Defined in

[src/formState.ts:93](https://github.com/yolmio/boost/blob/5cada48/src/formState.ts#L93)

___

### submitting

• `get` **submitting**(): [`SqlExpression`](../namespaces/yom.md#sqlexpression)

#### Returns

[`SqlExpression`](../namespaces/yom.md#sqlexpression)

#### Inherited from

FormState.submitting

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

#### Inherited from

[FormState](formState.FormState.md).[addRecordToTable](formState.FormState.md#addrecordtotable)

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

#### Inherited from

[FormState](formState.FormState.md).[each](formState.FormState.md#each)

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

#### Inherited from

[FormState](formState.FormState.md).[field](formState.FormState.md#field)

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

#### Inherited from

[FormState](formState.FormState.md).[iterTableCursor](formState.FormState.md#itertablecursor)

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

#### Inherited from

[FormState](formState.FormState.md).[setFormError](formState.FormState.md#setformerror)

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

#### Inherited from

[FormState](formState.FormState.md).[setSubmitting](formState.FormState.md#setsubmitting)

#### Defined in

[src/formState.ts:239](https://github.com/yolmio/boost/blob/5cada48/src/formState.ts#L239)
