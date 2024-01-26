import React from 'react';
import Home from './components/Home/Home';
import Wajahni from './components/Wajahni/Wajahni';
import Faculte from './components/Faculte/Faculte';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CalcScoreForm from './components/calcScore/calcScoreForm';
import {Route, Routes,useLocation } from 'react-router-dom';
import {AnimatePresence} from'framer-motion';
import Proposition from './components/Proposition/Proposition';
function AnimatedRoutes() {
    const location=useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/wajahni" element={<Wajahni />} />
                <Route path="/faculte" element={<Faculte />} />
                <Route path="/SignIn" element={<SignIn />} />
                <Route path="/SignUp" element={<SignUp />} />
                <Route path="/wajahni/calcScoreForm/:value" element={<CalcScoreForm />} />
                <Route path="/wajahni/calcScoreForm/:value/propositions" element={<Proposition />} />
            </Routes>
        </AnimatePresence>
  )
}
export default AnimatedRoutes