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

@yolm/boost/dist/yom.d.ts:1126

___

### method

• **method**: [`SqlExpression`](../namespaces/yom.md#sqlexpression) \| ``"'GET'"`` \| ``"'POST'"`` \| ``"'DELETE'"`` \| ``"'PUT'"`` \| ``"'PATCH'"``

#### Defined in

@yolm/boost/dist/yom.d.ts:1125

___

### receiveBody

• `Optional` **receiveBody**: [`ReceiveBody`](../namespaces/yom.md#receivebody)

#### Defined in

@yolm/boost/dist/yom.d.ts:1131

___

### responseHeadersTable

• `Optional` **responseHeadersTable**: `string`

The name of the table for the response headers.

It has the following fields:

name: string
value: string

#### Defined in

@yolm/boost/dist/yom.d.ts:1148

___

### responseRecord

• `Optional` **responseRecord**: `string`

The name of the record for the response information.

It has the following fields:

status: number (the status code)

#### Defined in

@yolm/boost/dist/yom.d.ts:1139

___

### sendBody

• `Optional` **sendBody**: [`SendBody`](../namespaces/yom.md#sendbody)

#### Defined in

@yolm/boost/dist/yom.d.ts:1130

___

### t

• **t**: ``"Request"``

#### Defined in

@yolm/boost/dist/yom.d.ts:1123

___

### uri

• **uri**: [`SqlExpression`](../namespaces/yom.md#sqlexpression)

#### Defined in

@yolm/boost/dist/yom.d.ts:1124
