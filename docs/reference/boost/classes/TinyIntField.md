---
id: "TinyIntField"
title: "Boost"
sidebar_label: "TinyIntField"
sidebar_position: 0
custom_edit_url: null
pagination_prev: null
pagination_next: null
---

## Hierarchy

- `IntegerFieldBase`

  ↳ **`TinyIntField`**

## Constructors

### constructor

• **new TinyIntField**(`name`, `displayName`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `displayName` | `string` |

#### Inherited from

IntegerFieldBase.constructor

#### Defined in

[src/app.ts:572](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L572)

## Properties

### checks

• **checks**: [`FieldCheck`](../interfaces/FieldCheck.md)[] = `[]`

#### Inherited from

IntegerFieldBase.checks

#### Defined in

[src/app.ts:564](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L564)

___

### default

• `Optional` **default**: [`SqlExpression`](../namespaces/yom.md#sqlexpression)

#### Inherited from

IntegerFieldBase.default

#### Defined in

[src/app.ts:567](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L567)

___

### description

• `Optional` **description**: `string`

#### Inherited from

IntegerFieldBase.description

#### Defined in

[src/app.ts:566](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L566)

___

### displayName

• **displayName**: `string`

#### Inherited from

IntegerFieldBase.displayName

#### Defined in

[src/app.ts:572](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L572)

___

### ext

• **ext**: `Record`<`string`, `any`\> = `{}`

#### Inherited from

IntegerFieldBase.ext

#### Defined in

[src/app.ts:570](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L570)

___

### group

• `Optional` **group**: `string`

#### Inherited from

IntegerFieldBase.group

#### Defined in

[src/app.ts:568](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L568)

___

### indexed

• **indexed**: `boolean` = `false`

#### Inherited from

IntegerFieldBase.indexed

#### Defined in

[src/app.ts:569](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L569)

___

### max

• `Optional` **max**: `string`

#### Inherited from

IntegerFieldBase.max

#### Defined in

[src/app.ts:608](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L608)

___

### min

• `Optional` **min**: `string`

#### Inherited from

IntegerFieldBase.min

#### Defined in

[src/app.ts:607](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L607)

___

### name

• **name**: `string`

#### Inherited from

IntegerFieldBase.name

#### Defined in

[src/app.ts:572](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L572)

___

### notNull

• **notNull**: `boolean` = `false`

#### Inherited from

IntegerFieldBase.notNull

#### Defined in

[src/app.ts:563](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L563)

___

### renameFrom

• `Optional` **renameFrom**: `string`

#### Inherited from

IntegerFieldBase.renameFrom

#### Defined in

[src/app.ts:562](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L562)

___

### type

• **type**: ``"TinyInt"``

#### Defined in

[src/app.ts:652](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L652)

___

### unique

• **unique**: `boolean` = `false`

#### Inherited from

IntegerFieldBase.unique

#### Defined in

[src/app.ts:565](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L565)

___

### usage

• `Optional` **usage**: [`IntegerUsage`](../modules.md#integerusage)

#### Inherited from

IntegerFieldBase.usage

#### Defined in

[src/app.ts:632](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L632)

## Accessors

### identName

• `get` **identName**(): `string`

Name of field escaped as sql identifier

#### Returns

`string`

#### Inherited from

IntegerFieldBase.identName

#### Defined in

[src/app.ts:575](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L575)

## Methods

### isInteger

▸ **isInteger**(): `boolean`

#### Returns

`boolean`

#### Inherited from

IntegerFieldBase.isInteger

#### Defined in

[src/app.ts:634](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L634)

___

### isNumeric

▸ **isNumeric**(): `boolean`

#### Returns

`boolean`

#### Inherited from

IntegerFieldBase.isNumeric

#### Defined in

[src/app.ts:610](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L610)

___

### isVariablePrecision

▸ **isVariablePrecision**(): `boolean`

#### Returns

`boolean`

#### Inherited from

IntegerFieldBase.isVariablePrecision

#### Defined in

[src/app.ts:585](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L585)
