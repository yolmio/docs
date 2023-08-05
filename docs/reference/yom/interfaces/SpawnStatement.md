---
id: "SpawnStatement"
title: "Yolm Object Model"
sidebar_label: "SpawnStatement"
sidebar_position: 0
custom_edit_url: null
pagination_prev: null
pagination_next: null
---

This will run a set of statements as a new asynchronous task, this means this can
run concurrently with the task that spawned it.

`detached` makes it so that the task is not aborted when the parent task is aborted, by default
the task is aborted when the parent task is aborted.

## Properties

### detached

• `Optional` **detached**: `boolean`

#### Defined in

[yom.ts:1232](https://github.com/yolmio/boost/blob/964b449/src/yom.ts#L1232)

___

### handleScalar

• `Optional` **handleScalar**: `string`

#### Defined in

[yom.ts:1233](https://github.com/yolmio/boost/blob/964b449/src/yom.ts#L1233)

___

### statements

• **statements**: [`ClientProcStatement`](../modules.md#clientprocstatement)[]

#### Defined in

[yom.ts:1234](https://github.com/yolmio/boost/blob/964b449/src/yom.ts#L1234)

___

### t

• **t**: ``"Spawn"``

#### Defined in

[yom.ts:1231](https://github.com/yolmio/boost/blob/964b449/src/yom.ts#L1231)
