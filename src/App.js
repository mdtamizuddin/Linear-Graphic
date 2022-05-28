
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Login from './Components/User/Login';
import Signup from './Components/User/Signup';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Components/Home/Home';
import Service from './Components/Service/Service';
import Dashboard from './Components/Dashboard/Dashboard';
import AddPortfolio from './Components/Dashboard/AddPortfolio';
import Portfolio from './Components/Portfolio/Portfolio';
import PortfolioFull from './Components/Portfolio/PortfolioFull';

function App() {
  return (
    <div >

      <Routes>
        <Route path='/' element={<>
          <Navbar />
          <Home />
        </>} />
        <Route path='/service' element={<>
          <Navbar />
          <Service />
        </>} />
        <Route path='/portfolio' element={<>
          <Navbar />
          <Portfolio />
        </>} />
        <Route path='/portfolio/:id' element={<>
          <Navbar />
          <PortfolioFull />
        </>} />
        <Route path='/login' element={<>
          <Navbar />
          <Login />
        </>} />
        <Route path='/signup' element={<>
          <Navbar />
          <Signup />
        </>} />
        <Route path='/dashboard' element={<Dashboard />}>
          <Route path='admin' element={<Dashboard />} />
          <Route path='add-portfolio' element={<AddPortfolio />} />
        </Route>
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
