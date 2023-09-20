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

@yolm/boost/dist/app.d.ts:68

___

### globalStyles

• **globalStyles**: [`Style`](../modules.md#style)[]

#### Defined in

@yolm/boost/dist/app.d.ts:69

___

### pages

• **pages**: [`Page`](../interfaces/Page.md)[]

#### Defined in

@yolm/boost/dist/app.d.ts:71

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

@yolm/boost/dist/app.d.ts:70

___

### webAppConfig

• **webAppConfig**: [`WebAppConfig`](../interfaces/WebAppConfig.md)

#### Defined in

@yolm/boost/dist/app.d.ts:67

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

@yolm/boost/dist/app.d.ts:73

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

@yolm/boost/dist/app.d.ts:81

___

### addDbManagementPage

▸ **addDbManagementPage**(`opts?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | `DbManagmentPageOpts` |

#### Returns

`void`

#### Defined in

@yolm/boost/dist/app.d.ts:74

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

@yolm/boost/dist/app.d.ts:75

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

@yolm/boost/dist/app.d.ts:77

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

@yolm/boost/dist/app.d.ts:78

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

@yolm/boost/dist/app.d.ts:80

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

@yolm/boost/dist/app.d.ts:79

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

@yolm/boost/dist/app.d.ts:76

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

@yolm/boost/dist/app.d.ts:72
