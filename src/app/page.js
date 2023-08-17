export default function Home() {
  return ( //JSX
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
  )
}
