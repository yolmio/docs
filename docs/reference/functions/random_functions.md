---
title: "Random Functions"
---

Random functions in SQL are used to generate random values of various data types. These functions are often useful in scenarios where you need to generate sample data or require randomization in your SQL queries. Below is a list of our random functions in SQL:

| Name                                       | Description                               |
|--------------------------------------------|-------------------------------------------|
| [random.bool()](#random_bool_function)     | Generate a random boolean value           |
| [random.real()](#random_real_function)     | Generate a random real number             |
| [random.double()](#random_double_function) | Generate a random double precision number |
| [random.int()](#random_int_function)       | Generate a random integer                 |
| [random.bigint()](#random_bigint_function) | Generate a random bigint                  |
| [random.uuid()](#random_uuid_function)     | Generate a random UUID                    |

### random.bool() {#random_bool_function}

Generates a random boolean value.

- **Return Type:** Boolean

**Example:**

```sql
select random.bool();
```

### random.real() {#random_real_function}

Generates a random real number between 0 and 1.

- **Return Type:** Real

**Example:**

```sql
select random.real();
```

### random.double() {#random_double_function}

Generates a random double precision number between 0 and 1.

- **Return Type:** Double Precision

**Example:**

```sql
select random.double();
```

### random.int(low, high) {#random_int_function}

Generates a random integer.

- **Parameters:**
  - `low` (integer, optional): The lower bound (inclusive).
  - `high` (integer, optional): The upper bound (inclusive).

- **Return Type:** Integer

**Example:**

```sql
select random.int();
select random.int(0);
select random.int(0, 50);
select random.int(null, 50);
```

### random.bigint(low, high) {#random_bigint_function}

Generates a random bigint.

- **Parameters:**
  - `low` (integer, optional): The lower bound (inclusive).
  - `high` (integer, optional): The upper bound (inclusive).

- **Return Type:** Bigint

**Example:**

```sql
select random.bigint();
select random.bigint(0);
select random.bigint(0, 50);
select random.bigint(null, 50);
```

### random.uuid() {#random_uuid_function}

Generates a random UUID (Universally Unique Identifier).

- **Return Type:** UUID

**Example:**

```sql
select random.uuid();
```