---
title: "Date Functions and Constants"
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
| date.monday                                                                  | constant numeric day of week for monday                  |
| date.tuesday                                                                 | constant numeric day of week for tuesday                 |
| date.wednesday                                                               | constant numeric day of week for wednesday               |
| date.thursday                                                                | constant numeric day of week for thursday                |
| date.friday                                                                  | constant numeric day of week for friday                  |
| date.saturday                                                                | constant numeric day of week for saturday                |
| date.sunday                                                                  | constant numeric day of week for sunday                  |

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
  - `part` ([date part](#date-part)): The part to extract, look at [date part](#date-part) for all valid parts
  - `date` (date, timestamp, time): The date, timestamp or time from which to extract the part.

- **Return Type:** BigInt

**Example:**

```sql
select date.part(year, date '2023-09-17') -- 2023
```

### date.add(part, amount, date) {#date_add_function}

Adds a specified interval to a date or timestamp.

- **Parameters:**
  - `part` ([date part](#date-part)): Which [date part](#date-part) to use for the addition
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
  - `part` ([date part](#date-part)): Which [date part](#date-part) to use to calculate the duration
  - `start` (date, time or timestamp): The start date or timestamp.
  - `end` (date, time or timestamp): The end date or timestamp.

- **Return Type:** BigInt

This is different to [`date.diff`](#date_diff_function) in that duration calculates the actual duration for the part, while diff only counts the difference in number of the parts, to clarify:

```sql
select date.diff(year, date '2022-12-31', date '2023-01-01') -- Returns 1
select date.duration(year, date '2022-12-31', date '2023-01-01') -- Returns 0
```

Duration sees that a full year of time did not actually pass, and so returns 0. This is convenient calculating age as when it is January and someone was just born in December, they aren't 1 year old yet.

**Example:**

```sql
select date.duration(year, date '2001-03-09', date '2023-09-18') -- Returns 22
```

### date.diff(part, start, end) {#date_diff_function}

Calculates the difference between two dates or timestamps.

- **Parameters:**
  - `part` ([date part](#date-part)): Which [date part](#date-part) to use to calculate the difference
  - `start` (date, time or timestamp): The start date or timestamp.
  - `end` (date, time or timestamp): The end date or timestamp.

- **Return Type:** Numeric

See [`date.duration`](#date_duration_function) for the difference between the two.

**Example:**

```sql
select date.diff(year, date '2015-03-09', date '2023-09-18') -- Returns 8
```

### date.trunc(part, date) {#date_trunc_function}

Truncates a date or timestamp to a specified precision (e.g., year, month, day) specified as a [date part](#date-part).

- **Parameters:**
  - `part` ([date part](#date-part)): The [date part](#date-part) to which to truncate
  - `date` (date, time or timestamp timestamp): The date or timestamp to truncate.

- **Return Type:** Same as input `date` type

**Example:**

```sql
select date.trunc(month, date '2023-09-17') -- Returns '2023-09-01'
```

### date.set_timezone(date, timezone) {#date_set_timezone_function}

Sets the time zone of a date or timestamp in seconds of offset to UTC.

- **Parameters:**
  - `timezone` (int): The time zone offset in seconds to utc
  - `date` (timestamp): The date or timestamp for which to set the time zone.

- **Return Type:** Timestamp

**Example:**

```sql
select date.set_timezone(timestamp '2023-09-17T14:30:45+00:00', -10800) -- 2023-09-17T14:30:45-03:00
```

### date.new_time(hour, minute, second) {#date_new_time_function}

Creates a new time with the specified hours, minutes, seconds.

- **Parameters:**
    - `hour` (0-23): what hour in the time
    - `minute` (0-59): what minute in the time
    - `second` (0-59): what second in the time

- **Return Type:** Time

**Example:**

```sql
select date.new_time(23, 59, 59) -- 23:59:59
```

### date.new_date(year, month, day) {#date_new_date_function}

Creates a new date with the specified year, month and date

- **Parameters:**
    - `year` (0-23): what year in the date
    - `month` (1-12): what month in the year date
    - `day` (0-59): what day in the month for the date

- **Return Type:** Date

**Example:**

```sql
select date.new_date(2021, 12, 31) -- 2021-12-31
```

### date.new_timestamp(year, month, day, hour, minute, second) {#date_new_timestamp_function}

Creates a new timestamp with the specified date and time and in the current timezone

- **Parameters:**
    - `year` (0-23): what year in the timestamp
    - `month` (1-12): what month in the year timestamp
    - `day` (0-59): what day in the month for the timestamp
    - `hour` (0-23): what hour in the timestamp
    - `minute` (0-59): what minute in the timestamp
    - `second` (0-59): what second in the timestamp

- **Return Type:** Timestamp

**Example:**

```sql
select date.new_timestamp(2021, 12, 31, 23, 59, 59) -- returns 2021-12-31T23:59:59+00:00 (if you are in utc timezone)
```

### date.from_epoch(epoch) {#date_from_epoch_function}

Converts an epoch timestamp (seconds since January 1, 1970) to a date or timestamp.

- **Parameters:**
  - `epoch_timestamp` (bigint): The epoch timestamp to convert.

- **Return Type:** Timestamp

**Example:**

```sql
select date.from_epoch(1631906400) -- 2021-09-17T19:20:00+00:00
```

### date.last_weekday(date, weekday) {#date_last_weekday_function}

Finds the last of a weekday (e.g., Friday) before a date.

- **Parameters:**
  - `date` (date): The date to find before
  - `weekday` (1-7): The weekday to find. (you should use date constants for weekdays e.g. `date.monday`)

- **Return Type:** Date

The reason this is actually useful is you might want weekly reports starting on some arbitrary date, so this ends up being very handy.

**Example:**

```sql
select date.last_weekday(date '2023-09-18', date.monday) -- 2023-09-11
select date.last_weekday(date '2023-09-18', date.sunday) -- 2023-09-17
```

### extract(part from date) {#extract_function}

Extracts a specific field (e.g., year, month, day) from a date or timestamp.

This is equivelant to [`date.part`](#date_part_function), but this is part of the sql standard and will work in other databases.

- **Parameters:**
  - `part` ([date part](#date-part)): The field to extract.
  - `date` (date, time or timestamp): The date or timestamp from which to extract the field.

- **Return Type:** Bigint

**Example:**

```sql
SELECT extract(year FROM '2023-09-17') -- 2023
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
