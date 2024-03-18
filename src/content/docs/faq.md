---
title: "FAQ"
description: "Frequently Asked Questions"
---

# FAQ

## What does Yolm mean?

It's a unique name for our company and product.

## What is Yolm a good fit for?

Yolm is an excellent fit from simple internal tools to complex enterprise web applications. Examples include Human Resource management, CRM, tracking applications or ERP.

## What is _not_ a good fit for?

- web sites
- blogs
- games
- public social media sites
- consumer applications
- collobarative editing

## What is WebAssembly (WASM)?

It is a binary code format for executable programs. All major browsers support it natively since 2017. The main goal of WebAssembly is to enable high-performance web applications. It can be 20x faster than JavaScript and consume a fraction of the memory because it provides low level control over memory layout. It is the core technology that helps make Yolm blazingly fast in the browser.

## Is it open source?

Yolm is a for profit company. The application runtime and developer CLI (yolm) is closed source and is patent pending. The BOOST library written in Typescript is available at https://github.com/yolm/boost with a MIT open source license. You can use BOOST as is, modify it or write your own components, themes or generators.

## What operating systems can I develop Yolm applications on?

Windows 10 or higher, Mac OS and Linux.

## What browsers and platforms does Yolm run on?

Yolm supports modern and up to date browsers only, i.e. Chrome, Brave, Edge, Safari and Firefox

## Can I have a custom domain for my application?

You can have a custom domain you manage that redirects to yolm.app.

## How do I integrate Yolm with other applications?

- Yolm allows you to expose a REST API for your application
- You can use any integration tool, e.g. Integromat, Zapier, etc. to integrate your application with other applications.
- From within the UI you can securely call external web services
- Yolm provides CSV import and export

## Do you support blobs in the database?

No. Since Yolm DB is an in-memory database we don't want the size of the database to grow too quickly. We do provide easy integration of files and reference them from the database. We manage file storage for you as part of our managed service. See help (link).

## Is it secure?

Yes.

- We encrypt all customer data in the browser and the cloud
- We use only HTTPS
- We only use one time passwords (OTP) and therefore are not subject to any permanent password related security issues
- We have a full audit log of who changed what when in the database
- We provide flexible authorization system to indicate who can access what. With procedures, SQL and access to the current user you can have any logic to authorize access or make custom videos.

## Why don't you use visual designers?

Code is flexible, composable, reusable and it is easy to version control. Visual designers don't scale, code does. Also, our focus was to the foundation right first, i.e. removing unnecessary friction such the object relational impedance mismatch.

## When is it not a good idea to to run the database in the browser?

- When the database is too large, at most 400 MB.
- When for regulatory or security reasons the database may not be on the browser
