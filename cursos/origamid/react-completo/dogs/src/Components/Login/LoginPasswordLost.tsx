import { PASSWORD_LOST } from "@/api";
import Button from "@/Components/Forms/Button";
import Input from "@/Components/Forms/Input";
import Error from "@/Components/Helper/Error";
import Head from "@/Components/Helper/Head";
import useFetch from "@/Hooks/useFetch";
import useForm from "@/Hooks/useForm";

export default function LoginPasswordLost() {
  const login = useForm();
  const { data, loading, error, request } = useFetch();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: "http://localhost:5173/login/resetar",
      });
      await request(url, options);
    }
  }

  return (
    <section className="animeLeft">
      <Head title="Perdeu a senha" />
      <h1 className="title">Perdeu a senha?</h1>
      {data ? (
        <p style={{ color: "#4c1" }}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="Email / Usuário" type="text" name="login" {...login} />
          {loading ? (
            <Button disabled>Enviando...</Button>
          ) : (
            <Button>Enviar E-mail</Button>
          )}
        </form>
      )}

      <Error error={error} />
    </section>
  );
}
