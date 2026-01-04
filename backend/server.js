const express = require("express")
const cors = require("cors")
const route_books = require("./routes/books")
const db_status = require("./utils/db-status")

const app = express()
const port = process.env.PORT || 3754
const host = process.env.SERVE || "0.0.0.0"

app.use(cors())
app.use(express.json())

app.use((req, res, next) => {
  res.setHeader("X-Server-Date", `${new Date()}`)
  res.setHeader("Content-Type", "application/json; charset=utf-8")
  console.log(`[\x1b[34mServer\x1b[0m]: ${String(req?.method||"").toUpperCase()} ${req?.url||"/"}`)
  next()
})

app.use("/api/v1", route_books)

app.use((_, res) => {
  return res.status(404).json({
    status: 404,
    message: "Page not found"
  })
})

app.listen(port, host, () => {
  console.log(`[\x1b[34mServer\x1b[0m]: 📬 Server Is Running!`)
  console.log(`[\x1b[34mServer\x1b[0m]: Host: http://localhost:${port}`)
  // Checking database
  db_status()
})