---
title: "Define a database"
description: ""
sidebar:
  order: 1
---

Yolm comes with a built-in relational database.

To define a database with tables and fields you use the following statements.

Initialize an app model with help of the provided factory:

```typescript
const model = newRadModel({ name: "ACME CRM", id: "ACMECRM" });
```

- The name can be up to 30 characters long and contain white space.

- The id must be exactly 8 characters. You can get a new id by requesting it
  via `yolm id new`

To add a contact table with first name, last name and email use the addTable function as follows:

```typescript
addTable({
  name: "Contact",
  fields: [
    {
      name: "firstName",
      type: { type: "String", maxLength: 50 },
    },
    {
      name: "lastName",
      type: { type: "String", maxLength: 50 },
    },
    { name: "email", type: "Email" },
})
```

A Yolm table always has an id field of type positive integer which is automatically incrementing, you do not need to specify it.

A field has a name, a type and optionally other attributes.

Common types are

- String
- Bool
- Date
- Positive Integer Numbers: TinyUint(0-255) SmallUint (0-64K), UInt(0-4B), BigUInt(0-1.8E19)
- Positive Integer Numbers: TinyInt(-128 - 127) SmallInt (-32 - 32K), Int(-2B - 2B), BigInt(-9E18 - 9E18)
- Email (a string field with extra generated validation)
- Table (foreign key)
- Enum

For a full list of types and explanation, see [types](./basic-data-types.md).
