// Modules Imports
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Styling Imports
import './scss/main.scss';

//Components Imports
import Header from "./components/Header/Header"
import Footer from './components/Footer/Footer'
import DevNav from "./components/devNav.js"

//Pages Imports
import Welcome from "./pages/Welcome/Welcome.js"
import Login from "./pages/Login/Login.js"
import Register from "./pages/Register/Register.js"
import Chart from "./pages/Chart/Chart.js"
import Transactions from "./pages/Transactions/Transactions.js"
import AddTransaction from "./pages/AddTransaction/AddTransaction.js"
import Error from "./pages/Error/Error.js"


function App() {
  const beispielUser = {}
  const token = 'test'
  return (
    <div className="App">
      <Router>
        {token && <Header />}
        <DevNav />
        <Routes>
          <Route path="" element={token ? <Chart /> : <Welcome />} />
          <Route path="addtransaction" element={<AddTransaction />} />
          <Route path="chart" element={<Chart />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="*" element={<Error />} />

        </Routes>
        {token && <Footer />}
      </Router>
    </div >
  );
}

export default App;
