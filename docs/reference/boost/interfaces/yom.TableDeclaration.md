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

@yolm/boost/dist/yom.d.ts:72

___

### name

• **name**: `string`

#### Defined in

@yolm/boost/dist/yom.d.ts:70

___

### query

• `Optional` **query**: [`SqlQuery`](../namespaces/yom.md#sqlquery)

#### Defined in

@yolm/boost/dist/yom.d.ts:71

___

### t

• **t**: ``"TableDeclaration"``

#### Defined in

@yolm/boost/dist/yom.d.ts:69
