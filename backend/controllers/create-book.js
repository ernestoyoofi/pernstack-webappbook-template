const prisma = require("../configurations/prisma")

// Create book
async function createBook(dataPost = {}) {
  const { title = "", description = "", image = "", author = "", publisher = "", language = "", year_publish = "", total_page = 2, url_page = "" } = dataPost
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
    console.log("[createBook Error]:", e)
    return {
      status: 500,
      message: "Internal server error"
    }
  }
}

module.exports = createBook