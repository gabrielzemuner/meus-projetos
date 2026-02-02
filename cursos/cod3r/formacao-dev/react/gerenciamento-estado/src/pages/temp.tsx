import Area from "@/components/template/Area";

export default function Temp() {
  return (
    <div className="flex flex-col gap-5 p-20">
      <Area titulo="Teste do componente" cor="bg-red-500">
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </Area>
      <Area
        titulo="Teste do componente"
        sumario="R$ 1.200,56"
        cor="bg-blue-500"
      >
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </Area>
    </div>
  );
}
