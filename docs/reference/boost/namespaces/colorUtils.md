---
id: "colorUtils"
title: "Boost"
sidebar_label: "colorUtils"
sidebar_position: 0
custom_edit_url: null
pagination_prev: null
pagination_next: null
---

## Interfaces

- [Color](../interfaces/colorUtils.Color.md)

## Functions

### alpha

▸ **alpha**(`color`, `value`): `string`

Sets the absolute transparency of a color.
Any existing alpha values are overwritten.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | `string` | CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color() |
| `value` | `number` | value to set the alpha channel to in the range 0 - 1 |

#### Returns

`string`

A CSS color string. Hex input values are returned as rgb

#### Defined in

@yolm/boost/dist/colorManipulator.d.ts:68

___

### colorChannel

▸ **colorChannel**(`color`): `string`

Returns a channel created from the input color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | `string` | CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color() |

#### Returns

`string`

- The channel for the color, that can be used in rgba or hsla colors

#### Defined in

@yolm/boost/dist/colorManipulator.d.ts:25

___

### darken

▸ **darken**(`color`, `coefficient`): `string`

Darkens a color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | `string` | CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color() |
| `coefficient` | `number` | multiplier in the range 0 - 1 |

#### Returns

`string`

A CSS color string. Hex input values are returned as rgb

#### Defined in

@yolm/boost/dist/colorManipulator.d.ts:75

___

### decomposeColor

▸ **decomposeColor**(`color`): [`Color`](../interfaces/colorUtils.Color.md)

Returns an object with the type and values of a color.

Note: Does not support rgb % values.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | `string` \| [`Color`](../interfaces/colorUtils.Color.md) | CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color() |

#### Returns

[`Color`](../interfaces/colorUtils.Color.md)

#### Defined in

@yolm/boost/dist/colorManipulator.d.ts:18

___

### emphasize

▸ **emphasize**(`color`, `coefficient?`): `string`

Darken or lighten a color, depending on its luminance.
Light colors are darkened, dark colors are lightened.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | `string` | CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color() |
| `coefficient?` | `number` | - |

#### Returns

`string`

A CSS color string. Hex input values are returned as rgb

#### Defined in

@yolm/boost/dist/colorManipulator.d.ts:90

___

### getContrastRatio

▸ **getContrastRatio**(`foreground`, `background`): `number`

Calculates the contrast ratio between two colors.

Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `foreground` | `string` | CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla() |
| `background` | `string` | CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla() |

#### Returns

`number`

A contrast ratio value in the range 0 - 21.

#### Defined in

@yolm/boost/dist/colorManipulator.d.ts:60

___

### getLuminance

▸ **getLuminance**(`color`): `number`

The relative brightness of any point in a color space,
normalized to 0 for darkest black and 1 for lightest white.

Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | `string` | CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color() |

#### Returns

`number`

The relative brightness of the color in the range 0 - 1

#### Defined in

@yolm/boost/dist/colorManipulator.d.ts:51

___

### hexToRgb

▸ **hexToRgb**(`color`): `string`

Converts a color from CSS hex format to CSS rgb format.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | `string` | Hex color, i.e. #nnn or #nnnnnn |

#### Returns

`string`

A CSS rgb color string

#### Defined in

@yolm/boost/dist/colorManipulator.d.ts:6

___

### hslToRgb

▸ **hslToRgb**(`color`): `string`

Converts a color from hsl format to rgb format.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | `string` | HSL color values |

#### Returns

`string`

rgb color values

#### Defined in

@yolm/boost/dist/colorManipulator.d.ts:42

___

### lighten

▸ **lighten**(`color`, `coefficient`): `string`

Lightens a color.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | `string` | CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color() |
| `coefficient` | `number` | multiplier in the range 0 - 1 |

#### Returns

`string`

A CSS color string. Hex input values are returned as rgb

#### Defined in

@yolm/boost/dist/colorManipulator.d.ts:82

___

### recomposeColor

▸ **recomposeColor**(`color`): `string`

Converts a color object with type and values to a string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | [`Color`](../interfaces/colorUtils.Color.md) | Decomposed color |

#### Returns

`string`

#### Defined in

@yolm/boost/dist/colorManipulator.d.ts:30

___

### rgbToHex

▸ **rgbToHex**(`color`): `string`

Converts a color from CSS rgb format to CSS hex format.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `color` | `string` | RGB color, i.e. rgb(n, n, n) |

#### Returns

`string`

A CSS rgb color string, i.e. #nnnnnn

#### Defined in

@yolm/boost/dist/colorManipulator.d.ts:36
