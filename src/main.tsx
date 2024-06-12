import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import LayOut from './pages/components/layout';
import '@/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <BrowserRouter>
          <LayOut />
      </BrowserRouter>
  </React.StrictMode>,
)
