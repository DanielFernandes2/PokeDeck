import Title from "@/components/Titulo";
import CardPoke from "@/components/CardPoke";

async function carregarDados() {
  const url = "https://pokeapi.co/api/v2/pokemon";
  const response = await fetch(url);
  const json = await response.json();
  const resultados = json.results;

  const pokemons = await Promise.all(
    resultados.map(async (result) => {
      const pokemonResponse = await fetch(result.url);
      const pokemonData = await pokemonResponse.json();
      return pokemonData;
    })
  );

  return pokemons;
}
  
export default async function Home() {
  const pokes = await carregarDados();
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
        {pokes.map( poke => <CardPoke poke={poke}/>)}
      </section>

      <Title>1° Geração</Title>


    </>
  )
}
