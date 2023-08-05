---
id: "ScalarDeclaration"
title: "Yolm Object Model"
sidebar_label: "ScalarDeclaration"
sidebar_position: 0
custom_edit_url: null
pagination_prev: null
pagination_next: null
---

Declares a scalar in the procedure.

A scalar is a single value, e.g. a string, number or date. We have some syntactic sugar to make it easier to work with.

For example if you specify a scalar `foo` you can access it by simply writing `foo` in any expression.

You must specify either `expr` or `type` or both.

If only `expr` is specified, the type of the scalar will be derived from the expression if possible.
If not possible, you must specify the type manually.

## Properties

### expr

• `Optional` **expr**: [`SqlExpression`](../modules.md#sqlexpression)

#### Defined in

[yom.ts:126](https://github.com/yolmio/boost/blob/964b449/src/yom.ts#L126)

___

### name

• **name**: `string`

#### Defined in

[yom.ts:125](https://github.com/yolmio/boost/blob/964b449/src/yom.ts#L125)

___

### t

• **t**: ``"ScalarDeclaration"``

#### Defined in

[yom.ts:124](https://github.com/yolmio/boost/blob/964b449/src/yom.ts#L124)

___

### type

• `Optional` **type**: [`FieldType`](../modules.md#fieldtype)

#### Defined in

[yom.ts:127](https://github.com/yolmio/boost/blob/964b449/src/yom.ts#L127)
