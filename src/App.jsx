import {BrowserRouter as Router, Route, Routes, useParams } from "react-router-dom";

import HomePage from "./pages/homepage";

import OverviewPage from "./pages/Overviewpage";
import UidPage from "./pages/Uid";

function App() {
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

    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/overview" element={<OverviewPage />} />
        <Route path="/overview/:uid" element={<OverviewPage />} />
        <Route path="/overview/id/:uid" element={<UidPage />} />
        <Route path='/:uid' element={<UidPage />}/>
      
      
      </Routes>
 </div>
//  </Router>
  );
}

export default App;