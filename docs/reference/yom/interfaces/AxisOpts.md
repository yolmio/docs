---
id: "AxisOpts"
title: "Yolm Object Model"
sidebar_label: "AxisOpts"
sidebar_position: 0
custom_edit_url: null
pagination_prev: null
pagination_next: null
---

## Properties

### divisor

• `Optional` **divisor**: [`SqlExpression`](../modules.md#sqlexpression)

double, fixed type axes

If specified then the value range determined from minimum to maximum (or low and high) will be divided by this number and ticks will be generated at those division points.
The default divisor is 1.

#### Defined in

[yom.ts:1769](https://github.com/yolmio/boost/blob/964b449/src/yom.ts#L1769)

___

### high

• `Optional` **high**: [`SqlExpression`](../modules.md#sqlexpression)

double, Valid for fixed, auto axes

#### Defined in

[yom.ts:1740](https://github.com/yolmio/boost/blob/964b449/src/yom.ts#L1740)

___

### labelInterpolation

• `Optional` **labelInterpolation**: [`SqlExpression`](../modules.md#sqlexpression)

Sql expression called to intercept value from axis label

The expression is introduced two scalars into scope `label` (a string) and `index` (an int)

#### Defined in

[yom.ts:1732](https://github.com/yolmio/boost/blob/964b449/src/yom.ts#L1732)

___

### labelOffsetX

• `Optional` **labelOffsetX**: [`SqlExpression`](../modules.md#sqlexpression)

double, Allows you to correct label positioning on this axis by positive or negative x offset.

#### Defined in

[yom.ts:1718](https://github.com/yolmio/boost/blob/964b449/src/yom.ts#L1718)

___

### labelOffsetY

• `Optional` **labelOffsetY**: [`SqlExpression`](../modules.md#sqlexpression)

double, Allows you to correct label positioning on this axis by positive or negative y offset.

#### Defined in

[yom.ts:1722](https://github.com/yolmio/boost/blob/964b449/src/yom.ts#L1722)

___

### low

• `Optional` **low**: [`SqlExpression`](../modules.md#sqlexpression)

double, Valid for fixed, auto axes

#### Defined in

[yom.ts:1742](https://github.com/yolmio/boost/blob/964b449/src/yom.ts#L1742)

___

### offset

• `Optional` **offset**: [`SqlExpression`](../modules.md#sqlexpression)

double, The offset of the labels to the chart area

#### Defined in

[yom.ts:1710](https://github.com/yolmio/boost/blob/964b449/src/yom.ts#L1710)

___

### onlyInteger

• `Optional` **onlyInteger**: [`SqlExpression`](../modules.md#sqlexpression)

boolean, auto type axes

Can be set to true or false. If set to true, the scale will be generated with whole numbers only.

#### Defined in

[yom.ts:1755](https://github.com/yolmio/boost/blob/964b449/src/yom.ts#L1755)

___

### position

• `Optional` **position**: [`SqlExpression`](../modules.md#sqlexpression) \| ``"'start'"`` \| ``"'end'"``

Position where labels are placed. Can be set to `start` or `end` where `start` is equivalent to left or top on vertical axis and `end` is equivalent to right or bottom on horizontal axis.

#### Defined in

[yom.ts:1714](https://github.com/yolmio/boost/blob/964b449/src/yom.ts#L1714)

___

### referenceValue

• `Optional` **referenceValue**: [`SqlExpression`](../modules.md#sqlexpression)

double, auto type axes

The reference value can be used to make sure that this value will always be on the chart.
This is especially useful on bipolar charts where the bipolar center always needs to be part of the chart.

#### Defined in

[yom.ts:1762](https://github.com/yolmio/boost/blob/964b449/src/yom.ts#L1762)

___

### scaleMinSpace

• `Optional` **scaleMinSpace**: [`SqlExpression`](../modules.md#sqlexpression)

double, valid for auto type axes

This option will be used when finding the right scale division settings.
The amount of ticks on the scale will be determined so that as many ticks as possible will be displayed, while not violating this minimum required space (in pixel).

#### Defined in

[yom.ts:1749](https://github.com/yolmio/boost/blob/964b449/src/yom.ts#L1749)

___

### showGrid

• `Optional` **showGrid**: [`SqlExpression`](../modules.md#sqlexpression)

boolean

#### Defined in

[yom.ts:1726](https://github.com/yolmio/boost/blob/964b449/src/yom.ts#L1726)

___

### showLabel

• `Optional` **showLabel**: [`SqlExpression`](../modules.md#sqlexpression)

boolean

#### Defined in

[yom.ts:1724](https://github.com/yolmio/boost/blob/964b449/src/yom.ts#L1724)

___

### stretch

• `Optional` **stretch**: [`SqlExpression`](../modules.md#sqlexpression)

boolean, step type axes

If set to true the full width will be used to distribute the values where the last value will be at the maximum of the axis length. If false the spaces between the ticks will be evenly distributed instead.

#### Defined in

[yom.ts:1785](https://github.com/yolmio/boost/blob/964b449/src/yom.ts#L1785)

___

### ticks

• `Optional` **ticks**: [`SqlQuery`](../modules.md#sqlquery)

for fixed axes

If ticks is explicitly set, then the axis will not compute the ticks with the divisor, but directly use the data in ticks to determine at what points on the axis a tick need to be generated.

for step axes

Ticks to be used to distribute across the axis length. As this axis type relies on the index of the value rather than the value, arbitrary data that can be converted to a string can be used as ticks.

#### Defined in

[yom.ts:1779](https://github.com/yolmio/boost/blob/964b449/src/yom.ts#L1779)

___

### type

• `Optional` **type**: [`SqlExpression`](../modules.md#sqlexpression) \| ``"'auto'"`` \| ``"'fixed'"`` \| ``"'step'"``

What kind of axis this is.

If not defined, 'step' will be used for the X-Axis, where the ticks option will be set to the labels in the data and the stretch option will be set to the global fullWidth option.

#### Defined in

[yom.ts:1738](https://github.com/yolmio/boost/blob/964b449/src/yom.ts#L1738)
