---
id: "yom.RecordDeclaration"
title: "Boost"
sidebar_label: "RecordDeclaration"
custom_edit_url: null
pagination_prev: null
pagination_next: null
---

[yom](../namespaces/yom.md).RecordDeclaration

Declares a record in the procedure.

A record is a table with exactly one row and some syntactic sugar to make it easier to work with.

For example if you specify a record `foo` you can access a field from it by simply writing `foo.field_name`.

You must specify either `query`, `fields` or both.

If only `query` is specified, the fields of the table will be derived from the query if possible.
If not possible, you must specify the fields manually.

## Properties

### fields

• `Optional` **fields**: [`ProcTableField`](yom.ProcTableField.md)[]

#### Defined in

@yolm/boost/dist/yom.d.ts:90

___

### name

• **name**: `string`

#### Defined in

@yolm/boost/dist/yom.d.ts:88

___

### query

• `Optional` **query**: [`SqlQuery`](../namespaces/yom.md#sqlquery)

#### Defined in

@yolm/boost/dist/yom.d.ts:89

___

### t

• **t**: ``"RecordDeclaration"``

#### Defined in

@yolm/boost/dist/yom.d.ts:87
