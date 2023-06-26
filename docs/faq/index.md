---
sidebar_position: 3
---

# FAQ

## What does Yolm mean?

It's a unique name for our company and product.

## What is Yolm a good fit for?

Interactive Full Stack Web Applications with login. This can range from simple internal tools, to CRMs, tracking application to enterprise wide applications.

## What is _not_ a good fit for?

- web sites
- blogs
- games
- public social media sites
- consumer applications
- collobarative editing

## What is WebAssembly (WASM)?

It is a binary code format for executable programs. All major browsers support it natively since 2017. The main goal of WebAssembly is to enable high-performance web applications. It can be 20x faster than JavaScript and consume a fraction of the memory because it provides low level control over memory layout. It is the core technology that helps make Yolm blazingly fast in the browser.

## Won't a database grow endlessly?

Yes, unless you compact it. Yolm DB provides flexible, automated compaction, e.g. you can remove any deleted records older than 30 days to decrease the size of the transaction log, while keeping a backup of the transaction log before compaction. See [link] for more information.

## Is it open source?

Mostly no. Yolm is a for profit company. The application runtime and developer CLI (yolm) is closed source and is patent pending. Everything general purpose in Typescript that Yolm develops is available at https://github.com/yolm/boost with a MIT license.

**What operating systems can I develop Yolm applications on?**

Windows 10 or higher, Mac OS and Linux.

## What browsers and platforms does Yolm run on?

Yolm supports modern and up to date browsers only, i.e. Chrome, Brave, Edge, Safari and Firefox

## Can I have a custom domain for my application?
You can have a custom domain you manage that redirects to yolm.app. To keep things simple, secure and fast all Yolm applications

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
  - We provide flexible authorization system to indicate who can access what. We ship with role based authorization, but since our authorization system is SQL based, you can implement any type of authorization scheme, e.g. only allow access to a salary column in the employee table if you are a user in the HR department or top executive.


## Why don't you use visual designers?

Code is flexible, composable, reusable and it is easy to version control. Visual designers don't scale, code does. Also, our focus was to the foundation right first, i.e. removing unnecessary friction such the object relational impedance mismatch.

## Do you support transactions?

Yes. We always use transactions, but depending on where the transaction executes you either get eventual or strong consistency. You have fine grained control over it. Regardless of what option you choose, referential integrity, uniqueness and other constraints and permissions will always be enforced.

## When is it not a good idea to to run the database in the browser?

  - When the database is too large, at most 1 GB, which is about 5 million records across all tables.
  - When for regulatory or security reasons the database may not be on the browser, even when encrypted
