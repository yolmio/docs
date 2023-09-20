---
id: "yom.AddUsersStatement"
title: "Boost"
sidebar_label: "AddUsersStatement"
custom_edit_url: null
pagination_prev: null
pagination_next: null
---

[yom](../namespaces/yom.md).AddUsersStatement

## Properties

### outputTable

• `Optional` **outputTable**: `string`

The name of the table that should be created to store the users that have been added.

It has the following fields:

db_id: biguint (id of the user in the database)
global_id: uuid (id of the user in yolm's authentication system)

#### Defined in

@yolm/boost/dist/yom.d.ts:1246

___

### query

• **query**: [`SqlQuery`](../namespaces/yom.md#sqlquery)

Query for the users that should be added to yolm's authentication system.

Expects a query with the folloiwng fields:

db_id: biguint (id of the user in the database)
eamil: string (email of the user, will be sent an email and invited to yolm)
notification_type: string (either "none" or "new_app" or "user")

#### Defined in

@yolm/boost/dist/yom.d.ts:1237

___

### t

• **t**: ``"AddUsers"``

#### Defined in

@yolm/boost/dist/yom.d.ts:1227
