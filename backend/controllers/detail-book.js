const prisma = require("../configurations/prisma")

// Detail Book
async function detailBook({ id = "" } = {}) {
  try {
    // ... Add your logic code
    // .......
    return {
      status: 200,
      data: {
        detail: {} // ... change with data detail of book
      }
    }
  } catch(e) {
    console.log("[detailBook Error]:", e)
    return {
      status: 500,
      message: "Internal server error"
    }
  }
}

module.exports = detailBook