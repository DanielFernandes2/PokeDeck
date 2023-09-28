import Title from "@/components/Titulo";
import CardPoke from "@/components/CardPoke";

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
    <nav className="bg-neutral-950 p-2 flex gap-3 items-end space-x-8">
      <h1 className="text-4xl text-red-600 font-bold uppercase mx-8">PokeDeck</h1>
      <ul>
        <li>
          <a href="/favoritos" className="text-zinc-200">Minhas Cartas</a>
          <a href="#" className="mx-8 text-zinc-200"> Geração</a>
          <a href="#" className="mx-8 text-zinc-200"> Sobre</a>
        </li>
      </ul>
    </nav>

      <Title>Minhas Cartas</Title>

      <section className="flex gap-2 flex-wrap">
        {favoritos.map((poke) => (
          <CardPoke key={poke.id} poke={poke} />
        ))}
      </section>

      <Title>1° Geração</Title>


    </>
  )
}
