---
id: "StringField"
title: "Boost"
sidebar_label: "StringField"
sidebar_position: 0
custom_edit_url: null
pagination_prev: null
pagination_next: null
---

## Hierarchy

- `FieldBase`

  ↳ **`StringField`**

## Constructors

### constructor

• **new StringField**(`name`, `displayName`, `maxLength`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `displayName` | `string` |
| `maxLength` | `number` |

#### Overrides

FieldBase.constructor

#### Defined in

@yolm/boost/dist/app.d.ts:299

## Properties

### autoTrim

• `Optional` **autoTrim**: [`AutoTrim`](../namespaces/yom.md#autotrim)

#### Defined in

@yolm/boost/dist/app.d.ts:296

___

### checks

• **checks**: [`FieldCheck`](../interfaces/FieldCheck.md)[]

#### Inherited from

FieldBase.checks

#### Defined in

@yolm/boost/dist/app.d.ts:271

___

### collation

• `Optional` **collation**: [`Collation`](../namespaces/yom.md#collation)

#### Defined in

@yolm/boost/dist/app.d.ts:293

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

### maxBytesPerChar

• `Optional` **maxBytesPerChar**: `number`

#### Defined in

@yolm/boost/dist/app.d.ts:295

___

### maxLength

• **maxLength**: `number`

#### Defined in

@yolm/boost/dist/app.d.ts:291

___

### minLength

• `Optional` **minLength**: `number`

#### Defined in

@yolm/boost/dist/app.d.ts:294

___

### multiline

• `Optional` **multiline**: `boolean`

#### Defined in

@yolm/boost/dist/app.d.ts:297

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

• **type**: ``"String"``

#### Defined in

@yolm/boost/dist/app.d.ts:292

___

### unique

• **unique**: `boolean`

#### Inherited from

FieldBase.unique

#### Defined in

@yolm/boost/dist/app.d.ts:272

___

### usage

• `Optional` **usage**: [`StringUsage`](../modules.md#stringusage)

#### Defined in

@yolm/boost/dist/app.d.ts:298

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