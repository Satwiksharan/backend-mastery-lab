const express = require("express");
const { z } = require("zod");

const app = express();

app.use(express.json());

const userSchema = z.object({
    username: z.string().trim().min(1),
    email: z.string().email(),
    rating: z.number().int().min(0).optional()
});

app.post("/users", (req, res) => {
    const result = userSchema.safeParse(req.body);

    if (!result.success) {
        return res.status(400).json({
            error: "Validation failed",
            details: result.error.issues.map(issue => ({
                field: issue.path.join("."),
                message: issue.message
            }))
        });
    }

    const user = result.data;

    res.status(201).json({
        message: "Request validated successfully",
        user
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});