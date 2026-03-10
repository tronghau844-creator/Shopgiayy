const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// phục vụ tất cả file tĩnh trong thư mục gốc dự án
app.use(express.static(__dirname));

// route mặc định cho trang chủ
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// route cho giỏ hàng
app.get("/cart", (req, res) => {
  res.sendFile(path.join(__dirname, "cart.html"));
});

app.listen(PORT, () => {
  console.log(`Shop Giày chạy tại http://localhost:${PORT}`);
});
