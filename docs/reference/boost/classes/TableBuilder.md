---
id: "TableBuilder"
title: "Boost"
sidebar_label: "TableBuilder"
sidebar_position: 0
custom_edit_url: null
pagination_prev: null
pagination_next: null
---

## Constructors

### constructor

• **new TableBuilder**(`name`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Defined in

[src/app.ts:834](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L834)

## Accessors

### catalog

• `get` **catalog**(): [`TableCatalog`](TableCatalog.md)

Predefined fields and field groups that help you build tables faster.

These also have the added benefit of integrating with other parts of the app, such as the ui and api.

#### Returns

[`TableCatalog`](TableCatalog.md)

#### Defined in

[src/app.ts:843](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L843)

## Methods

### addField

▸ **addField**(`field`): [`TableBuilder`](TableBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `field` | `BaseFieldBuilder` |

#### Returns

[`TableBuilder`](TableBuilder.md)

#### Defined in

[src/app.ts:1073](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L1073)

___

### bigInt

▸ **bigInt**(`name`): `BaseNumericBuilder`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`BaseNumericBuilder`

#### Defined in

[src/app.ts:893](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L893)

___

### bigUint

▸ **bigUint**(`name`): `BaseNumericBuilder`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`BaseNumericBuilder`

#### Defined in

[src/app.ts:909](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L909)

___

### bool

▸ **bool**(`name`): `BoolFieldBuilder`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`BoolFieldBuilder`

#### Defined in

[src/app.ts:857](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L857)

___

### check

▸ **check**(`check`): [`TableBuilder`](TableBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `check` | [`Check`](../interfaces/Check.md) |

#### Returns

[`TableBuilder`](TableBuilder.md)

#### Defined in

[src/app.ts:1094](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L1094)

___

### createDefaultNameMatch

▸ **createDefaultNameMatch**(): [`TableBuilder`](TableBuilder.md)

#### Returns

[`TableBuilder`](TableBuilder.md)

#### Defined in

[src/app.ts:1113](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L1113)

___

### date

▸ **date**(`name`): `DateFieldBuilder`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`DateFieldBuilder`

#### Defined in

[src/app.ts:865](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L865)

___

### decimal

▸ **decimal**(`name`, `opts`): `DecimalFieldBuilder`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `opts` | `Object` |
| `opts.precision` | `number` |
| `opts.scale` | `number` |
| `opts.signed?` | `boolean` |

#### Returns

`DecimalFieldBuilder`

#### Defined in

[src/app.ts:985](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L985)

___

### description

▸ **description**(`s`): [`TableBuilder`](TableBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

[`TableBuilder`](TableBuilder.md)

#### Defined in

[src/app.ts:1118](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L1118)

___

### displayName

▸ **displayName**(`name`): [`TableBuilder`](TableBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`TableBuilder`](TableBuilder.md)

#### Defined in

[src/app.ts:847](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L847)

___

### double

▸ **double**(`name`): `DoubleFieldBuilder`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`DoubleFieldBuilder`

#### Defined in

[src/app.ts:917](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L917)

___

### email

▸ **email**(`name`): `StringFieldBuilder`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`StringFieldBuilder`

#### Defined in

[src/app.ts:1046](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L1046)

___

### enum

▸ **enum**(`name`, `enumName?`): `EnumFieldBuilder`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `enumName?` | `string` |

#### Returns

`EnumFieldBuilder`

#### Defined in

[src/app.ts:1058](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L1058)

___

### fieldGroup

▸ **fieldGroup**(`name`, `group`): [`TableBuilder`](TableBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `group` | [`FieldGroup`](../modules.md#fieldgroup) |

#### Returns

[`TableBuilder`](TableBuilder.md)

#### Defined in

[src/app.ts:1078](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L1078)

___

### finish

▸ **finish**(): [`Table`](Table.md)

#### Returns

[`Table`](Table.md)

#### Defined in

[src/app.ts:1174](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L1174)

___

### fk

▸ **fk**(`name`, `table?`): `ForeignKeyFieldBuilder`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `table?` | `string` |

#### Returns

`ForeignKeyFieldBuilder`

#### Defined in

[src/app.ts:1054](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L1054)

___

### hoursDuration

▸ **hoursDuration**(`name`, `backing`): `BaseNumericBuilder`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `backing` | [`FieldIntegerTypes`](../namespaces/yom.md#fieldintegertypes) |

#### Returns

`BaseNumericBuilder`

#### Defined in

[src/app.ts:1042](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L1042)

___

### int

▸ **int**(`name`): `BaseNumericBuilder`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`BaseNumericBuilder`

#### Defined in

[src/app.ts:889](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L889)

___

### linkable

▸ **linkable**(`f?`): [`TableBuilder`](TableBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `f?` | (`id`: `string`) => `string` |

#### Returns

[`TableBuilder`](TableBuilder.md)

#### Defined in

[src/app.ts:1158](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L1158)

___

### minutesDuration

▸ **minutesDuration**(`name`, `backing`): `BaseNumericBuilder`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `backing` | [`FieldIntegerTypes`](../namespaces/yom.md#fieldintegertypes) |

#### Returns

`BaseNumericBuilder`

#### Defined in

[src/app.ts:1037](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L1037)

___

### money

▸ **money**(`name`, `opts?`): `BaseNumericBuilder`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `opts?` | [`FieldIntegerTypes`](../namespaces/yom.md#fieldintegertypes) \| { `precision`: `number` ; `scale`: `number` ; `signed?`: `boolean`  } |

#### Returns

`BaseNumericBuilder`

#### Defined in

[src/app.ts:925](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L925)

___

### ordering

▸ **ordering**(`name`): `OrderingFieldBuilder`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`OrderingFieldBuilder`

#### Defined in

[src/app.ts:861](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L861)

___

### percentage

▸ **percentage**(`name`, `opts`): `DecimalFieldBuilder`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `opts` | `Object` |
| `opts.precision` | `number` |
| `opts.scale` | `number` |
| `opts.signed?` | `boolean` |

#### Returns

`DecimalFieldBuilder`

#### Defined in

[src/app.ts:967](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L967)

___

### phoneNumber

▸ **phoneNumber**(`name`): `StringFieldBuilder`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`StringFieldBuilder`

#### Defined in

[src/app.ts:1050](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L1050)

___

### primaryKeyFieldName

▸ **primaryKeyFieldName**(`name`): [`TableBuilder`](TableBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`TableBuilder`](TableBuilder.md)

#### Defined in

[src/app.ts:1141](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L1141)

___

### real

▸ **real**(`name`): `RealFieldBuilder`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`RealFieldBuilder`

#### Defined in

[src/app.ts:913](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L913)

___

### recordDisplayName

▸ **recordDisplayName**(`fields`, `expr?`): [`TableBuilder`](TableBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fields` | `string`[] |
| `expr?` | (...`fields`: `string`[]) => `string` |

#### Returns

[`TableBuilder`](TableBuilder.md)

#### Defined in

[src/app.ts:1128](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L1128)

___

### recordDisplayNameFields

▸ **recordDisplayNameFields**(`fields`): [`TableBuilder`](TableBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fields` | `string`[] |

#### Returns

[`TableBuilder`](TableBuilder.md)

#### Defined in

[src/app.ts:1123](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L1123)

___

### renameFrom

▸ **renameFrom**(`name`): [`TableBuilder`](TableBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`TableBuilder`](TableBuilder.md)

#### Defined in

[src/app.ts:852](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L852)

___

### searchConfig

▸ **searchConfig**(`config`): [`TableBuilder`](TableBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `Omit`<[`RankedSearchTable`](../interfaces/yom.RankedSearchTable.md), ``"table"``\> |

#### Returns

[`TableBuilder`](TableBuilder.md)

#### Defined in

[src/app.ts:1146](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L1146)

___

### secondsDuration

▸ **secondsDuration**(`name`, `backing`): `BaseNumericBuilder`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `backing` | [`FieldIntegerTypes`](../namespaces/yom.md#fieldintegertypes) |

#### Returns

`BaseNumericBuilder`

#### Defined in

[src/app.ts:1033](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L1033)

___

### setFormControl

▸ **setFormControl**(`type`): [`TableBuilder`](TableBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"Select"`` \| ``"Combobox"`` \| [`CustomTableControl`](../modules.md#customtablecontrol) |

#### Returns

[`TableBuilder`](TableBuilder.md)

#### Defined in

[src/app.ts:1165](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L1165)

___

### smallInt

▸ **smallInt**(`name`): `BaseNumericBuilder`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`BaseNumericBuilder`

#### Defined in

[src/app.ts:885](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L885)

___

### smallUint

▸ **smallUint**(`name`): `BaseNumericBuilder`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`BaseNumericBuilder`

#### Defined in

[src/app.ts:901](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L901)

___

### string

▸ **string**(`name`, `maxLength`): `StringFieldBuilder`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `maxLength` | `number` |

#### Returns

`StringFieldBuilder`

#### Defined in

[src/app.ts:1003](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L1003)

___

### time

▸ **time**(`name`): `TimeFieldBuilder`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`TimeFieldBuilder`

#### Defined in

[src/app.ts:869](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L869)

___

### timestamp

▸ **timestamp**(`name`): `TimestampFieldBuilder`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`TimestampFieldBuilder`

#### Defined in

[src/app.ts:873](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L873)

___

### tinyInt

▸ **tinyInt**(`name`): `BaseNumericBuilder`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`BaseNumericBuilder`

#### Defined in

[src/app.ts:881](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L881)

___

### tinyUint

▸ **tinyUint**(`name`): `BaseNumericBuilder`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`BaseNumericBuilder`

#### Defined in

[src/app.ts:897](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L897)

___

### tx

▸ **tx**(`name`): `TxFieldBuilder`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`TxFieldBuilder`

#### Defined in

[src/app.ts:877](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L877)

___

### uint

▸ **uint**(`name`): `BaseNumericBuilder`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`BaseNumericBuilder`

#### Defined in

[src/app.ts:905](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L905)

___

### unique

▸ **unique**(`constraint`): [`TableBuilder`](TableBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `constraint` | [`UniqueConstraint`](../interfaces/yom.UniqueConstraint.md) \| [`UniqueConstraintField`](../namespaces/yom.md#uniqueconstraintfield)[] |

#### Returns

[`TableBuilder`](TableBuilder.md)

#### Defined in

[src/app.ts:1062](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L1062)

___

### uuid

▸ **uuid**(`name`): `UuidFieldBuilder`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`UuidFieldBuilder`

#### Defined in

[src/app.ts:921](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L921)

___

### virtualField

▸ **virtualField**(`virtual`): [`TableBuilder`](TableBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `virtual` | [`VirtualFieldHelper`](../interfaces/VirtualFieldHelper.md) |

#### Returns

[`TableBuilder`](TableBuilder.md)

#### Defined in

[src/app.ts:1099](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L1099)
