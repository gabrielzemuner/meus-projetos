import { PHOTO_GET } from "@/api";
import Error from "@/Components/Helper/Error";
import Loading from "@/Components/Helper/Loading";
import PhotoContent from "@/Components/Photo/PhotoContent";
import useFetch from "@/Hooks/useFetch";
import { useEffect } from "react";
import styles from "./FeedModal.module.css";

export default function FeedModal({ photo, setModalPhoto }) {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);
    request(url, options);
  }, [photo, request]);

  function handleOutsideClick(event) {
    // significa que o clique é fora do modal
    if (event.target === event.currentTarget) {
      setModalPhoto(null);
    }
  }

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  );
}
