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

[src/components/enumSelect.ts:8](https://github.com/yolmio/boost/blob/5cada48/src/components/enumSelect.ts#L8)

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

[src/components/alert.ts:79](https://github.com/yolmio/boost/blob/5cada48/src/components/alert.ts#L79)

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

[src/components/button.ts:135](https://github.com/yolmio/boost/blob/5cada48/src/components/button.ts#L135)

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

[src/components/card.ts:136](https://github.com/yolmio/boost/blob/5cada48/src/components/card.ts#L136)

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

[src/components/card.ts:161](https://github.com/yolmio/boost/blob/5cada48/src/components/card.ts#L161)

___

### checkbox

▸ **checkbox**(`opts`): [`Node`](../modules.md#node)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`CheckboxOpts`](../interfaces/components.CheckboxOpts.md) |

#### Returns

[`Node`](../modules.md#node)

#### Defined in

[src/components/checkbox.ts:212](https://github.com/yolmio/boost/blob/5cada48/src/components/checkbox.ts#L212)

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

[src/components/chip.ts:271](https://github.com/yolmio/boost/blob/5cada48/src/components/chip.ts#L271)

___

### chipDelete

▸ **chipDelete**(`opts`): [`ElementNode`](../modules.md#elementnode)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`ChipDeleteOpts`](../interfaces/components.ChipDeleteOpts.md) |

#### Returns

[`ElementNode`](../modules.md#elementnode)

#### Defined in

[src/components/chip.ts:339](https://github.com/yolmio/boost/blob/5cada48/src/components/chip.ts#L339)

___

### circularProgress

▸ **circularProgress**(`opts?`): [`Node`](../modules.md#node)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`CircularProgressOpts`](../interfaces/components.CircularProgressOpts.md) |

#### Returns

[`Node`](../modules.md#node)

#### Defined in

[src/components/circularProgress.ts:161](https://github.com/yolmio/boost/blob/5cada48/src/components/circularProgress.ts#L161)

___

### deleteRecordDialog

▸ **deleteRecordDialog**(`opts`): [`StateNode`](../modules.md#statenode)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`DeleteRecordDialog`](../interfaces/components.DeleteRecordDialog.md) |

#### Returns

[`StateNode`](../modules.md#statenode)

#### Defined in

[src/components/deleteRecordDialog.ts:15](https://github.com/yolmio/boost/blob/5cada48/src/components/deleteRecordDialog.ts#L15)

___

### divider

▸ **divider**(`opts?`): [`ElementNode`](../modules.md#elementnode)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`DividerOpts`](../interfaces/components.DividerOpts.md) |

#### Returns

[`ElementNode`](../modules.md#elementnode)

#### Defined in

[src/components/divider.ts:103](https://github.com/yolmio/boost/blob/5cada48/src/components/divider.ts#L103)

___

### enumSelect

▸ **enumSelect**(`opts`): [`Node`](../modules.md#node)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`EnumSelectOpts`](components.md#enumselectopts) |

#### Returns

[`Node`](../modules.md#node)

#### Defined in

[src/components/enumSelect.ts:32](https://github.com/yolmio/boost/blob/5cada48/src/components/enumSelect.ts#L32)

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

[src/components/formControl.ts:80](https://github.com/yolmio/boost/blob/5cada48/src/components/formControl.ts#L80)

___

### formHelperText

▸ **formHelperText**(`opts`): [`ElementNode`](../modules.md#elementnode)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`FormHelperTextOpts`](../interfaces/components.FormHelperTextOpts.md) |

#### Returns

[`ElementNode`](../modules.md#elementnode)

#### Defined in

[src/components/formHelperText.ts:24](https://github.com/yolmio/boost/blob/5cada48/src/components/formHelperText.ts#L24)

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

[src/components/formLabel.ts:33](https://github.com/yolmio/boost/blob/5cada48/src/components/formLabel.ts#L33)

___

### getTableRecordSelect

▸ **getTableRecordSelect**(`tableName`, `opts`): [`Node`](../modules.md#node)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tableName` | `string` |
| `opts` | [`TableControlOpts`](../interfaces/TableControlOpts.md) |

#### Returns

[`Node`](../modules.md#node)

#### Defined in

[src/components/tableRecordSelect.ts:9](https://github.com/yolmio/boost/blob/5cada48/src/components/tableRecordSelect.ts#L9)

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

[src/components/iconButton.ts:78](https://github.com/yolmio/boost/blob/5cada48/src/components/iconButton.ts#L78)

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

[src/components/input.ts:203](https://github.com/yolmio/boost/blob/5cada48/src/components/input.ts#L203)

___

### insertDialog

▸ **insertDialog**(`opts`): [`SourceMapNode`](../modules.md#sourcemapnode)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`InsertDialogOpts`](../interfaces/components.InsertDialogOpts.md) |

#### Returns

[`SourceMapNode`](../modules.md#sourcemapnode)

#### Defined in

[src/components/insertDialog.ts:45](https://github.com/yolmio/boost/blob/5cada48/src/components/insertDialog.ts#L45)

___

### materialIcon

▸ **materialIcon**(`opts`): [`Node`](../modules.md#node)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `IconName` \| [`MaterialIconOpts`](../interfaces/components.MaterialIconOpts.md) |

#### Returns

[`Node`](../modules.md#node)

#### Defined in

[src/components/materialIcon.ts:20](https://github.com/yolmio/boost/blob/5cada48/src/components/materialIcon.ts#L20)

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

[src/components/svgIcon.ts:42](https://github.com/yolmio/boost/blob/5cada48/src/components/svgIcon.ts#L42)

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

[src/components/textarea.ts:193](https://github.com/yolmio/boost/blob/5cada48/src/components/textarea.ts#L193)

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

[src/components/typography.ts:109](https://github.com/yolmio/boost/blob/5cada48/src/components/typography.ts#L109)

___

### updateDialog

▸ **updateDialog**(`opts`): [`SourceMapNode`](../modules.md#sourcemapnode)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`UpdateDialogOpts`](../interfaces/components.UpdateDialogOpts.md) |

#### Returns

[`SourceMapNode`](../modules.md#sourcemapnode)

#### Defined in

[src/components/updateDialog.ts:47](https://github.com/yolmio/boost/blob/5cada48/src/components/updateDialog.ts#L47)
