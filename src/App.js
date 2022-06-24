
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
import Footer from './Components/Footer/Footer';
import Review from './Components/Review/Review';
import AddReview from './Components/Dashboard/AddReview';
import Contact from './Components/Contact/Contact';
import Pricing from './Components/Pricing/Pricing';
import ScrollToTop from "react-scroll-to-top";
import Monthly from './Components/Pricing/Monthly'
import Yearly from './Components/Pricing/Yearly'
import ManagePortfolio from './Components/Dashboard/ManagePortfolio';
import PricingDash from './Components/Dashboard/Pricing';
import Monthly2 from './Components/Dashboard/Pricing/Monthly';
import Yearly2 from './Components/Dashboard/Pricing/Yearly';
import User from './Components/Dashboard/User';
import ManageService from './Components/Dashboard/ManageService';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import Headers from './Components/Dashboard/Headers';
import Messages from './Components/Dashboard/Messages';
import Booking from './Components/Booking/Booking';
import AddFAQ from './Components/Dashboard/Faq/AddFAQ';
import ManageFaq from './Components/Dashboard/Faq/ManageFaq';
import RequireAdmin from './Components/RequireAuth/RequireAdmin';
function App() {

  // const [user, loading] = useAuthState(auth)
  // const [data, setData] = useState({ role: 'am-public' })
  // if (user) {
  //   const url = `http://localhost:5000/users/${user?.email}`
  //   fetch(url)
  //     .then(res => res.json())
  //     .then(json => setData(json))
  // }
  // if (loading) {
  //   return <Loading />
  // }
  return (
    <div className='main-app bg-white'>
      <ScrollToTop smooth component={<p style={{ color: "blue" }}>
        <i className="fa-solid  fa-arrow-up"></i>
      </p>} />
      <Routes>
        <Route path='/' element={<>
          <Navbar />
          <Home />
          <Contact />
        </>} />
        {/* <Route path='*' element={<>
          <Navbar />
          <NotFound />
        </>} /> */}
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
        <Route path='/bookCall' element={<>
          <Navbar />
          <Booking />
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
          <Route path='/dashboard' element={<RequireAuth>
            <Dashboard />
          </RequireAuth>}>
            <Route index element={<RequireAdmin>
              <User />
            </RequireAdmin>} />
            <Route path='messages' element={<RequireAdmin><Messages /></RequireAdmin>} />
            <Route path='users' element={<RequireAdmin><User /></RequireAdmin>} />
            <Route path='services' element={<RequireAdmin><ManageService /></RequireAdmin>} />
            <Route path='headers' element={<RequireAdmin><Headers /></RequireAdmin>} />
            <Route path='add-portfolio' element={<RequireAdmin><AddPortfolio /></RequireAdmin>} />
            <Route path='add-review' element={<RequireAuth><AddReview /></RequireAuth>} />
            <Route path='portfolios' element={<RequireAdmin><ManagePortfolio /></RequireAdmin>} />
            <Route path='add-faq' element={<RequireAdmin><AddFAQ /></RequireAdmin>} />
            <Route path='manage-faq' element={<RequireAdmin><ManageFaq /></RequireAdmin>} />

            <Route path='pricing' element={<RequireAdmin><PricingDash /></RequireAdmin>} >
              <Route path='monthly' element={<Monthly2 />} />
              <Route path='yearly' element={<Yearly2 />} />

            </Route>
          </Route>
        }
      </Routes>
      <Footer />
      <ToastContainer />

    </div >
  );
}

export default App;
