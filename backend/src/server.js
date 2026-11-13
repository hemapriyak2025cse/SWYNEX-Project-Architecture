const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", application: "DreamBoard API" });
});

app.listen(PORT, () => {
  console.log(`DreamBoard API running on http://localhost:${PORT}`);
});
