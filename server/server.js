const express = require("express");

const app = express();

app.use("/", (req, res) => {
  console.log("This is Homepage");
});

// Start the server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
