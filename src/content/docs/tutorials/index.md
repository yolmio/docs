---
title: "Tutorial - Simple System"
sidebar:
  order: 1
---

Let's build a useful web app with yolm in less than 5 minutes.

First make sure you have [Bun](https://bun.sh) installed and that you created an empty directory, e.g.

```bash
mkdir tutorial
cd tutorial
```

Generate a new Yolm system using the **tutorial template** by typing the follwing command in your terminal in the created directory.

```bash
curl -s https://raw.githubusercontent.com/yolmio/boost/main/src/init.ts | bun -
```

For Powershell use this:

```powershell
(Invoke-WebRequest -Uri "https://raw.githubusercontent.com/yolmio/boost/main/src/init.ts").Content | bun -
```

The command also installs what you need to run Yolm locally.

Follow the prompts and select the **tutorial** template. It will take about 1 minute to install all dependencies.

### Start your system

Run the development server:

```bash
bun start
```

The `bun start` command builds your app locally and serves it through a development server.

You can click around a little bit on the application at http://localhost:3001

Now if you open `tutorial` in your favorite editor (we recommend Visual Studio Code), you'll see the file structure of a yolm app.

There are two important files for now `system.ts` and `scripts.ts`.

`system.ts` defines everything for the system, the database, the apps, the api, etc.

`scripts.ts` defines any scripts, so you can initialize the database, add users to apps, export to csv, etc.

In `system.ts` add this line to the contact table:

```ts
table.date("date_of_birth");
```

Now in the browser you will have a date of birth field in the datagrid as well as in the insert form and update form.

### Deploy your system

While we are still in private beta, you can't do this without contacting us.

All you need to do is `bun run deploy` if you have not created an account it will ask you to create one and then will deploy your system.

And voila! You now have a web app backed by a database, it runs on our platform as a service and you can rest easy that it will run!
