# 📚 Book Management System - Backend (CRUD Operations)

This is a **Book Management System** backend built using **Node.js**, **Express.js**, and **MongoDB**. It provides a simple RESTful API to perform CRUD operations on a book collection.

## 🚀 Features
- Get all books
- Add a book
- Update a book
- Delete a book

## 🛠️ Tech Stack
- Express JS 
- Node JS
- Mongodb

## 📘 Book Schema
Each book object in the database follows this schema:
```js
{
  title: String,
  author: String,
  price: Number,
  publishedDate: Date
}
```

## Get all books
```METHOD:GET```

```ENDPOINT: /api/books/```

This api endpoint gets all the books stored in our database.

Example response:
![image](https://github.com/user-attachments/assets/240e7cfd-e890-471e-9bdd-5326a4871a92)

## Add a book 
```METHOD:POST```

```ENDPOINT: /api/books/```

This api endpoint adds a new book in the datbase provided the necessary data is provided (title, author, price, publishedDate).

Example Response:
![image](https://github.com/user-attachments/assets/4db2b8c8-f2a6-4737-99be-256e21c56d0d)

## Update a book
```METHOD:PUT```

```ENDPOINT: /api/books/:id```

This api endpoint updates the details of a book whose id is provided in the request parameters. The id here is the mongodb _id parameter.

Example Response:
![image](https://github.com/user-attachments/assets/77e3bdef-7bd4-49cd-bcf1-4176d857e9be)


## Delete a book
```METHOD:DELETE```

```ENDPOINT: /api/books/:id```

This api endpoint deletes the book from the database whose id is in the request parameters. The id here is the mongodb _id parameter.

Example Response:
![image](https://github.com/user-attachments/assets/56ce49b7-2228-48b0-8a63-20fab157b317)
