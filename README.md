[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=19789792&assignment_repo_type=AssignmentRepo)
# MongoDB Fundamentals Assignment

This assignment focuses on learning MongoDB fundamentals including setup, CRUD operations, advanced queries, aggregation pipelines, and indexing.

## Assignment Overview

You will:
1. Set up a MongoDB database
2. Perform basic CRUD operations
3. Write advanced queries with filtering, projection, and sorting
4. Create aggregation pipelines for data analysis
5. Implement indexing for performance optimization

## Getting Started

1. Accept the GitHub Classroom assignment invitation
2. Clone your personal repository that was created by GitHub Classroom
3. Install MongoDB locally or set up a MongoDB Atlas account
4. Run the provided `insert_books.js` script to populate your database
5. Complete the tasks in the assignment document

## Files Included

- `Week1-Assignment.md`: Detailed assignment instructions
- `insert_books.js`: Script to populate your MongoDB database with sample book data

## Requirements

- Node.js (v18 or higher)
- MongoDB (local installation or Atlas account)
- MongoDB Shell (mongosh) or MongoDB Compass

## Submission

Your work will be automatically submitted when you push to your GitHub Classroom repository. Make sure to:

1. Complete all tasks in the assignment
2. Add your `queries.js` file with all required MongoDB queries
3. Include a screenshot of your MongoDB database
4. Update the README.md with your specific setup instructions

## Project Overview

This project demonstrates basic MongoDB operations using Node.js. It consists of two main scripts:

- `insert_books.js`: This script connects to a local MongoDB instance and populates the `plp_bookstore` database's `books` collection with sample book data. Running this script will insert a predefined set of books into the database, dropping the collection first if it already exists.

- `queries.js`: This script contains asynchronous functions that connect to the same MongoDB database and perform various queries on the `books` collection. These queries include:
  1. Finding all books
  2. Finding books by a specific author
  3. Finding books published after a certain year
  4. Finding books in a specific genre
  5. Finding books that are currently in stock

### How to Use

1. Ensure MongoDB is running locally or update the connection URI in `insert_books.js` and `queries.js` if using a remote database.

2. Run `insert_books.js` to populate the database with sample data:
   ```
   node insert_books.js
   ```

3. Use the functions in `queries.js` to perform queries. You can import and call these functions in your own scripts or modify `queries.js` to run them directly. For example:
   ```js
   const { findAllBooks, findBooksByAuthor } = require('./queries');

   findAllBooks();
   findBooksByAuthor('George Orwell');
   ```

4. Each function connects to the database, performs the query, logs the results to the console, and closes the connection.

## Resources

- [MongoDB Documentation](https://docs.mongodb.com/)
- [MongoDB University](https://university.mongodb.com/)
- [MongoDB Node.js Driver](https://mongodb.github.io/node-mongodb-native/)
