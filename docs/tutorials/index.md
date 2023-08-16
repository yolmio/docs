---
sidebar_position: 1
---

# Create a simple application

Let's build an actually useful application with yolm in less than 5 minutes.

## What you'll need

- [Node.js](https://nodejs.org/en/download/) version 16.14 or above:
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.


## Generate a new Yolm app

Generate a new Yolm app using the **tutorial template**.

```bash
npm init @yolm/boost@latest my-app
```

You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor.

The command also installs all necessary dependencies you need to run Yolm.

Follow the prompts and select the **tutorial** template. It will take about 1-2 minutes to install all dependencies.

## Start your app

Run the development server:

```bash
cd my-app
npm start
```

The `cd` command changes the directory you're working with. In order to work with your newly created Yolm app, you'll need to navigate the terminal there.

The `npm start` command builds your app locally and serves it through a development server, ready for you to view at

You can click around a little bit on the application at localhost:3000

Now if you open my-app in your favorite editor (we recommend Visual Studio Code), you'll see the file structure of a yolm app:

```
node_modules/
data/
.gitignore
package.json
scripts.ts
app.ts
```

`node_modules` is to be ignored 99% of the time, it is just where `@yolm/boost` and other dependencies have been downloaded.

`data` is just where we put any development data.

`.gitignore` is a configuration file for git, if you don't use git you can delete it.

`package.json` is how you will manage your dependencies.

`scripts.ts` is where scripts that run on the current machine reside, these are useful for generating database files, imports, migrations and more.

The `app.ts` is where basically the entire application is defined.

The entire database, all of the ui, any configuration, it is all put in this file.

Open it in your editor and you will see all the code used to create this application.

Let's break it down. 

The file starts with

```ts
import { app } from "@yolm/boost";
```

This imports the `app` variable into scope.

This is essentially a giant object where you can specify everything in the application. If you are using an editor with autosuggestions, type `app.` and you can see all the functions and methods that exist on the `app`. You can also click around in the [reference documentation](../reference/boost/classes/App.md)

```ts
const { db, ui } = app;
```

We reference these variables often, so it is nicer to type and read less.

```ts
db.addTable("user", (table) => {
  table.catalog.addRequiredUserFields();
});
```

This is how you add tables to the database. The table definition is a function which a helper (the variable `table`) is passed to. The helper has a `catalog` namespace which contains many different reusable field definitions.

This adds a `user` table to the database. The `user` table is how we manage authentication I won't go into detail about it here, but all you need to know for now is that this is how you can manage the actual users of the database, manage permissions and log in to the app.

```ts
db.addTable("contact", (table) => {
  table.string("first_name", 50).notNull();
  table.string("last_name", 50).notNull();
  table.email("email").notNull();
  table.catalog.addAddressFields();
});
```

This adds a contact with some fields. `first_name`, `last_name`, `email` are all string fields. We define the `email` with an email method which is stored as a string, but just gives us some extra information to use in automatically generating UIs. The addAddressFields will add a set of fields that represent an address.

```ts
ui.useNavbarShell({
  color: "primary",
  variant: "solid",
  links: ["/contacts", "/reports", { label: "DB", url: "/db-management" }],
});
```

This defines a ui shell. A ui shell is the ui that surrounds pages, in this case the navbar. Change the color or the variant and you will see the change in the browser.

```ts
ui.pages.push({
  path: "/",
  content: "'hello world!'",
});
```

This adds a very simple hello world page. The `content` is a ui text node. We design the ui as a tree, and a text node is as simple as a string, there are many different types of nodes, but this is all you need to know for now. The reason the string has two sets of quotes is because we will treat it like a sql expression, which means you can have any valid sql expression, for example: `case when true then 'ca' || 't' else 'dog' end` can be used.

```ts
ui.addDatagridPage({
  table: "contact",
  toolbar: { add: { type: "dialog" } },
});
```

This adds a datagrid page, to the application, it is automaticalle generates queries and everything based off the data in the `app` variable. This is the magic of yolm, without having to manually do any work, all fields and any extra information is passed through and used.

To illustrate this, change the contact table definition to this:

```ts
db.addTable("contact", (table) => {
  table.string("first_name", 50).notNull();
  table.string("last_name", 50).notNull();
  table.email("email").notNull();
  table.date("birth_date");
  table.catalog.addAddressFields();
});
```

Immediately without having to do anything else, your datagrid page will now handle the new `birth_date` field.

We have a lot of pages and functions that use the data defined in the `app` to quickly create what would otherwise take a very long time.

```ts
ui.addDbManagementPage();
```

This is just another page helper function we provide, if you click on the "DB" in the navbar in your app you can see it. It lists out all the tables, enums defined (you can even see some of the tables created by the datagrid page) and lets you test out arbitrary queries and sql.
