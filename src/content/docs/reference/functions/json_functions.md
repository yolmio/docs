---
title: "JSON Functions and Operators"
---

JSON functions and operators in SQL are designed to facilitate the manipulation and querying of JSON data. Below is a list of our JSON functions and operators in SQL:

| Name                                      | Description                                                     |
|-------------------------------------------|-----------------------------------------------------------------|
| `json->'key'`                             | Access a JSON object field by key return JSON                   |
| `json->index`                             | Access a JSON array element by index return JSON                |
| `json->>'key'`                            | Access a JSON object field by key return as string              |
| `json->>index`                            | Access a JSON array element by index return as string           |
| [json_object_each()](#json_object_each)   | Expands the outermost JSON object into a set of key-value pairs |
| [json_array_each()](#json_array_each)     | Expands a JSON array into a set of elements                     |
| [json_array_agg()](#json_array_agg)       | Aggregates values as a JSON array                               |
| [json_object_agg()](#json_object_agg)     | Aggregates key-value pairs as a JSON object                     |
| [json_build_object()](#json_build_object) | Builds a JSON object from a list of keys and values             |
| [json_build_array()](#json_build_array)   | Builds a JSON array from a list of values                       |

### json->key or json->index

Accesses a JSON object field by key or a JSON array element by index and return the value as json.

- **Syntax:** `json->'key'` or `json->index`
- **Parameters:**
  - `json` (JSON): The JSON value.
  - `key` (string): The key of the object field to access.
  - `index` (integer): The index of the array element to access.
- **Return Type:** JSON

**Example:**

```sql
select cast('{"cat":"dog"}' as json)->'cat'; -- Returns "dog"
select cast('["dog"]' as json)->0;           -- Returns "dog"
```

### json->>key or json->>index

Accesses a JSON object field by key or a JSON array element by index and returns the values as string.

- **Syntax:** `json->'key'` or `json->index`
- **Parameters:**
  - `json` (JSON): The JSON value.
  - `key` (string): The key of the object field to access.
  - `index` (integer): The index of the array element to access.
- **Return Type:** String

**Example:**

```sql
select cast('{"cat":1}' as json)->'cat'; -- Returns "1"
select cast('["1"]' as json)->0;           -- Returns "1"
```

### json_object_each()

Expands the outermost JSON object into a set of key-value pairs.

- **Parameters:**
  - `json` (JSON): The JSON object.
- **Return Type:** Set of Rows

**Example:**

```sql
select key, value 
from json_object_each(cast('{"cat":"dog"}' as json));
```

### json_array_each()

Expands a JSON array into a set of elements.

- **Parameters:**
  - `json` (JSON): The JSON array.
- **Return Type:** Set of Rows

**Example:**

```sql
select index, value 
from json_array_each(cast('["chicken", 1, {"cat":"dog"}]' as json));
```

### json_array_agg()

Aggregates values as a JSON array.

- **Parameters:**
  - `value` (Any): The values to aggregate.
- **Return Type:** JSON Array

**Example:**

```sql
select json_array_agg(v) 
from (values('cat'),('dog'),('chicken')) as t(v);
```

### json_object_agg()

Aggregates key-value pairs as a JSON object.

- **Parameters:**
  - `key` (String): The keys for the object.
  - `value` (Any): The values for the object.
- **Return Type:** JSON Object

**Example:**

```sql
select json_object_agg(k, v) 
from (values('cat','dog')) as t(k, v);
```

### json_build_object()

Builds a JSON object from a list of keys and values.

- **Parameters:**
  - `key`, `value` (Any): Pairs of keys and values to form the JSON object.
- **Return Type:** JSON Object

**Example:**

```sql
select json_build_object('cat', 'dog');
```

### json_build_array()

Builds a JSON array from a list of values.

- **Parameters:**
  - `values` (Any): Values to form the JSON array.
- **Return Type:** JSON Array

**Example:**

```sql
select json_build_array('cat', null, 1);
```

This documentation provides an overview of how to use JSON functions and operators to handle and query JSON data within SQL. These tools are indispensable for working with JSON in SQL environments.