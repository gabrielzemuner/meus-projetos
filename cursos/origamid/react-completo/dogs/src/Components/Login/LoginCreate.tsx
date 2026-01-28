import { USER_POST } from "@/api";
import Button from "@/Components/Forms/Button";
import Input from "@/Components/Forms/Input";
import Error from "@/Components/Helper/Error";
import Head from "@/Components/Helper/Head";
import useFetch from "@/Hooks/useFetch";
import useForm from "@/Hooks/useForm";
import { UserContext } from "@/Contexts/UserContext";
import { useContext } from "react";

export default function LoginCreate() {
  const username = useForm();
  const email = useForm("email");
  const password = useForm();

  const { userLogin } = useContext(UserContext)!;
  const { loading, error, request } = useFetch();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const { url, options } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value,
    });
    const { response } = await request(url, options);

    if (response?.ok) {
      userLogin(username.value, password.value);
    }
  }
  return (
    <section className="animeLeft">
      <Head title="Crie sua conta" />
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Email" type="email" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Cadastrando...</Button>
        ) : (
          <Button>Cadastrar</Button>
        )}
        <Error error={error} />
      </form>
    </section>
  );
}
