import Title from "@/components/Titulo";
import CardPoke from "@/components/CardPoke";
import NavBar from "@/components/navbar";

async function carregarDados() {
  const url = "http://localhost:3001/favoritos";
  const response = await fetch(url);
  const favoritos = await response.json();

  return favoritos;
}
  
export default async function Minhas_Cartas() {
    const favoritos = await carregarDados();
  return (
    <>
      <NavBar />

      <Title>Minhas Cartas</Title>

      <section className="flex gap-2 flex-wrap">
        {favoritos.map((poke) => (
          <CardPoke key={poke.id} poke={poke} />
        ))}
      </section>

    </>
  )
}
