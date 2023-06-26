---
sidebar_position: 3
title: "Introduction"
---
Yolm is the fastest way to deliver full-stack web applications.

Yolm accomplishes this mostly by removing friction and waste from development. Yolm provides a revolutionary new approach to developing web application that let's developers focus on the essentials and leave the rest to Yolm.

You can set up a Yolm project in a minute, locally develop and test your application in a fraction of the time it usually takes, and deploy your application and database in seconds to Yolm's serverless platform.

What took hours or days can easily be done in minutes with Yolm.

## Yolm Object Model (YOM)

In a typical interactive full stack web application you have database, CSS , HTML and JavaScript files, each with their own syntax.

Yolm provides a complete object model of a web application, including database definition, business logic and user interface. This is called the Yolm Object Model (YOM). You populate the YOM with JavaScript, but you only deploy the model, not the JavaScript. The populated model is your application.

__You can create a whole application in a single Typescript file.__

You usually don't program directly against the YOM since it is quite low level to provide a lot of flexibility. Instead, you use higher-level abstractions on top of the YOM to help you build applications ridiculously fast, yet be able to go lower level as needed.

## SQL Everywhere Programming Model

Databases use tables - API and UI use objects for state. This is the underlying reason for the object relational impedance mismatch.

Yolm adresses the root cause and uses only tables for state. There are no objects.

Yolm uses tables for all state, both persistent and transient and let's you use SQL to access these tables. This eliminates the object relational impedance mismatch and enables friction free development.

And Yolm takes it one step further: We’ve created a new programming model that allows you to reference both UI and application database in the same query. For example, if you want to insert a new customer from the customer form, you can use this SQL:

`insert into db.Customer select * from ui.CustomerForm`

You don’t need to write code to map from objects to tables and back, serialize and deserialize data via JSON nor create and consume a REST or GraphQL API.

Instead, you just use SQL to directly connect the database and the UI. There is no API.

As a result, you have to write far less code.

___End-to-end state management has finally become simple.___

For more information, see the article [“Yolm - The SQL Everywhere Platform”](./sql_everywhere.md).

## Serverless

You deploy an application using ```npm run deploy``` in seconds to Yolm's serverless platform. You don't need to configure or manage any servers.