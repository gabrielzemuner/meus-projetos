import PhotoCommentsForm from "@/Components/Photo/PhotoCommentsForm";
import { UserContext } from "@/Contexts/UserContext";
import { useContext, useEffect, useRef, useState } from "react";
import styles from "./PhotoComments.module.css";

export default function PhotoComments(props) {
  const [comments, setComments] = useState(() => props.comments);
  const commentsSection = useRef(null);
  const { login } = useContext(UserContext);

  // rodar o scroll até o final pra exibir último comentário (necessário quando tem vários comentários com scroll y aparecendo...)
  // eu faria diferente -> ordenaria pra exibir os comentários novos por cima...
  useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
  }, [comments]);

  return (
    <>
      <ul
        ref={commentsSection}
        className={`${styles.comments} ${props.single ? styles.single : ""}`}
      >
        {comments.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {login && (
        <PhotoCommentsForm single id={props.id} setComments={setComments} />
      )}
    </>
  );
}
