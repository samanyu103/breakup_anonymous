import './App.css';
// import Nav from './components/nav';
// import Home from './pages/home';
// import Community from './pages/community';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navi from './components/navi';



function App() {
  return (
    // <BrowserRouter>
    //   <div className="homepage">
    //   <Nav/>
    //   <Routes>
    //     <Route exact path="/" element={<Home/>} />
    //     <Route exact path="/community" element={<Community/>} />
    //   </Routes>
    //   </div>
    
    // </BrowserRouter>
    <div>
      <Navi/>
    </div>

    );
}

export default App;
