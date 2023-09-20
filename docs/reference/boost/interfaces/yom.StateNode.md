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

@yolm/boost/dist/yom.d.ts:668

___

### allow

• `Optional` **allow**: `string`

Expression that will be executed on the service determining if the current user is allowed to execute this
state node or any below.

#### Defined in

@yolm/boost/dist/yom.d.ts:659

___

### children

• **children**: [`Node`](../namespaces/yom.md#node)

#### Defined in

@yolm/boost/dist/yom.d.ts:697

___

### debounce

• `Optional` **debounce**: [`StateDebounceConfig`](yom.StateDebounceConfig.md)

#### Defined in

@yolm/boost/dist/yom.d.ts:696

___

### errorRecord

• `Optional` **errorRecord**: `string`

Creates an error record accessible in `children` nodes if this state failed.

It has the following fields:

type: not null and a value of enums.sys_error_type
message: nullable string
description: nullable string

#### Defined in

@yolm/boost/dist/yom.d.ts:695

___

### fallbackDelay

• `Optional` **fallbackDelay**: [`SqlExpression`](../namespaces/yom.md#sqlexpression)

positive integer of miliseconds of delay

#### Defined in

@yolm/boost/dist/yom.d.ts:666

___

### ignoreAncestorAllows

• `Optional` **ignoreAncestorAllows**: `boolean`

Don't execute ancestor allows for this state node. Useful for an unauthorized branch below a state node with an allow

#### Defined in

@yolm/boost/dist/yom.d.ts:663

___

### longRunning

• `Optional` **longRunning**: [`SqlExpression`](../namespaces/yom.md#sqlexpression)

boolean, defaults to false

#### Defined in

@yolm/boost/dist/yom.d.ts:670

___

### procedure

• **procedure**: [`StateStatement`](../namespaces/yom.md#statestatement)[]

#### Defined in

@yolm/boost/dist/yom.d.ts:664

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

@yolm/boost/dist/yom.d.ts:685

___

### t

• **t**: ``"State"``

#### Defined in

@yolm/boost/dist/yom.d.ts:648

___

### watch

• `Optional` **watch**: [`SqlExpression`](../namespaces/yom.md#sqlexpression)[]

Expressions to watch for changes, if any of these change, the state will be re-evaluated.

Equality is as expected for most types, but null is considered equal to null.

#### Defined in

@yolm/boost/dist/yom.d.ts:654
