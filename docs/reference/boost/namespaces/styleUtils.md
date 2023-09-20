---
id: "styleUtils"
title: "Boost"
sidebar_label: "styleUtils"
sidebar_position: 0
custom_edit_url: null
pagination_prev: null
pagination_next: null
---

## Type Aliases

### Styles

Ƭ **Styles**: `Record`<`string`, [`Style`](../modules.md#style) \| (...`args`: `any`[]) => [`Style`](../modules.md#style)\>

#### Defined in

@yolm/boost/dist/styleUtils.d.ts:32

## Variables

### baseGridStyles

• `Const` **baseGridStyles**: [`StyleObject`](../modules.md#styleobject)

#### Defined in

@yolm/boost/dist/styleUtils.d.ts:27

___

### darkSchemeSelector

• `Const` **darkSchemeSelector**: ``"html[data-yolm-color-scheme=\"dark\"]"``

#### Defined in

@yolm/boost/dist/styleUtils.d.ts:5

___

### displayNoneStyles

• `Const` **displayNoneStyles**: [`StyleObject`](../modules.md#styleobject)

#### Defined in

@yolm/boost/dist/styleUtils.d.ts:30

___

### flexGrowStyles

• `Const` **flexGrowStyles**: [`StyleObject`](../modules.md#styleobject)

#### Defined in

@yolm/boost/dist/styleUtils.d.ts:28

___

### lightSchemeSelector

• `Const` **lightSchemeSelector**: ``"html[data-yolm-color-scheme=\"light\"]"``

#### Defined in

@yolm/boost/dist/styleUtils.d.ts:4

___

### visibilityHidden

• `Const` **visibilityHidden**: [`StyleObject`](../modules.md#styleobject)

#### Defined in

@yolm/boost/dist/styleUtils.d.ts:29

___

### visuallyHiddenStyles

• `Const` **visuallyHiddenStyles**: [`StyleObject`](../modules.md#styleobject)

#### Defined in

@yolm/boost/dist/styleUtils.d.ts:31

## Functions

### containerStyles

▸ **containerStyles**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `lg` | { `maxWidth`: `number`  } |
| `lg.maxWidth` | `number` |
| `md` | { `maxWidth`: `number`  } |
| `md.maxWidth` | `number` |
| `mx` | `string` |
| `px` | `number` |
| `sm` | { `maxWidth`: `number`  } |
| `sm.maxWidth` | `number` |
| `width` | `string` |
| `xl` | { `maxWidth`: `number`  } |
| `xl.maxWidth` | `number` |

#### Defined in

@yolm/boost/dist/styleUtils.d.ts:10

___

### createHarmonizeVars

▸ **createHarmonizeVars**(`variant`, `color`): [`StyleObject`](../modules.md#styleobject)

#### Parameters

| Name | Type |
| :------ | :------ |
| `variant` | ``"soft"`` \| ``"solid"`` |
| `color` | `ColorPaletteProp` |

#### Returns

[`StyleObject`](../modules.md#styleobject)

#### Defined in

@yolm/boost/dist/styleUtils.d.ts:7

___

### createSoftHarmonizeVars

▸ **createSoftHarmonizeVars**(`color`): [`StyleObject`](../modules.md#styleobject)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | `ColorPaletteProp` |

#### Returns

[`StyleObject`](../modules.md#styleobject)

#### Defined in

@yolm/boost/dist/styleUtils.d.ts:8

___

### createSolidHarmonizeVars

▸ **createSolidHarmonizeVars**(`color`): [`StyleObject`](../modules.md#styleobject)

#### Parameters

| Name | Type |
| :------ | :------ |
| `color` | `ColorPaletteProp` |

#### Returns

[`StyleObject`](../modules.md#styleobject)

#### Defined in

@yolm/boost/dist/styleUtils.d.ts:9

___

### createStyles

▸ **createStyles**<`T`\>(`styles`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Styles`](styleUtils.md#styles) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `styles` | `T` |

#### Returns

`T`

#### Defined in

@yolm/boost/dist/styleUtils.d.ts:33

___

### cssVar

▸ **cssVar**(`n`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `CssVar` |

#### Returns

`string`

#### Defined in

@yolm/boost/dist/styleUtils.d.ts:3

___

### getVariantStyle

▸ **getVariantStyle**(`variant`, `color`, `state?`): [`StyleObject`](../modules.md#styleobject)

#### Parameters

| Name | Type |
| :------ | :------ |
| `variant` | `Variant` |
| `color` | `ColorPaletteProp` \| ``"harmonize"`` |
| `state?` | ``"disabled"`` \| ``"hover"`` \| ``"active"`` |

#### Returns

[`StyleObject`](../modules.md#styleobject)

#### Defined in

@yolm/boost/dist/styleUtils.d.ts:6
