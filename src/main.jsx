import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import { createBrowserRouter, Link } from 'react-router'
import RootLayout from './layout/RootLayout'
import Home from './component/home/Home'
import TimeLine from './component/home/timeline/TimeLine'
import Stats from './component/stats/Stats'
import NotFound from './assets/images/Error.webp'
import FriendDetails from './pages/FriendDetails'
const router = createBrowserRouter([
  {
    path:'/',
    element: <RootLayout/>,
    children: [
      {
        index : true,
        element: <Home/>
      },
      {
        path:'/timeline',
        element: <TimeLine/>
      },
      {
        path:'/stats',
        element: <Stats/>
      },
      {
        path: '/friend/:id', 
        element: <FriendDetails/>,
        loader: () => fetch('/data.json') 
      }
    ],
    errorElement: <div className='container mx-auto px-100 pt-20 '> 
     <img className='absolute  ' src={NotFound} alt="Page Not Found" />
     <Link to={'/'} className='relative left-90  bottom-3 z-10 btn btn-success' >Go Back</Link>
      </div>
  },
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>
)
