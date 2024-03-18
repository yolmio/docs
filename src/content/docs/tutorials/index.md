---
title: "Tutorial - Simple Web App"
sidebar:
  order: 1
---

# Create a simple web app

Let's build an actually useful web app with yolm in less than 5 minutes.

## What you'll need

- [Bun](https://bun.sh)

## Generate a new Yolm system

Generate a new Yolm system using the **tutorial template**.

```bash
bun init @yolm/boost@latest my-app
```

You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor.

The command also installs all necessary dependencies you need to run Yolm.

Follow the prompts and select the **tutorial** template. It will take about 1-2 minutes to install all dependencies.

## Start your system

Run the development server:

```bash
cd my-system
bun start
```

The `cd` command changes the directory you're working with. In order to work with your newly created Yolm app, you'll need to navigate the terminal there.

The `bun start` command builds your app locally and serves it through a development server, ready for you to view at

You can click around a little bit on the application at localhost:3001

Now if you open my-system in your favorite editor (we recommend Visual Studio Code), you'll see the file structure of a yolm app.