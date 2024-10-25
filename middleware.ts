import {NextResponse} from 'next/server'
import {auth} from '@/auth'


export default auth((req) => {

    //Неавторизованных - на авторизацию
    if (!req.auth) {
        const url = new URL('/login', req.url)
        return NextResponse.redirect(url)
    }

    //Если нет в системе - доступ запрещён
    if (!req.auth.user?.groupIds?.length) {
        const url = new URL('/permissionDenied', req.url)
        return NextResponse.redirect(url)
    }

    return NextResponse.next()
})

// По каким маршрутам Middleware не будет отрабатывать
export const config = {
    matcher: ['/((?!login|permissionDenied|_next/static|_next/image|help|favicon.ico|api/auth|.*\\.png$).*)'],
}