---
id: "FileRefTableStatement"
title: "Yolm Object Model"
sidebar_label: "FileRefTableStatement"
sidebar_position: 0
custom_edit_url: null
pagination_prev: null
pagination_next: null
---

Creates table to keep around a dom File, so it doesn't get garbage collected.

Table is of the form:
 uuid: not null and type uuid
 data: nullable and type string, this has no meaning to us, but it can be used to help manage the files

## Properties

### name

• **name**: `string`

#### Defined in

[yom.ts:1519](https://github.com/yolmio/boost/blob/964b449/src/yom.ts#L1519)

___

### t

• **t**: ``"FileRefTable"``

#### Defined in

[yom.ts:1518](https://github.com/yolmio/boost/blob/964b449/src/yom.ts#L1518)
