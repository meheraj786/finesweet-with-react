import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './pages/Home.jsx'


const router = createBrowserRouter([{
  path: '/',
  element: <Layout/>,
  children:[{
    
      path: '/home',
      element: <Home/>
    
  }]
},{}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
