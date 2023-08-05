---
id: "EventHandlerObject"
title: "Yolm Object Model"
sidebar_label: "EventHandlerObject"
sidebar_position: 0
custom_edit_url: null
pagination_prev: null
pagination_next: null
---

## Properties

### detachedFromNode

• `Optional` **detachedFromNode**: `boolean`

This indicates that the event handler should not be aborted when the node
is removed.

By default, when a node is removed, all event handlers associated with it
are aborted. This is to prevent memory leaks.

#### Defined in

[yom.ts:1945](https://github.com/yolmio/boost/blob/964b449/src/yom.ts#L1945)

___

### disableAutoCommit

• `Optional` **disableAutoCommit**: `boolean`

#### Defined in

[yom.ts:1946](https://github.com/yolmio/boost/blob/964b449/src/yom.ts#L1946)

___

### procedure

• **procedure**: [`ClientProcStatement`](../modules.md#clientprocstatement)[]

#### Defined in

[yom.ts:1937](https://github.com/yolmio/boost/blob/964b449/src/yom.ts#L1937)
