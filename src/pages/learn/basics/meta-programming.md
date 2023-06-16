---
order: 6
layout: "@layouts/DocumentLayout.astro"
title: "Meta Programming"
---

We designed Yolm to make meta programming easy.

Meta programming is writing programs that write programs, or code that writes code.

It is very easy to do in Yolm since the YOM is

- defined in Typescript object model

- complete

Populating a Typescript object model with JavaScript (or Typescript) is trivially simple. And, because YOM covers all of an application, our generators can generate across application areas, for example we can generate both database part of the model as well as user interface part of the model. A simple example would be to specify a field of type email, and generating
- a database field of type String with a check constraint that it must be a valid email
- user interface validation code that ensures that the entered data is a valid email

We call Typescript functions that create whole YOM "application generators".

You typically never develop a Yolm application directly against the YOM - this is an antipattern - but you populate this higher level application model using Typescript and then the application generator generates the "lower" level YOM.

This model driven approach incurs zero runtime overhead since the runtime only deals with the generated model, not application models. We provide a few application generators out of the box.

The Yolm developer community for example can build application generators and associatd application models that are optimized for specific domains, e.g. financial management applications, and make building these kinds of applications 10x faster than regular Yolm applications, which are already much faster to develop to begin with.

With Yolm we can automate large parts of application development. This is a game changer.

