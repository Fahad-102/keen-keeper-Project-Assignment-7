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
   errorElement: (
  <div className='flex flex-col items-center justify-center min-h-screen'>
    <img src={NotFound} alt="Page Not Found" className="max-w-md w-full" />
    <Link to='/' className='mt-5 btn btn-success'>Go Back Home</Link>
  </div>
)
  },
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>
)
