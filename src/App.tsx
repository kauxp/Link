import React from 'react';
import Nav from './Components/Nav';
import Home from './Components/Home';
import Footer from './Components/footer';
import Contact from './Components/contact';
import { Route, Routes } from 'react-router-dom';
// import Test from './Components/test';
const App: React.FC = () => {
  return (
    <div>
      {/* <Test/> */}
      <Nav />
      <Routes>
        <Route path="/Home" Component={Home} />
        <Route path="/contact" Component={Contact} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
