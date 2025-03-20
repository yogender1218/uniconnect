import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { MantineProvider } from '@mantine/core'
import './style/global.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MantineProvider withGlobalStyles={false} withNormalizeCSS={false}>
    <App />
    </MantineProvider>
  </StrictMode>,
)
