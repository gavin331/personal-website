import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Header from './Header.jsx';
import IntroContent from './IntroContent.jsx';
import AboutMe from './AboutMe.jsx';
import Experience from './Experience.jsx';
import Projects from './Projects.jsx';
import Contact from './Contact.jsx';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <IntroContent />
      <AboutMe />
      <Experience />
      <Projects />
      <Contact />
    </ThemeProvider>
  );
}

export default App;
