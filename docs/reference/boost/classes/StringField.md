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

[src/app.ts:604](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L604)

## Properties

### autoTrim

• `Optional` **autoTrim**: [`AutoTrim`](../namespaces/yom.md#autotrim)

#### Defined in

[src/app.ts:600](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L600)

___

### checks

• **checks**: [`FieldCheck`](../interfaces/FieldCheck.md)[] = `[]`

#### Inherited from

FieldBase.checks

#### Defined in

[src/app.ts:567](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L567)

___

### collation

• `Optional` **collation**: [`Collation`](../namespaces/yom.md#collation)

#### Defined in

[src/app.ts:597](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L597)

___

### default

• `Optional` **default**: [`SqlExpression`](../namespaces/yom.md#sqlexpression)

#### Inherited from

FieldBase.default

#### Defined in

[src/app.ts:570](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L570)

___

### description

• `Optional` **description**: `string`

#### Inherited from

FieldBase.description

#### Defined in

[src/app.ts:569](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L569)

___

### displayName

• **displayName**: `string`

#### Inherited from

FieldBase.displayName

#### Defined in

[src/app.ts:575](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L575)

___

### ext

• **ext**: `Record`<`string`, `any`\> = `{}`

#### Inherited from

FieldBase.ext

#### Defined in

[src/app.ts:573](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L573)

___

### group

• `Optional` **group**: `string`

#### Inherited from

FieldBase.group

#### Defined in

[src/app.ts:571](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L571)

___

### indexed

• **indexed**: `boolean` = `false`

#### Inherited from

FieldBase.indexed

#### Defined in

[src/app.ts:572](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L572)

___

### maxBytesPerChar

• `Optional` **maxBytesPerChar**: `number`

#### Defined in

[src/app.ts:599](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L599)

___

### maxLength

• **maxLength**: `number`

#### Defined in

[src/app.ts:604](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L604)

___

### minLength

• `Optional` **minLength**: `number`

#### Defined in

[src/app.ts:598](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L598)

___

### multiline

• `Optional` **multiline**: `boolean`

#### Defined in

[src/app.ts:601](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L601)

___

### name

• **name**: `string`

#### Inherited from

FieldBase.name

#### Defined in

[src/app.ts:575](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L575)

___

### notNull

• **notNull**: `boolean` = `false`

#### Inherited from

FieldBase.notNull

#### Defined in

[src/app.ts:566](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L566)

___

### renameFrom

• `Optional` **renameFrom**: `string`

#### Inherited from

FieldBase.renameFrom

#### Defined in

[src/app.ts:565](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L565)

___

### type

• **type**: ``"String"``

#### Defined in

[src/app.ts:596](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L596)

___

### unique

• **unique**: `boolean` = `false`

#### Inherited from

FieldBase.unique

#### Defined in

[src/app.ts:568](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L568)

___

### usage

• `Optional` **usage**: [`StringUsage`](../modules.md#stringusage)

#### Defined in

[src/app.ts:602](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L602)

## Accessors

### identName

• `get` **identName**(): `string`

Name of field escaped as sql identifier

#### Returns

`string`

#### Inherited from

FieldBase.identName

#### Defined in

[src/app.ts:578](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L578)

## Methods

### isInteger

▸ **isInteger**(): `boolean`

#### Returns

`boolean`

#### Inherited from

FieldBase.isInteger

#### Defined in

[src/app.ts:582](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L582)

___

### isNumeric

▸ **isNumeric**(): `boolean`

#### Returns

`boolean`

#### Inherited from

FieldBase.isNumeric

#### Defined in

[src/app.ts:585](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L585)

___

### isVariablePrecision

▸ **isVariablePrecision**(): `boolean`

#### Returns

`boolean`

#### Inherited from

FieldBase.isVariablePrecision

#### Defined in

[src/app.ts:588](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L588)
