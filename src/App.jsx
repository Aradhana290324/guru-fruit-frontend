import { BrowserRouter, Routes, Route } from "react-router-dom";

import Menu from "./pages/Menu";
import Admin from "./pages/Admin";
import Orders from "./pages/Orders";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import FruitDetails from "./pages/FruitDetails";
import MyOrders from "./pages/MyOrders";
import CustomerLogin from "./pages/CustomerLogin";
import CustomerProfile from "./pages/CustomerProfile";
import JamunMenu from "./pages/JamunMenu";
import MangoMenu from "./pages/MangoMenu";
function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* CUSTOMER */}
        <Route path="/" element={<Menu />} />

        {/* ADMIN LOGIN */}
        <Route path="/admin-login" element={<Login />} />

        {/* PROTECTED ADMIN DASHBOARD */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />

        {/* PROTECTED ORDERS PAGE */}
        <Route
          path="/orders"
          element={
            <ProtectedRoute>
              <Orders />
            </ProtectedRoute>
          }
        />
        <Route
    path="/fruit/:id"
    element={<FruitDetails />}
/>
<Route path="/my-orders" element={<MyOrders />} />
<Route
    path="/login"
    element={<CustomerLogin />}
/>
<Route
   path="/profile"
   element={<CustomerProfile />}
/>
<Route
    path="/mango-menu"
    element={<MangoMenu />}
/>

<Route
    path="/jamun-menu"
    element={<JamunMenu />}
/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;