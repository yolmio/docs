---
id: "RequestStatement"
title: "Yolm Object Model"
sidebar_label: "RequestStatement"
sidebar_position: 0
custom_edit_url: null
pagination_prev: null
pagination_next: null
---

## Properties

### headers

• `Optional` **headers**: { `name`: [`SqlExpression`](../modules.md#sqlexpression) ; `value`: [`SqlExpression`](../modules.md#sqlexpression)  }[]

#### Defined in

[yom.ts:2092](https://github.com/yolmio/boost/blob/964b449/src/yom.ts#L2092)

___

### method

• **method**: [`SqlExpression`](../modules.md#sqlexpression) \| ``"'GET'"`` \| ``"'POST'"`` \| ``"'DELETE'"`` \| ``"'PUT'"`` \| ``"'PATCH'"``

#### Defined in

[yom.ts:2091](https://github.com/yolmio/boost/blob/964b449/src/yom.ts#L2091)

___

### receiveBody

• `Optional` **receiveBody**: [`ReceiveBody`](../modules.md#receivebody)

#### Defined in

[yom.ts:2094](https://github.com/yolmio/boost/blob/964b449/src/yom.ts#L2094)

___

### responseHeadersTable

• `Optional` **responseHeadersTable**: `string`

The name of the table for the response headers.

It has the following fields:

name: string
value: string

#### Defined in

[yom.ts:2111](https://github.com/yolmio/boost/blob/964b449/src/yom.ts#L2111)

___

### responseRecord

• `Optional` **responseRecord**: `string`

The name of the record for the response information.

It has the following fields:

status: number (the status code)

#### Defined in

[yom.ts:2102](https://github.com/yolmio/boost/blob/964b449/src/yom.ts#L2102)

___

### sendBody

• `Optional` **sendBody**: [`SendBody`](../modules.md#sendbody)

#### Defined in

[yom.ts:2093](https://github.com/yolmio/boost/blob/964b449/src/yom.ts#L2093)

___

### t

• **t**: ``"Request"``

#### Defined in

[yom.ts:2089](https://github.com/yolmio/boost/blob/964b449/src/yom.ts#L2089)

___

### uri

• **uri**: [`SqlExpression`](../modules.md#sqlexpression)

#### Defined in

[yom.ts:2090](https://github.com/yolmio/boost/blob/964b449/src/yom.ts#L2090)
