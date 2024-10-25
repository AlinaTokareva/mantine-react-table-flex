import NextAuth from 'next-auth'
import Credentials from '@auth/core/providers/credentials'
import {AdapterUser} from '@auth/core/adapters'
import {UserData} from '@/types/types'

export const {handlers, auth} = NextAuth({
    pages: {
        signIn: '/login'
    },
    trustHost: true,
    providers: [
        Credentials({
            credentials: {
                login: {type: 'text', name: 'login'},
                password: {type: 'password', name: 'password'},
                user: {hidden: true, name: 'user'}
            },
            authorize: async (credentials) => {
                const currUser = credentials?.user ? JSON.parse(credentials.user as string) : null
                return currUser ? currUser.user : null
            }
        })
    ],
    callbacks: {
        jwt: async ({token, session, user}) => {
            if (user || session) {
                //При вызове update новые данные о пользователе попадают в session
                //При signIn - в user
                token.user = user || session
            }
            return token
        },
        session: async ({session, token}) => {
            session.user = token.user as UserData & AdapterUser
            return session
        },
        authorized: async ({auth}) => {
            return !!auth
        }
    },
    session: {
        strategy: 'jwt',
    },
    secret: process.env.SECRET_KEY
})