---
title: "Deploy your application"
sidebar:
  order: 5
---

## Basics

To deploy your application you run `npm run deploy`.

An application needs to have at least one active user defined. You create a user through a script like this in the file 'script.ts':

```ts
addScript({
  name: "init-db",
  procedure: [
    addUsers(
      `select * from (values(next_record_id(db.user), 'none', 'v@yolm.io')) as user(db_id, notification_type, email)`
    ),
    modify(
      `insert into db.user (global_id, disabled, email, name) values
      ((select global_id from added_user), false, 'v.yolm.io', 'John Doe')`
    ),
    modify(`insert into db.user_role (user, role) values (0, 'sys_admin')`),
    setDb({ allowOverwrite: true }),
  ],
});
```

When you deploy an application for the first time, Yolm will first deploy the application and then automatically run this script. Once done, the user(s) you specified in your script can log in to the application.
