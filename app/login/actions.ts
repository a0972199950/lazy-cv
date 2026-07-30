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

  // 不設 exp，JWT 永不過期（jose 只在 exp 存在時才驗證它）。
  // 要讓既有 session 全部失效的話，換掉 SESSION_JWT_SECRET 即可。
  const sessionJwt = await new SignJWT({ email })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .sign(secret)

  const cookieStorage = await cookies()

  cookieStorage.set('session', sessionJwt, {
    // Cookie 無法真的永久：Chrome 104+ 會把 Max-Age 上限壓到 400 天，
    // 設更大的值也會被截斷，所以直接用瀏覽器允許的最大值。
    maxAge: 60 * 60 * 24 * 400,
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
  })

  return true
}
