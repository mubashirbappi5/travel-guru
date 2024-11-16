import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router-dom'
import MainRouts from './routs/MainRouts.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={MainRouts} />
  </StrictMode>,
)
