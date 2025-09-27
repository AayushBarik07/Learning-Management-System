import express from "express";
import cors from "cors";   
import educatorRoutes from "./routes/educatorRoutes.js";
import courseRoutes from "./routes/coursesRoutes.js"; // ✅ Import courses route

const app = express();

// ✅ Middleware
app.use(cors());           // Allow all origins (you can restrict later if needed)
app.use(express.json());

// ✅ API Routes
app.use("/api/educators", educatorRoutes);
app.use("/api/courses", courseRoutes);  // ✅ Add courses endpoint

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));