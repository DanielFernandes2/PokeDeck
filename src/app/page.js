import Title from "@/components/Titulo";
import CardPoke from "@/components/CardPoke";



export default function Home() {
    //mock
    const pokes = [
      {
        titulo: "Charizard",
        tipagem: "Fogo",
        tipagem2: "Voador",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpv5Nogub15Gzht9hZiIzAsPX8XQLCtAxZnpXRrYw-zrzMV4At2uvjkqaf52maAhUhS74&usqp=CAU"
      },
      {
        titulo: "Talonflame",
        tipagem: "Fogo",
        tipagem2: "Voador",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR48tESSCgTQDDu3npiQNvTNflhqqyB_vGfg9EwBpBY0K1R54l9mXY16x6r_1B-tmWdJkI&usqp=CAU"
      }
  
    ]
  

  return (
    <>
    <nav className="bg-neutral-950 p-2 flex gap-3 items-end space-x-8">
      <h1 className="text-4xl text-red-600 font-bold uppercase mx-8">PokeDeck</h1>
      <ul>
        <li>
          <a href="#" className="text-zinc-200">Minhas Cartas</a>
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
