import Feed from "@/Components/Feed/Feed";
import Head from "@/Components/Helper/Head";
import UserHeader from "@/Components/User/UserHeader";
import UserPhotoPost from "@/Components/User/UserPhotoPost";
import UserStats from "@/Components/User/UserStats";
import NotFound from "@/Pages/NotFound";
import { UserContext } from "@/Contexts/UserContext";
import { useContext } from "react";
import { Route, Routes } from "react-router-dom";

export default function User() {
  const { data } = useContext(UserContext);

  return (
    <section className="container">
      <Head title="Minha Conta" />
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data?.id} />} />
        <Route path="postar" element={<UserPhotoPost />} />
        <Route path="estatisticas" element={<UserStats />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  );
}
