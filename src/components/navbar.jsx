"use client"

import { serverLogout } from "@/actions/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NavBar(){
    const {push} = useRouter()

    function logout(){
        serverLogout()
        push("/login")
    
    }
    return(
        <nav className="bg-neutral-950 p-2 flex gap-3 items-end space-x-8">
        <Link href={"/"}>
            <h1 className="text-4xl text-red-600 font-bold uppercase mx-8">PokeDeck</h1>
        </Link>
        <ul>
          <li>
            <Link href="/favoritos" className="text-zinc-200">Minhas Cartas</Link>
            <button className="mx-8 text-zinc-200" onClick={logout}>logout</button>
          </li>
        </ul>
      </nav>
    )
}