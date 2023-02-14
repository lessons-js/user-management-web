import { BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import Header from "../components/header";
import Users from "../pages/users/Users";

const Router = () => (
  <BrowserRouter>
    <Header />
      <Routes>
      <Route path="/users" element={<Users />} />
      <Route path="/" element={<Navigate replace to="/users" />} /> 
      <Route  path='*' element={<Navigate replace to="/" />} /> 
      </Routes>
  </BrowserRouter>
);

export default Router;
