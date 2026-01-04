const prisma = require("../configurations/prisma")

// Example List Book
async function listBook({ page = 1, limit = 10 } = {}) {
  const currentPage = Math.max(1, parseInt(page))
  const currentLimit = parseInt(limit)
  const skip = (currentPage - 1) * currentLimit
  
  try {
    const [books, totalData] = await Promise.all([
      prisma.books.findMany({
        skip: skip,
        take: currentLimit,
        where: {
          deleted_at: null
        },
        orderBy: { created_at: "desc" },
        select: {
          image: true,
          title: true,
          description: true,
          author: true,
          url_page: true,
          id: true
        }
      }),
      prisma.books.count()
    ])

    const totalPages = Math.ceil(totalData / currentLimit)

    return {
      status: 200,
      data: {
        list: books.map((items) => ({
          image: items.image,
          title: items.title,
          description: items.description,
          author: items.author,
          url_page: items.url_page,
          id: items.id
        }))
      },
      meta: {
        current_page: currentPage,
        total_pages: totalPages,
        total_data: totalData,
        can_next: currentPage < totalPages,
        can_prev: currentPage > 1
      },
    }
  } catch(e) {
    console.log("[listBook Error]:", e)
    return {
      status: 500,
      message: "Internal server error"
    }
  }
}

module.exports = listBook