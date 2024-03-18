---
title: "System Ui Tables"
---

These are the system tables in the ui:

### `location`

Record with two fields:

- `pathname`: https://developer.mozilla.org/en-US/docs/Web/API/Location/pathname
- `query`: https://developer.mozilla.org/en-US/docs/Web/API/Location/search

Do not update this directly, instead use the `navigate` statement or `setQueryParam`.

### `color_scheme`

Scalar value for the color scheme.

We manually stick this in localStorage, so that on loading we can have the correct color scheme.

This value is stuck into a `data-yolm-color-scheme` attribute on the root html element. You can have a css selector for it via `html[data-yolm-color-scheme="light"]` or `html[data-yolm-color-scheme="dark"]`.

We also have a special value: `system` which will set the `data-yolm-color-scheme` to whatever the browser says.

### `device_prefer_db_download`

This is a simple nullable boolean, indicating the preference of this device with regards to download the database. If the user cannot download the database, this does nothing.

For `true` download even if the user/app preference is not to download. For `false` do not download even if the user/app preference is to download. For `null` do whatever the user/app preference is.

You can update this via `setScalar` and we will refresh if we the actual behavior has changed (if you set it to false and the user can't download anyways, we do nothing).

### `sys`

This is an immutable record with a few fields, which indicate some system runtime information:

- `local_read` (Boolean): If the database is downloaded locally
- `dev_mode` (Boolean): If we are in development mode
- `app` (Uuid): App id of the current app
- `can_download` (Boolean): If this user can download, derived from app config and user app permission
- `prefer_download` (Boolean): If this user prefer download, derived from app config and user app permission

