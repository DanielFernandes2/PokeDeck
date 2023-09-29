"use server"

import { cookies } from 'next/headers'

export async function serverLogin(){
    cookies().set("user_email", "123@gmail.com", {
        maxAge: 60 * 60 * 24 * 7 // 7 dias
    })
}

export async function serverLogout(){
    cookies().delete("user_email")
}