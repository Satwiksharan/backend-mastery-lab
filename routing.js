/*

Routing determines which code should execute when a client requests a particular URL using a particular HTTP method.

Imagine your CF Compass backend provides these endpoints:
Method	Endpoint	Purpose
GET	/users	Retrieve all users
GET	/users/42	Retrieve user 42
POST	/users	Create a user
PATCH	/users/42	Update user 42
DELETE	/users/42	Delete user 42
Each method and path combination can have its own handler.

*/


const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to Routing!");
});

app.get("/users", (req, res) => {
    res.json([
        { id: 1, name: "Satwik" },
        { id: 2, name: "Rahul" }
    ]);
});

app.post("/users", (req, res) => {
    const user = req.body;

    res.status(201).json({
        message: "User created",
        user: user
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});