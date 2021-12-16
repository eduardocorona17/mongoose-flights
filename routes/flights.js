const express = require('express');
const router = express.Router();
const flightsCtrl = require('../controllers/flights');
const detailsCtrl = require('../controllers/details');
const ticketsCtrl = require('../controllers/tickets');

//all paths in this router have "/flights" prefixed to them

//GET "/flights" - Index Route
router.get('/', flightsCtrl.index);

//GET "flights" - new route
router.get('/new', flightsCtrl.new);

router.get('/:id/tickets/new', ticketsCtrl.new);

router.get("/:id", flightsCtrl.show);

//POST /flights - create route
router.post('/', flightsCtrl.create);
router.post('/:id/destination', detailsCtrl.create)
router.post('/:id/tickets', ticketsCtrl.create);


module.exports = router;

