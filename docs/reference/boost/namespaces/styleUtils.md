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

[src/styleUtils.ts:496](https://github.com/yolmio/boost/blob/5cada48/src/styleUtils.ts#L496)

## Variables

### baseGridStyles

• `Const` **baseGridStyles**: [`StyleObject`](../modules.md#styleobject)

#### Defined in

[src/styleUtils.ts:475](https://github.com/yolmio/boost/blob/5cada48/src/styleUtils.ts#L475)

___

### darkSchemeSelector

• `Const` **darkSchemeSelector**: ``"html[data-yolm-color-scheme=\"dark\"]"``

#### Defined in

[src/styleUtils.ts:11](https://github.com/yolmio/boost/blob/5cada48/src/styleUtils.ts#L11)

___

### displayNoneStyles

• `Const` **displayNoneStyles**: [`StyleObject`](../modules.md#styleobject)

#### Defined in

[src/styleUtils.ts:481](https://github.com/yolmio/boost/blob/5cada48/src/styleUtils.ts#L481)

___

### flexGrowStyles

• `Const` **flexGrowStyles**: [`StyleObject`](../modules.md#styleobject)

#### Defined in

[src/styleUtils.ts:479](https://github.com/yolmio/boost/blob/5cada48/src/styleUtils.ts#L479)

___

### lightSchemeSelector

• `Const` **lightSchemeSelector**: ``"html[data-yolm-color-scheme=\"light\"]"``

#### Defined in

[src/styleUtils.ts:10](https://github.com/yolmio/boost/blob/5cada48/src/styleUtils.ts#L10)

___

### visibilityHidden

• `Const` **visibilityHidden**: [`StyleObject`](../modules.md#styleobject)

#### Defined in

[src/styleUtils.ts:480](https://github.com/yolmio/boost/blob/5cada48/src/styleUtils.ts#L480)

___

### visuallyHiddenStyles

• `Const` **visuallyHiddenStyles**: [`StyleObject`](../modules.md#styleobject)

#### Defined in

[src/styleUtils.ts:482](https://github.com/yolmio/boost/blob/5cada48/src/styleUtils.ts#L482)

## Functions

### containerStyles

▸ **containerStyles**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `lg` | { `maxWidth`: `number` = app.theme.breakpoints.values.lg } |
| `lg.maxWidth` | `number` |
| `md` | { `maxWidth`: `number` = app.theme.breakpoints.values.md } |
| `md.maxWidth` | `number` |
| `mx` | `string` |
| `px` | `number` |
| `sm` | { `maxWidth`: `number` = app.theme.breakpoints.values.sm } |
| `sm.maxWidth` | `number` |
| `width` | `string` |
| `xl` | { `maxWidth`: `number` = app.theme.breakpoints.values.xl } |
| `xl.maxWidth` | `number` |

#### Defined in

[src/styleUtils.ts:455](https://github.com/yolmio/boost/blob/5cada48/src/styleUtils.ts#L455)

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

[src/styleUtils.ts:42](https://github.com/yolmio/boost/blob/5cada48/src/styleUtils.ts#L42)

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

[src/styleUtils.ts:51](https://github.com/yolmio/boost/blob/5cada48/src/styleUtils.ts#L51)

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

[src/styleUtils.ts:257](https://github.com/yolmio/boost/blob/5cada48/src/styleUtils.ts#L257)

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

[src/styleUtils.ts:498](https://github.com/yolmio/boost/blob/5cada48/src/styleUtils.ts#L498)

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

[src/styleUtils.ts:6](https://github.com/yolmio/boost/blob/5cada48/src/styleUtils.ts#L6)

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

[src/styleUtils.ts:13](https://github.com/yolmio/boost/blob/5cada48/src/styleUtils.ts#L13)
