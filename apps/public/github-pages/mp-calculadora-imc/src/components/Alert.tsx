import { useEffect } from "react";
import Swal from "sweetalert2";

type AlertProps = {
  text: string | null;
  onClose?: () => void;
};

export default function Alert({ text, onClose }: AlertProps) {
  useEffect(() => {
    if (text) {
      Swal.fire({
        title: "Ops...",
        text,
        icon: "error",
        confirmButtonColor: "oklch(71.2% 0.194 13.428)",
      }).then(() => {
        // quando fechar o modal, limpa a mensagem no pai (se foi passado)
        // onClose?.(); // optional chaining de função - significa a mesma coisa que o código abaixo
        if (onClose) {
          onClose();
        }
      });
    }
  }, [text, onClose]);

  return null;
}
