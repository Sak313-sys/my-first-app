const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>My First Live Server</title>
      </head>

      <body style="
        margin:0;
        padding:0;
        display:flex;
        justify-content:center;
        align-items:center;
        height:100vh;
        background:linear-gradient(to right, #141e30, #243b55);
        font-family:Arial;
        overflow:hidden;
      ">

        <div style="text-align:center; color:white;">

          <marquee behavior="alternate" scrollamount="12">
            <h1 style="font-size:50px;">
              🚀 আসসালামু আলাইকুম ❤️
            </h1>
          </marquee>

          <h2>My First Live Server</h2>

          <button style="
            padding:15px 30px;
            border:none;
            border-radius:10px;
            background:#00ff99;
            font-size:20px;
            cursor:pointer;
          ">
            Welcome
          </button>

        </div>

      </body>
    </html>
  `);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});