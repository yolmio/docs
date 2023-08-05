---
id: "TableDeclaration"
title: "Yolm Object Model"
sidebar_label: "TableDeclaration"
sidebar_position: 0
custom_edit_url: null
pagination_prev: null
pagination_next: null
---

Declares a table in the procedure.

You must specify either `query`, `fields` or both.

If only `query` is specified, the fields of the table will be derived from the query if possible.
If not possible, you must specify the fields manually.

## Properties

### fields

• `Optional` **fields**: [`ProcTableField`](ProcTableField.md)[]

#### Defined in

[yom.ts:89](https://github.com/yolmio/boost/blob/964b449/src/yom.ts#L89)

___

### name

• **name**: `string`

#### Defined in

[yom.ts:87](https://github.com/yolmio/boost/blob/964b449/src/yom.ts#L87)

___

### query

• `Optional` **query**: [`SqlQuery`](../modules.md#sqlquery)

#### Defined in

[yom.ts:88](https://github.com/yolmio/boost/blob/964b449/src/yom.ts#L88)

___

### t

• **t**: ``"TableDeclaration"``

#### Defined in

[yom.ts:86](https://github.com/yolmio/boost/blob/964b449/src/yom.ts#L86)
