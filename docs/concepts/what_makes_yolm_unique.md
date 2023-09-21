---
title: "What makes Yolm unique?"
---

- SQL everywhere: Single way to represent state and query (SQL) state across the whole application.
  -> No Object Relational Impedance Mismatch
- Automated State Transfer. UI State is automatically transferred to the UI data service which gives access to both UI state and DB state allowing queries like
  ```Insert into db.customer select * from ui.customer_form```
  -> Far less manual code
- Single, unified object model of an application, including DB, UI and their interactions
- Everything integrates since everything was built from scratch and purpose built to integrate. The data grid automatically integrates with the database. The search UI works with the DB search feature.
  This eliminates a lot of friction and configuration.
- Instant development feedback: Development is local and the development server has been implemented with instant feedback in mind, including support of hot reloading, which often takes a fraction of a second
- Full stack serverless: You don't need to manage the database, the web server, CDN, file storage or anything else.
- Page generator functions. Common UI patterns can be completely generated with just a function call, massively reducing the size of the code you need to write.
- Blazingly fast web apps: Yolm leverages WASM and a lot of optimizations to provide a smooth and fast end user experience for users of your web apps. And unlike almost all of web apps, Yolm provides true edge computing capabilities where database queries can run directly inside the browser, providing the best possible user experience. 
  

