const hotelRoutes = require('./hotel');

const router = (app) => {
  app.use(hotelRoutes);
};

module.exports = router;