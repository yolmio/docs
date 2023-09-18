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

[src/app.ts:601](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L601)

## Properties

### autoTrim

• `Optional` **autoTrim**: [`AutoTrim`](../namespaces/yom.md#autotrim)

#### Defined in

[src/app.ts:597](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L597)

___

### checks

• **checks**: [`FieldCheck`](../interfaces/FieldCheck.md)[] = `[]`

#### Inherited from

FieldBase.checks

#### Defined in

[src/app.ts:564](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L564)

___

### collation

• `Optional` **collation**: [`Collation`](../namespaces/yom.md#collation)

#### Defined in

[src/app.ts:594](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L594)

___

### default

• `Optional` **default**: [`SqlExpression`](../namespaces/yom.md#sqlexpression)

#### Inherited from

FieldBase.default

#### Defined in

[src/app.ts:567](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L567)

___

### description

• `Optional` **description**: `string`

#### Inherited from

FieldBase.description

#### Defined in

[src/app.ts:566](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L566)

___

### displayName

• **displayName**: `string`

#### Inherited from

FieldBase.displayName

#### Defined in

[src/app.ts:572](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L572)

___

### ext

• **ext**: `Record`<`string`, `any`\> = `{}`

#### Inherited from

FieldBase.ext

#### Defined in

[src/app.ts:570](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L570)

___

### group

• `Optional` **group**: `string`

#### Inherited from

FieldBase.group

#### Defined in

[src/app.ts:568](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L568)

___

### indexed

• **indexed**: `boolean` = `false`

#### Inherited from

FieldBase.indexed

#### Defined in

[src/app.ts:569](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L569)

___

### maxBytesPerChar

• `Optional` **maxBytesPerChar**: `number`

#### Defined in

[src/app.ts:596](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L596)

___

### maxLength

• **maxLength**: `number`

#### Defined in

[src/app.ts:601](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L601)

___

### minLength

• `Optional` **minLength**: `number`

#### Defined in

[src/app.ts:595](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L595)

___

### multiline

• `Optional` **multiline**: `boolean`

#### Defined in

[src/app.ts:598](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L598)

___

### name

• **name**: `string`

#### Inherited from

FieldBase.name

#### Defined in

[src/app.ts:572](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L572)

___

### notNull

• **notNull**: `boolean` = `false`

#### Inherited from

FieldBase.notNull

#### Defined in

[src/app.ts:563](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L563)

___

### renameFrom

• `Optional` **renameFrom**: `string`

#### Inherited from

FieldBase.renameFrom

#### Defined in

[src/app.ts:562](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L562)

___

### type

• **type**: ``"String"``

#### Defined in

[src/app.ts:593](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L593)

___

### unique

• **unique**: `boolean` = `false`

#### Inherited from

FieldBase.unique

#### Defined in

[src/app.ts:565](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L565)

___

### usage

• `Optional` **usage**: [`StringUsage`](../modules.md#stringusage)

#### Defined in

[src/app.ts:599](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L599)

## Accessors

### identName

• `get` **identName**(): `string`

Name of field escaped as sql identifier

#### Returns

`string`

#### Inherited from

FieldBase.identName

#### Defined in

[src/app.ts:575](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L575)

## Methods

### isInteger

▸ **isInteger**(): `boolean`

#### Returns

`boolean`

#### Inherited from

FieldBase.isInteger

#### Defined in

[src/app.ts:579](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L579)

___

### isNumeric

▸ **isNumeric**(): `boolean`

#### Returns

`boolean`

#### Inherited from

FieldBase.isNumeric

#### Defined in

[src/app.ts:582](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L582)

___

### isVariablePrecision

▸ **isVariablePrecision**(): `boolean`

#### Returns

`boolean`

#### Inherited from

FieldBase.isVariablePrecision

#### Defined in

[src/app.ts:585](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L585)
