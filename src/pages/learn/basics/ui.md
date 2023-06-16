---
order: 4
layout: "@layouts/DocumentLayout.astro"
title: "Create a simple UI"
---

## Basic Data Flow

The typical flow in web applications is

DB --(SQL/ORM)--> API --(JSON)--> UI

and

UI --(JSON)--> API --(SQL/ORM)--> DB

The developer has to manually package and map data, which is a waste.

Yolm's UI framework is unique in that it

- Uses tables for UI state and SQL to query and manage that state
- Uses SQL to bring data from the DB to the UI
- Uses SQL to bring data from the UI to the DB

This is the flow you use in Yolm:

DB --(SQL)--> UI

UI --(SQL)--> DB

In addition to built-in state management via tables and SQL, the Yolm UI framework addresses theming and styling, components, routing, event handling and more to offer a complete solution to building client side web applications.

## Node Tree

The UI is configured as a hierarchical set of nodes similar to other web application frameworks.

There are visible nodes such as

- HTML elements: as div, p, h1, etc.
- Chart
- DataGrid

There are non-visible nodes such as

- route: Render children if the current URL route matches
- state: Manage state for all nodes below
- if_: Render children only if condition is true
- each: Render one child per record

A node may have children nodes and any properties relevant for the node.

The node tree is static JSON, it is not dynamically updated but it shows different pages or nodes based off of state, conditionals or routes.

Most properties are SQL expressions that can reference any UI state. This means you can use sub queries, call functions, concatenate string, etc. when passing data to most nodes.

## State

A state allows you define tables, records and scalars that any node beneath can access or modify. State can come both from the database as well as initialized from code. If data is retrieved from the database the state node must have a [block](#blocks) defined above it.

A state is only initialized usually once. The exception to this is

1) If you go to another page, in which case the state will re-initialize when you go back to the page with the state.

2) When the watch property is supplied. Watch indicates expressions to check on each render if it has changed and if so to reinitialize the state. Watch together with blocks allows for seamless database and UI interactions.

State cannot modify the database, only read from it.


## Event Handlers

The only way to update the UI state and/or DB is through event handlers. Event handlers are procedures that run in response to some trigger, such as a click, key press, etc. An event handler has access to both the UI state and DB state.

Event handlers are always written in a synchronous manner, but the UI engine executes it asynchronously on behalf of the developer.

Event handlers at runtime may run in the UI or database or a mix thereof.

Yolm disallows two event handlers running at the same time and enables this simplified programming model.

Event handler procedures share common statements with other procedure types (loop, conditional, etc.) but also have UI specific statements (navigate, preventDefault, etc.).

An event handler is an object with additional properties, not just a procedure. This lets you declaratively control the UI if the event handler takes too long (onWait), correctly update the state in case of an error (onError), control how long the timeout for the event handler is (timeout) and how long the UI engine will wait before re-rendering (renderTimeout).

## Routing

Routing is handled by two nodes:

- Route: Render nodes below the Route node if current URL matches

- Routes: Render only one of the routes below

The route path syntax:

`{param:type}`

e.g.

`/contacts/{contactId:id}`

this will inject a variable named contactId with type of id (BigUInt), which the nodes below can access.

