'use server'

import bcrypt from 'bcryptjs'
import { SignJWT } from 'jose'
import { cookies } from 'next/headers'

export const login = async (email: string, password: string) => {
  const isPasswordValid = await bcrypt.compare(password, Buffer.from(process.env.ADMIN_HASHED_PASSWORD!, 'base64').toString('utf-8'))

  if (!isPasswordValid) {
    return false
  }

  const secret = new TextEncoder().encode(process.env.SESSION_JWT_SECRET!)

  const sessionJwt = await new SignJWT({ email })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d') // 7 days
    .sign(secret)

  const cookieStorage = await cookies()

  cookieStorage.set('session', sessionJwt, {
    maxAge: 60 * 60 * 24 * 7, // 7 days
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
  })

  return true
}
