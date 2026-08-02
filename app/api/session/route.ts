import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { jwtVerify } from 'jose'

export async function GET() {
  try {
    const cookieStore = await cookies()
    const session = cookieStore.get('session')?.value

    if (!session) {
      return NextResponse.json({ isAdmin: false })
    }

    const secret = new TextEncoder().encode(process.env.SESSION_JWT_SECRET!)
    const { payload } = await jwtVerify<{ email: string }>(session, secret)

    return NextResponse.json({ isAdmin: payload.email === process.env.ADMIN_EMAIL })
  } catch {
    return NextResponse.json({ isAdmin: false })
  }
}
