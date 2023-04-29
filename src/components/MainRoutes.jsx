import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import BookAppointment from "../pages/BookAppointment";
import Doctors from "../pages/Doctors";
import PageNotFound from "../pages/PageNotFound";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/appointment" element={<BookAppointment />}></Route>
      <Route path="/doctors" element={<Doctors />}></Route>
      <Route path="*" element={<PageNotFound />}></Route>
    </Routes>
  );
};

export default MainRoutes;
