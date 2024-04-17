const http = require("http");
const app = require("./app");
const mongoose = require("mongoose");

const { loadPlanetsData } = require("./models/planets.model");

MONGO_URL =
  "mongodb+srv://nornina8998:xOoqwqlMpTxJPFvx@nmi-cluster-01.lcnsjg4.mongodb.net/?retryWrites=true&w=majority&appName=NMI-Cluster-01";

const PORT = process.env.PORT || 8000;

// Create an HTTP server using the http module and pass the Express app as a callback
const server = http.createServer(app);

mongoose.connection.once("open", () => {
  console.log("MonggoDB connection is Ready!");
});

mongoose.connection.on("error", (err) => {
  console.error(err);
});

// Start the server
async function startServer() {
  await mongoose.connect(MONGO_URL);

  await loadPlanetsData();

  server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

startServer();
