---
title: "Ordering Functions"
---

Ordering functions are how you create any ordering values. You create the orderings through the below functions and then compare them, otherwise they are opaque.

| Name                                                   | Description                                              |
|--------------------------------------------------------|----------------------------------------------------------|
| [ordering.new(before, after)](#new_function)           | Inserts an item before another in the sequence           |
| [ordering.n_after(offset, after)](#nafter_function)    | Inserts an item at a specific offset after another item  |
| [ordering.n_before(offset, before)](#nbefore_function) | Inserts an item at a specific offset before another item |

### ordering.new(before, after) {#new_function}

Creates an ordering that will compare be between before and after

- **Parameters:**
  - `before` (ordering, optional): The ordering that should be ordered before the new ordering
  - `after` (ordering, optional): The ordering that should be ordered before the new ordering

- **Return Type:** Ordering

**Example:**

```sql
select ordering.new(); -- initialize ordering for some list
select ordering.new(x); -- create ordering that will be greater than x
select ordering.new(null, x); -- create ordering that will be less than x
select ordering.new(x, y); -- create ordering that will be greater than x and less than y
```

### ordering.n_after(offset, after) {#nafter_function}

Creates an ordering that is offset n times after the provided ordering.

- **Parameters:**
  - `offset` (integer): The number of positions to insert the item after the reference item.
  - `after` (ordering, optional): Ordering to position the created one after (defaults to `ordering.new()` value)

- **Return Type:** Ordering

This is handy for initializing lists, the same can be done by calling `ordering.new()` repetitively.

**Example:**

```sql
select ordering.n_after(2, x); -- equivelant to ordering.new(ordering.new(x))
select ordering.n_after(2); -- equivelant to ordering.new(ordering.new(ordering.new()))
```

### ordering.n_before(offset, before) {#nbefore_function}

Creates an ordering that is offset n times before the provided ordering.

- **Parameters:**
  - `offset` (integer): The number of positions to insert the item before the reference item.
  - `after` (ordering, optional): Ordering to position the created one before (defaults to `ordering.new()` value)

- **Return Type:** Ordering

This is handy for initializing lists, the same can be done by calling `ordering.new()` repetitively.

**Example:**

```sql
select ordering.n_before(2, x); -- equivelant to ordering.new(null, ordering.new(null, x))
select ordering.n_before(2); -- equivelant to ordering.new(null, ordering.new(null, ordering.new()))
```
