import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import SinglePost from './components/SingePost/SinglePost';
import Admin from './components/Admin/Admin';
import AdminEdit from './components/Admin/AdminPost/AdminEdit';
import AdminAdd from './components/Admin/AdminPost/AdminAdd';
import About from './components/About/About';
import Blogs from './components/Blogs/Blogs';
import Contacts from './components/Contacts/Contacts';
import HeaderAndFooterLayout from './components/layout/HeaderAndFooterLayout';

function App() {
  return (
    <>
      {/* Single routes */}
      <BrowserRouter>
        <Routes>

          <Route path='/login' element={<Login />}></Route>
          <Route path='/admin' element={<Admin />}></Route>
          <Route path='/admin/edit/:id' element={<AdminEdit />}></Route>
          <Route path='/admin/addNew' element={<AdminAdd />}></Route>
          <Route path='*' element={<NotFound />}></Route>
          <Route element={<HeaderAndFooterLayout />}>
            <Route path='/' element={<Home />}></Route>
            <Route path='/post/:id' element={<SinglePost />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/contact' element={<Contacts />}></Route>
            <Route path='/blogs' element={<Blogs />}></Route>
          </Route>
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
