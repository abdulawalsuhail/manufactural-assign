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
import RequireAuth from './pages/Login/RequireAuth';
import Dashboard from './pages/Dashboard/Dashboard';
import ProductDetails from './pages/Home/ProductDetails';
import MyProfile from './pages/Dashboard/MyProfile';
import Reviews from './pages/Reviews/Reviews';
import MyPurchase from './pages/Dashboard/MyPurchase';
import ManageOrder from './pages/Dashboard/ManageOrder';
import AddProduct from './pages/Dashboard/AddProduct';
import ManageProduct from './pages/Dashboard/ManageProduct';
import RequireAdmin from './pages/Login/RequireAdmin';
import MakeAdmin from './pages/Dashboard/MakeAdmin';
import NotFound from './pages/Shared/NotFound';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Navbar />
      <ToastContainer/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product/:productId' element={<ProductDetails />} />
        <Route path='/dashboard' element={<RequireAuth><Dashboard /></RequireAuth>}>
          <Route index element={<MyPurchase></MyPurchase>}></Route>
          <Route path="review" element={<Reviews></Reviews>}></Route>
          <Route path="profile" element={<MyProfile></MyProfile>}></Route>
          <Route path="manageOrder" element={<RequireAdmin><ManageOrder></ManageOrder></RequireAdmin>}></Route>
          <Route path="addProduct" element={<RequireAdmin><AddProduct/></RequireAdmin>}></Route>
          <Route path="admin" element={<RequireAdmin><MakeAdmin/></RequireAdmin>}></Route>
          <Route path="manageProduct" element={<RequireAdmin><ManageProduct/></RequireAdmin>}></Route>
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer />
      
    </>
  );
}

export default App;
