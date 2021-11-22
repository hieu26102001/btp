import { RecoilRoot } from 'recoil'
import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import Layout from './Layout'
function MyApp({ Component, pageProps }) {
  return (
 
  <RecoilRoot>
     <Component {...pageProps} />
  </RecoilRoot>
)
}

export default MyApp
