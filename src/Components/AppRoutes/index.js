import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Employees from "../../Pages/AddEmployees";
import Login from "../../Pages/Login";

import Production from "../../Pages/Production";
import AddStock from "../../Pages/AddStock";
import ViewStock from "../../Pages/ViewStock";
import AddSub from "../../Pages/AddSub";
import Sales from "../../Pages/Sales";
import AddEmployees from "../../Pages/AddEmployees";
import ViewEmployees from "../../Pages/ViewEmployees";
 

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      
      <Route path="/stock/category1" element={<AddStock />} />
      <Route path="/stock/category2" element={<ViewStock />} />
      <Route path="/employee/addemployee" element={<AddEmployees />} />
      <Route path="/employee/viewemployee" element={<ViewEmployees />} />
      <Route path="/stock/category3" element={<AddSub />} />
      <Route path="/employee" element={<Employees />} />
      <Route path="/sales" element={<Sales />} />
      <Route path="/production" element={<Production />} />
    </Routes>
  );
}
export default AppRoutes;
