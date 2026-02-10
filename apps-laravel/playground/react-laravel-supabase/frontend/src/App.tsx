import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Posts from "./pages/Posts";
import Admin from "./pages/Admin";
import { AuthProvider } from "./auth/AuthProvider";
import RequireAuth from "./auth/RequireAuth";
import RequireAdmin from "./auth/RequireAdmin";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route element={<RequireAuth />}>
            <Route path="/app" element={<Posts />} />

            <Route element={<RequireAdmin />}>
              <Route path="/admin" element={<Admin />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
