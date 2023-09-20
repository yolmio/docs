---
id: "components"
title: "Boost"
sidebar_label: "components"
sidebar_position: 0
custom_edit_url: null
pagination_prev: null
pagination_next: null
---

## Interfaces

- [AlertOpts](../interfaces/components.AlertOpts.md)
- [ButtonOpts](../interfaces/components.ButtonOpts.md)
- [CardOpts](../interfaces/components.CardOpts.md)
- [CardOverflowOpts](../interfaces/components.CardOverflowOpts.md)
- [CheckboxOpts](../interfaces/components.CheckboxOpts.md)
- [CheckedVariation](../interfaces/components.CheckedVariation.md)
- [ChipDeleteOpts](../interfaces/components.ChipDeleteOpts.md)
- [ChipOpts](../interfaces/components.ChipOpts.md)
- [CircularProgressOpts](../interfaces/components.CircularProgressOpts.md)
- [DeleteRecordDialog](../interfaces/components.DeleteRecordDialog.md)
- [DividerOpts](../interfaces/components.DividerOpts.md)
- [FormControlOpts](../interfaces/components.FormControlOpts.md)
- [FormHelperTextOpts](../interfaces/components.FormHelperTextOpts.md)
- [FormLabelOpts](../interfaces/components.FormLabelOpts.md)
- [IconButtonOpts](../interfaces/components.IconButtonOpts.md)
- [InputOpts](../interfaces/components.InputOpts.md)
- [InsertDialogOpts](../interfaces/components.InsertDialogOpts.md)
- [MaterialIconOpts](../interfaces/components.MaterialIconOpts.md)
- [SvgIconOpts](../interfaces/components.SvgIconOpts.md)
- [TextareaOpts](../interfaces/components.TextareaOpts.md)
- [TypographyOpts](../interfaces/components.TypographyOpts.md)
- [UpdateDialogOpts](../interfaces/components.UpdateDialogOpts.md)

## Type Aliases

### EnumSelectOpts

Ƭ **EnumSelectOpts**: `Omit`<`SelectOpts`, ``"children"``\> & { `emptyOption?`: `string` ; `enum`: `string`  }

#### Defined in

@yolm/boost/dist/components/enumSelect.d.ts:3

## Functions

### alert

