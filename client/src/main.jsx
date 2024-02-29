import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { Bounce, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from './store/auth.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
   <AuthProvider>
  <React.StrictMode>
    <App />
    <ToastContainer
    position="top-center"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="colored"
    transition: Bounce
    />
  </React.StrictMode>
  </AuthProvider>
)
