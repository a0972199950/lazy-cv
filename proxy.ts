import { NextProxy, NextRequest, NextResponse } from 'next/server'
import { jwtVerify } from 'jose'

const withAdminOnly: NextProxy = async (req: NextRequest) => {
  const loginUrl = new URL('/login', req.url)
  try {
    const session = req.cookies.get('session')?.value

    if (!session) {
      return NextResponse.redirect(loginUrl)
    }

    const secret = process.env.SESSION_JWT_SECRET
    const secretKey = new TextEncoder().encode(secret)
    const { payload } = await jwtVerify<{ email: string }>(
      session,
      secretKey
    )

    if (payload.email !== process.env.ADMIN_EMAIL) {
      return NextResponse.redirect(loginUrl)
    }
  } catch (err) {
    console.error(err)
    return NextResponse.redirect(loginUrl)
  }
}

export default withAdminOnly

export const config = {
  matcher: ['/'],
}