▸ **alert**(`opts`): [`Node`](../modules.md#node)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`AlertOpts`](../interfaces/components.AlertOpts.md) |

#### Returns

[`Node`](../modules.md#node)

#### Defined in

@yolm/boost/dist/components/alert.d.ts:9

___

### button

▸ **button**(`opts`): [`Node`](../modules.md#node)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ButtonOpts`](../interfaces/components.ButtonOpts.md) |

#### Returns

[`Node`](../modules.md#node)

#### Defined in

@yolm/boost/dist/components/button.d.ts:42

___

### card

▸ **card**(`opts`): [`ElementNode`](../modules.md#elementnode)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`CardOpts`](../interfaces/components.CardOpts.md) |

#### Returns

[`ElementNode`](../modules.md#elementnode)

#### Defined in

@yolm/boost/dist/components/card.d.ts:10

___

### cardOverflow

▸ **cardOverflow**(`opts`): [`ElementNode`](../modules.md#elementnode)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`CardOverflowOpts`](../interfaces/components.CardOverflowOpts.md) |

#### Returns

[`ElementNode`](../modules.md#elementnode)

#### Defined in

@yolm/boost/dist/components/card.d.ts:15

___

### checkbox

▸ **checkbox**(`opts`): [`@yolm/boost`](../modules.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`CheckboxOpts`](../interfaces/components.CheckboxOpts.md) |

#### Returns

[`@yolm/boost`](../modules.md)

#### Defined in

@yolm/boost/dist/components/checkbox.d.ts:17

___

### chip

▸ **chip**(`opts`): [`Node`](../modules.md#node)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ChipOpts`](../interfaces/components.ChipOpts.md) |

#### Returns

[`Node`](../modules.md#node)

#### Defined in

@yolm/boost/dist/components/chip.d.ts:20

___

### chipDelete

▸ **chipDelete**(`opts`): `ElementNode`

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ChipDeleteOpts`](../interfaces/components.ChipDeleteOpts.md) |

#### Returns

`ElementNode`

#### Defined in

@yolm/boost/dist/components/chip.d.ts:25

___

### circularProgress

▸ **circularProgress**(`opts?`): [`Node`](../modules.md#node)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`CircularProgressOpts`](../interfaces/components.CircularProgressOpts.md) |

#### Returns

[`Node`](../modules.md#node)

#### Defined in

@yolm/boost/dist/components/circularProgress.d.ts:9

___

### deleteRecordDialog

▸ **deleteRecordDialog**(`opts`): [`@yolm/boost`](../modules.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`DeleteRecordDialog`](../interfaces/components.DeleteRecordDialog.md) |

#### Returns

[`@yolm/boost`](../modules.md)

#### Defined in

@yolm/boost/dist/components/deleteRecordDialog.d.ts:11

___

### divider

▸ **divider**(`opts?`): [`ElementNode`](../modules.md#elementnode)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`DividerOpts`](../interfaces/components.DividerOpts.md) |

#### Returns

[`ElementNode`](../modules.md#elementnode)

#### Defined in

@yolm/boost/dist/components/divider.d.ts:9

___

### enumSelect

▸ **enumSelect**(`opts`): [`@yolm/boost`](../modules.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`EnumSelectOpts`](components.md#enumselectopts) |

#### Returns

[`@yolm/boost`](../modules.md)

#### Defined in

@yolm/boost/dist/components/enumSelect.d.ts:7

___

### formControl

▸ **formControl**(`opts`): [`ElementNode`](../modules.md#elementnode)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`FormControlOpts`](../interfaces/components.FormControlOpts.md) |

#### Returns

[`ElementNode`](../modules.md#elementnode)

#### Defined in

@yolm/boost/dist/components/formControl.d.ts:12

___

### formHelperText

▸ **formHelperText**(`opts`): `ElementNode`

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`FormHelperTextOpts`](../interfaces/components.FormHelperTextOpts.md) |

#### Returns

`ElementNode`

#### Defined in

@yolm/boost/dist/components/formHelperText.d.ts:6

___

### formLabel

▸ **formLabel**(`opts`): [`Node`](../modules.md#node)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`FormLabelOpts`](../interfaces/components.FormLabelOpts.md) |

#### Returns

[`Node`](../modules.md#node)

#### Defined in

@yolm/boost/dist/components/formLabel.d.ts:7

___

### getTableRecordSelect

▸ **getTableRecordSelect**(`tableName`, `opts`): [`@yolm/boost`](../modules.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tableName` | `string` |
| `opts` | [`TableControlOpts`](../interfaces/TableControlOpts.md) |

#### Returns

[`@yolm/boost`](../modules.md)

#### Defined in

@yolm/boost/dist/components/tableRecordSelect.d.ts:2

___

### iconButton

▸ **iconButton**(`opts`): [`ElementNode`](../modules.md#elementnode)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`IconButtonOpts`](../interfaces/components.IconButtonOpts.md) |

#### Returns

[`ElementNode`](../modules.md#elementnode)

#### Defined in

@yolm/boost/dist/components/iconButton.d.ts:17

___

### input

▸ **input**(`opts`): [`Node`](../modules.md#node)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`InputOpts`](../interfaces/components.InputOpts.md) |

#### Returns

[`Node`](../modules.md#node)

#### Defined in

@yolm/boost/dist/components/input.d.ts:71

___

### insertDialog

▸ **insertDialog**(`opts`): [`@yolm/boost`](../modules.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`InsertDialogOpts`](../interfaces/components.InsertDialogOpts.md) |

#### Returns

[`@yolm/boost`](../modules.md)

#### Defined in

@yolm/boost/dist/components/insertDialog.d.ts:12

___

### materialIcon

▸ **materialIcon**(`opts`): [`Node`](../modules.md#node)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`MaterialIconOpts`](../interfaces/components.MaterialIconOpts.md) \| `IconName` |

#### Returns

[`Node`](../modules.md#node)

#### Defined in

@yolm/boost/dist/components/materialIcon.d.ts:10

___

### svgIcon

▸ **svgIcon**(`opts`): [`Node`](../modules.md#node)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`SvgIconOpts`](../interfaces/components.SvgIconOpts.md) |

#### Returns

[`Node`](../modules.md#node)

#### Defined in

@yolm/boost/dist/components/svgIcon.d.ts:11

___

### textarea

▸ **textarea**(`opts`): [`Node`](../modules.md#node)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`TextareaOpts`](../interfaces/components.TextareaOpts.md) |

#### Returns

[`Node`](../modules.md#node)

#### Defined in

@yolm/boost/dist/components/textarea.d.ts:8

___

### typography

▸ **typography**(`opts`): [`Node`](../modules.md#node)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`TypographyOpts`](../interfaces/components.TypographyOpts.md) |

#### Returns

[`Node`](../modules.md#node)

#### Defined in

@yolm/boost/dist/components/typography.d.ts:29

___

### updateDialog

▸ **updateDialog**(`opts`): [`@yolm/boost`](../modules.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`UpdateDialogOpts`](../interfaces/components.UpdateDialogOpts.md) |

#### Returns

[`@yolm/boost`](../modules.md)

#### Defined in

@yolm/boost/dist/components/updateDialog.d.ts:11
