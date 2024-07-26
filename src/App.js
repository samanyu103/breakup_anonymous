import './App.css';
// import Card from './components/card';
// import Grid from './components/grid';
// import Community from './pages/community';
// import Nav from './components/nav';
// // import Home from './components/home';

import Spiritual_Home from './pages/spirituality/home'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navi from './components/navi';
import Homepage from './pages/homepage';

// import Login from './components/login';


function App() {
  return (
    <BrowserRouter>
      <div className="homepage">
      <Navi/>
      <Routes>
        <Route exact path="/" element={<Homepage/>} />
        <Route exact path="/spirituality" element={<Spiritual_Home/>} />
      </Routes>
      </div>
    
    </BrowserRouter>
    // <div>
    //   {/* <Navi/> */}
    //   <Login/>
    //   {/* <Home/>
    //   <Grid/> */}
    // </div>

    );
}

export default App;
