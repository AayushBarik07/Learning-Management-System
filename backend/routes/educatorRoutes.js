import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const router = express.Router();

// Fix __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// GET /api/educators
router.get("/", (req, res) => {
  const filePath = path.join(__dirname, "../data/educators.json"); // ✅ Correct path
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      return res.status(500).json({ error: "Failed to load data" });
    }
    res.json(JSON.parse(data));
  });
});

export default router;
