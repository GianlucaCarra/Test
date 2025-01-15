import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyle } from './styles/style';
import AppRoutes from './router/AppRoutes';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyle />
    <AppRoutes />
  </StrictMode>,
)
