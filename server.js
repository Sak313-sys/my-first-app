const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send(`
    <html>
      <body style="background:black; color:lime; font-size:40px; margin-top:100px;">
        <marquee direction="right">
          আসসালামু আলাইকুম ❤️ My First Live Server 🚀
        </marquee>
      </body>
    </html>
  `);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});