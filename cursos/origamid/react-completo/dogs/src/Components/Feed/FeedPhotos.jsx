import { PHOTOS_GET } from "@/api";
import FeedPhotosItem from "@/Components/Feed/FeedPhotosItem";
import Error from "@/Components/Helper/Error";
import Loading from "@/Components/Helper/Loading";
import useFetch from "@/Hooks/useFetch";
import { useEffect } from "react";
import styles from "./FeedPhotos.module.css";

export default function FeedPhotos({ user, setModalPhoto, page, setInfinite }) {
  const { data, loading, error, request } = useFetch();

  useEffect(() => {
    async function fetchPhotos() {
      const total = 3;

      const { url, options } = PHOTOS_GET({ page, total, user }); // user 0 -> qualquer usuário, nenhum usuário específico
      const { response, json } = await request(url, options);

      if (response && response.ok && json.length < total) {
        setInfinite(false);
      }
    }

    fetchPhotos();
  }, [request, user, page, setInfinite]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (!data) return null;

  return (
    <ul className={`${styles.feed} animeLeft`}>
      {data.map((photo) => (
        <FeedPhotosItem
          key={photo.id}
          photo={photo}
          setModalPhoto={setModalPhoto}
        />
      ))}
    </ul>
  );
}
