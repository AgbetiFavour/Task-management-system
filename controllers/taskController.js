const multer = require('multer');
const Task = require('../models/taskModel');
const factory = require('./handlerFactory');
// const sharp = require('sharp');
// const APIFEEATURES = require('../utils/apiFeatures');




exports.getAllTasks = factory.getAll(Task);

exports.getTask = factory.getOne(Task);

exports.createTask = factory.createOne(Task);

exports.updateTask = factory.updateOne(Task);

exports.deleteTask = factory.deleteOne(Task);

 