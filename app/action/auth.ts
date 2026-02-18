'use server'
import { cookies } from 'next/headers'
export async function saveToken(token: string) {
  const cookieStore = await cookies()
  cookieStore.set('userToken', token, {
    httpOnly: true,
    secure: false,
    path: '/',
  })
}