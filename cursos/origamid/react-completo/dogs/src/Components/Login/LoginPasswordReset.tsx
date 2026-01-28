import { PASSWORD_RESET } from "@/api";
import Button from "@/Components/Forms/Button";
import Input from "@/Components/Forms/Input";
import Error from "@/Components/Helper/Error";
import Head from "@/Components/Helper/Head";
import useFetch from "@/Hooks/useFetch";
import useForm from "@/Hooks/useForm";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPasswordReset() {
  const [login, setLogin] = useState("");
  const [key, setKey] = useState("");
  const password = useForm();
  const { loading, error, request } = useFetch();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get("key");
    const login = params.get("login");

    if (key) {
      setKey(key);
    }

    if (login) {
      setLogin(login);
    }
  }, []);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (password.validate()) {
      const { url, options } = PASSWORD_RESET({
        login,
        key,
        password: password.value,
      });
      const { response } = await request(url, options);

      if (response.ok) {
        navigate("/login");
      }
    }
  }

  return (
    <section className="animeLeft">
      <Head title="Recuperar a senha" />
      <h1 className="title">Resete a Senha</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="Nova Senha"
          type="password"
          name="password"
          {...password}
        />
        {loading ? (
          <Button disabled>Resetando...</Button>
        ) : (
          <Button>Resetar</Button>
        )}
      </form>
      <Error error={error} />
    </section>
  );
}
