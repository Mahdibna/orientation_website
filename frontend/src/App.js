import React, { useState } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import AnimatedRoutes from './AnimatedRoutes';
const App = () => {
  const [activeLink, setActiveLink] = useState('Home');
  return (
    <Router>
      <Navbar activeLink={activeLink} setActiveLink={setActiveLink} />
      <AnimatedRoutes/>
    </Router>

  );
};
export default App;
