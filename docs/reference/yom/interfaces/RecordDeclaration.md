---
id: "RecordDeclaration"
title: "Yolm Object Model"
sidebar_label: "RecordDeclaration"
sidebar_position: 0
custom_edit_url: null
pagination_prev: null
pagination_next: null
---

Declares a record in the procedure.

A record is a table with exactly one row and some syntactic sugar to make it easier to work with.

For example if you specify a record `foo` you can access a field from it by simply writing `foo.field_name`.

You must specify either `query`, `fields` or both.

If only `query` is specified, the fields of the table will be derived from the query if possible.
If not possible, you must specify the fields manually.

## Properties

### fields

• `Optional` **fields**: [`ProcTableField`](ProcTableField.md)[]

#### Defined in

[yom.ts:108](https://github.com/yolmio/boost/blob/964b449/src/yom.ts#L108)

___

### name

• **name**: `string`

#### Defined in

[yom.ts:106](https://github.com/yolmio/boost/blob/964b449/src/yom.ts#L106)

___

### query

• `Optional` **query**: [`SqlQuery`](../modules.md#sqlquery)

#### Defined in

[yom.ts:107](https://github.com/yolmio/boost/blob/964b449/src/yom.ts#L107)

___

### t

• **t**: ``"RecordDeclaration"``

#### Defined in

[yom.ts:105](https://github.com/yolmio/boost/blob/964b449/src/yom.ts#L105)
