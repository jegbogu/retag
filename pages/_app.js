import Layout from '@/components/layout/layout'
import { UserContextProvider } from '@/store/userContext'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <UserContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserContextProvider>
  )


}
