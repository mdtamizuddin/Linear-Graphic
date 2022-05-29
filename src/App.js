
import {  Route, Routes } from 'react-router-dom';
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
import Footer from './Components/Footer/Footer';
import Review from './Components/Review/Review';
import AddReview from './Components/Dashboard/AddReview';
import Contact from './Components/Contact/Contact';
import Pricing from './Components/Pricing/Pricing';
import ScrollToTop from "react-scroll-to-top";
import Monthly from './Components/Pricing/Monthly'
import Yearly from './Components/Pricing/Yearly'
import ManagePortfolio from './Components/Dashboard/ManagePortfolio';
import User from './Components/Dashboard/User';
import ManageService from './Components/Dashboard/ManageService';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './Components/firebase/firebase.init';
import { useEffect, useState } from 'react';
import NotFound from './Components/NotFound/NotFound';
function App() {
  const [currentUser, setUser] = useState({ role: 'am-public' })
  const [user, loading] = useAuthState(auth);
  useEffect(() => {
    if (user) {
      fetch(`https://linear-graphic.herokuapp.com/users/${user.email}`)
        .then(res => res.json())
        .then(json => setUser(json))
    }
  }, [user])
  if (loading) {
    return <h1>Loading ...</h1>
  }
  return (
    <div className='main-app'>
      <ScrollToTop smooth component={<p style={{ color: "blue" }}>
        <i className="fa-solid  fa-arrow-up"></i>
      </p>} />
      <Routes>
        <Route path='/' element={<>
          <Navbar />
          <Home />
          <Contact />
        </>} />
        <Route path='*' element={<>
          <Navbar />
          <NotFound />
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
        <Route path='/review' element={<>
          <Navbar />
          <Review />
        </>} />
        <Route path='/login' element={<>
          <Navbar />
          <Login />
        </>} />
        <Route path='/signup' element={<>
          <Navbar />
          <Signup />
        </>} />
        <Route path='/contact' element={<>
          <Navbar />
          <Contact />
        </>} />
        <Route path='/pricing' element={<>
          <Navbar />
          <Pricing />
        </>} >
          <Route index element={<Monthly />} />
          <Route path='monthly' element={<Monthly />} />
          <Route path='yearly' element={<Yearly />} />
        </Route>
        {
          currentUser.role === "admin" ?

            <Route path='/dashboard' element={<RequireAuth>
              <Dashboard />
            </RequireAuth>}>
              <Route index element={<User />} />
              <Route path='users' element={<User />} />
              <Route path='services' element={<ManageService />} />
              <Route path='add-portfolio' element={<AddPortfolio />} />
              <Route path='add-review' element={<AddReview />} />
              <Route path='portfolios' element={<ManagePortfolio />} />


            </Route>

            :
            ''
        }
      </Routes>
      <Footer />
      <ToastContainer />

    </div >
  );
}

export default App;
