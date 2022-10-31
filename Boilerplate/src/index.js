import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import App from './App';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Admin from './pages/Admin/Admin';
import NotFound from './pages/notFound/NotFound';
import Layout from './pages/layout/Layout';
import LogIn from './pages/logIn/LogIn';
import Users from './pages/users/Users';
import User from './pages/user/User';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes >
        <Route path='/' element={<Layout/>}>
          <Route index element={<App/>} />
          <Route path='*' element={<NotFound></NotFound>}/>
          <Route path='Admin' element={<Admin></Admin>}></Route>
          <Route path='logIn' element={<LogIn></LogIn>}></Route>
        </Route>
        <Route path='/users' element={<Layout/>}>
          <Route index element={<Users></Users>}></Route>
          <Route path=':id' element={<User></User>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


