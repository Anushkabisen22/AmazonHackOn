import React from "react";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Register from "./pages/Register";
import Amazonpay from "./pages/Amazonpay";
import DashBoard from "./pages/DashBoard";
import Analysis from "./components/AmazonPayDashBoard/Analysis";
import Help from '../src/components/AmazonPayDashBoard/help/Help';
import Cart from "./components/Home/Cart";
import ConfirmOrder from "./components/Home/ConfirmOrder";
function App() {
  return (
    <Router>
      <Routes>
           <Route exact path="/" Component={Home} />
           <Route exact path="/signin" Component={Signin} />
        <Route exact path="/register" Component={Register} />
        <Route exact path="/amazonPay" Component={Amazonpay} />
        <Route exact path="/dashboard" Component={DashBoard} />
        <Route exact path="/analysis" Component={Analysis} />
        <Route exact path="/help" Component={Help} />
        <Route exact path="/cart" Component={Cart} />
        <Route exact path="/confirmOrder" Component={ConfirmOrder} />

      </Routes>
    </Router>
    
  );
}

export default App;
