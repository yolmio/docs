---
id: "DoubleField"
title: "Boost"
sidebar_label: "DoubleField"
sidebar_position: 0
custom_edit_url: null
pagination_prev: null
pagination_next: null
---

## Hierarchy

- `NumericFieldBase`

  ↳ **`DoubleField`**

## Constructors

### constructor

• **new DoubleField**(`name`, `displayName`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `displayName` | `string` |

#### Inherited from

NumericFieldBase.constructor

#### Defined in

@yolm/boost/dist/app.d.ts:278

## Properties

### checks

• **checks**: [`FieldCheck`](../interfaces/FieldCheck.md)[]

#### Inherited from

NumericFieldBase.checks

#### Defined in

@yolm/boost/dist/app.d.ts:271

___

### default

• `Optional` **default**: [`SqlExpression`](../namespaces/yom.md#sqlexpression)

#### Inherited from

NumericFieldBase.default

#### Defined in

@yolm/boost/dist/app.d.ts:274

___

### description

• `Optional` **description**: `string`

#### Inherited from

NumericFieldBase.description

#### Defined in

@yolm/boost/dist/app.d.ts:273

___

### displayName

• **displayName**: `string`

#### Inherited from

NumericFieldBase.displayName

#### Defined in

@yolm/boost/dist/app.d.ts:268

___

### ext

• **ext**: `Record`<`string`, `any`\>

#### Inherited from

NumericFieldBase.ext

#### Defined in

@yolm/boost/dist/app.d.ts:277

___

### group

• `Optional` **group**: `string`

#### Inherited from

NumericFieldBase.group

#### Defined in

@yolm/boost/dist/app.d.ts:275

___

### indexed

• **indexed**: `boolean`

#### Inherited from

NumericFieldBase.indexed

#### Defined in

@yolm/boost/dist/app.d.ts:276

___

### max

• `Optional` **max**: `string`

#### Inherited from

NumericFieldBase.max

#### Defined in

@yolm/boost/dist/app.d.ts:303

___

### min

• `Optional` **min**: `string`

#### Inherited from

NumericFieldBase.min

#### Defined in

@yolm/boost/dist/app.d.ts:302

___

### name

• **name**: `string`

#### Inherited from

NumericFieldBase.name

#### Defined in

@yolm/boost/dist/app.d.ts:267

___

### notNull

• **notNull**: `boolean`

#### Inherited from

NumericFieldBase.notNull

#### Defined in

@yolm/boost/dist/app.d.ts:270

___

### renameFrom

• `Optional` **renameFrom**: `string`

#### Inherited from

NumericFieldBase.renameFrom

#### Defined in

@yolm/boost/dist/app.d.ts:269

___

### type

• **type**: ``"Double"``

#### Defined in

@yolm/boost/dist/app.d.ts:351

___

### unique

• **unique**: `boolean`

#### Inherited from

NumericFieldBase.unique

#### Defined in

@yolm/boost/dist/app.d.ts:272

## Accessors

### identName

• `get` **identName**(): `string`

Name of field escaped as sql identifier

#### Returns

`string`

#### Inherited from

NumericFieldBase.identName

#### Defined in

@yolm/boost/dist/app.d.ts:280

## Methods

### isInteger

▸ **isInteger**(): `boolean`

#### Returns

`boolean`

#### Inherited from

NumericFieldBase.isInteger

#### Defined in

@yolm/boost/dist/app.d.ts:281

___

### isNumeric

▸ **isNumeric**(): `boolean`

#### Returns

`boolean`

#### Inherited from

NumericFieldBase.isNumeric

#### Defined in

@yolm/boost/dist/app.d.ts:304

___

### isVariablePrecision

▸ **isVariablePrecision**(): `boolean`

#### Returns

`boolean`

#### Overrides

NumericFieldBase.isVariablePrecision

#### Defined in

@yolm/boost/dist/app.d.ts:352
