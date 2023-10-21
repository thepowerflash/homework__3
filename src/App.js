
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import UsersListPage from './pages/usersListPage/UsersListPage';


function App() {
  return (
    <BrowserRouter>
    <UsersListPage />
   
    <Routes>
      
      <Route path={'/users'} element={<UsersListPage/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
