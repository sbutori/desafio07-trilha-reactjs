import type { AppProps } from 'next/app';
import Head from 'next/head';

import { extendTheme, ChakraProvider } from '@chakra-ui/react';

import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@fontsource/barlow/600.css';
import '@fontsource/barlow/500.css';

import 'swiper/css/bundle';
import '../styles/globals.scss';
import '../styles/swiper.scss';
import React from 'react';

const theme = extendTheme({
  colors: {
    transparent: 'transparent',
    black: '#000',
    white: '#FFF',
    highlight: '#FFBA08',
    dark: {
      text: '#47585B',
      info: '#999999',
    },
    light: {
      text: '#F5F8FA',
      info: '#DADADA',
    },
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      'html, body': {
        color: 'dark.text',
        backgroundColor: 'light.text',
      },
    },
  },
  textStyles: {
    cityCardTitle: {
      fontWeight: 'semibold',
      fontFamily: 'Barlow, sans-serif',
    },
    cityCardDesc: {
      fontWeight: 'medium',
      fontFamily: 'Barlow, sans-serif',
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS={true} theme={theme}>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=yes"
        />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
