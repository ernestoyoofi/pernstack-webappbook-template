const prisma = require("../configurations/prisma")
const Prisma = require("../prisma/client")

let tryRetest = 0

async function checkConnectionDatabase() {
  try {
    console.log("[\x1b[35mChecker connection\x1b[0m]: Checking database connection...")
    await prisma.$queryRaw(Prisma.sql`SELECT 'Hello' as message`)
    console.log("[\x1b[34mChecker connection\x1b[0m]: Connect to postgres!")
  } catch(e) {
    console.error("[\x1b[31mChecker connection\x1b[0m]: Failed to connect to postgres!")
    console.error("[\x1b[31mChecker connection\x1b[0m]: Log Trace >\x1b[31m", e.stack, "\x1b[0m")
    if(tryRetest > 4) {
      console.error("[\x1b[31mChecker connection\x1b[0m]: Please check your .env on DATABASE_URL or check your connection between App to Database, maybe username, password or port has changed!")
      process.exit(1)
    } else {
      console.log("[\x1b[35mChecker connection\x1b[0m]: Retest connection on 5s...")
      await new Promise((a) => setTimeout(a, 5000))
      checkConnectionDatabase()
      tryRetest++
    }
  }
}

module.exports = checkConnectionDatabase