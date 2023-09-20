---
id: "yom.ScalarDeclaration"
title: "Boost"
sidebar_label: "ScalarDeclaration"
custom_edit_url: null
pagination_prev: null
pagination_next: null
---

[yom](../namespaces/yom.md).ScalarDeclaration

Declares a scalar in the procedure.

A scalar is a single value, e.g. a string, number or date. We have some syntactic sugar to make it easier to work with.

For example if you specify a scalar `foo` you can access it by simply writing `foo` in any expression.

You must specify either `expr` or `type` or both.

If only `expr` is specified, the type of the scalar will be derived from the expression if possible.
If not possible, you must specify the type manually.

## Properties

### expr

• `Optional` **expr**: [`SqlExpression`](../namespaces/yom.md#sqlexpression)

#### Defined in

@yolm/boost/dist/yom.d.ts:107

___

### name

• **name**: `string`

#### Defined in

@yolm/boost/dist/yom.d.ts:106

___

### t

• **t**: ``"ScalarDeclaration"``

#### Defined in

@yolm/boost/dist/yom.d.ts:105

___

### type

• `Optional` **type**: [`FieldType`](../namespaces/yom.md#fieldtype)

#### Defined in

@yolm/boost/dist/yom.d.ts:108
