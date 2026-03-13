import fs from "fs"
import path from "path"

export default function handler(req, res) {
  
  res.setHeader("Access-Control-Allow-Origin", "*")
  const key = req.headers["x-api-key"]

  if (key !== "MYSECRETKEY") {
    return res.status(401).send("Unauthorized")
  }

  const csv = `# Threat Intelligence Indicator Feed\n# Source: James Brine STIX dataset (converted from STIX 2.x to CSV)\n# Description: This dataset contains cyber threat indicators extracted from STIX Indicator objects.\n# Each row represents a single indicator associated with malicious activity such as brute-force attacks.\n\n"id","indicator_id","indicator","valid_from","created","modified","name"\n"64176607","indicator--b6c1a125-e66a-4df3-ae99-ef1eb07d36ec","106.55.61.15","2020-08-08 21:28:23","2020-08-09 05:28:23","2020-08-09 05:28:23","SSH Bruteforce Host"\n"64171082","indicator--5634beea-47d6-4679-ba19-908b4c0d9198","2.57.122.98","2020-08-09 21:28:06","2020-08-10 05:28:06","2020-08-10 05:28:06","ntp Bruteforce Host"\n"64176704","indicator--853e98ba-bfd0-4496-ae07-464d89b64b81","34.91.189.40","2020-08-09 21:28:06","2020-08-10 05:28:06","2020-08-10 05:28:06","ntp Bruteforce Host"\n"64176795","indicator--1aaa50d5-e39f-4143-b7f3-6664007424c7","34.125.19.49","2020-08-09 21:28:06","2020-08-10 05:28:06","2020-08-10 05:28:06","ntp Bruteforce Host"\n"64176763","indicator--e8adeb05-5215-4de3-a75c-1e695c824f6a","182.61.44.2","2020-08-09 21:28:06","2020-08-10 05:28:06","2020-08-10 05:28:06","SSH Bruteforce Host"\n"64171067","indicator--ddb4eb51-aab5-4825-87b2-46f7e7474bfb","54.39.215.32","2020-08-10 21:26:35","2020-08-11 05:26:35","2020-08-11 05:26:35","ntp Bruteforce Host"\n"64177017","indicator--6cbe047d-b5d0-4b6b-827f-f02f2b765800","51.195.53.6","2020-08-10 21:26:35","2020-08-11 05:26:35","2020-08-11 05:26:35","SSH Bruteforce Host"\n"64176905","indicator--d74144f5-77bd-43a7-a18e-4b2c42980fb5","49.234.43.39","2020-08-11 21:24:11","2020-08-12 05:24:11","2020-08-12 05:24:11","SSH Bruteforce Host"\n"64177282","indicator--73d04013-7e90-4a60-ab58-66700e908915","122.51.70.17","2020-08-11 21:24:11","2020-08-12 05:24:11","2020-08-12 05:24:11","SSH Bruteforce Host"\n"64176319","indicator--c347dcb2-49e2-4d77-a7b7-028585d85ac3","189.4.2.58","2020-08-11 21:24:11","2020-08-12 05:24:11","2020-08-12 05:24:11","SSH Bruteforce Host"\n`;
  res.setHeader("Content-Type", "text/csv")
  res.status(200).send(csv)
}
