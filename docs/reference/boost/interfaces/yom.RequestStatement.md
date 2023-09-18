---
id: "yom.RequestStatement"
title: "Boost"
sidebar_label: "RequestStatement"
custom_edit_url: null
pagination_prev: null
pagination_next: null
---

[yom](../namespaces/yom.md).RequestStatement

## Properties

### headers

• `Optional` **headers**: { `name`: [`SqlExpression`](../namespaces/yom.md#sqlexpression) ; `value`: [`SqlExpression`](../namespaces/yom.md#sqlexpression)  }[]

#### Defined in

[src/yom.ts:2120](https://github.com/yolmio/boost/blob/5cada48/src/yom.ts#L2120)

___

### method

• **method**: [`SqlExpression`](../namespaces/yom.md#sqlexpression) \| ``"'GET'"`` \| ``"'POST'"`` \| ``"'DELETE'"`` \| ``"'PUT'"`` \| ``"'PATCH'"``

#### Defined in

[src/yom.ts:2119](https://github.com/yolmio/boost/blob/5cada48/src/yom.ts#L2119)

___

### receiveBody

• `Optional` **receiveBody**: [`ReceiveBody`](../namespaces/yom.md#receivebody)

#### Defined in

[src/yom.ts:2122](https://github.com/yolmio/boost/blob/5cada48/src/yom.ts#L2122)

___

### responseHeadersTable

• `Optional` **responseHeadersTable**: `string`

The name of the table for the response headers.

It has the following fields:

name: string
value: string

#### Defined in

[src/yom.ts:2139](https://github.com/yolmio/boost/blob/5cada48/src/yom.ts#L2139)

___

### responseRecord

• `Optional` **responseRecord**: `string`

The name of the record for the response information.

It has the following fields:

status: number (the status code)

#### Defined in

[src/yom.ts:2130](https://github.com/yolmio/boost/blob/5cada48/src/yom.ts#L2130)

___

### sendBody

• `Optional` **sendBody**: [`SendBody`](../namespaces/yom.md#sendbody)

#### Defined in

[src/yom.ts:2121](https://github.com/yolmio/boost/blob/5cada48/src/yom.ts#L2121)

___

### t

• **t**: ``"Request"``

#### Defined in

[src/yom.ts:2117](https://github.com/yolmio/boost/blob/5cada48/src/yom.ts#L2117)

___

### uri

• **uri**: [`SqlExpression`](../namespaces/yom.md#sqlexpression)

#### Defined in

[src/yom.ts:2118](https://github.com/yolmio/boost/blob/5cada48/src/yom.ts#L2118)
