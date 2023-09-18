---
title: "Date Functions"
---


Date functions in SQL are used to manipulate and perform operations on date and timestamp data types. These functions can help you extract specific parts of a date, perform calculations, and work with time zones. Below is a list of our date functions in SQL:

| Name                                                                         | Description                                              |
|------------------------------------------------------------------------------|----------------------------------------------------------|
| [current_date()](#current_date_function) or [today()](#today_function)       | Return the current date                                  |
| [current_timestamp()](#current_timestamp_function) or [now()](#now_function) | Return the current timestamp                             |
| [tomorrow()](#tomorrow_function)                                             | Return the date for tomorrow                             |
| [yesterday()](#yesterday_function)                                           | Return the date for yesterday                            |
| [date.part()](#date_part_function)                                           | Extract a specific part of a date or timestamp           |
| [date.add()](#date_add_function)                                             | Add a specified interval to a date or timestamp          |
| [date.duration()](#date_duration_function)                                   | Calculate the duration between two dates or timestamps   |
| [date.diff()](#date_diff_function)                                           | Calculate the difference between two dates or timestamps |
| [date.trunc()](#date_trunc_function)                                         | Truncate a date or timestamp to a specified precision    |
| [date.set_timezone()](#date_set_timezone_function)                           | Set the time zone of a date or timestamp                 |
| [date.new_time()](#date_new_time_function)                                   | Create a new timestamp with the specified time           |
| [date.new_date()](#date_new_date_function)                                   | Create a new date with the specified date                |
| [date.new_timestamp()](#date_new_timestamp_function)                         | Create a new timestamp with the specified date and time  |
| [date.from_epoch()](#date_from_epoch_function)                               | Convert an epoch timestamp to a date or timestamp        |
| [date.last_weekday()](#date_last_weekday_function)                           | Find the last weekday (e.g., Friday) before a date       |
| [extract()](#extract_function)                                               | Extract a specific field from a date or timestamp        |

### current_date() or today() {#today_function}

Returns the current date.

- **Return Type:** Date

**Example:**

```sql
SELECT current_date();
SELECT today();
```

### current_timestamp() or now() {#now_function}

Returns the current timestamp.

- **Return Type:** Timestamp

**Example:**

```sql
SELECT current_timestamp();
SELECT now();
```

### tomorrow() {#tomorrow_function}

Returns the date for tomorrow.

- **Return Type:** Date

**Example:**

```sql
SELECT tomorrow();
```

### yesterday() {#yesterday_function}

Returns the date for yesterday.

- **Return Type:** Date

**Example:**

```sql
SELECT yesterday();
```

### date.part(part, date) {#date_part_function}

Extracts a specific [date part](#date-part) (e.g., year, month, day) of a date or timestamp.

- **Parameters:**
  - `part` (part): The part to extract, look at [date part](#date-part) for all valid parts
  - `date` (date, timestamp, time): The date, timestamp or time from which to extract the part.

- **Return Type:** BigInt

**Example:**

```sql
select date.part(year, date '2023-09-17') -- 2023
```

### date.add(part, amount, date) {#date_add_function}

Adds a specified interval to a date or timestamp.

- **Parameters:**
  - `part` (part): Which part to use for the addition
  - `amount` (int or bigint): How many of the part to add
  - `date` (date, time timestamp): The date, time or timestamp to which to add the interval.

- **Return Type:** Same as input date

**Example:**

```sql
select date.add(day, 5, date '2023-01-01') -- 2023-01-06
```

### date.duration(part, start, end) {#date_duration_function}

Calculates the duration between two dates or timestamps.

- **Parameters:**
  - `part` (part): Which part to use to calculate the duration
  - `start` (date or timestamp): The start date or timestamp.
  - `end` (date or timestamp): The end date or timestamp.

- **Return Type:** BigInt

This is different to [`date.diff`](#date_diff_function) in that duration calculates the actual duration for the part, while diff only counts the difference in number of the parts, to clarify:

```sql
select date.diff(year, date '2022-12-31', date '2023-01-01') -- Returns 1
select date.duration(year, date '2022-12-31', date '2023-01-01') -- Returns 0
```

Duration sees that a full year of time did not actually pass, and so returns 0. This is convenient calculating age as when it is January and someone was just born in December, they aren't 1 year old yet.

**Example:**

```sql
SELECT date.duration('2023-09-17', '2023-09-20');
```

### date.diff() {#date_diff_function}

Calculates the difference between two dates or timestamps.

- **Parameters:**
  - `start` (date or timestamp): The start date or timestamp.
  - `end` (date or timestamp): The end date or timestamp.

- **Return Type:** Numeric

**Example:**

```sql
SELECT date.diff('2023-09-17', '2023-09-20');
```

### date.trunc() {#date_trunc_function}

Truncates a date or timestamp to a specified precision (e.g., year, month, day).

- **Parameters:**
  - `precision` (string): The precision to which to truncate.
  - `date` (date or timestamp): The date or timestamp to truncate.

- **Return Type:** Date or Timestamp

**Example:**

```sql
SELECT date.trunc('month', '2023-09-17');
```

### date.set_timezone() {#date_set_timezone_function}

Sets the time zone of a date or timestamp.

- **Parameters:**
  - `timezone` (string): The time zone to set.
  - `date` (date or timestamp): The date or timestamp for which to set the time zone.

- **Return Type:** Timestamp

**Example:**

```sql
SELECT date.set_timezone('UTC', '2023-09-17 12:00:00');
```

### date.new_time() {#date_new_time_function}

Creates a new timestamp with the specified time.

- **Parameters:**
  - `time` (time): The time to set.
  - `date` (date or timestamp): The date or timestamp to which to add the time.

- **Return Type:** Timestamp

**Example:**

```sql
SELECT date.new_time('08:30:00', '2023-09-17');
```

### date.new_date() {#date_new_date_function}

Creates a new date with the specified date.

- **Parameters:**
  - `new_date` (date): The date to set.

- **Return Type:** Date

**Example:**

```sql
SELECT date.new_date('2023-09-18');
```

### date.new_timestamp() {#date_new_timestamp_function}

Creates a new timestamp with the specified date and time.

- **Parameters:**
  - `new_timestamp` (timestamp): The timestamp to set.

- **Return Type:** Timestamp

**Example:**

```sql
SELECT date.new_timestamp('2023-09-18 08:30:00');
```

### date.from_epoch() {#date_from_epoch_function}

Converts an epoch timestamp (seconds since January 1, 1970) to a date or timestamp.

- **Parameters:**
  - `epoch_timestamp` (numeric): The epoch timestamp to convert.

- **Return Type:** Date or Timestamp

**Example:**

```sql
SELECT date.from_epoch(1631906400);
```

### date.last_weekday() {#

date_last_weekday_function}

Finds the last weekday (e.g., Friday) before a date.

- **Parameters:**
  - `weekday` (string): The weekday to find.

- **Return Type:** Date

**Example:**

```sql
SELECT date.last_weekday('Friday', '2023-09-17');
```

### extract {#extract_function}

Extracts a specific field (e.g., year, month, day) from a date or timestamp.

- **Parameters:**
  - `field` (string): The field to extract.
  - `date` (date or timestamp): The date or timestamp from which to extract the field.

- **Return Type:** Numeric

**Example:**

```sql
SELECT extract('year' FROM '2023-09-17');
```

### Date Part

A lot of the above functions take in a date part, the below are valid date parts:

#### `year`

The year field.

```sql
select date.part(year, date '2023-09-17') -- 2023
```

#### `quarter`

The quarter of the year (1–4) that the date is in.

**Example:**

```sql
select date.part(quarter, date '2023-09-17') -- Returns 3 (for the third quarter)
```

#### `month`

The number of the month within the year (1-12).

**Example:**

```sql
select date.part(month, date '2023-09-17') -- Returns 9 (for September)
```

#### `doy`

The day of the year (1–365/366).

**Example:**

```sql
select date.part(doy, date '2023-09-17') -- Returns 260 (for the 260th day of the year)
```

#### `day`

Day of the month (1–31).

**Example:**

```sql
select date.part(day, date '2023-09-17') -- Returns 17
```

#### `week`

The number of the ISO 8601 week-numbering week of the year. By definition, ISO weeks start on Mondays and the first week of a year contains January 4 of that year. In other words, the first Thursday of a year is in week 1 of that year.

In the ISO week-numbering system, early-January dates can be part of the 52nd or 53rd week of the previous year, and late-December dates can be part of the first week of the next year. For example, 2005-01-01 is part of the 53rd week of year 2004, and 2006-01-01 is part of the 52nd week of year 2005, while 2012-12-31 is part of the first week of 2013. It's recommended to use the `isoyear` field together with `week` to get consistent results.

**Example:**

```sql
select date.part(day, date '2023-09-17') -- Returns 37 (for the 37th ISO week of the year)
```

#### `dow` (Day Of Week)

The day of the week as Monday (1) to Sunday (7).

**Example:**

```sql
select date.part(dow, date '2023-09-17') -- Returns 7 (for Sunday)
```

#### `hour`

The hour field (0-23).

**Example:**

```sql
select date.part(hour, timestamp '2023-09-17T14:30:45+00:00') -- Returns 14
```

#### `minute`

The minute field (0-59).

**Example:**

```sql
select date.part(minute, timestamp '2023-09-17T14:30:45+00:00') -- Returns 30
```

#### `second`

The seconds field (0-59).

**Example:**

```sql
select date.part(second, timestamp '2023-09-17T14:30:45+00:00') -- Returns 45
```

#### `timezone`

Timezone offset from UTC measured in seconds. Positive values correspond to time zones east of UTC, negative values to zones west of UTC.

**Example:**

```sql
select date.part(timezone, timestamp '2023-09-17T14:30:45+03:00') -- Returns 10800 (for +03:00 time zone)
```

#### `isoyear`

The ISO 8601 week-numbering year that the date falls in. Each ISO 8601 week-numbering year begins with the Monday of the week containing the 4th of January, so in early January or late December, the ISO year may be different from the Gregorian year.

**Example:**

```sql
select date.part(isoyear, date '2023-12-31') -- Returns 2023
```
