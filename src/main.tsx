import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import LogIn from './pages/LogIn'
import { GlobalStyle } from './styles/style';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyle />
    <LogIn />
  </StrictMode>,
)
