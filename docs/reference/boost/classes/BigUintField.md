---
id: "BigUintField"
title: "Boost"
sidebar_label: "BigUintField"
sidebar_position: 0
custom_edit_url: null
pagination_prev: null
pagination_next: null
---

## Hierarchy

- `IntegerFieldBase`

  ↳ **`BigUintField`**

## Constructors

### constructor

• **new BigUintField**(`name`, `displayName`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `displayName` | `string` |

#### Inherited from

IntegerFieldBase.constructor

#### Defined in

[src/app.ts:575](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L575)

## Properties

### checks

• **checks**: [`FieldCheck`](../interfaces/FieldCheck.md)[] = `[]`

#### Inherited from

IntegerFieldBase.checks

#### Defined in

[src/app.ts:567](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L567)

___

### default

• `Optional` **default**: [`SqlExpression`](../namespaces/yom.md#sqlexpression)

#### Inherited from

IntegerFieldBase.default

#### Defined in

[src/app.ts:570](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L570)

___

### description

• `Optional` **description**: `string`

#### Inherited from

IntegerFieldBase.description

#### Defined in

[src/app.ts:569](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L569)

___

### displayName

• **displayName**: `string`

#### Inherited from

IntegerFieldBase.displayName

#### Defined in

[src/app.ts:575](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L575)

___

### ext

• **ext**: `Record`<`string`, `any`\> = `{}`

#### Inherited from

IntegerFieldBase.ext

#### Defined in

[src/app.ts:573](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L573)

___

### group

• `Optional` **group**: `string`

#### Inherited from

IntegerFieldBase.group

#### Defined in

[src/app.ts:571](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L571)

___

### indexed

• **indexed**: `boolean` = `false`

#### Inherited from

IntegerFieldBase.indexed

#### Defined in

[src/app.ts:572](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L572)

___

### max

• `Optional` **max**: `string`

#### Inherited from

IntegerFieldBase.max

#### Defined in

[src/app.ts:611](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L611)

___

### min

• `Optional` **min**: `string`

#### Inherited from

IntegerFieldBase.min

#### Defined in

[src/app.ts:610](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L610)

___

### name

• **name**: `string`

#### Inherited from

IntegerFieldBase.name

#### Defined in

[src/app.ts:575](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L575)

___

### notNull

• **notNull**: `boolean` = `false`

#### Inherited from

IntegerFieldBase.notNull

#### Defined in

[src/app.ts:566](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L566)

___

### renameFrom

• `Optional` **renameFrom**: `string`

#### Inherited from

IntegerFieldBase.renameFrom

#### Defined in

[src/app.ts:565](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L565)

___

### type

• **type**: ``"BigUint"``

#### Defined in

[src/app.ts:652](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L652)

___

### unique

• **unique**: `boolean` = `false`

#### Inherited from

IntegerFieldBase.unique

#### Defined in

[src/app.ts:568](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L568)

___

### usage

• `Optional` **usage**: [`IntegerUsage`](../modules.md#integerusage)

#### Inherited from

IntegerFieldBase.usage

#### Defined in

[src/app.ts:635](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L635)

## Accessors

### identName

• `get` **identName**(): `string`

Name of field escaped as sql identifier

#### Returns

`string`

#### Inherited from

IntegerFieldBase.identName

#### Defined in

[src/app.ts:578](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L578)

## Methods

### isInteger

▸ **isInteger**(): `boolean`

#### Returns

`boolean`

#### Inherited from

IntegerFieldBase.isInteger

#### Defined in

[src/app.ts:637](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L637)

___

### isNumeric

▸ **isNumeric**(): `boolean`

#### Returns

`boolean`

#### Inherited from

IntegerFieldBase.isNumeric

#### Defined in

[src/app.ts:613](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L613)

___

### isVariablePrecision

▸ **isVariablePrecision**(): `boolean`

#### Returns

`boolean`

#### Inherited from

IntegerFieldBase.isVariablePrecision

#### Defined in

[src/app.ts:588](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L588)
