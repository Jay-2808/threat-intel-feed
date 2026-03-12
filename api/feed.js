import fs from "fs"
import path from "path"

export default function handler(req, res) {

  const key = req.headers["x-api-key"]

  if (key !== "MYSECRETKEY") {
    return res.status(401).send("Unauthorized")
  }

  const filePath = path.join(process.cwd(), "jamesbrine-indicators.csv")
  const csv = fs.readFileSync(filePath, "utf8")

  res.setHeader("Content-Type", "text/csv")
  res.status(200).send(csv)
}
