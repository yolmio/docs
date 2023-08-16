---
id: "yom.EventHandlerObject"
title: "Boost"
sidebar_label: "EventHandlerObject"
custom_edit_url: null
pagination_prev: null
pagination_next: null
---

[yom](../namespaces/yom.md).EventHandlerObject

## Properties

### detachedFromNode

• `Optional` **detachedFromNode**: `boolean`

This indicates that the event handler should not be aborted when the node
is removed.

By default, when a node is removed, all event handlers associated with it
are aborted. This is to prevent memory leaks.

#### Defined in

[src/yom.ts:1943](https://github.com/yolmio/boost/blob/b239488/src/yom.ts#L1943)

___

### disableAutoCommit

• `Optional` **disableAutoCommit**: `boolean`

#### Defined in

[src/yom.ts:1944](https://github.com/yolmio/boost/blob/b239488/src/yom.ts#L1944)

___

### procedure

• **procedure**: [`DomProcStatement`](../namespaces/yom.md#domprocstatement)[]

#### Defined in

[src/yom.ts:1935](https://github.com/yolmio/boost/blob/b239488/src/yom.ts#L1935)
