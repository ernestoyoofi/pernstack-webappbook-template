const route = require("express").Router()
const controllers_list = require("../controllers/list-books")
const controllers_info = require("../controllers/detail-book")
const controllers_create = require("../controllers/create-book")
const controllers_update = require("../controllers/update-book")
const controllers_delete = require("../controllers/delete-book")

// Get Books (Example Result)
route.get("/books", async (req, res) => {
  const datarequest = {
    limit: parseInt(req.query?.limit||"10"),
    page: parseInt(req.query?.page||"1"),
  }
  const getdata = await controllers_list(datarequest)
  return res.status(getdata.status || 200).json(getdata)
})

// Detail Book
route.get("/book/:id", async (req, res) => {
  const datarequest = {
    id: parseInt(String(req.params?.id||""))
  }
  const getdata = await controllers_info(datarequest)
  return res.status(getdata.status || 200).json(getdata)
})

// New Book
route.post("/book", async (req, res) => {
  const datarequest = {
    title: req.body.title || "",
    description: req.body.description || "",
    image: req.body.image || "https://image.example.com",
    author: req.body.author || "None",
    publisher: req.body.publisher || "None",
    language: req.body.language || "Indonesia",
    year_publish: req.body.year_publish || "?",
    total_page: req.body.total_page || 2,
    url_page: req.body.url_page || "https://ebooks.gramedia.com/id/buku/..."
  }
  const getdata = await controllers_create(datarequest)
  return res.status(getdata.status || 200).json(getdata)
})

// Edit Book
route.put("/book/:id", async (req, res) => {
  const datarequest = {
    id: parseInt(String(req.params?.id||"")),
    title: req.body.title || "",
    description: req.body.description || "",
    image: req.body.image || "https://image.example.com",
    author: req.body.author || "None",
    publisher: req.body.publisher || "None",
    language: req.body.language || "Indonesia",
    year_publish: req.body.year_publish || "?",
    total_page: req.body.total_page || 2,
    url_page: req.body.url_page || "https://ebooks.gramedia.com/id/buku/..."
  }
  const getdata = await controllers_update(datarequest)
  return res.status(getdata.status || 200).json(getdata)
})

// Delete Book (Soft Delete)
route.delete("/book/:id", async (req, res) => {
  const datarequest = {
    id: parseInt(String(req.params?.id||""))
  }
  const getdata = await controllers_delete.deleteBook(datarequest)
  return res.status(getdata.status || 200).json(getdata)
})
// Delete Book (Hard / Remove From Database)
route.delete("/book/:id/hard", async (req, res) => {
  const datarequest = {
    id: parseInt(String(req.params?.id||""))
  }
  const getdata = await controllers_delete.deleteBookHard(datarequest)
  return res.status(getdata.status || 200).json(getdata)
})

module.exports = route