function requireAdmin(req, res, next) {
    if (req.user.role !== "admin") {
        return res.status(403).json({
            error: "Forbidden"
        });
    }

    next();
}

// Combine the middleware:
app.get(
    "/admin",
    authenticateToken,
    requireAdmin,
    (req, res) => {
        res.json({
            message: "Welcome, administrator"
        });
    }
);