import fs from "fs"

export default function handler(req, res) {

  const apiKey = req.headers["x-api-key"]

  if (apiKey !== "MYSECRETKEY") {
    return res.status(401).send("Unauthorized")
  }

  const csv = "ip,threat\n1.1.1.1,botnet\n2.2.2.2,malware"
  // const csv = fs.readFileSync("./jamesbrine-indicators.csv", "utf8")

  res.setHeader("Content-Type", "text/csv")
  res.status(200).send(csv)
}
