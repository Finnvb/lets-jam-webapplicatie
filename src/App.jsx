import {BrowserRouter as Router, Route, Routes, useParams } from "react-router-dom";

import HomePage from "./pages/homepage";
import Test from "./pages/Test";
// import OverviewPage from "./pages/Overview";
import UidPage from "./pages/Uid";

function App() {
  return (
    <Router>
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
        <Route path="/overview" element={<HomePage />} />
        <Route path="/test" element={<Test />} />
        <Route path='/:uid' element={<UidPage />}/>
      
      
      </Routes>
 </div>
 </Router>
  );
}

export default App;