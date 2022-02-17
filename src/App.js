// Modules Imports
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Styling Imports
import './scss/main.scss';

//Components Imports
import Header from "./components/Header/Header"
import Footer from './components/Footer/Footer'
import DevNav from "./Dev_items/DevNav.js"

//Pages Imports
import Welcome from "./pages/Welcome/Welcome.js"
import Login from "./pages/Login/Login.js"
import Register from "./pages/Register/Register.js"
import Chart from "./pages/Chart/Chart.js"
import Transactions from "./pages/Transactions/Transactions.js"
import AddTransaction from "./pages/AddTransaction/AddTransaction.js"
import Error from "./pages/Error/Error.js"

// Constant Imports
import testUser from './Dev_items/testuser';

function App() {

  const token = "null"
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={token ? <Chart user={testUser} /> : <Welcome />} />
          <Route path="/addtransaction" element={<AddTransaction />} />
          <Route path="/chart" element={<Chart user={testUser} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/transactions" element={<Transactions user={testUser} />} />
          <Route path="*" element={<Error />} />
          <Route path="/welcome" element={<Welcome />} />
        </Routes>
        {token && <Footer />}
      </Router>
    </div >
  );
}

export default App;
