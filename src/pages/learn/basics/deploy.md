---
order: 5
layout: "@layouts/DocumentLayout.astro"
title: "Deploy your application"
---

## Basics

To deploy your application you run `npm run deploy`.

An application needs to have at least one active user defined. You create a user through a script like this:

``


When you deploy an application for the first time, Yolm will first deploy the application and then automatically run this script. Once done, the user(s) you specified in your script can log in to the application.

## Regions & Domains

At this time, Yolm supports three different regions to deploy

| region    | domains                                                       |
| ---       | ---                                                           |
| us        | yolm.app, yolm.us                                       |
| uk        | yolm.uk                                                    |
| eu        | yolm.eu, yolm.de, yolm.fr                            |

Each region is isolated, i.e. if you have an account in the "us" region, you cannot deploy an application to the "uk" or "eu" regions, unless you have a separate account in those regions.

This design has been chosen to provide
- lower latency, e.g. a German account does not have to contact a server in the US
- support local data residency, allowing you to keep data in a local jurisdiction
- fault isolation, a downtime or problem in one region will not affect other regions