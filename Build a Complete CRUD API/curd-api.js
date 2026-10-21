const taskService = require("../services/taskService");

async function createTask(req, res, next) {
    try {
        const task = await taskService.createTask(req.body);
        res.status(201).json({ task });
    } catch (error) {
        next(error);
    }
}

async function getAllTasks(req, res, next) {
    try {
        const tasks = await taskService.getAllTasks();
        res.json({ tasks });
    } catch (error) {
        next(error);
    }
}

async function getTaskById(req, res, next) {
    try {
        const task = await taskService.getTaskById(req.params.id);

        if (!task) {
            return res.status(404).json({
                message: "Task not found"
            });
        }

        res.json({ task });
    } catch (error) {
        next(error);
    }
}

async function updateTask(req, res, next) {
    try {
        const task = await taskService.updateTask(
            req.params.id,
            req.body
        );

        if (!task) {
            return res.status(404).json({
                message: "Task not found"
            });
        }

        res.json({ task });
    } catch (error) {
        next(error);
    }
}

async function deleteTask(req, res, next) {
    try {
        const task = await taskService.deleteTask(req.params.id);

        if (!task) {
            return res.status(404).json({
                message: "Task not found"
            });
        }

        res.status(204).end();
    } catch (error) {
        next(error);
    }
}

module.exports = {
    createTask,
    getAllTasks,
    getTaskById,
    updateTask,
    deleteTask
};