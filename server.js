
const express = require("express");
const app = express();

app.use(express.json());

const API_KEY = process.env.API_KEY;

app.get("/", (req, res) => {
  res.json({
    status: true,
    message: "API pribadi berhasil berjalan"
  });
});

app.get("/api/status", (req, res) => {
  if (!API_KEY || req.headers["x-api-key"] !== API_KEY) {
    return res.status(401).json({
      status: false,
      message: "API Key salah"
    });
  }

  res.json({
    status: true,
    message: "API aktif"
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("API berjalan di port " + PORT);
});
