---
id: "Ui"
title: "Boost"
sidebar_label: "Ui"
sidebar_position: 0
custom_edit_url: null
pagination_prev: null
pagination_next: null
---

## Constructors

### constructor

• **new Ui**()

## Properties

### deviceDb

• **deviceDb**: [`DeviceDb`](DeviceDb.md)

#### Defined in

[src/app.ts:225](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L225)

___

### globalStyles

• **globalStyles**: [`Style`](../modules.md#style)[] = `[]`

#### Defined in

[src/app.ts:226](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L226)

___

### pages

• **pages**: [`Page`](../interfaces/Page.md)[] = `[]`

#### Defined in

[src/app.ts:228](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L228)

___

### shell

• `Optional` **shell**: (`pages`: [`Node`](../modules.md#node)) => [`Node`](../modules.md#node)

#### Type declaration

▸ (`pages`): [`Node`](../modules.md#node)

##### Parameters

| Name | Type |
| :------ | :------ |
| `pages` | [`Node`](../modules.md#node) |

##### Returns

[`Node`](../modules.md#node)

#### Defined in

[src/app.ts:227](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L227)

___

### webAppConfig

• **webAppConfig**: [`WebAppConfig`](../interfaces/WebAppConfig.md)

#### Defined in

[src/app.ts:219](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L219)

## Methods

### addDashboardGridPage

▸ **addDashboardGridPage**(`fn`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`page`: `DashboardGridBuilder`) => `any` |

#### Returns

`void`

#### Defined in

[src/app.ts:238](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L238)

___

### addDatagridPage

▸ **addDatagridPage**(`table`, `f`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `table` | `string` |
| `f` | (`f`: `DatagridPageBuilder`) => `unknown` |

#### Returns

`void`

#### Defined in

[src/app.ts:278](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L278)

___

### addDbManagementPage

▸ **addDbManagementPage**(`opts?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `DbManagmentPageOpts` |

#### Returns

`void`

#### Defined in

[src/app.ts:242](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L242)

___

### addInsertFormPage

▸ **addInsertFormPage**(`opts`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `InsertFormPageOpts` |

#### Returns

`void`

#### Defined in

[src/app.ts:246](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L246)

___

### addMultiCardInsert

▸ **addMultiCardInsert**(`opts`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `MultiCardInsertPageOpts` |

#### Returns

`void`

#### Defined in

[src/app.ts:254](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L254)

___

### addRecordGridPage

▸ **addRecordGridPage**(`table`, `fn`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `table` | `string` |
| `fn` | (`builder`: `RecordGridBuilder`) => `unknown` |

#### Returns

`void`

#### Defined in

[src/app.ts:258](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L258)

___

### addSimpleDatagridPage

▸ **addSimpleDatagridPage**(`table`, `f`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `table` | `string` |
| `f` | (`f`: `SimpleDatagridPageBuilder`) => `unknown` |

#### Returns

`void`

#### Defined in

[src/app.ts:271](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L271)

___

### addSimpleReportsPage

▸ **addSimpleReportsPage**(`fn`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | (`builder`: `SimpleReportsPageBuilder`) => `unknown` |

#### Returns

`void`

#### Defined in

[src/app.ts:265](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L265)

___

### addUpdateFormPage

▸ **addUpdateFormPage**(`opts`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `UpdateFormPage` |

#### Returns

`void`

#### Defined in

[src/app.ts:250](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L250)

___

### useNavbarShell

▸ **useNavbarShell**(`opts`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `NavbarProps` |

#### Returns

`void`

#### Defined in

[src/app.ts:234](https://github.com/yolmio/boost/blob/5cada48/src/app.ts#L234)
