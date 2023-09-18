---
id: "yom.AxisOpts"
title: "Boost"
sidebar_label: "AxisOpts"
custom_edit_url: null
pagination_prev: null
pagination_next: null
---

[yom](../namespaces/yom.md).AxisOpts

## Properties

### divisor

• `Optional` **divisor**: [`SqlExpression`](../namespaces/yom.md#sqlexpression)

double, fixed type axes

If specified then the value range determined from minimum to maximum (or low and high) will be divided by this number and ticks will be generated at those division points.
The default divisor is 1.

#### Defined in

[src/yom.ts:1797](https://github.com/yolmio/boost/blob/5cada48/src/yom.ts#L1797)

___

### high

• `Optional` **high**: [`SqlExpression`](../namespaces/yom.md#sqlexpression)

double, Valid for fixed, auto axes

#### Defined in

[src/yom.ts:1768](https://github.com/yolmio/boost/blob/5cada48/src/yom.ts#L1768)

___

### labelInterpolation

• `Optional` **labelInterpolation**: [`SqlExpression`](../namespaces/yom.md#sqlexpression)

Sql expression called to intercept value from axis label

The expression is introduced two scalars into scope `label` (a string) and `index` (an int)

#### Defined in

[src/yom.ts:1760](https://github.com/yolmio/boost/blob/5cada48/src/yom.ts#L1760)

___

### labelOffsetX

• `Optional` **labelOffsetX**: [`SqlExpression`](../namespaces/yom.md#sqlexpression)

double, Allows you to correct label positioning on this axis by positive or negative x offset.

#### Defined in

[src/yom.ts:1746](https://github.com/yolmio/boost/blob/5cada48/src/yom.ts#L1746)

___

### labelOffsetY

• `Optional` **labelOffsetY**: [`SqlExpression`](../namespaces/yom.md#sqlexpression)

double, Allows you to correct label positioning on this axis by positive or negative y offset.

#### Defined in

[src/yom.ts:1750](https://github.com/yolmio/boost/blob/5cada48/src/yom.ts#L1750)

___

### low

• `Optional` **low**: [`SqlExpression`](../namespaces/yom.md#sqlexpression)

double, Valid for fixed, auto axes

#### Defined in

[src/yom.ts:1770](https://github.com/yolmio/boost/blob/5cada48/src/yom.ts#L1770)

___

### offset

• `Optional` **offset**: [`SqlExpression`](../namespaces/yom.md#sqlexpression)

double, The offset of the labels to the chart area

#### Defined in

[src/yom.ts:1738](https://github.com/yolmio/boost/blob/5cada48/src/yom.ts#L1738)

___

### onlyInteger

• `Optional` **onlyInteger**: [`SqlExpression`](../namespaces/yom.md#sqlexpression)

boolean, auto type axes

Can be set to true or false. If set to true, the scale will be generated with whole numbers only.

#### Defined in

[src/yom.ts:1783](https://github.com/yolmio/boost/blob/5cada48/src/yom.ts#L1783)

___

### position

• `Optional` **position**: [`SqlExpression`](../namespaces/yom.md#sqlexpression) \| ``"'start'"`` \| ``"'end'"``

Position where labels are placed. Can be set to `start` or `end` where `start` is equivalent to left or top on vertical axis and `end` is equivalent to right or bottom on horizontal axis.

#### Defined in

[src/yom.ts:1742](https://github.com/yolmio/boost/blob/5cada48/src/yom.ts#L1742)

___

### referenceValue

• `Optional` **referenceValue**: [`SqlExpression`](../namespaces/yom.md#sqlexpression)

double, auto type axes

The reference value can be used to make sure that this value will always be on the chart.
This is especially useful on bipolar charts where the bipolar center always needs to be part of the chart.

#### Defined in

[src/yom.ts:1790](https://github.com/yolmio/boost/blob/5cada48/src/yom.ts#L1790)

___

### scaleMinSpace

• `Optional` **scaleMinSpace**: [`SqlExpression`](../namespaces/yom.md#sqlexpression)

double, valid for auto type axes

This option will be used when finding the right scale division settings.
The amount of ticks on the scale will be determined so that as many ticks as possible will be displayed, while not violating this minimum required space (in pixel).

#### Defined in

[src/yom.ts:1777](https://github.com/yolmio/boost/blob/5cada48/src/yom.ts#L1777)

___

### showGrid

• `Optional` **showGrid**: [`SqlExpression`](../namespaces/yom.md#sqlexpression)

boolean

#### Defined in

[src/yom.ts:1754](https://github.com/yolmio/boost/blob/5cada48/src/yom.ts#L1754)

___

### showLabel

• `Optional` **showLabel**: [`SqlExpression`](../namespaces/yom.md#sqlexpression)

boolean

#### Defined in

[src/yom.ts:1752](https://github.com/yolmio/boost/blob/5cada48/src/yom.ts#L1752)

___

### stretch

• `Optional` **stretch**: [`SqlExpression`](../namespaces/yom.md#sqlexpression)

boolean, step type axes

If set to true the full width will be used to distribute the values where the last value will be at the maximum of the axis length. If false the spaces between the ticks will be evenly distributed instead.

#### Defined in

[src/yom.ts:1813](https://github.com/yolmio/boost/blob/5cada48/src/yom.ts#L1813)

___

### ticks

• `Optional` **ticks**: [`SqlQuery`](../namespaces/yom.md#sqlquery)

for fixed axes

If ticks is explicitly set, then the axis will not compute the ticks with the divisor, but directly use the data in ticks to determine at what points on the axis a tick need to be generated.

for step axes

Ticks to be used to distribute across the axis length. As this axis type relies on the index of the value rather than the value, arbitrary data that can be converted to a string can be used as ticks.

#### Defined in

[src/yom.ts:1807](https://github.com/yolmio/boost/blob/5cada48/src/yom.ts#L1807)

___

### type

• `Optional` **type**: [`SqlExpression`](../namespaces/yom.md#sqlexpression) \| ``"'auto'"`` \| ``"'fixed'"`` \| ``"'step'"``

What kind of axis this is.

If not defined, 'step' will be used for the X-Axis, where the ticks option will be set to the labels in the data and the stretch option will be set to the global fullWidth option.

#### Defined in

[src/yom.ts:1766](https://github.com/yolmio/boost/blob/5cada48/src/yom.ts#L1766)
