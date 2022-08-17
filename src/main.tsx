import React from 'react'
import ReactDOM from 'react-dom/client'
import Modal from 'react-modal'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import App from './App'
import './index.css'

Modal.setAppElement('#root')

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <App />
        <ToastContainer className='top-24' />
    </React.StrictMode>
)
