import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import {ChakraProvider, Box, Container} from '@chakra-ui/react'
import Main from './Components/Main.components'
import styles from '../styles/Main.module.css'

import localFont from '@next/font/local'
const OpenSauceNormal = localFont({ src: '../pages/assets/Fonts/OpenSauceOne-Regular.ttf' })
const OpenSauceMedium = localFont({ src: '../pages/assets/Fonts/OpenSauceOne-Medium.ttf' })
const OpenSauceBold = localFont({ src: '../pages/assets/Fonts/OpenSauceOne-Bold.ttf' })
const OpenSauceSemiBold = localFont({ src: '../pages/assets/Fonts/OpenSauceOne-SemiBold.ttf' })



export default function App() {
  return (
    <ChakraProvider>
      <div className={OpenSauceNormal.className}> 
        <Head>
          <title>Ahmet Haşim ERDOĞAN</title>
        </Head>
        <Main mainClass="main-content">
        </Main>
      </div>
    </ChakraProvider>
  )
}
