const express = require("express");

const app = express();

// console.dir(app);

let port = 8080; // 3000
app.listen(port, () => {
  console.log(`app is listening on ${port}`);
});

app.use((req, res) => {
  console.log("request Received!!!");
});
    