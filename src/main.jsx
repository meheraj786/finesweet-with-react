import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx';
import Feature from './pages/Feature.jsx';
import Pricing from './pages/Pricing.jsx';
import Faq from './pages/Faq.jsx';
import Blog from './pages/Blog.jsx';
import Contact from './pages/Contact.jsx';



const router = createBrowserRouter([{
  path: '/',
  element: <Layout />,
  children: [{
    path: '/',
    element: <Home />,
  },{
    path: '/about',
    element: <About/>
  },{
    path: '/feature',
    element: <Feature/>
  },{
    path: '/pricing',
    element: <Pricing/>
  },{
    path: '/faq',
    element: <Faq/>
  },{
    path: '/blog',
    element: <Blog/>
  },{
    path: '/contact',
    element: <Contact/>
  }
]
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)