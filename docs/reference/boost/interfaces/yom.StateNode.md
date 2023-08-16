---
id: "yom.StateNode"
title: "Boost"
sidebar_label: "StateNode"
custom_edit_url: null
pagination_prev: null
pagination_next: null
---

[yom](../namespaces/yom.md).StateNode

## Properties

### acceptOldResponses

• `Optional` **acceptOldResponses**: [`SqlExpression`](../namespaces/yom.md#sqlexpression)

boolean, defaults to false

#### Defined in

[src/yom.ts:1557](https://github.com/yolmio/boost/blob/b239488/src/yom.ts#L1557)

___

### allow

• `Optional` **allow**: `string`

Expression that will be executed on the service determining if the current user is allowed to execute this
state node or any below.

#### Defined in

[src/yom.ts:1548](https://github.com/yolmio/boost/blob/b239488/src/yom.ts#L1548)

___

### children

• **children**: [`Node`](../namespaces/yom.md#node)

#### Defined in

[src/yom.ts:1586](https://github.com/yolmio/boost/blob/b239488/src/yom.ts#L1586)

___

### debounce

• `Optional` **debounce**: [`StateDebounceConfig`](yom.StateDebounceConfig.md)

#### Defined in

[src/yom.ts:1585](https://github.com/yolmio/boost/blob/b239488/src/yom.ts#L1585)

___

### errorRecord

• `Optional` **errorRecord**: `string`

Creates an error record accessible in `children` nodes if this state failed.

It has the following fields:

type: not null and a value of enums.sys_error_type
message: nullable string
description: nullable string

#### Defined in

[src/yom.ts:1584](https://github.com/yolmio/boost/blob/b239488/src/yom.ts#L1584)

___

### fallbackDelay

• `Optional` **fallbackDelay**: [`SqlExpression`](../namespaces/yom.md#sqlexpression)

positive integer of miliseconds of delay

#### Defined in

[src/yom.ts:1555](https://github.com/yolmio/boost/blob/b239488/src/yom.ts#L1555)

___

### ignoreAncestorAllows

• `Optional` **ignoreAncestorAllows**: `boolean`

Don't execute ancestor allows for this state node. Useful for an unauthorized branch below a state node with an allow

#### Defined in

[src/yom.ts:1552](https://github.com/yolmio/boost/blob/b239488/src/yom.ts#L1552)

___

### longRunning

• `Optional` **longRunning**: [`SqlExpression`](../namespaces/yom.md#sqlexpression)

boolean, defaults to false

#### Defined in

[src/yom.ts:1559](https://github.com/yolmio/boost/blob/b239488/src/yom.ts#L1559)

___

### procedure

• **procedure**: [`StateStatement`](../namespaces/yom.md#statestatement)[]

#### Defined in

[src/yom.ts:1553](https://github.com/yolmio/boost/blob/b239488/src/yom.ts#L1553)

___

### statusScalar

• `Optional` **statusScalar**: `string`

Indicates the status of the state. Accessible in `children` nodes.

This creates a scalar of type `enums.sys_state_status` with the following values:

received: means that this has successfully ran
requested: means that we have tried to run this on the client, seen it needs something from the service
 and have requested it from the service.
delayed: means that due to the debounce config, we have delayed running this.
fallback_triggered: means that it has been requesting for longer than the fallbackDelay and we might want to show
 something else in the ui.
failed: means that the state has failed to run.
disallowed: means that the allow returned null or false

#### Defined in

[src/yom.ts:1574](https://github.com/yolmio/boost/blob/b239488/src/yom.ts#L1574)

___

### t

• **t**: ``"State"``

#### Defined in

[src/yom.ts:1537](https://github.com/yolmio/boost/blob/b239488/src/yom.ts#L1537)

___

### watch

• `Optional` **watch**: [`SqlExpression`](../namespaces/yom.md#sqlexpression)[]

Expressions to watch for changes, if any of these change, the state will be re-evaluated.

Equality is as expected for most types, but null is considered equal to null.

#### Defined in

[src/yom.ts:1543](https://github.com/yolmio/boost/blob/b239488/src/yom.ts#L1543)
