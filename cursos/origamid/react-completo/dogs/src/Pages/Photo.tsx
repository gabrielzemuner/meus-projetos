import { PHOTO_GET } from "@/api";
import Error from "@/Components/Helper/Error";
import Head from "@/Components/Helper/Head";
import Loading from "@/Components/Helper/Loading";
import PhotoContent from "@/Components/Photo/PhotoContent";
import useFetch from "@/Hooks/useFetch";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

type PhotoType = {
  id: number;
  title: string;
};

type PhotoGetResponse = {
  photo: PhotoType;
};

export default function Photo() {
  const { id } = useParams();
  const { data, loading, error, request } = useFetch<PhotoGetResponse>();

  useEffect(() => {
    if (!id) return; // type narrowing

    const { url, options } = PHOTO_GET(id);

    request(url, options);
  }, [id, request]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (!data) return null;

  return (
    <section className="container mainContainer">
      <Head title={data.photo.title} />
      <PhotoContent single data={data} />
    </section>
  );
}
