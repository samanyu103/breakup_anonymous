import './App.css';
// import Card from './components/card';
// import Grid from './components/grid';
// import Nav from './components/nav';
// // import Home from './components/home';

import Spiritual_Home from './pages/spirituality/home';
import Activities from './pages/activities';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navi from './components/navi';
import Homepage from './pages/homepage';
import Login from './pages/login/login';

import Community from './pages/community/community';

import Bk from './pages/spirituality/bk';



// import Community from './pages/community/community';

function App() {
  return (
    <BrowserRouter>
      <div className="homepage">
      <Navi/>
      <Routes>
        <Route exact path="/" element={<Homepage/>} />
        <Route exact path="/spirituality" element={<Spiritual_Home/>} />
        <Route exact path="/activities" element={<Activities/>} />

        <Route exact path="/spirituality/bk" element={<Bk/>} />

        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/community" element={<Community/>} />



      </Routes>
      </div>
    
    </BrowserRouter>
    // <div>
    //   <Login/>
    // </div>

    );
}

export default App;
