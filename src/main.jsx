import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Routes.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='bg-[url(https://i.imgur.com/macBIL4.jpeg)] bg-cover px-2'>
      <div className='max-w-[1440px] mx-auto text-white'>
        <RouterProvider router={router} />
      </div>
    </div>
  </StrictMode>,
)
