---
id: "ForeignKeyField"
title: "Boost"
sidebar_label: "ForeignKeyField"
sidebar_position: 0
custom_edit_url: null
pagination_prev: null
pagination_next: null
---

## Hierarchy

- `FieldBase`

  ↳ **`ForeignKeyField`**

## Constructors

### constructor

• **new ForeignKeyField**(`name`, `displayName`, `table`, `onDelete`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `displayName` | `string` |
| `table` | `string` |
| `onDelete` | [`OnDeleteBehavior`](../namespaces/yom.md#ondeletebehavior) |

#### Overrides

FieldBase.constructor

#### Defined in

[src/app.ts:790](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L790)

## Properties

### checks

• **checks**: [`FieldCheck`](../interfaces/FieldCheck.md)[] = `[]`

#### Inherited from

FieldBase.checks

#### Defined in

[src/app.ts:567](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L567)

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

### onDelete

• **onDelete**: [`OnDeleteBehavior`](../namespaces/yom.md#ondeletebehavior)

#### Defined in

[src/app.ts:794](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L794)

___

### renameFrom

• `Optional` **renameFrom**: `string`

#### Inherited from

FieldBase.renameFrom

#### Defined in

[src/app.ts:565](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L565)

___

### table

• **table**: `string`

#### Defined in

[src/app.ts:793](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L793)

___

### type

• **type**: ``"ForeignKey"``

#### Defined in

[src/app.ts:789](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L789)

___

### unique

• **unique**: `boolean` = `false`

#### Inherited from

FieldBase.unique

#### Defined in

[src/app.ts:568](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L568)

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
