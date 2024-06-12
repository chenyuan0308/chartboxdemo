import React from 'react'
import ReactDOM from 'react-dom/client'
import RouterView from "@/router/routets";
import { BrowserRouter } from "react-router-dom";
import '@/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <BrowserRouter>
          <RouterView />
      </BrowserRouter>
  </React.StrictMode>,
)
