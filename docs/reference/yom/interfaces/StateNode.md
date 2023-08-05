---
id: "StateNode"
title: "Yolm Object Model"
sidebar_label: "StateNode"
sidebar_position: 0
custom_edit_url: null
pagination_prev: null
pagination_next: null
---

## Properties

### acceptOldResponses

• `Optional` **acceptOldResponses**: [`SqlExpression`](../modules.md#sqlexpression)

boolean, defaults to false

#### Defined in

[yom.ts:1559](https://github.com/yolmio/boost/blob/964b449/src/yom.ts#L1559)

___

### allow

• `Optional` **allow**: `string`

Expression that will be executed on the service determining if the current user is allowed to execute this
state node or any below.

#### Defined in

[yom.ts:1550](https://github.com/yolmio/boost/blob/964b449/src/yom.ts#L1550)

___

### children

• **children**: [`Node`](../modules.md#node)

#### Defined in

[yom.ts:1588](https://github.com/yolmio/boost/blob/964b449/src/yom.ts#L1588)

___

### debounce

• `Optional` **debounce**: [`StateDebounceConfig`](StateDebounceConfig.md)

#### Defined in

[yom.ts:1587](https://github.com/yolmio/boost/blob/964b449/src/yom.ts#L1587)

___

### errorRecord

• `Optional` **errorRecord**: `string`

Creates an error record accessible in `children` nodes if this state failed.

It has the following fields:

type: not null and a value of enums.sys_error_type
message: nullable string
description: nullable string

#### Defined in

[yom.ts:1586](https://github.com/yolmio/boost/blob/964b449/src/yom.ts#L1586)

___

### fallbackDelay

• `Optional` **fallbackDelay**: [`SqlExpression`](../modules.md#sqlexpression)

positive integer of miliseconds of delay

#### Defined in

[yom.ts:1557](https://github.com/yolmio/boost/blob/964b449/src/yom.ts#L1557)

___

### ignoreAncestorAllows

• `Optional` **ignoreAncestorAllows**: `boolean`

Don't execute ancestor allows for this state node. Useful for an unauthorized branch below a state node with an allow

#### Defined in

[yom.ts:1554](https://github.com/yolmio/boost/blob/964b449/src/yom.ts#L1554)

___

### longRunning

• `Optional` **longRunning**: [`SqlExpression`](../modules.md#sqlexpression)

boolean, defaults to false

#### Defined in

[yom.ts:1561](https://github.com/yolmio/boost/blob/964b449/src/yom.ts#L1561)

___

### procedure

• **procedure**: [`StateStatement`](../modules.md#statestatement)[]

#### Defined in

[yom.ts:1555](https://github.com/yolmio/boost/blob/964b449/src/yom.ts#L1555)

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

[yom.ts:1576](https://github.com/yolmio/boost/blob/964b449/src/yom.ts#L1576)

___

### t

• **t**: ``"State"``

#### Defined in

[yom.ts:1539](https://github.com/yolmio/boost/blob/964b449/src/yom.ts#L1539)

___

### watch

• `Optional` **watch**: [`SqlExpression`](../modules.md#sqlexpression)[]

Expressions to watch for changes, if any of these change, the state will be re-evaluated.

Equality is as expected for most types, but null is considered equal to null.

#### Defined in

[yom.ts:1545](https://github.com/yolmio/boost/blob/964b449/src/yom.ts#L1545)
