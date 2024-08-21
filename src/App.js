import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import AdminPage from './pages/AdminPage';
import UserPage from './pages/UserPage';
import { useSelector } from 'react-redux';
import { Toaster } from 'react-hot-toast';
function App() {
  
  
  return (
    <Provider store={store}>
      <div><Toaster/></div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
         
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/user" element={<UserPage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
