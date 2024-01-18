---
title: "Advanced"
sidebar:
  label: "Advanced"
  order: 3
---

1. A Yolm application is a **Typescript Model**, which is serialized to a JSON file. The main parts of the Typescript model are

- the database definition
- the user interface
- the interactions between the user interface (UI) and the database (DB)

You can find the complete model in [yom.ts](https://github.com/yolmio/boost/blob/main/src/yom.ts). It is good to know that it exists, but you typically do not interact directly with this model.

2. The model uses only tables for state and SQL to query and modify data between UI and DB. You can for example use

```sql
Insert into db.customer select * from ui.customer_form
```

to insert the data that a user entered into a form, which in turn was stored in a temporary table named 'customer_form" and inserts this into the permanent customer table of the application database.

3. The BOOST library leverages the capabilities offered in 1 and 2 above and provides a higher level abstractions to make building web applications even easier and generate the underlying model. Often you end up writing 5-10 times less code using this approach.

4. You can test with the local development tools that directly run the model locally. We use Rust and WebAssembly to offer you blazingly fast execution both in development and in production.

5. When you are ready, you deploy the model to the Yolm service.
