import Title from "@/components/Titulo";
import CardPoke from "@/components/CardPoke";
import NavBar from "@/components/navbar";

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
      <NavBar />

      <Title>Minhas Cartas</Title>

      <section className="flex gap-2 flex-wrap">
        {pokes.map( poke => <CardPoke poke={poke}/>)}
      </section>


    </>
  )
}
