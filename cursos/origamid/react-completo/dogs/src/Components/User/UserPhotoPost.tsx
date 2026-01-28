import { PHOTO_POST } from "@/api";
import Button from "@/Components/Forms/Button";
import Input from "@/Components/Forms/Input";
import Error from "@/Components/Helper/Error";
import Head from "@/Components/Helper/Head";
import useFetch from "@/Hooks/useFetch";
import useForm from "@/Hooks/useForm";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./UserPhotoPost.module.css";

type ImgState = {
  preview: string | null;
  raw: File | null;
};

export default function UserPhotoPost() {
  const nome = useForm();
  const peso = useForm("number");
  const idade = useForm("number");
  const [img, setImg] = useState<ImgState>({ preview: null, raw: null });
  const { data, error, loading, request } = useFetch();
  const navigate = useNavigate();

  useEffect(() => {
    if (data) navigate("/conta");
  }, [data, navigate]);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData();
    // if (img.raw) {
    //   formData.append("img", img.raw);
    // }
    formData.append("img", img.raw!);
    formData.append("nome", nome.value);
    formData.append("peso", peso.value);
    formData.append("idade", idade.value);

    const token = window.localStorage.getItem("token");
    if (!token) return; // type narrowing

    const { url, options } = PHOTO_POST(formData, token);
    request(url, options);
  }

  function handleImgChange({ target }: React.ChangeEvent<HTMLInputElement>) {
    const file = target.files?.[0];

    // zerar dados caso não escolha nenhum arquivo no input file...
    if (!file) {
      setImg({ preview: null, raw: null });
      return;
    }

    setImg({ preview: URL.createObjectURL(file), raw: file });
  }

  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <Head title="Poste sua foto" />
      <form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" name="nome" {...nome} />
        <Input label="Peso" type="number" name="peso" {...peso} />
        <Input label="Idade" type="number" name="idade" {...idade} />
        <input
          className={styles.file}
          type="file"
          name="img"
          id="img"
          onChange={handleImgChange}
        />
        {loading ? (
          <Button disabled>Enviando...</Button>
        ) : (
          <Button>Enviar</Button>
        )}
        <Error error={error} />
      </form>
      <div>
        {img.preview && (
          <div
            className={styles.preview}
            style={{ backgroundImage: `url('${img.preview}')` }}
          ></div>
        )}
      </div>
    </section>
  );
}
