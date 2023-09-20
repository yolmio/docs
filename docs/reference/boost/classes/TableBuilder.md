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

@yolm/boost/dist/app.d.ts:417

## Accessors

### catalog

• `get` **catalog**(): [`TableCatalog`](TableCatalog.md)

Predefined fields and field groups that help you build tables faster.

These also have the added benefit of integrating with other parts of the app, such as the ui and api.

#### Returns

[`TableCatalog`](TableCatalog.md)

#### Defined in

@yolm/boost/dist/app.d.ts:423

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

@yolm/boost/dist/app.d.ts:467

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

@yolm/boost/dist/app.d.ts:435

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

@yolm/boost/dist/app.d.ts:439

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

@yolm/boost/dist/app.d.ts:426

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

@yolm/boost/dist/app.d.ts:469

___

### createDefaultNameMatch

▸ **createDefaultNameMatch**(): [`TableBuilder`](TableBuilder.md)

#### Returns

[`TableBuilder`](TableBuilder.md)

#### Defined in

@yolm/boost/dist/app.d.ts:470

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

@yolm/boost/dist/app.d.ts:428

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

@yolm/boost/dist/app.d.ts:453

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

@yolm/boost/dist/app.d.ts:471

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

@yolm/boost/dist/app.d.ts:424

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

@yolm/boost/dist/app.d.ts:441

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

@yolm/boost/dist/app.d.ts:462

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

@yolm/boost/dist/app.d.ts:465

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

@yolm/boost/dist/app.d.ts:468

___

### finish

▸ **finish**(): [`Table`](Table.md)

#### Returns

[`Table`](Table.md)

#### Defined in

@yolm/boost/dist/app.d.ts:478

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

@yolm/boost/dist/app.d.ts:464

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

@yolm/boost/dist/app.d.ts:461

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

@yolm/boost/dist/app.d.ts:434

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

@yolm/boost/dist/app.d.ts:476

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

@yolm/boost/dist/app.d.ts:460

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

@yolm/boost/dist/app.d.ts:443

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

@yolm/boost/dist/app.d.ts:427

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

@yolm/boost/dist/app.d.ts:448

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

@yolm/boost/dist/app.d.ts:463

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

@yolm/boost/dist/app.d.ts:474

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

@yolm/boost/dist/app.d.ts:440

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

@yolm/boost/dist/app.d.ts:473

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

@yolm/boost/dist/app.d.ts:472

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

@yolm/boost/dist/app.d.ts:425

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

@yolm/boost/dist/app.d.ts:475

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

@yolm/boost/dist/app.d.ts:459

___

### setFormControl

▸ **setFormControl**(`type`): [`TableBuilder`](TableBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`CustomTableControl`](../modules.md#customtablecontrol) \| ``"Select"`` \| ``"Combobox"`` |

#### Returns

[`TableBuilder`](TableBuilder.md)

#### Defined in

@yolm/boost/dist/app.d.ts:477

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

@yolm/boost/dist/app.d.ts:433

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

@yolm/boost/dist/app.d.ts:437

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

@yolm/boost/dist/app.d.ts:458

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

@yolm/boost/dist/app.d.ts:429

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

@yolm/boost/dist/app.d.ts:430

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

@yolm/boost/dist/app.d.ts:432

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

@yolm/boost/dist/app.d.ts:436

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

@yolm/boost/dist/app.d.ts:431

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

@yolm/boost/dist/app.d.ts:438

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

@yolm/boost/dist/app.d.ts:466

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

@yolm/boost/dist/app.d.ts:442
