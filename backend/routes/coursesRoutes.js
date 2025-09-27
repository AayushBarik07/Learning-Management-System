import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, "../data/courses.json");

// GET /api/courses -> return all courses
router.get("/", (req, res) => {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      return res.status(500).json({ error: "Failed to load data" });
    }
    try {
      const courses = JSON.parse(data);
      res.json(courses); 
    } catch (e) {
      console.error("Error parsing courses.json:", e);
      res.status(500).json({ error: "Invalid JSON format" });
    }
  });
});

// POST /api/courses -> add new course
router.post("/", (req, res) => {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      return res.status(500).json({ error: "Failed to read data" });
    }

    let courses = [];
    try {
      courses = JSON.parse(data);
    } catch (e) {
      console.error("Error parsing courses.json:", e);
      return res.status(500).json({ error: "Invalid JSON format" });
    }

    const newCourse = req.body;
    newCourse.id = courses.length > 0 ? courses[courses.length - 1].id + 1 : 1;

    courses.push(newCourse);

    fs.writeFile(filePath, JSON.stringify(courses, null, 2), (err) => {
      if (err) {
        console.error("Error writing file:", err);
        return res.status(500).json({ error: "Failed to save data" });
      }
      res.status(201).json(newCourse);
    });
  });
});

export default router;
