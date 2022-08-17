import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import AddEditUser from './pages/addEditUser/AddEditUser';
import UserInfo from './pages/userInfo/UserInfo';
import About from './pages//about/About';
import NotFound from './pages/notFound/NotFound';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <ToastContainer />
        <Routes>
          <Route index path='/' element={<Home />} />
          <Route path='/add-user' element={<AddEditUser />} />
          <Route path='/edit-user/:id' element={<AddEditUser />} />
          <Route path='/user-info/:id' element={<UserInfo />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
