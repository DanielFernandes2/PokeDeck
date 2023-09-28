"use client"
import { useEffect, useState } from "react"
import { HeartIcon } from '@heroicons/react/24/solid'
import { HeartIcon as HeartIconoutline } from '@heroicons/react/24/outline'

const typeColors = {
  normal: "gray",
  fire: "red",
  water: "blue",
  electric: "yellow",
  grass: "green",
  ice: "cyan",
  fighting: "orange",
  poison: "purple",
  ground: "brown",
  flying: "indigo",
  psychic: "pink",
  bug: "lime",
  rock: "brown",
  ghost: "indigo",
  steel: "gray",
  dragon: "red",
  dark: "black",
  fairy: "pink",
};


export default function CardPoke({poke}){
  const [ favorito, setFavorito ] = useState(false) //hooks

  useEffect(() => {
    const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    const favorito = favoritos.find((f) => f.id === poke.id);
    setFavorito(!!favorito);
  }, [poke.id]);

  function favoritar() {
    const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    favoritos.push(poke);
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
    setFavorito(true);

    // Adicionar o Pokémon aos favoritos no arquivo favoritos.json
    fetch("http://localhost:3001/favoritos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(poke),
    });
  }

  function desfavoritar() {
    const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    const favoritosAtualizados = favoritos.filter((f) => f.id !== poke.id);
    localStorage.setItem("favoritos", JSON.stringify(favoritosAtualizados));
    setFavorito(false);

    // Remover o Pokémon dos favoritos no arquivo favoritos.json
    fetch(`http://localhost:3001/favoritos/${poke.id}`, {
      method: "DELETE",
    });
  }
  
    return(
        <div className="flex flex-col items-center justify-between w-40 m-2 gap-1 relative">
          {favorito ?
            <HeartIcon 
              className="h-6 w-6 text-red-600 absolute top-1 right-2 cursor-pointer"
              onClick={desfavoritar}
            />
            :
            <HeartIconoutline 
              className="h-6 w-6 absolute top-1 right-2 cursor-pointer hover:text-red-600"
              onClick={favoritar}
            />
          }

          
          <img
            className="rounded w-96"
            src={poke.sprites.front_default}
            alt="imagem do pokemon"
          />

          <span className="font-bold text-lg w-full line-clamp-1 text-center">
            {poke.name}
          </span>
          

          <div className="flex items-center gap-2">
            {poke.types.map((typeData) => (
              <span
                key={typeData.type.name}
                style={{
                  backgroundColor: typeColors[typeData.type.name],
                  color: "white",
                  padding: "2px 4px",
                  borderRadius: "4px",
                }}
              >
                {typeData.type.name}
              </span>
            ))}
          </div>
          
      <a href="#" className="bg-pink-600 w-full text-center rounded py-1 hover:bg-pink-500">detalhes</a>

    </div>


    )

}