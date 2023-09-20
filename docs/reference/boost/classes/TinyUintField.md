---
id: "TinyUintField"
title: "Boost"
sidebar_label: "TinyUintField"
sidebar_position: 0
custom_edit_url: null
pagination_prev: null
pagination_next: null
---

## Hierarchy

- `IntegerFieldBase`

  ↳ **`TinyUintField`**

## Constructors

### constructor

• **new TinyUintField**(`name`, `displayName`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `displayName` | `string` |

#### Inherited from

IntegerFieldBase.constructor

#### Defined in

@yolm/boost/dist/app.d.ts:278

## Properties

### checks

• **checks**: [`FieldCheck`](../interfaces/FieldCheck.md)[]

#### Inherited from

IntegerFieldBase.checks

#### Defined in

@yolm/boost/dist/app.d.ts:271

___

### default

• `Optional` **default**: [`SqlExpression`](../namespaces/yom.md#sqlexpression)

#### Inherited from

IntegerFieldBase.default

#### Defined in

@yolm/boost/dist/app.d.ts:274

___

### description

• `Optional` **description**: `string`

#### Inherited from

IntegerFieldBase.description

#### Defined in

@yolm/boost/dist/app.d.ts:273

___

### displayName

• **displayName**: `string`

#### Inherited from

IntegerFieldBase.displayName

#### Defined in

@yolm/boost/dist/app.d.ts:268

___

### ext

• **ext**: `Record`<`string`, `any`\>

#### Inherited from

IntegerFieldBase.ext

#### Defined in

@yolm/boost/dist/app.d.ts:277

___

### group

• `Optional` **group**: `string`

#### Inherited from

IntegerFieldBase.group

#### Defined in

@yolm/boost/dist/app.d.ts:275

___

### indexed

• **indexed**: `boolean`

#### Inherited from

IntegerFieldBase.indexed

#### Defined in

@yolm/boost/dist/app.d.ts:276

___

### max

• `Optional` **max**: `string`

#### Inherited from

IntegerFieldBase.max

#### Defined in

@yolm/boost/dist/app.d.ts:303

___

### min

• `Optional` **min**: `string`

#### Inherited from

IntegerFieldBase.min

#### Defined in

@yolm/boost/dist/app.d.ts:302

___

### name

• **name**: `string`

#### Inherited from

IntegerFieldBase.name

#### Defined in

@yolm/boost/dist/app.d.ts:267

___

### notNull

• **notNull**: `boolean`

#### Inherited from

IntegerFieldBase.notNull

#### Defined in

@yolm/boost/dist/app.d.ts:270

___

### renameFrom

• `Optional` **renameFrom**: `string`

#### Inherited from

IntegerFieldBase.renameFrom

#### Defined in

@yolm/boost/dist/app.d.ts:269

___

### type

• **type**: ``"TinyUint"``

#### Defined in

@yolm/boost/dist/app.d.ts:322

___

### unique

• **unique**: `boolean`

#### Inherited from

IntegerFieldBase.unique

#### Defined in

@yolm/boost/dist/app.d.ts:272

___

### usage

• `Optional` **usage**: [`IntegerUsage`](../modules.md#integerusage)

#### Inherited from

IntegerFieldBase.usage

#### Defined in

@yolm/boost/dist/app.d.ts:318

## Accessors

### identName

• `get` **identName**(): `string`

Name of field escaped as sql identifier

#### Returns

`string`

#### Inherited from

IntegerFieldBase.identName

#### Defined in

@yolm/boost/dist/app.d.ts:280

## Methods

### isInteger

▸ **isInteger**(): `boolean`

#### Returns

`boolean`

#### Inherited from

IntegerFieldBase.isInteger

#### Defined in

@yolm/boost/dist/app.d.ts:319

___

### isNumeric

▸ **isNumeric**(): `boolean`

#### Returns

`boolean`

#### Inherited from

IntegerFieldBase.isNumeric

#### Defined in

@yolm/boost/dist/app.d.ts:304

___

### isVariablePrecision

▸ **isVariablePrecision**(): `boolean`

#### Returns

`boolean`

#### Inherited from

IntegerFieldBase.isVariablePrecision

#### Defined in

@yolm/boost/dist/app.d.ts:283
