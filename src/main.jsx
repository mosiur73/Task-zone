import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import { router } from './Utils/Routes.jsx'
import AuthProvider from './Provider/AuthProvider.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <AuthProvider>
   
      <div className=''>
    <RouterProvider router={router}></RouterProvider>
    </div>
   
    </AuthProvider>
    
  </StrictMode>,
)
