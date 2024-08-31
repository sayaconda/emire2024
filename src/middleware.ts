import { NextRequest, NextResponse } from 'next/server';

export const config = {
  matcher: ['/:path*'],
};

export function middleware(req: NextRequest) {
  // if (isLocalDevelopment || !process.env.BASIC_ID || !process.env.BASIC_PWD) {
  //   return NextResponse.next();
  // }

  try {
    const isProd = process.env.NODE_ENV === 'production';
    console.log('isProd', isProd);
    if (!isProd) return;
    const basicAuth = req.headers.get('authorization');
    if (basicAuth) {
      const authValue = basicAuth.split(' ')[1];
      const [user, pwd] = atob(authValue).split(':');
      console.log(
        'basicAuthある',
        basicAuth,
        '\nauthValue',
        authValue,
        '\nuser',
        user,
        '\npwd',
        pwd,
        '\nBASIC_ID:',
        process.env.BASIC_ID,
        '\nBASIC_PWD:',
        process.env.BASIC_PWD,
        '\nIDがイコール',
        user === process.env.BASIC_ID,
        '\nPWDがイコール',
        pwd === process.env.BASIC_PWD
      );

      if (user === process.env.BASIC_ID && pwd === process.env.BASIC_PWD) {
        console.log(
          'イコール',
          user === process.env.BASIC_ID && pwd === process.env.BASIC_PWD
        );
        return NextResponse.next();
      }
    }

    return new Response('Authentication required', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Secure Area"',
      },
    });
  } catch (e) {
    console.error('Basic Authentication Error:', e); // Added for debugging
    return new Response('Invalid Authentication', { status: 400 });
  }
}
