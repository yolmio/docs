---
id: "Model"
title: "Yolm Object Model"
sidebar_label: "Model"
sidebar_position: 0
custom_edit_url: null
pagination_prev: null
pagination_next: null
---

The complete model of a SPA which can be compiled and run.

## Properties

### api

• `Optional` **api**: [`AppApi`](AppApi.md)

#### Defined in

[yom.ts:24](https://github.com/yolmio/boost/blob/964b449/src/yom.ts#L24)

___

### appDomain

• `Optional` **appDomain**: `string`

#### Defined in

[yom.ts:10](https://github.com/yolmio/boost/blob/964b449/src/yom.ts#L10)

___

### autoTrim

• **autoTrim**: [`AutoTrim`](../modules.md#autotrim)

#### Defined in

[yom.ts:12](https://github.com/yolmio/boost/blob/964b449/src/yom.ts#L12)

___

### collation

• **collation**: [`Collation`](../modules.md#collation)

#### Defined in

[yom.ts:11](https://github.com/yolmio/boost/blob/964b449/src/yom.ts#L11)

___

### db

• **db**: [`Database`](Database.md)

#### Defined in

[yom.ts:15](https://github.com/yolmio/boost/blob/964b449/src/yom.ts#L15)

___

### dbExecutionMode

• **dbExecutionMode**: [`DbExecutionMode`](../modules.md#dbexecutionmode)

Where and how queries and transactions run against the database

#### Defined in

[yom.ts:9](https://github.com/yolmio/boost/blob/964b449/src/yom.ts#L9)

___

### decisionTables

• `Optional` **decisionTables**: [`DecisionTable`](DecisionTable.md)[]

#### Defined in

[yom.ts:18](https://github.com/yolmio/boost/blob/964b449/src/yom.ts#L18)

___

### displayName

• **displayName**: `string`

#### Defined in

[yom.ts:7](https://github.com/yolmio/boost/blob/964b449/src/yom.ts#L7)

___

### enums

• `Optional` **enums**: [`Enum`](Enum.md)[]

#### Defined in

[yom.ts:17](https://github.com/yolmio/boost/blob/964b449/src/yom.ts#L17)

___

### locale

• **locale**: ``"en_us"``

#### Defined in

[yom.ts:5](https://github.com/yolmio/boost/blob/964b449/src/yom.ts#L5)

___

### name

• **name**: `string`

#### Defined in

[yom.ts:6](https://github.com/yolmio/boost/blob/964b449/src/yom.ts#L6)

___

### scalarFunctions

• `Optional` **scalarFunctions**: [`ScalarFunction`](ScalarFunction.md)[]

#### Defined in

[yom.ts:19](https://github.com/yolmio/boost/blob/964b449/src/yom.ts#L19)

___

### scriptDbs

• `Optional` **scriptDbs**: [`ScriptDb`](ScriptDb.md)[]

#### Defined in

[yom.ts:22](https://github.com/yolmio/boost/blob/964b449/src/yom.ts#L22)

___

### scripts

• `Optional` **scripts**: [`Script`](Script.md)[]

#### Defined in

[yom.ts:21](https://github.com/yolmio/boost/blob/964b449/src/yom.ts#L21)

___

### tableFunctions

• `Optional` **tableFunctions**: [`TableFunction`](TableFunction.md)[]

#### Defined in

[yom.ts:20](https://github.com/yolmio/boost/blob/964b449/src/yom.ts#L20)

___

### test

• `Optional` **test**: [`TestModel`](TestModel.md)

#### Defined in

[yom.ts:23](https://github.com/yolmio/boost/blob/964b449/src/yom.ts#L23)

___

### textCast

• **textCast**: [`TextCastInfo`](TextCastInfo.md)

Specifies how to format different types when using the cast function, e.g. cast(foo as string)

#### Defined in

[yom.ts:14](https://github.com/yolmio/boost/blob/964b449/src/yom.ts#L14)

___

### ui

• **ui**: [`UiModel`](UiModel.md)

#### Defined in

[yom.ts:16](https://github.com/yolmio/boost/blob/964b449/src/yom.ts#L16)
