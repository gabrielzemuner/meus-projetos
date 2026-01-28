import FeedModal from "@/Components/Feed/FeedModal";
import FeedPhotos from "@/Components/Feed/FeedPhotos";
import { useEffect, useState } from "react";

type FeedProps = {
  user?: string;
};

export default function Feed({ user }: FeedProps) {
  const [modalPhoto, setModalPhoto] = useState(null);
  const [pages, setPages] = useState([1]);
  const [infinite, setInfinite] = useState(true);

  // ✅ controla quando a seta pode aparecer
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowArrow(true), 1000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    let wait = false;

    function infiniteScroll() {
      if (infinite) {
        const scroll = window.scrollY;
        const maxScroll = document.body.offsetHeight - window.innerHeight;

        // truque do wait -> não ficar disparando requisição a todo momento...
        if (scroll > maxScroll * 0.75 && !wait) {
          setPages((pages) => [...pages, pages.length + 1]);
          wait = true;
          setTimeout(() => {
            wait = false;
          }, 500);
        }
      }
    }

    window.addEventListener("wheel", infiniteScroll);
    window.addEventListener("scroll", infiniteScroll);

    return () => {
      window.removeEventListener("wheel", infiniteScroll);
      window.removeEventListener("scroll", infiniteScroll);
    };
  }, [infinite]);

  return (
    <div>
      {modalPhoto && (
        <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
      )}

      {pages.map((page) => (
        <FeedPhotos
          key={page}
          user={user}
          setModalPhoto={setModalPhoto}
          page={page}
          setInfinite={setInfinite}
        />
      ))}

      {/* ✅ seta só depois do delay */}
      {infinite && showArrow && <p className="animeDown">&#8659;</p>}

      {!infinite && !user && pages.length > 1 && (
        <p
          style={{
            textAlign: "center",
            padding: "2rem 0 4rem 0",
            color: "#888",
          }}
        >
          Não existem mais postagens.
        </p>
      )}
    </div>
  );
}
