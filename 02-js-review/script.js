const data = [
    {
        id: 1,
        title: "The Lord of the Rings",
        publicationDate: "1954-07-29",
        author: "J. R. R. Tolkien",
        genres: [
            "fantasy",
            "high-fantasy",
            "adventure",
            "fiction",
            "novels",
            "literature",
        ],
        hasMovieAdaptation: true,
        pages: 1216,
        translations: {
            spanish: "El señor de los anillos",
            chinese: "魔戒",
            french: "Le Seigneur des anneaux",
        },
        reviews: {
            goodreads: {
                rating: 4.52,
                ratingsCount: 630994,
                reviewsCount: 13417,
            },
            librarything: {
                rating: 4.53,
                ratingsCount: 47166,
                reviewsCount: 452,
            },
        },
    },
    {
        id: 2,
        title: "The Cyberiad",
        publicationDate: "1965-01-01",
        author: "Stanislaw Lem",
        genres: [
            "science fiction",
            "humor",
            "speculative fiction",
            "short stories",
            "fantasy",
        ],
        hasMovieAdaptation: false,
        pages: 295,
        translations: {},
        reviews: {
            goodreads: {
                rating: 4.16,
                ratingsCount: 11663,
                reviewsCount: 812,
            },
            librarything: {
                rating: 4.13,
                ratingsCount: 2434,
                reviewsCount: 0,
            },
        },
    },
    {
        id: 3,
        title: "Dune",
        publicationDate: "1965-01-01",
        author: "Frank Herbert",
        genres: ["science fiction", "novel", "adventure"],
        hasMovieAdaptation: false,
        pages: 658,
        translations: {
            spanish: "",
        },
        reviews: {
            goodreads: {
                rating: 4.25,
                ratingsCount: 1142893,
                reviewsCount: 49701,
            },
        },
    },
    {
        id: 4,
        title: "Harry Potter and the Philosopher's Stone",
        publicationDate: "1997-06-26",
        author: "J. K. Rowling",
        genres: ["fantasy", "adventure"],
        hasMovieAdaptation: true,
        pages: 223,
        translations: {
            spanish: "Harry Potter y la piedra filosofal",
            korean: "해리 포터와 마법사의 돌",
            bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
            portuguese: "Harry Potter e a Pedra Filosofal",
        },
        reviews: {
            goodreads: {
                rating: 4.47,
                ratingsCount: 8910059,
                reviewsCount: 140625,
            },
            librarything: {
                rating: 4.29,
                ratingsCount: 120941,
                reviewsCount: 1960,
            },
        },
    },
    {
        id: 5,
        title: "A Game of Thrones",
        publicationDate: "1996-08-01",
        author: "George R. R. Martin",
        genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
        hasMovieAdaptation: true,
        pages: 835,
        translations: {
            korean: "왕좌의 게임",
            polish: "Gra o tron",
            portuguese: "A Guerra dos Tronos",
            spanish: "Juego de tronos",
        },
        reviews: {
            goodreads: {
                rating: 4.44,
                ratingsCount: 2295233,
                reviewsCount: 59058,
            },
            librarything: {
                rating: 4.36,
                ratingsCount: 38358,
                reviewsCount: 1095,
            },
        },
    },
];


function getBooks() {
    return data;
}

function getBook(id) {
    return data.find((d) => d.id === id);
}



// // Destructuring

// const book = getBook(2);

// /*   const title = book.title;
//      const author = book.author;
// */
// const { title, author, pages, publicationDate, genres, hasMovieAdaptation } = book;

// console.log(author, title, pages, publicationDate, genres, hasMovieAdaptation);
// /*
// const primaryGenre = genres[0]
// const secondaryGenre = genres[1]
// */
// /*
// const [primaryGenre, secondaryGenre] = genres;
// console.log(primaryGenre, secondaryGenre);
// */

// // Rest/Spread operator

// // Rest operator

// const [primaryGenre, secondaryGenre, ...otherGenre] = genres;
// console.log(primaryGenre, secondaryGenre, otherGenre);

// // Spraed operator

// const newGenres = ["epic fantasy", ...genres]
// newGenres

