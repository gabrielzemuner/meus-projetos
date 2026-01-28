import LoginCreate from "@/Components/Login/LoginCreate";
import LoginForm from "@/Components/Login/LoginForm";
import LoginPasswordLost from "@/Components/Login/LoginPasswordLost";
import LoginPasswordReset from "@/Components/Login/LoginPasswordReset";
import NotFound from "@/Pages/NotFound";
import { UserContext } from "@/Contexts/UserContext";
import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import styles from "./Login.module.css";

export default function Login() {
  const { login } = useContext(UserContext);

  if (login === true) return <Navigate to="/conta" />;
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="criar" element={<LoginCreate />} />
          <Route path="perdeu" element={<LoginPasswordLost />} />
          <Route path="resetar" element={<LoginPasswordReset />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </section>
  );
}
