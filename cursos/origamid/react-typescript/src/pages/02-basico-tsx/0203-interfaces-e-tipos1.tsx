import React from "react";

function Button({ children }: React.PropsWithChildren) {
  // const handleClick = (event: React.MouseEvent) => {
  const handleClick: React.MouseEventHandler = (event) => {
    console.log(event.pageX);
  };

  return <button onClick={handleClick}>{children}</button>;
}

export default function Aula0203InterfaceseTipos1() {
  return (
    <div>
      <Button>Incrementar</Button>
    </div>
  );
}
