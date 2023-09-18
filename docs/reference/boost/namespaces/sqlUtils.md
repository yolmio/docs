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

[src/utils/sqlHelpers.ts:18](https://github.com/yolmio/boost/blob/5cada48/src/utils/sqlHelpers.ts#L18)

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

[src/utils/sqlHelpers.ts:3](https://github.com/yolmio/boost/blob/5cada48/src/utils/sqlHelpers.ts#L3)

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

[src/utils/sqlHelpers.ts:27](https://github.com/yolmio/boost/blob/5cada48/src/utils/sqlHelpers.ts#L27)

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

[src/utils/sqlHelpers.ts:20](https://github.com/yolmio/boost/blob/5cada48/src/utils/sqlHelpers.ts#L20)

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

[src/utils/sqlHelpers.ts:31](https://github.com/yolmio/boost/blob/5cada48/src/utils/sqlHelpers.ts#L31)

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

[src/utils/sqlHelpers.ts:14](https://github.com/yolmio/boost/blob/5cada48/src/utils/sqlHelpers.ts#L14)

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

[src/utils/sqlHelpers.ts:41](https://github.com/yolmio/boost/blob/5cada48/src/utils/sqlHelpers.ts#L41)

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

[src/utils/sqlHelpers.ts:63](https://github.com/yolmio/boost/blob/5cada48/src/utils/sqlHelpers.ts#L63)
