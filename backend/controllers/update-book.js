const prisma = require("../configurations/prisma")

// Update book
async function updateBook(dataPost = {}) {
  const { id = "", title = "", description = "", image = "", author = "", publisher = "", language = "", year_publish = "", total_page = 2, url_page = "" } = dataPost
  try {
    // ... Add your logic code
    // .......
    return {
      status: 200,
      data: {
        id: 0, // change value with your return id
        success: true
      }
    }
  } catch(e) {
    console.log("[updateBook Error]:", e)
    return {
      status: 500,
      message: "Internal server error"
    }
  }
}

module.exports = updateBook