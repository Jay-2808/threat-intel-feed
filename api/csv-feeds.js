import fs from "fs";
import path from "path";

export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  const key = req.headers["x-api-key"];

  if (key !== "MYSECRETKEY") {
    return res.status(401).send("Unauthorized");
  }

  try {
    const filePath = path.join(process.cwd(), "jamesbrine-indicators.csv");
    if (!fs.existsSync(filePath)) {
      return res.status(404).send("Error: CSV file not found in repository.");
    }
    const csvData = fs.readFileSync(filePath, "utf8");
    res.setHeader("Content-Type", "text/csv");
    res.status(200).send(csvData);
  } catch (error) {
    console.error("File Read Error:", error);
    res.status(500).send("Internal Server Error");
  }
}
