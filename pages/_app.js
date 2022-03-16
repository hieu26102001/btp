import { RecoilRoot } from 'recoil'
import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import Layout from '../partial/Layout.tsx'
function MyApp({ Component, pageProps }) {
  return (
 
  <RecoilRoot>
    <Layout>
     <Component {...pageProps} />
    </Layout>
  </RecoilRoot>
)
}

export default MyApp
