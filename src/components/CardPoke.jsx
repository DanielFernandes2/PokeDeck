"use client"

import { useEffect, useState } from "react"
import { HeartIcon } from '@heroicons/react/24/solid'
import { HeartIcon as HeartIconoutline } from '@heroicons/react/24/outline'

export default function CardPoke({poke}){
  const [ favorito, setFavorito ] = useState(false) //hooks

  useEffect(() => {
    let favoritos = JSON.parse(localStorage.getItem("favoritos")) || []
    const favorito = favoritos.find(f => f.id === poke.id)
    setFavorito(favorito)
  }, [])

    function favoritar(){
      setFavorito(true)
      let favoritos = JSON.parse(localStorage.getItem("favoritos")) || []
      favoritos.push(poke)
      localStorage.setItem("favoritos", JSON.stringify(favoritos))

    }

    function desfavoritar(){
      setFavorito(false)
      let favoritos = JSON.parse(localStorage.getItem("favoritos")) || []
      const favoritosAtualizados = favoritos.filter(f => f.id !== poke.id)
      localStorage.setItem("favoritos", JSON.stringify(favoritosAtualizados))

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


          <img className="rounded h-56 w-56" src={poke.img} alt="imagem do pokemon"/>

          <span className="font-bold text-lg w-full line-clamp-1 text-center">
            {poke.titulo}
          </span>

      <div className="flex items-center gap-2">

        <span className="text-slate-400">{poke.tipagem}</span>
        <span className="text-slate-400">{poke.tipagem2}</span>

      </div>

      <a href="#" className="bg-pink-600 w-full text-center rounded py-1 hover:bg-pink-500">detalhes</a>

    </div>


    )

}