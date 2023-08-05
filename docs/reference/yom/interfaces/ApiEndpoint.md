---
id: "ApiEndpoint"
title: "Yolm Object Model"
sidebar_label: "ApiEndpoint"
sidebar_position: 0
custom_edit_url: null
pagination_prev: null
pagination_next: null
---

## Properties

### body

• `Optional` **body**: [`HierarchyToSqlTable`](HierarchyToSqlTable.md)[]

#### Defined in

[yom.ts:2136](https://github.com/yolmio/boost/blob/964b449/src/yom.ts#L2136)

___

### method

• **method**: [`EndpointMethod`](../modules.md#endpointmethod)

#### Defined in

[yom.ts:2130](https://github.com/yolmio/boost/blob/964b449/src/yom.ts#L2130)

___

### path

• **path**: `string`

#### Defined in

[yom.ts:2129](https://github.com/yolmio/boost/blob/964b449/src/yom.ts#L2129)

___

### procedure

• `Optional` **procedure**: [`ApiEndpointStatement`](../modules.md#apiendpointstatement)[]

#### Defined in

[yom.ts:2137](https://github.com/yolmio/boost/blob/964b449/src/yom.ts#L2137)

___

### query

• `Optional` **query**: { `default?`: [`SqlExpression`](../modules.md#sqlexpression) ; `name`: `string` ; `type`: [`FieldType`](../modules.md#fieldtype)  }[]

#### Defined in

[yom.ts:2131](https://github.com/yolmio/boost/blob/964b449/src/yom.ts#L2131)
