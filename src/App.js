import './App.css';
import Navbar from './pages/Shared/Navbar';
import Footer from './pages/Shared/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Logout from './pages/Login/Logout';
import Blogs from './pages/Blogs/Blogs';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Reviews from './pages/Reviews/Reviews';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/blogs'element={<Blogs/>}/>
        <Route path='/about'element={<About/>}/>
        <Route path='/contact'element={<Contact/>}/>
        <Route path='/review'element={<Reviews/>}/>
        <Route path='/login'element={<Login/>}/>
        <Route path='/logout'element={<Logout/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
