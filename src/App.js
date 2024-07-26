import './App.css';
// import Card from './components/card';
// import Grid from './components/grid';
// import Home from './components/home';
// import Spiritual_Home from './pages/spirituality/home'
// import Nav from './components/nav';
// import Home from './pages/home';
// import Community from './pages/community';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navi from './components/navi';
import Login from './components/login';


function App() {
  return (
    // <BrowserRouter>
    //   <div className="homepage">
    //   <Navi/>
    //   <Routes>
    //     <Route exact path="/" element={<Home/>} />
    //     <Route exact path="/spirituality" element={<Spiritual_Home/>} />
    //   </Routes>
    //   </div>
    
    // </BrowserRouter>
    <div>
      {/* <Navi/> */}
      <Login/>
      {/* <Home/>
      <Grid/> */}
    </div>

    );
}

export default App;
