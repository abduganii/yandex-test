import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import { QueryClientProvider } from 'react-query'

import { queryClient } from './services/api.js'
import App from './App.jsx'

import './index.css'
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <App />
      <ToastContainer position='bottom'/>
    </QueryClientProvider>
  </BrowserRouter>
)
