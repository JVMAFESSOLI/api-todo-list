const taksModel = require('../models/tasksModel');

const getAll = async (_req, res) => {

  const tasks = await taksModel.getAll();

  return res.status(200).json(tasks);
};

const createTask = async (req, res) => {

  const createdTask = await taksModel.createTask(req.body);
  
  return res.status(201).json(createdTask);
};

module.exports = {getAll, createTask};