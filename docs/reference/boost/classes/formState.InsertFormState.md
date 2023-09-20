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

@yolm/boost/dist/formState.d.ts:139

## Accessors

### debugFormState

• `get` **debugFormState**(): [`BasicStatements`](statements.BasicStatements.md)

#### Returns

[`BasicStatements`](statements.BasicStatements.md)

#### Inherited from

FormState.debugFormState

#### Defined in

@yolm/boost/dist/formState.d.ts:41

___

### formError

• `get` **formError**(): [`SqlExpression`](../namespaces/yom.md#sqlexpression)

#### Returns

[`SqlExpression`](../namespaces/yom.md#sqlexpression)

#### Inherited from

FormState.formError

#### Defined in

@yolm/boost/dist/formState.d.ts:36

___

### hasAnyError

• `get` **hasAnyError**(): [`SqlExpression`](../namespaces/yom.md#sqlexpression)

#### Returns

[`SqlExpression`](../namespaces/yom.md#sqlexpression)

#### Inherited from

FormState.hasAnyError

#### Defined in

@yolm/boost/dist/formState.d.ts:42

___

### hasAnyFieldsError

• `get` **hasAnyFieldsError**(): [`SqlExpression`](../namespaces/yom.md#sqlexpression)

#### Returns

[`SqlExpression`](../namespaces/yom.md#sqlexpression)

#### Inherited from

FormState.hasAnyFieldsError

#### Defined in

@yolm/boost/dist/formState.d.ts:31

___

### hasFormError

• `get` **hasFormError**(): [`SqlExpression`](../namespaces/yom.md#sqlexpression)

#### Returns

[`SqlExpression`](../namespaces/yom.md#sqlexpression)

#### Inherited from

FormState.hasFormError

#### Defined in

@yolm/boost/dist/formState.d.ts:37

___

### onSubmit

• `get` **onSubmit**(): [`DomStatements`](statements.DomStatements.md)

#### Returns

[`DomStatements`](statements.DomStatements.md)

#### Defined in

@yolm/boost/dist/formState.d.ts:140

___

### resetErrorState

• `get` **resetErrorState**(): [`BasicStatements`](statements.BasicStatements.md)

#### Returns

[`BasicStatements`](statements.BasicStatements.md)

#### Inherited from

FormState.resetErrorState

#### Defined in

@yolm/boost/dist/formState.d.ts:43

___

### resetErrorStateFields

• `get` **resetErrorStateFields**(): [`BasicStatements`](statements.BasicStatements.md)

#### Returns

[`BasicStatements`](statements.BasicStatements.md)

#### Inherited from

FormState.resetErrorStateFields

#### Defined in

@yolm/boost/dist/formState.d.ts:30

___

### setTouchedAll

• `get` **setTouchedAll**(): [`BasicStatements`](statements.BasicStatements.md)

#### Returns

[`BasicStatements`](statements.BasicStatements.md)

#### Inherited from

FormState.setTouchedAll

#### Defined in

@yolm/boost/dist/formState.d.ts:44

___

### setTouchedAllFields

• `get` **setTouchedAllFields**(): [`BasicStatements`](statements.BasicStatements.md)

#### Returns

[`BasicStatements`](statements.BasicStatements.md)

#### Inherited from

FormState.setTouchedAllFields

#### Defined in

@yolm/boost/dist/formState.d.ts:28

___

### setTouchedNone

• `get` **setTouchedNone**(): [`BasicStatements`](statements.BasicStatements.md)

#### Returns

[`BasicStatements`](statements.BasicStatements.md)

#### Inherited from

FormState.setTouchedNone

#### Defined in

@yolm/boost/dist/formState.d.ts:45

___

### setTouchedNoneFields

• `get` **setTouchedNoneFields**(): [`BasicStatements`](statements.BasicStatements.md)

#### Returns

[`BasicStatements`](statements.BasicStatements.md)

#### Inherited from

FormState.setTouchedNoneFields

#### Defined in

@yolm/boost/dist/formState.d.ts:29

___

### stateProcedure

• `get` **stateProcedure**(): [`StateStatements`](statements.StateStatements.md)

#### Returns

[`StateStatements`](statements.StateStatements.md)

#### Inherited from

FormState.stateProcedure

#### Defined in

@yolm/boost/dist/formState.d.ts:27

___

### submitting

• `get` **submitting**(): [`SqlExpression`](../namespaces/yom.md#sqlexpression)

#### Returns

[`SqlExpression`](../namespaces/yom.md#sqlexpression)

#### Inherited from

FormState.submitting

#### Defined in

@yolm/boost/dist/formState.d.ts:39

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

@yolm/boost/dist/formState.d.ts:35

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

@yolm/boost/dist/formState.d.ts:33

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

@yolm/boost/dist/formState.d.ts:32

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

@yolm/boost/dist/formState.d.ts:34

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

@yolm/boost/dist/formState.d.ts:38

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

@yolm/boost/dist/formState.d.ts:40
