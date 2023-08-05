---
sidebar_position: 3
title: "Principles"
---

The purpose of the Yolm web application platform is to help

- build web applications much faster and provide an excellent developer experience

- provide a great user experience so that the application will actually be used

To accomplish the above, Yolm's core principles are:

## Simplicity

Less is more.

There are no objects. Yolm uses tables for all state, both permanent state (application database) as well as temporary state (user interface). This gives us
- one way to represent data (tables)
- one way to query data (SQL)
- one type system

There is no object relational mapping since there are no objects.

There is no API layer between the user interface and the database.

There is no support for different databases, there is just one database - Yolm DB.

There are no passwords you need to remember. Only email with one time passwords (OTP).

Yolm tries to just offer one way of doing things. Yolm is very opionated and embraces constraints to make things simpler. Constraints provide focus, i.e. instead of having to make hundreds of decisions about how to build applications, Yolm let's a you focus on what actually matters to the business, especially data and business rules.

It also makes it possible to provide a lightweight browser based runtime providing excellent performance.

If you can embrace the constraints imposed by Yolm, your productivity will be easily 10X of typical ways of building applications.

## It just works

As a user you expect an application to just work.

Yolm has been _designed_ the ground up to make this a reality and make it easy for you to write bug free applications.

We have _eliminated_ certain types of errors by design. These types of errors cannot happen in Yolm, ever.

Yolm uses a new way of building applications. Yolm provides a complete object model - called Yolm Object Model (YOM) in typesafe Typescript for a web application, including database and user interface. You populate the YOM with JavaScript, but only the compiled YOM is deployed to production and the Yolm runtime executes the compiled YOM. As a result you will not get a "undefined is not a function" error that is so common in JavaScript based web applications. The reason for this is that while you populate a Yolm Object Model (YOM) with help of JavaScript during development, only the compiled YOM gets deployed, no JavaScript.

Another type of error is SQL errors. All SQL is compiled before deployment of the YOM. In fact, at runtime SQL is not supported. The Yolm runtime only executes the compiled YOM byte code. This design is also safer and faster. SQL injection attacks are impossible since there is no SQL at runtime. It is faster since no parsing of SQL queries needs to be performed at runtime.

Yolm also removes mapping code and therefore mapping errors entirely. There is no "lost in translation" errors, because there is no translation. There is no object relational impedance mismatch, since there are no objects, only tables. Also, the same database engine - Yolm DB - is used in the UI as well as the database, removing any need to map data types. There is also no API layer, removing custom code to transfer data via JSON from the UI to the (REST) API to the DB and back. All these types of errors cannot occur in a Yolm application. See "Yolm - SQL Everywhere" for more information.

We want to deliver an experience of “if it compiles, it works”. While we won’t catch logic errors, we catch as many bugs during compile time as possible. To accomplish this, Yolm leverages not just one but _two_ compilers: 

- Typescript compiler: We wrote our YOM and RAD models and application generators in Typescript. Even if you don’t use Typescript, you get code completions and even type checking when writing JavaScript (see “ts-check”) and get instant feedback from your editor. You get most of the benefits of type safety without having to write Typescript yourself.

- Yolm compiler: The Yolm compiler throughly validates the YOM and finds most issues during this second compilation step. The compiler compiles all SQL ahead of time. You do not need to run the application to find SQL errors.

Another source of problems that is eliminated for read operations is dependency on network or servers. Yolm applications in the default mode download not just the application but also a copy of the database and run queries directly in the browser, even when offline. For read operations users are not affected by networks that are slow or down nor servers that are slow or down. This makes applications much more reliable.

Together this helps Yolm web application have far fewer bugs than typical web applications and just work.


## Batteries included
Yolm comes with everything needed to build typical web applications. It comes with a UI component library, theme, routing, compiler, development server, testing tools, deployment service, serverless application runtime, database, UI rendering engine and more.

You don't need to integrate all of the libraries and tools, we've done this work for you.

## Automate your work

Yolm's design makes it very easy to automate your work. Normal meta programming (code generation) uses code or configuration as input and code as output. Yolm uses models as both input and output. This makes meta programming a lot easier and you can thereby automate your work.

## Get instant feedback

Speed matters. Having developers or users wait makes for a bad experience. Yolm has been built with speed as a top priority, both application speed for application users as well as development speed for developers.

- Yolm is written in the Rust programming language, which makes it possible to write both safe and fast programs, comparable in speed to C/C++.
- In the browser Yolm leverages WebAssembly technology, which can be up to 20X faster than JavaScript.
- Yolm's in-memory database is extremely compact and optimized for blazing speed.
- Yolm's full-text search can search millions of records in less than 20 milliseconds.
- Yolm's development server let's you see changes via hot reloading often in less than a second.
- You can run hundreds of automated tests in seconds.
- You can deploy your application with one command and be live in a few seconds.
- Yolm's CSS is optimized and minified for optimal rendering speed

With Yolm you can focus on rapidly building applications, not waiting on your tools or spending time optimizing the performance of your application. Yolm applications are fast by default, you have to work at it to build a slow Yolm application.