// const updatedBook = {
//     ...book,
//     // adding a new property
//     moviePublicationDate: "2001-12-19",

//     // Overwriting an existing property
//     pages: 1210,
// };
// updatedBook

// // Template Literals

// const summary = `${title}, a ${pages}-pages long book, was written by ${author} and published in ${publicationDate.split("-")[0]}`;
// summary;

// // Ternaries Instead of ifelase Satement 

// const pagesRange = pages > 1000 ? "over a 1000" : "less than 1000";
// pagesRange;
// console.log(`A book has ${pagesRange} pages`);

// // Arrow function

// /* 
// function getYear(str) {
//     return str.split("-")[0];
// }
// console.log(getYear(publicationDate));
//  */
// const getYear = (str) => str.split("-")[0];

// console.log(getYear(publicationDate));

// // 7. Short-Circuiting And Logical Operators &&, , 

// console.log(true && "some string");
// console.log(false && "some string");

// console.log((hasMovieAdaptation && "This book has a movie"));

// // falsy: 0, null, '', undefined
// console.log("jonas" && "some String");
// console.log(0 && "some String");

// console.log(true || "some String");
// console.log(false || "some String");

// console.log(book.translations.spanish);

// const spanishTranslations = book.translations.spanish || "Not Translated";
// spanishTranslations;

// console.log(book.reviews.librarything.reviewsCount);

// const countWrong = book.reviews.librarything.reviewsCount || "No data";
// countWrong;

// const count = book.reviews.librarything.reviewsCount ?? "No data";
// count;

// // Optional Chaining

// function getTotalReviewCount(book) {
//     const goodreads = book.reviews.goodreads.reviewsCount;
//     const librarything = book.reviews.librarything?.reviewsCount ?? 0;
//     librarything;
//     return goodreads + librarything
// }
// console.log(getTotalReviewCount(book));

//

// The Array map Method

const books = getBooks();
books;

function getTotalReviewCount(book) {
    const goodreads = book.reviews.goodreads.reviewsCount;
    const librarything = book.reviews.librarything?.reviewsCount ?? 0;
    librarything;
    return goodreads + librarything
}

const x = [1, 2, 3, 4, 5].map((el) => el * 2);
console.log(x);

const titles = books.map((book) => book.title);
titles;

const essentialData = books.map((book) =>({
    title: book.title,
    author: book.author,
    reviewsCount: getTotalReviewCount(book),
}));
console.log(essentialData);

// The Array filter Method

const longBooks = books
.filter((book) => book.pages > 500)
.filter((book) => book.hasMovieAdaptation);
longBooks;

const adventureBooks = books
.filter((books) => books.genres.includes("adventure"))
.map((book) => book.title);
adventureBooks;

// The Array reduce Methods

const pageAllBooks = books.reduce((sum, book) => sum + book.pages, 0);
pageAllBooks;

// The Array sort Method

//  assending way

const arr = [3, 7, 1, 9, 6];
const sorted = arr.sort((a, b) => a - b);
sorted

// decending way

const arr1 = [3, 7, 1, 9, 6];
const sorted1 = arr.sort((a, b) => b - a);
sorted1;

const sortedByPages = books.slice().sort((a, b) => b.pages - a.pages);
sortedByPages;

// Working with Immutable Arrays

//  1. Add book object to array

const newBook = {
    id: 6,
    title: "Harry Pooter and the Chamber of Secrets",
    author: "J.k. Rowling",
};

const booksAfterAdd = [...books, newBook];
booksAfterAdd;

// 2. Delete book object from array

const bookAfterDelete = booksAfterAdd.filter((book) => book.id !==3);
bookAfterDelete;

// 3. Update book object in an array

const booksAfterUpdate = bookAfterDelete.map((book) =>
book.id === 1 ? {...book, pages: 1210} : book
);
booksAfterUpdate;

// Asynchronous javascript

fetch("https://jsonplaceholder.typicode.com/todos")
.then((res) => res.json())
.then((data) => console.log(data));

console.log("jonas");

async function getTodoes(){
  const res =  await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data);

  return data;
}
const todos = getTodoes();
console.log(todos);

console.log("jonas");