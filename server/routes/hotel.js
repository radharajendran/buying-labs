const router = require('express-promise-router');  
const controller = require('./../controller/hotel');

const hotelRouter = new router();

hotelRouter.get('/hotels', controller.getHotelList);

module.exports = hotelRouter;
