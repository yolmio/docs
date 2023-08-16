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

[src/app.ts:219](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L219)

___

### globalStyles

• **globalStyles**: [`Style`](../modules.md#style)[] = `[]`

#### Defined in

[src/app.ts:220](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L220)

___

### pages

• **pages**: [`Page`](../interfaces/Page.md)[] = `[]`

#### Defined in

[src/app.ts:222](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L222)

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

[src/app.ts:221](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L221)

___

### webAppConfig

• **webAppConfig**: [`WebAppConfig`](../interfaces/WebAppConfig.md)

#### Defined in

[src/app.ts:213](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L213)

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

[src/app.ts:232](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L232)

___

### addDatagridPage

▸ **addDatagridPage**(`opts`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `DatagridPageOpts` |

#### Returns

`void`

#### Defined in

[src/app.ts:269](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L269)

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

[src/app.ts:236](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L236)

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

[src/app.ts:240](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L240)

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

[src/app.ts:248](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L248)

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

[src/app.ts:252](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L252)

___

### addSimpleDatagridPage

▸ **addSimpleDatagridPage**(`opts`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `DatagridPageOpts` |

#### Returns

`void`

#### Defined in

[src/app.ts:265](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L265)

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

[src/app.ts:259](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L259)

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

[src/app.ts:244](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L244)

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

[src/app.ts:228](https://github.com/yolmio/boost/blob/b239488/src/app.ts#L228)
