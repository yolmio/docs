---
id: "sqlUtils"
title: "Boost"
sidebar_label: "sqlUtils"
sidebar_position: 0
custom_edit_url: null
pagination_prev: null
pagination_next: null
---

## Variables

### sqlEmailRegex

• `Const` **sqlEmailRegex**: ``"'^[a-zA-Z0-9.!#$%&''*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$'"``

#### Defined in

@yolm/boost/dist/utils/sqlHelpers.d.ts:3

## Functions

### escapeStringLiteral

▸ **escapeStringLiteral**(`s`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

`string`

#### Defined in

@yolm/boost/dist/utils/sqlHelpers.d.ts:1

___

### ident

▸ **ident**(`s`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

`string`

#### Defined in

@yolm/boost/dist/utils/sqlHelpers.d.ts:5

___

### parenWrap

▸ **parenWrap**(`s`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

`string`

#### Defined in

@yolm/boost/dist/utils/sqlHelpers.d.ts:4

___

### recordDisplayNameExpr

▸ **recordDisplayNameExpr**(`table`, `recordName?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `table` | `string` |
| `recordName?` | `string` |

#### Returns

`string`

#### Defined in

@yolm/boost/dist/utils/sqlHelpers.d.ts:6

___

### stringLiteral

▸ **stringLiteral**(`s`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `string` |

#### Returns

`string`

#### Defined in

@yolm/boost/dist/utils/sqlHelpers.d.ts:2

___

### tableFieldSql

▸ **tableFieldSql**(`tableName`, `field`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tableName` | `string` |
| `field` | `string` |

#### Returns

`string`

#### Defined in

@yolm/boost/dist/utils/sqlHelpers.d.ts:7

___

### tableIdSql

▸ **tableIdSql**(`tableName`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tableName` | `string` |

#### Returns

`string`

#### Defined in

@yolm/boost/dist/utils/sqlHelpers.d.ts:8
