---
title: "Context Functions"
---

Context functions in SQL provide information about the current execution context or session. They can be useful for tracking user information, transaction details, and managing record identifiers. Below is a list of our context functions in SQL:

| Name                                | Description                                      |
|-------------------------------------|--------------------------------------------------|
| [current_user()](#current_user)     | Get the current user's id                        |
| [current_tx()](#current_tx)         | Get the current transaction id                   |
| [current_task()](#current_task)     | Get the current task id (ui dom procedures only) |
| [next_record_id()](#next_record_id) | Get the next available record id                 |
| [last_record_id()](#last_record_id) | Get the last used record id                      |

### current_user()

Returns the current user's id

- **Return Type:** BigInt (nullable)

**Example:**

```sql
select current_user();
```

### current_tx()

Returns the current transaction's id (if you are in a transaction)

- **Return Type:** BigInt

**Example:**

```sql
select current_tx();
```

### current_task()

Returns the current task identifier in the ui dom procedure. For more information about tasks in the ui look at [Asynchronous Procedures in the UI](/concepts/async_procedures_ui).

- **Return Type:** BigInt

**Example:**

```sql
select current_task();
```

### next_record_id()

Returns the next record id for the specified table.

- **Parameters:**
  - `table` (table identifier): This is an actual identifier/name for a table in your database

- **Return Type:** Integer

**Example:**

```sql
select next_record_id(db.customer); -- Return the id that will be used by the next record inserted into the customer table
```

### last_record_id()

Returns the last record id used for the specified table.

- **Parameters:**
  - `table` (table identifier): This is an actual identifier/name for a table in your database

- **Return Type:** Integer

**Example:**

```sql
select last_record_id(db.customer); -- Return the id that was last used for an insert in the customer table
```
