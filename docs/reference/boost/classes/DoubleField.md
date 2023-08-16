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

[src/app.ts:575](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L575)

## Properties

### checks

• **checks**: [`FieldCheck`](../interfaces/FieldCheck.md)[] = `[]`

#### Inherited from

NumericFieldBase.checks

#### Defined in

[src/app.ts:567](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L567)

___

### default

• `Optional` **default**: [`SqlExpression`](../namespaces/yom.md#sqlexpression)

#### Inherited from

NumericFieldBase.default

#### Defined in

[src/app.ts:570](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L570)

___

### description

• `Optional` **description**: `string`

#### Inherited from

NumericFieldBase.description

#### Defined in

[src/app.ts:569](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L569)

___

### displayName

• **displayName**: `string`

#### Inherited from

NumericFieldBase.displayName

#### Defined in

[src/app.ts:575](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L575)

___

### ext

• **ext**: `Record`<`string`, `any`\> = `{}`

#### Inherited from

NumericFieldBase.ext

#### Defined in

[src/app.ts:573](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L573)

___

### group

• `Optional` **group**: `string`

#### Inherited from

NumericFieldBase.group

#### Defined in

[src/app.ts:571](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L571)

___

### indexed

• **indexed**: `boolean` = `false`

#### Inherited from

NumericFieldBase.indexed

#### Defined in

[src/app.ts:572](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L572)

___

### max

• `Optional` **max**: `string`

#### Inherited from

NumericFieldBase.max

#### Defined in

[src/app.ts:611](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L611)

___

### min

• `Optional` **min**: `string`

#### Inherited from

NumericFieldBase.min

#### Defined in

[src/app.ts:610](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L610)

___

### name

• **name**: `string`

#### Inherited from

NumericFieldBase.name

#### Defined in

[src/app.ts:575](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L575)

___

### notNull

• **notNull**: `boolean` = `false`

#### Inherited from

NumericFieldBase.notNull

#### Defined in

[src/app.ts:566](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L566)

___

### renameFrom

• `Optional` **renameFrom**: `string`

#### Inherited from

NumericFieldBase.renameFrom

#### Defined in

[src/app.ts:565](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L565)

___

### type

• **type**: ``"Double"``

#### Defined in

[src/app.ts:684](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L684)

___

### unique

• **unique**: `boolean` = `false`

#### Inherited from

NumericFieldBase.unique

#### Defined in

[src/app.ts:568](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L568)

## Accessors

### identName

• `get` **identName**(): `string`

Name of field escaped as sql identifier

#### Returns

`string`

#### Inherited from

NumericFieldBase.identName

#### Defined in

[src/app.ts:578](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L578)

## Methods

### isInteger

▸ **isInteger**(): `boolean`

#### Returns

`boolean`

#### Inherited from

NumericFieldBase.isInteger

#### Defined in

[src/app.ts:582](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L582)

___

### isNumeric

▸ **isNumeric**(): `boolean`

#### Returns

`boolean`

#### Inherited from

NumericFieldBase.isNumeric

#### Defined in

[src/app.ts:613](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L613)

___

### isVariablePrecision

▸ **isVariablePrecision**(): `boolean`

#### Returns

`boolean`

#### Overrides

NumericFieldBase.isVariablePrecision

#### Defined in

[src/app.ts:685](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L685)
