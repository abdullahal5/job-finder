import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Root from './router/Root.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='font-lexend'>
      <RouterProvider router={Root} />
    </div>
  </React.StrictMode>,
)
