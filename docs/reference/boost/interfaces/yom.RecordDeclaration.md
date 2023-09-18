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

[src/yom.ts:109](https://github.com/yolmio/boost/blob/5cada48/src/yom.ts#L109)

___

### name

• **name**: `string`

#### Defined in

[src/yom.ts:107](https://github.com/yolmio/boost/blob/5cada48/src/yom.ts#L107)

___

### query

• `Optional` **query**: [`SqlQuery`](../namespaces/yom.md#sqlquery)

#### Defined in

[src/yom.ts:108](https://github.com/yolmio/boost/blob/5cada48/src/yom.ts#L108)

___

### t

• **t**: ``"RecordDeclaration"``

#### Defined in

[src/yom.ts:106](https://github.com/yolmio/boost/blob/5cada48/src/yom.ts#L106)
