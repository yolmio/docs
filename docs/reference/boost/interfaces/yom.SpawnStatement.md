---
id: "yom.SpawnStatement"
title: "Boost"
sidebar_label: "SpawnStatement"
custom_edit_url: null
pagination_prev: null
pagination_next: null
---

[yom](../namespaces/yom.md).SpawnStatement

This will run a set of statements as a new asynchronous task, this means this can
run concurrently with the task that spawned it.

`detached` makes it so that the task is not aborted when the parent task is aborted, by default
the task is aborted when the parent task is aborted.

## Properties

### detached

• `Optional` **detached**: `boolean`

#### Defined in

[src/yom.ts:1242](https://github.com/yolmio/boost/blob/5cada48/src/yom.ts#L1242)

___

### handleScalar

• `Optional` **handleScalar**: `string`

#### Defined in

[src/yom.ts:1243](https://github.com/yolmio/boost/blob/5cada48/src/yom.ts#L1243)

___

### statements

• **statements**: [`DomProcStatement`](../namespaces/yom.md#domprocstatement)[]

#### Defined in

[src/yom.ts:1244](https://github.com/yolmio/boost/blob/5cada48/src/yom.ts#L1244)

___

### t

• **t**: ``"Spawn"``

#### Defined in

[src/yom.ts:1241](https://github.com/yolmio/boost/blob/5cada48/src/yom.ts#L1241)
