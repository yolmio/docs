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

@yolm/boost/dist/formState.d.ts:26

## Accessors

### debugFormState

• `get` **debugFormState**(): [`BasicStatements`](statements.BasicStatements.md)

#### Returns

[`BasicStatements`](statements.BasicStatements.md)

#### Defined in

@yolm/boost/dist/formState.d.ts:41

___

### formError

• `get` **formError**(): [`SqlExpression`](../namespaces/yom.md#sqlexpression)

#### Returns

[`SqlExpression`](../namespaces/yom.md#sqlexpression)

#### Defined in

@yolm/boost/dist/formState.d.ts:36

___

### hasAnyError

• `get` **hasAnyError**(): [`SqlExpression`](../namespaces/yom.md#sqlexpression)

#### Returns

[`SqlExpression`](../namespaces/yom.md#sqlexpression)

#### Defined in

@yolm/boost/dist/formState.d.ts:42

___

### hasAnyFieldsError

• `get` **hasAnyFieldsError**(): [`SqlExpression`](../namespaces/yom.md#sqlexpression)

#### Returns

[`SqlExpression`](../namespaces/yom.md#sqlexpression)

#### Defined in

@yolm/boost/dist/formState.d.ts:31

___

### hasFormError

• `get` **hasFormError**(): [`SqlExpression`](../namespaces/yom.md#sqlexpression)

#### Returns

[`SqlExpression`](../namespaces/yom.md#sqlexpression)

#### Defined in

@yolm/boost/dist/formState.d.ts:37

___

### resetErrorState

• `get` **resetErrorState**(): [`BasicStatements`](statements.BasicStatements.md)

#### Returns

[`BasicStatements`](statements.BasicStatements.md)

#### Defined in

@yolm/boost/dist/formState.d.ts:43

___

### resetErrorStateFields

• `get` **resetErrorStateFields**(): [`BasicStatements`](statements.BasicStatements.md)

#### Returns

[`BasicStatements`](statements.BasicStatements.md)

#### Defined in

@yolm/boost/dist/formState.d.ts:30

___

### setTouchedAll

• `get` **setTouchedAll**(): [`BasicStatements`](statements.BasicStatements.md)

#### Returns

[`BasicStatements`](statements.BasicStatements.md)

#### Defined in

@yolm/boost/dist/formState.d.ts:44

___

### setTouchedAllFields

• `get` **setTouchedAllFields**(): [`BasicStatements`](statements.BasicStatements.md)

#### Returns

[`BasicStatements`](statements.BasicStatements.md)

#### Defined in

@yolm/boost/dist/formState.d.ts:28

___

### setTouchedNone

• `get` **setTouchedNone**(): [`BasicStatements`](statements.BasicStatements.md)

#### Returns

[`BasicStatements`](statements.BasicStatements.md)

#### Defined in

@yolm/boost/dist/formState.d.ts:45

___

### setTouchedNoneFields

• `get` **setTouchedNoneFields**(): [`BasicStatements`](statements.BasicStatements.md)

#### Returns

[`BasicStatements`](statements.BasicStatements.md)

#### Defined in

@yolm/boost/dist/formState.d.ts:29

___

### stateProcedure

• `get` **stateProcedure**(): [`StateStatements`](statements.StateStatements.md)

#### Returns

[`StateStatements`](statements.StateStatements.md)

#### Defined in

@yolm/boost/dist/formState.d.ts:27

___

### submitting

• `get` **submitting**(): [`SqlExpression`](../namespaces/yom.md#sqlexpression)

#### Returns

[`SqlExpression`](../namespaces/yom.md#sqlexpression)

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

#### Defined in

@yolm/boost/dist/formState.d.ts:40
