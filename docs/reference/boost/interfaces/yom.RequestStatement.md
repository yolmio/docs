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

[src/yom.ts:2090](https://github.com/yolmio/boost/blob/b239488/src/yom.ts#L2090)

___

### method

• **method**: [`SqlExpression`](../namespaces/yom.md#sqlexpression) \| ``"'GET'"`` \| ``"'POST'"`` \| ``"'DELETE'"`` \| ``"'PUT'"`` \| ``"'PATCH'"``

#### Defined in

[src/yom.ts:2089](https://github.com/yolmio/boost/blob/b239488/src/yom.ts#L2089)

___

### receiveBody

• `Optional` **receiveBody**: [`ReceiveBody`](../namespaces/yom.md#receivebody)

#### Defined in

[src/yom.ts:2092](https://github.com/yolmio/boost/blob/b239488/src/yom.ts#L2092)

___

### responseHeadersTable

• `Optional` **responseHeadersTable**: `string`

The name of the table for the response headers.

It has the following fields:

name: string
value: string

#### Defined in

[src/yom.ts:2109](https://github.com/yolmio/boost/blob/b239488/src/yom.ts#L2109)

___

### responseRecord

• `Optional` **responseRecord**: `string`

The name of the record for the response information.

It has the following fields:

status: number (the status code)

#### Defined in

[src/yom.ts:2100](https://github.com/yolmio/boost/blob/b239488/src/yom.ts#L2100)

___

### sendBody

• `Optional` **sendBody**: [`SendBody`](../namespaces/yom.md#sendbody)

#### Defined in

[src/yom.ts:2091](https://github.com/yolmio/boost/blob/b239488/src/yom.ts#L2091)

___

### t

• **t**: ``"Request"``

#### Defined in

[src/yom.ts:2087](https://github.com/yolmio/boost/blob/b239488/src/yom.ts#L2087)

___

### uri

• **uri**: [`SqlExpression`](../namespaces/yom.md#sqlexpression)

#### Defined in

[src/yom.ts:2088](https://github.com/yolmio/boost/blob/b239488/src/yom.ts#L2088)
