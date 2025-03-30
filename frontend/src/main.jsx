import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { MantineProvider } from '@mantine/core'
import './style/global.css'
import { AuthProvider } from './contexts/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MantineProvider withGlobalStyles={false} withNormalizeCSS={false}>
      <AuthProvider>
    <App />
    </AuthProvider>
    </MantineProvider>
  </StrictMode>,
)
