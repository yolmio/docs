---
id: "AddUsersStatement"
title: "Yolm Object Model"
sidebar_label: "AddUsersStatement"
sidebar_position: 0
custom_edit_url: null
pagination_prev: null
pagination_next: null
---

## Properties

### outputTable

• `Optional` **outputTable**: `string`

The name of the table that should be created to store the users that have been added.

It has the following fields:

db_id: biguint (id of the user in the database)
global_id: uuid (id of the user in yolm's authentication system)

#### Defined in

[yom.ts:2240](https://github.com/yolmio/boost/blob/964b449/src/yom.ts#L2240)

___

### query

• **query**: [`SqlQuery`](../modules.md#sqlquery)

Query for the users that should be added to yolm's authentication system.

Expects a query with the folloiwng fields:

db_id: biguint (id of the user in the database)
eamil: string (email of the user, will be sent an email and invited to yolm)
notification_type: string (either "none" or "new_app" or "user")

#### Defined in

[yom.ts:2231](https://github.com/yolmio/boost/blob/964b449/src/yom.ts#L2231)

___

### t

• **t**: ``"AddUsers"``

#### Defined in

[yom.ts:2221](https://github.com/yolmio/boost/blob/964b449/src/yom.ts#L2221)
