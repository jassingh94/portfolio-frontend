import React, { useRef, useState } from 'react';
import './App.css'
import { Stack, useMediaQuery, useTheme } from '@mui/material';
import NavBar from './components/NavBar';
import About from './components/About';
import Timeline from './components/Timeline';
import Marque from './components/Marque';
import { getQuery } from './api/queryAi'

function App() {
  const homeRef: React.RefObject<any> = useRef(null);
  const expRef: React.RefObject<any> = useRef(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // as i use a free tier render profile, the server is made inactive after sometime, hitting the api on website landing page ensures the services are up until the search is performed. 
  const { data } = getQuery({ question: " " })

  const scrollToHome = () => {
    homeRef?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  const scrollToExp = () => {
    expRef?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  return <Stack width="100vw" overflow="hidden" bgcolor="#182030" alignItems="center" ref={homeRef}>
    <Stack
      width="100%"
      position="fixed"
      top={0}
      left={0}
      zIndex={1000}
    >
      <NavBar {...{ scrollToHome, scrollToExp }} />
    </Stack>
    <Stack height={isMobile ? 'auto' : "100vh"} width='100%' mt={isMobile ? 5 : 12}>
      <About />
      <Stack width='100%' alignItems='center' {
        ...(isMobile ? { paddingBottom : '10px'} : { position: 'absolute', bottom: '100px' })
      }>
        <Stack width={isMobile ? '100%' : '50%'}>
          <Marque />
        </Stack>
      </Stack>
    </Stack>
    <Stack color='white' ref={expRef}>
      <Timeline />
    </Stack>
  </Stack>
}

export default App
