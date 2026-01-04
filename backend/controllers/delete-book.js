const prisma = require("../configurations/prisma")

// Delete Book (Soft Delete)
async function deleteBook({ id = "" } = {}) {
  try {
    // ... Add your logic code
    // .......
    return {
      status: 200,
      data: {
        success: true
      }
    }
  } catch(e) {
    console.log("[deleteBook Error]:", e)
    return {
      status: 500,
      message: "Internal server error"
    }
  }
}

// Delete Book (Hard Delete)
async function deleteBookHard({ id = "" } = {}) {
  try {
    // ... Add your logic code
    // .......
    return {
      status: 200,
      data: {
        success: true
      }
    }
  } catch(e) {
    console.log("[deleteBookHard Error]:", e)
    return {
      status: 500,
      message: "Internal server error"
    }
  }
}

module.exports = {
  deleteBook,
  deleteBookHard
}