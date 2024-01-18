---
title: "Procedures"
sidebar:
  order: 8
---

Yolm comes with a simple scripting language (YolmScript) that you can use in various application areas, such as UI event handlers, general scripts, data generation scripts and more.

A procedure consists of one or more statements. All procedure types share some common statement types. Some statement types are specific to the type of script, e.g. preventDefault is limited to a UI event handler procedure.

## Table, Records and Scalars

In most programming languages you can have variables with

- single values

- a composite value (e.g. object) or

- a list of values (vector/arrays/lists).

The equivalent in Yolm is a scalar, record and table.

If you only have a single value, you use a scalar.

`scalar(`addedMinutes`, { type: "Int" }),`

If you have multiple values but only a single record, you use a record.

```typescript
record(`contact`, `select * from db.Contact where id = contactId`),
```

the above statement both declares a record and populates it from the database.

If you have a list of values you use a table with the table function:

```typescript
table(`Contact`, [
              {
                name: "name",
                type: { type: "String", maxLength: 10 },
                nonNull: true,
              },
              { name: "dbId", type: { type: "BigUint" }, nonNull: true },
              { name: "age", type: { type: "Int" } },
              { name: "email", type: { type: "String", maxLength: 500 } },
            ]),
```

## Loop

Procedures have while loops as a looping construct.

```typescript
while_(`eventId <= maxEventId`, [...setScalar(`eventId`, `eventId + 1`)]);
```

## Conditionals

The 'when' function can be used for if/else logic.

```typescript
when(`isFinished`,[
    modify(`update order set isFinished = true, finishDate = currentTime.now where orderId = order.orderId`);
],
[
    modify(`update order set isFinished = false where orderId = order.orderId`);
]
);
```

Explanation:

- isFinished: refers to scalar variable defined before
- The first parameter is the condition, in this case a simple check of a boolean variable
- The second parameter is the then branch, the third parameter is the else branch.
- Both branches are arrays since they can contain more than one statement
- The modify function is used for insert/update/delete SQL operations
