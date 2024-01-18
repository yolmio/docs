---
title: "Special SQL Functions"
---

Special SQL functions like `coalesce()` and `match()` offer unique functionalities that do not fit neatly into the other categories of SQL functions. Below are these special functions:

| Name                             | Description                                         |
|----------------------------------|-----------------------------------------------------|
| [coalesce()](#coalesce_function) | Return the first non-NULL value in a list           |
| [match()](#match_function)       | Perform full-text search on a record using a config |

### coalesce(expression1, expression2, ...) {#coalesce_function}

Returns the first non-NULL value from a list of expressions.

- **Parameters:**
  - `expression1, expression2, ...` (same type): The list of expressions to evaluate.

- **Return Type:** The type of the first non-NULL expression

**Example:**

```sql
select coalesce(null, 'first', 'second'); -- Returns 'first'
```

### match(match_config_name, query, record_id) {#match_function}

Performs a full-text search as configured via [SearchMatchConfig](/reference/boost/interfaces/yom.SearchMatchConfig).

- **Parameters:**
  - `match_config_name` (identifier): The config to use for this match
  - `query` (string): The query to search for
  - `record_id` (bigint): Id of the record to check

- **Return Type:** Bool

This is a very special function and basically is compiled away into an index lookup.

**Example:**

```sql
select * from contact where match(match_config_name, query => 'cat', record_id => id)
```