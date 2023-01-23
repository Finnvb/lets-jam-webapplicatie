import {BrowserRouter as Router, Route, Routes, useParams, useLocation  } from "react-router-dom";

import HomePage from "./pages/homepage";

import OverviewPage from "./pages/Overviewpage";
import UidPage from "./pages/Uid";
import { AnimatePresence } from "framer-motion";
function App() {
  const location = useLocation();
  return (
    // <Router>
 <div>
    {/* <Switch>
      <Route path='/' exact>
        <HomePage/>
      </Route>
      <Route path='/overview'>
       <HomePage/>
      </Route>
      <Route path='/:uid'>
      <HomePage/>
      </Route>
    </Switch> */}
  <AnimatePresence exitBeforeEnter>
    <Routes  key={location.pathname} location={location}>
        <Route path="/" element={<HomePage />} />
        <Route path="/overview" element={<OverviewPage />} />
        <Route path="/overview/:uid" element={<OverviewPage />} />
        <Route path="/overview/category/:uid" element={<OverviewPage />} />
        <Route path="/overview/category/id/:uid" element={<UidPage />} />
        <Route path="/overview/id/:uid" element={<UidPage />} />
        <Route path='/:uid' element={<UidPage />}/>
      
      
      </Routes>
      </AnimatePresence>
 </div>
//  </Router>
  );
}

export default App;