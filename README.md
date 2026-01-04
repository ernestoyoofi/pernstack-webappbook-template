# PERN Stack Simple Book Management (Template Repository)

A clean and modular boilerplate for building a CRUD application using the PERN Stack (PostgreSQL, Express.js, React.js, and Node.js). This project is designed as a learning template for developers to understand the fundamentals of full-stack development.

## 🚀 Features

- Full CRUD Operations: Create, Read, Update, and Delete books.
- Soft & Hard Delete: Implementation of data persistence and permanent removal.
- Pagination: Efficiently fetch book lists using page queries.
- RESTful API: Structured endpoints following industry standards.
- Database Seeding: Ready-to-use PostgreSQL schema.

## 📚 Learning Objectives

By exploring this repository, you will learn:

- PostgreSQL: Designing schemas and managing relational data.

  **Indonesia :**
  - [Tutorial PostgreSQL Database (Bahasa Indonesia) - @ProgrammerZamanNow](https://www.youtube.com/watch?v=iEeveYoD0SA)
  - [PostgreSQL Vs mySQL - @id.networkers](https://www.youtube.com/shorts/qFVym3n2ndQ)
  - [Apa Itu PostgreSQL? - @hobonid](https://www.youtube.com/watch?v=OrA9YRxhdd8)

  **English :**
  - [99% of Developers Don't Get PostgreSQL - @TheCodingGopher](https://www.youtube.com/watch?v=P8rrhZTPEAQ)
  - [Postgres Is All You Need - @PatSpizzo](https://www.youtube.com/watch?v=U2NGda_Nc3E)
  - [you need to learn SQL RIGHT NOW!! (SQL Tutorial for Beginners) - @NetworkChuck](https://www.youtube.com/watch?v=xiUTqnI6xk8)

- Express.js & Node.js: Building a robust backend API and handling middleware.

  **Indonesia :**
  - [Belajar NodeJS | 1. Apa Itu NodeJS? - @sandhikagalihWPU (Playlist)](https://www.youtube.com/watch?v=sSLJx5t4OJ4&list=PLFIM0718LjIW-XBdVOerYgKegBtD6rSfD)
  - [SESI 1 - Tutorial Setup Backend API NodeJS Express - @deaafrizal](https://www.youtube.com/watch?v=LuY3f978a-A)
  - [TUTORIAL NODEJS DASAR (BAHASA INDONESIA) - @ProgrammerZamanNow](https://www.youtube.com/watch?v=b39Xqf5iyjo)

  **English :**
  - [Node.js Ultimate Beginner’s Guide in 7 Easy Steps - @Fireship](https://www.youtube.com/watch?v=ENrzD9HAZK4)
  - [Node.js Tutorial for Beginners: Learn Node in 1 Hour - @programmingwithmosh](https://www.youtube.com/watch?v=TlB_eWDSMt4)
  - [Node.js can do that? - @academind](https://www.youtube.com/watch?v=BKS4lDIhPaM)

- React.js: State management, fetching data from APIs, and component lifecycle.

  **Indonesia :**
  - [Tutorial React.JS Dasar (Bahasa Indonesia) - @ProgrammerZamanNow](https://www.youtube.com/watch?v=yOIO5h3ENIw)
  - [Setup React JS Untuk Pemula Bahasa Indonesia - @deaafrizal](https://www.youtube.com/watch?v=3Jgju76gS2g)
  - [Apa Itu React JS Buat Pemula - @deaafrizal](https://www.youtube.com/watch?v=2ehEWo4kaNA)
  - [Tutorial REACT "Paling Masuk Akal" untuk PEMULA 🤩🌐 - @sandhikagalihWPU](https://www.youtube.com/watch?v=kcnwI_5nKyA)

  **English :**
  - [React in 100 Seconds - @Fireship](https://www.youtube.com/watch?v=Tn6-PIqc4UM)
  - [React Tutorial for Beginners - @programmingwithmosh](https://www.youtube.com/watch?v=SqcY0GlETPk)
  - [Master React JS in easy way - @Nova_Designs_](https://www.youtube.com/watch?v=E8lXC2mR6-k)
  - [Every React Concept Explained in 12 Minutes - @TheCodeBootcamp](https://www.youtube.com/watch?v=wIyHSOugGGw)

- Sequelize/PG: Interacting with the database using an ORM or Query Builder with Prisma.
- Soft Delete Logic: Implementing deleted_at timestamps for data recovery.

## 🛠️ Tech Stack

- **Frontend**: React.js (Vite), Tailwind, Shadcn UI
- **Backend**: Node.js, Express.js, Prisma
- **Database**: PostgreSQL
- **Tools**: Axios, Cors, Dotenv, Prisma, Sonner, Vaul

## 🛣️ API Documentation

The backend exposes the following endpoints:

| Method | Endpoint | Description |
| ------ | -------- | ----------- |
| GET | /api/v1/books?page=1 | Get all books with pagination |
| GET | /api/v1/book/:id | Get detailed information of a specific book |
| POST | /api/v1/book | Create and save a new book entry |
| PUT | /api/v1/book/:id | Update book information (Partial or Full) |
| DELETE | /api/v1/book/:id | Soft delete a book (sets deleted_at) |
| DELETE | /api/v1/book/:id/hard | Permanently remove a book from the database |

## 📖 Getting Started

1. Clone the repository

   ```sh
   git clone https://github.com/ernestoyoofi/pernstack-webappbook-template.git
   ```

2. Setup Database Create a PostgreSQL database and configure your .env file.
3. Install Dependencies

   ```sh
   # For Backend
   cd server && npm install
   # For Frontend
   cd client && npm install
   ```

4. Run the Application both folder

   ```sh
   npm run dev
   ```

## 📝 Notes

- Ensure you have PostgreSQL installed and running on your machine.
- Don't forget to rename `.env.example` to `.env` and fill in your credentials.
