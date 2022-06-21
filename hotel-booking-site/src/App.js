import React from 'react';
import { Route, Routes , HashRouter } from "react-router-dom";

import Home from './hotel_booking/home';

import '../node_modules/antd/dist/antd.min.css';

const UserContext = React.createContext({
  // User Info goes here once login success
});

const App = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<Home />}>
          <Route path="/home" element={<Home />} />
      </Route>
    </Routes>
  </HashRouter>
);

export default App;