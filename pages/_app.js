import Layout from '@/components/layout/layout'
import { SessionProvider } from 'next-auth/react'
import { UserContextProvider } from '@/store/userContext'
import '@/styles/globals.css'

export default function App({ Component, pageProps:{session,...pageProps}, }) {
  return (
    <SessionProvider session={session}>
    <UserContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserContextProvider>
    </SessionProvider>
  )


}
