import { NextRequest, NextResponse } from 'next/server';

export const config = {
  matcher: '/(.*)',
};

export function middleware(req: NextRequest) {
  try {
    const authHeader = req.headers.get('authorization');
    if (authHeader) {
      console.log('authHeader', authHeader);
      const basicAuth = authHeader.split(' ')[1];
      const [user, password] = atob(basicAuth).toString().split(':');
      console.log('user', user, 'pw', password, 'env', process.env);

      if (user === process.env.BASIC_ID && password === process.env.BASIC_PW) {
        return NextResponse.next();
      }
      return new Response('Basic Auth required', {
        status: 401,
        headers: {
          'WWW-Authenticate': 'Basic realm="Secure Area"',
        },
      });
    }
  } catch (e) {
    return new Response('Invalid Auth', { status: 400 });
  }
}
