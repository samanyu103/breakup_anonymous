import './App.css';
// import Card from './components/card';
// import Grid from './components/grid';
// import Nav from './components/nav';
// // import Home from './components/home';

// import Spiritual_Home from './pages/spirituality/home'
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Navi from './components/navi';
// import Homepage from './pages/homepage';
// import Login from './pages/login/login';

import Community from './pages/community/community';

function App() {
  return (
    // <BrowserRouter>
    //   <div className="homepage">
    //   <Navi/>
    //   <Routes>
    //     <Route exact path="/" element={<Homepage/>} />
    //     <Route exact path="/spirituality" element={<Spiritual_Home/>} />
    //     <Route exact path="/login" element={<Login/>} />


    //   </Routes>
    //   </div>
    
    // </BrowserRouter>
    <div>
      <Community/>
    </div>

    );
}

export default App;
