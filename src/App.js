import './App.css';
import Navbar from './pages/Shared/Navbar';
import Footer from './pages/Shared/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Logout from './pages/Login/Logout';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/login'element={<Login/>}/>
        <Route path='/logout'element={<Logout/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
