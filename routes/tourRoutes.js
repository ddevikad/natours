// tourRoutes.js
const express = require('express');
const tourController = require('../controllers/tourController');
const authController = require('../controllers/authController');
const reviewRouter = require('./reviewRoutes');

const router = express.Router();

// Nested route for reviews
router.use('/:tourId/reviews', reviewRouter);

// Public routes
router.route('/top-5-cheap').get(tourController.aliasTopTours, tourController.getAllTours);
router.route('/tour-stats').get(tourController.getTourStats);
router.route('/tours-within/:distance/center/:latlng/unit/:unit').get(tourController.getToursWithin);
router.route('/distances/:latlng/unit/:unit').get(tourController.getDistances);

// Protected routes
router.use(authController.protect);

router.route('/monthly-plan/:year')
  .get(authController.restrictTo('admin', 'lead-guide', 'guide'), tourController.getMonthlyPlan);

router.route('/')
  .get(tourController.getAllTours)
  .post(authController.restrictTo('admin', 'lead-guide'), tourController.createTour);

router.route('/:id')
  .get(tourController.getTour)
  .patch(authController.restrictTo('admin', 'lead-guide'), tourController.updateTour)
  .delete(authController.restrictTo('admin', 'lead-guide'), tourController.deleteTour);

module.exports = router;
