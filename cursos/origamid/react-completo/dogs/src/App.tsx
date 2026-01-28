import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import ProtectedRoute from "@/Components/Helper/ProtectedRoute";
import Home from "@/Pages/Home";
import Login from "@/Pages/Login";
import NotFound from "@/Pages/NotFound";
import Photo from "@/Pages/Photo";
import User from "@/Pages/User";
import UserProfile from "@/Pages/UserProfile";
import { UserProvider } from "@/Contexts/UserProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Comp from "@/_testes/Comp";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserProvider>
          <Header />
          <main className="AppBody">
            <Routes>
              <Route path="/teste" element={<Comp />} />
              <Route path="/" element={<Home />} />
              <Route path="login/*" element={<Login />} />
              <Route
                path="conta/*"
                element={
                  <ProtectedRoute>
                    <User />
                  </ProtectedRoute>
                }
              />
              <Route path="foto/:id" element={<Photo />} />
              <Route path="perfil/:user" element={<UserProfile />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </UserProvider>
      </BrowserRouter>
    </div>
  );
}
