---
id: "yom.TableDeclaration"
title: "Boost"
sidebar_label: "TableDeclaration"
custom_edit_url: null
pagination_prev: null
pagination_next: null
---

[yom](../namespaces/yom.md).TableDeclaration

Declares a table in the procedure.

You must specify either `query`, `fields` or both.

If only `query` is specified, the fields of the table will be derived from the query if possible.
If not possible, you must specify the fields manually.

## Properties

### fields

• `Optional` **fields**: [`ProcTableField`](yom.ProcTableField.md)[]

#### Defined in

[src/yom.ts:89](https://github.com/yolmio/boost/blob/b239488/src/yom.ts#L89)

___

### name

• **name**: `string`

#### Defined in

[src/yom.ts:87](https://github.com/yolmio/boost/blob/b239488/src/yom.ts#L87)

___

### query

• `Optional` **query**: [`SqlQuery`](../namespaces/yom.md#sqlquery)

#### Defined in

[src/yom.ts:88](https://github.com/yolmio/boost/blob/b239488/src/yom.ts#L88)

___

### t

• **t**: ``"TableDeclaration"``

#### Defined in

[src/yom.ts:86](https://github.com/yolmio/boost/blob/b239488/src/yom.ts#L86)
