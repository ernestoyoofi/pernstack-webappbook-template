require("../utils/dotenv")
const { PrismaPg } = require("@prisma/adapter-pg")
const { PrismaClient } = require("../prisma/client/client")

const connectionString = `${process.env?.DATABASE_URL||""}`

const adapter = new PrismaPg({
  connectionString: connectionString
})
const prisma = new PrismaClient({
  adapter: adapter,
  log: process.argv.includes("--dev")? ["query", "info", "warn", "error"]:undefined,
})
module.exports = prisma