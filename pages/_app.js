import '../styles/Main.module.css'
import localFont from '@next/font/local'
const myFont = localFont({ src: '../pages/assets/Fonts/OpenSauceOne-Black.ttf' })
import '../styles/Main.css';
import Image from 'next/image'



function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
