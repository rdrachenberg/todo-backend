const prisma = require('@prisma/client').PrismaClient;
const db = new prisma();

exports.getTasks = async (req, res) => {
  try {
    const tasks = await db.task.findMany();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createTask = async (req, res) => {
  const { title, color } = req.body;
  try {
    const task = await db.task.create({ data: { title, color, completed: false } });
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, color, completed } = req.body;
  try {
    const task = await db.task.update({
      where: { id: parseInt(id) },
      data: { title, color, completed },
    });
    res.json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    await db.task.delete({ where: { id: parseInt(id) } });
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
