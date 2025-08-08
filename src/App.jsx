// import React, { useState } from 'react'
// // import {  Routes, Route } from 'react-router-dom'
// import Cart from './components/Cart'
// import PlaceOrder from './components/PlaceOrder'
// import { Routes, Route } from 'react-router-dom'
// import Navbar from './components/Navbar'
// import Home from './pages/Home'
// import Footer from './components/Footer'
// import Contact_us from './components/Contact_us'
// import LoginPopUp from './components/LoginPopUp'


// function App() {

//   const [showLogin, setShowLogin] =useState(false);


//   return (
//     <>
//     {showLogin?<LoginPopUp setShowLogin={setShowLogin}/>:<></>}

//       <Navbar/>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/order" element={<PlaceOrder />} />
//         <Route path="/contact" element={<Contact_us/>} />

//       </Routes>
//       <Footer/>

//     </>
//   )
// }

// export default App

//ye he but jo chahiye to nhi ho raha

// import React, { useState } from 'react'
// import { Routes, Route } from 'react-router-dom'
// import Cart from './components/Cart'
// import PlaceOrder from './components/PlaceOrder'
// import Navbar from './components/Navbar'
// import Home from './pages/Home'
// import Footer from './components/Footer'
// import Contact_us from './components/Contact_us'
// import LoginPopUp from './components/LoginPopUp'

// function App() {
//   const [showLogin, setShowLogin] = useState(false);

//   return (
//     <>
//       {showLogin && <LoginPopUp setShowLogin={setShowLogin} />}

//       <Navbar setShowLogin={setShowLogin} />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/order" element={<PlaceOrder />} />
//         <Route path="/contact" element={<Contact_us />} />
//       </Routes>

//       <Footer />
//     </>
//   )
// }

// export default App

// editable file but error 

import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

// Component imports
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoginPopUp from './components/LoginPopUp';
import Cart from './components/Cart';
import PlaceOrder from './components/PlaceOrder';
import Contact_us from './components/Contact_us';
import About_us from './components/About_us';


// Pages
import Home from './pages/Home';
// import About_us from './components/About_us';

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin && <LoginPopUp setShowLogin={setShowLogin} />}

      <Navbar setShowLogin={setShowLogin} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<PlaceOrder />} />
        <Route path="/contact" element={<Contact_us />} />
        <Route path="/about" element={<About_us />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
