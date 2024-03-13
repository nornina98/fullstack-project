const http = require("http");
const app = require("./app");

const { loadPlanetsData } = require("./models/planets.model");

const PORT = process.env.PORT || 8000;

// Create an HTTP server using the http module and pass the Express app as a callback
const server = http.createServer(app);

// Start the server
async function startServer() {
  await loadPlanetsData();
  server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

startServer();
