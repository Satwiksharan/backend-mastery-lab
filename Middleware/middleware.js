/*

req and res
These represent the incoming request and outgoing response, respectively. Middleware can inspect request details and set properties that later middleware or route handlers can use.
next()
This is the critical part.

Calling next() tells Express to continue to the next applicable middleware or route handler.

If middleware neither sends a response nor calls next(), the request can remain hanging.

*/

const express = require("express");

const app = express();

// Middleware: runs for incoming requests
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url} data through middleware`);
    next();
});

// Route handler
app.get("/", (req, res) => {
    res.send("Welcome to the backend!");
});

app.get("/users", (req, res) => {
    res.json([
        { id: 1, name: "Satwik" },
        { id: 2, name: "Satish" }
    ]);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});