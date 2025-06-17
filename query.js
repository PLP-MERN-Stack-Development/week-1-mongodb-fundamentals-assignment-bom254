// imports
const { MongoClient, uri, dbName } = require('./insert_books.js');

// Function to find all books
async function findAllBooks() {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const collection = client.db(dbName).collection('books');
    const books = await collection.find({}).toArray();
    console.log('All books:');
    books.forEach(book => {
      console.log(`- "${book.title}" by ${book.author} (${book.published_year})`);
    });
  } catch (err) {
    console.error('Error finding all books:', err);
  } finally {
    await client.close();
  }
}

// Function to find books by a specific author
async function findBooksByAuthor(author) {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const collection = client.db(dbName).collection('books');
    const books = await collection.find({ author }).toArray();
    console.log(`Books by ${author}:`);
    books.forEach(book => {
      console.log(`- "${book.title}" (${book.published_year})`);
    });
  } catch (err) {
    console.error(`Error finding books by author ${author}:`, err);
  } finally {
    await client.close();
  }
}

// Function to find books published after a specific year
async function findBooksPublishedAfter(year) {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const collection = client.db(dbName).collection('books');
    const books = await collection.find({ published_year: { $gt: year } }).toArray();
    console.log(`Books published after ${year}:`);
    books.forEach(book => {
      console.log(`- "${book.title}" by ${book.author} (${book.published_year})`);
    });
  } catch (err) {
    console.error(`Error finding books published after ${year}:`, err);
  } finally {
    await client.close();
  }
}

// Function to find books in a specific genre
async function findBooksByGenre(genre) {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const collection = client.db(dbName).collection('books');
    const books = await collection.find({ genre }).toArray();
    console.log(`Books in genre "${genre}":`);
    books.forEach(book => {
      console.log(`- "${book.title}" by ${book.author} (${book.published_year})`);
    });
  } catch (err) {
    console.error(`Error finding books in genre ${genre}:`, err);
  } finally {
    await client.close();
  }
}

// Function to find in-stock books
async function findInStockBooks() {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    const collection = client.db(dbName).collection('books');
    const books = await collection.find({ in_stock: true }).toArray();
    console.log('In-stock books:');
    books.forEach(book => {
      console.log(`- "${book.title}" by ${book.author} (${book.published_year})`);
    });
  } catch (err) {
    console.error('Error finding in-stock books:', err);
  } finally {
    await client.close();
  }
}

// Export the functions
module.exports = {
  findAllBooks,
  findBooksByAuthor,
  findBooksPublishedAfter,
  findBooksByGenre,
  findInStockBooks
};
