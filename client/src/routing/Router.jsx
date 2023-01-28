import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../components/header";
import Home from "../pages/home";

const Router = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
