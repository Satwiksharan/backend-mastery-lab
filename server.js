/*

 Test this API use this command :
curl -X POST http://localhost:3000/users \
-H "Content-Type: application/json"  \
-d '{"name": "John Doe", "email": "john.doe@example.com"}'

*/
const http = require("http");

const server = http.createServer((req, res) => {
    if (req.method === "POST" && req.url === "/users") {
        let body = "";

        req.on("data", (chunk) => {
            body += chunk;
        });

        req.on("end", () => {
            try {
                const user = JSON.parse(body);

                res.writeHead(201, {
                    "Content-Type": "application/json"
                });

                res.end(JSON.stringify({
                    message: "User received",
                    user: user
                }));
            } catch (error) {
                res.writeHead(400, {
                    "Content-Type": "application/json"
                });

                res.end(JSON.stringify({
                    error: "Invalid JSON"
                }));
            }
        });
    } else {
        res.writeHead(404, {
            "Content-Type": "application/json"
        });

        res.end(JSON.stringify({
            error: "Route not found"
        }));
    }
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});
