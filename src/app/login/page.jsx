"use client"
import Image from "next/image";
import loginimage from "@/images/pikachu.jpg"
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { serverLogin } from "@/actions/auth";

export default function login(){
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const { push } = useRouter()

    function login(e){
        e.preventDefault()
        if (email === "danicfernandes8@gmail.com" && senha === "123"){
            serverLogin()
            push("/")
        }else{
            toast.error("Credenciais Invalidas", {
                style: {
                    backgroundColor: '#333',
                    color: "#fff"
                }
            })
        }
    }
    
    return(
        <div className="flex h-screen">
            <aside className="hidden md:flex">               
                <Image className="h-full w-full object-cover" src={loginimage} alt="imagem de login"/>
            </aside>

            <main className="container m-auto max-w-md p-3">
                <h1 className="text-xl font-bold">PokeDeck</h1>
                <form onSubmit={login} className="flex flex-col">
                    <label htmlFor="email">E-mail</label>
                    <input 
                        className="bg-slate-600 p-1 rounded" 
                        type="email" 
                        id="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />

                    <label htmlFor="senha">Senha</label>
                    <input 
                        className="bg-slate-600 p-1 rounded" 
                        type="password" 
                        id="senha"
                        value={senha}
                        onChange={e => setSenha(e.target.value)}
                    />

                    <button className="bg-pink-600 p-2 rounded mt-2">entrar</button>
                </form>
            </main>
        </div>
    )
}