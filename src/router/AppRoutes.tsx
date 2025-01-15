import { BrowserRouter, Route, Routes } from "react-router-dom";
import LogIn from "../pages/LogIn";
import Form from "../pages/Form";


function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/form" element={<Form />} />

        <Route path="*" element={<LogIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;