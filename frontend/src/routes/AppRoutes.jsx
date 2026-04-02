import { Routes, Route } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Projects from "../pages/Projects";
import SingleProjects from "../pages/SingleProject";
import PainelAdmin from "../pages/PainelAdmin";
import Login from "../pages/Login";
import PrivateRoute from "./PrivateRoute";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/:id" element={<SingleProjects />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/paineladmin"
        element={
          <PrivateRoute>
            <PainelAdmin />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}