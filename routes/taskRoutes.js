const express = require('express');
const taskController = require('../controllers/taskController');
const authController = require('../controllers/authController'); 

const router = express.Router();

// router
//   .route('/:tourId/reviews')
//   .post(
//     authController.protect,
//     authController.restrictTo('user'),
//     reviewController.createReview
//   );


router
  .route('/all')
  .get(taskController.getAllTasks) 
  .post(
    authController.protect,
    taskController.createTask
  );

router
  .route('/:id')
  .get(taskController.getTask)
  .patch(
    authController.protect,
    taskController.updateTask
  )
  .delete(
    authController.protect,
    taskController.deleteTask
  );

module.exports = router;  
