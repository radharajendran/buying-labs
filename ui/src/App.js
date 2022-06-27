import React from 'react';
import { Route, Routes , HashRouter } from "react-router-dom";

import Home from './hotel_booking/home_new';
import HotelList from './hotel_booking/HotelList';

const App = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<Home />}>
          <Route path="/home" element={<Home />} />
          <Route path="/hotel/list" element={<HotelList />} />
      </Route>
    </Routes>
  </HashRouter>
);

export default App;