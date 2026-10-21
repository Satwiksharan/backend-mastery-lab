/*
@Understand route parameters

Suppose a client requests /users/42. How can your backend determine which user it wants?

Use a route parameter:
app.get("/users/:id", (req, res) => {
    const userId = req.params.id;

    res.json({
        message: "User details",
        id: userId
    });
});


When the client requests /users/42, the response is:
{
  "message": "User details",
  "id": "42"
}


Notice that req.params.id is a string. If you need a number, validate and convert it appropriately.

The :id segment is a placeholder that matches a path segment.

Other examples include:
app.get("/products/:productId", handler);
app.get("/contests/:contestId", handler);
app.get("/orders/:orderId", handler);


These patterns let you handle many resource IDs without creating a separate route for every ID.

@ Understand query parameters

Route parameters identify a resource, while query parameters often control filtering, searching, or pagination.

For example:

GET /users?page=2&limit=10

Express exposes these query values through req.query:
app.get("/users", (req, res) => {
    const page = req.query.page;
    const limit = req.query.limit;

    res.json({
        page: page,
        limit: limit
    });
});


Response:
{
  "page": "2",
  "limit": "10"
}


Query values are also typically strings. A production API should validate them and enforce sensible limits before using them in database queries.

@Keep routes organized with express.Router()
As your backend grows, placing every route in server.js becomes difficult to maintain.

Express provides Router to group related endpoints into separate modules.

*/



const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.json({ message: "All users" });
});

router.get("/:id", (req, res) => {
    res.json({
        message: "User details",
        id: req.params.id
    });
});

module.exports = router;