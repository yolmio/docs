---
id: "RealField"
title: "Boost"
sidebar_label: "RealField"
sidebar_position: 0
custom_edit_url: null
pagination_prev: null
pagination_next: null
---

## Hierarchy

- `NumericFieldBase`

  ↳ **`RealField`**

## Constructors

### constructor

• **new RealField**(`name`, `displayName`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `displayName` | `string` |

#### Inherited from

NumericFieldBase.constructor

#### Defined in

[src/app.ts:572](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L572)

## Properties

### checks

• **checks**: [`FieldCheck`](../interfaces/FieldCheck.md)[] = `[]`

#### Inherited from

NumericFieldBase.checks

#### Defined in

[src/app.ts:564](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L564)

___

### default

• `Optional` **default**: [`SqlExpression`](../namespaces/yom.md#sqlexpression)

#### Inherited from

NumericFieldBase.default

#### Defined in

[src/app.ts:567](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L567)

___

### description

• `Optional` **description**: `string`

#### Inherited from

NumericFieldBase.description

#### Defined in

[src/app.ts:566](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L566)

___

### displayName

• **displayName**: `string`

#### Inherited from

NumericFieldBase.displayName

#### Defined in

[src/app.ts:572](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L572)

___

### ext

• **ext**: `Record`<`string`, `any`\> = `{}`

#### Inherited from

NumericFieldBase.ext

#### Defined in

[src/app.ts:570](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L570)

___

### group

• `Optional` **group**: `string`

#### Inherited from

NumericFieldBase.group

#### Defined in

[src/app.ts:568](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L568)

___

### indexed

• **indexed**: `boolean` = `false`

#### Inherited from

NumericFieldBase.indexed

#### Defined in

[src/app.ts:569](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L569)

___

### max

• `Optional` **max**: `string`

#### Inherited from

NumericFieldBase.max

#### Defined in

[src/app.ts:608](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L608)

___

### min

• `Optional` **min**: `string`

#### Inherited from

NumericFieldBase.min

#### Defined in

[src/app.ts:607](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L607)

___

### name

• **name**: `string`

#### Inherited from

NumericFieldBase.name

#### Defined in

[src/app.ts:572](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L572)

___

### notNull

• **notNull**: `boolean` = `false`

#### Inherited from

NumericFieldBase.notNull

#### Defined in

[src/app.ts:563](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L563)

___

### renameFrom

• `Optional` **renameFrom**: `string`

#### Inherited from

NumericFieldBase.renameFrom

#### Defined in

[src/app.ts:562](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L562)

___

### type

• **type**: ``"Real"``

#### Defined in

[src/app.ts:675](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L675)

___

### unique

• **unique**: `boolean` = `false`

#### Inherited from

NumericFieldBase.unique

#### Defined in

[src/app.ts:565](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L565)

## Accessors

### identName

• `get` **identName**(): `string`

Name of field escaped as sql identifier

#### Returns

`string`

#### Inherited from

NumericFieldBase.identName

#### Defined in

[src/app.ts:575](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L575)

## Methods

### isInteger

▸ **isInteger**(): `boolean`

#### Returns

`boolean`

#### Inherited from

NumericFieldBase.isInteger

#### Defined in

[src/app.ts:579](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L579)

___

### isNumeric

▸ **isNumeric**(): `boolean`

#### Returns

`boolean`

#### Inherited from

NumericFieldBase.isNumeric

#### Defined in

[src/app.ts:610](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L610)

___

### isVariablePrecision

▸ **isVariablePrecision**(): `boolean`

#### Returns

`boolean`

#### Overrides

NumericFieldBase.isVariablePrecision

#### Defined in

[src/app.ts:676](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L676)
