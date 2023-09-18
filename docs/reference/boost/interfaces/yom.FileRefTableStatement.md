---
id: "yom.FileRefTableStatement"
title: "Boost"
sidebar_label: "FileRefTableStatement"
custom_edit_url: null
pagination_prev: null
pagination_next: null
---

[yom](../namespaces/yom.md).FileRefTableStatement

Creates table to keep around a dom File, so it doesn't get garbage collected.

Table is of the form:
 uuid: not null and type uuid
 data: nullable and type string, this has no meaning to us, but it can be used to help manage the files

## Properties

### name

• **name**: `string`

#### Defined in

[src/yom.ts:1547](https://github.com/yolmio/boost/blob/5cada48/src/yom.ts#L1547)

___

### t

• **t**: ``"FileRefTable"``

#### Defined in

[src/yom.ts:1546](https://github.com/yolmio/boost/blob/5cada48/src/yom.ts#L1546)
