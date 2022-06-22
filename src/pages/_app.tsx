
import type { AppProps } from 'next/app'
import { useContext, useState } from 'react'
import GlobalStyle from '../../styles/global'
import { ThemeContext, ThemesProvider } from '../contexts/themeContext'







function MyApp({ Component, pageProps }: AppProps) {



  return (
    <>
      <ThemesProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemesProvider>
    </>

  )
}

export default MyApp
