import { BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import Header from "../components/header";
import Users from "../pages/home/Users";



const Router = () => (
  <BrowserRouter>
    <Header />
    <Routes>
    <Route path="/users" element={<Users />} />
    <Route path="/" element={<Navigate replace to="/users" />} />
    </Routes>
  </BrowserRouter>
);

export default Router;

