'use client'
 
import React from 'react'
import dynamic from 'next/dynamic'
import {Provider} from 'react-redux';
import {store} from '../../store/store'
import {BrowserRouter} from "react-router-dom"


// Since we want a client-only application to start, we can configure Next.js to disable prerendering from the App component down.
const App = dynamic(() => import('../../App'), { ssr: false })
 
export function ClientOnly() {
  return   (
    <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)}