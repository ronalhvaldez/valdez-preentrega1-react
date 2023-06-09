import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { CustomProvider } from '@CartContext'
import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyCtQn4v1pfRs7n7LNJySTU3uuH5pkk2KYA',
  authDomain: 'e-commerce-valdez.firebaseapp.com',
  projectId: 'e-commerce-valdez',
  storageBucket: 'e-commerce-valdez.appspot.com',
  messagingSenderId: '1023189522732',
  appId: '1:1023189522732:web:40b8c8408be9186144b489'
}

initializeApp(firebaseConfig)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CustomProvider>
      <App />
    </CustomProvider>
  </React.StrictMode>
)
