import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/header";
//import Home from "../pages/home";
import Users from "../pages/home/Users";


const Router = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Users />} />
      <Route path="/users" element={<Users />} />
    </Routes>
  </BrowserRouter>
);

export default Router;

