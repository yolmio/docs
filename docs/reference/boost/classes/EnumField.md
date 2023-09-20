---
id: "EnumField"
title: "Boost"
sidebar_label: "EnumField"
sidebar_position: 0
custom_edit_url: null
pagination_prev: null
pagination_next: null
---

## Hierarchy

- `FieldBase`

  ↳ **`EnumField`**

## Constructors

### constructor

• **new EnumField**(`name`, `displayName`, `_enum`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `displayName` | `string` |
| `_enum` | `string` |

#### Overrides

FieldBase.constructor

#### Defined in

@yolm/boost/dist/app.d.ts:405

## Properties

### checks

• **checks**: [`FieldCheck`](../interfaces/FieldCheck.md)[]

#### Inherited from

FieldBase.checks

#### Defined in

@yolm/boost/dist/app.d.ts:271

___

### default

• `Optional` **default**: [`SqlExpression`](../namespaces/yom.md#sqlexpression)

#### Inherited from

FieldBase.default

#### Defined in

@yolm/boost/dist/app.d.ts:274

___

### description

• `Optional` **description**: `string`

#### Inherited from

FieldBase.description

#### Defined in

@yolm/boost/dist/app.d.ts:273

___

### displayName

• **displayName**: `string`

#### Inherited from

FieldBase.displayName

#### Defined in

@yolm/boost/dist/app.d.ts:268

___

### enum

• **enum**: `string`

#### Defined in

@yolm/boost/dist/app.d.ts:404

___

### ext

• **ext**: `Record`<`string`, `any`\>

#### Inherited from

FieldBase.ext

#### Defined in

@yolm/boost/dist/app.d.ts:277

___

### group

• `Optional` **group**: `string`

#### Inherited from

FieldBase.group

#### Defined in

@yolm/boost/dist/app.d.ts:275

___

### indexed

• **indexed**: `boolean`

#### Inherited from

FieldBase.indexed

#### Defined in

@yolm/boost/dist/app.d.ts:276

___

### name

• **name**: `string`

#### Inherited from

FieldBase.name

#### Defined in

@yolm/boost/dist/app.d.ts:267

___

### notNull

• **notNull**: `boolean`

#### Inherited from

FieldBase.notNull

#### Defined in

@yolm/boost/dist/app.d.ts:270

___

### renameFrom

• `Optional` **renameFrom**: `string`

#### Inherited from

FieldBase.renameFrom

#### Defined in

@yolm/boost/dist/app.d.ts:269

___

### type

• **type**: ``"Enum"``

#### Defined in

@yolm/boost/dist/app.d.ts:403

___

### unique

• **unique**: `boolean`

#### Inherited from

FieldBase.unique

#### Defined in

@yolm/boost/dist/app.d.ts:272

## Accessors

### identName

• `get` **identName**(): `string`

Name of field escaped as sql identifier

#### Returns

`string`

#### Inherited from

FieldBase.identName

#### Defined in

@yolm/boost/dist/app.d.ts:280

## Methods

### isInteger

▸ **isInteger**(): `boolean`

#### Returns

`boolean`

#### Inherited from

FieldBase.isInteger

#### Defined in

@yolm/boost/dist/app.d.ts:281

___

### isNumeric

▸ **isNumeric**(): `boolean`

#### Returns

`boolean`

#### Inherited from

FieldBase.isNumeric

#### Defined in

@yolm/boost/dist/app.d.ts:282

___

### isVariablePrecision

▸ **isVariablePrecision**(): `boolean`

#### Returns

`boolean`

#### Inherited from

FieldBase.isVariablePrecision

#### Defined in

@yolm/boost/dist/app.d.ts:283
