import React from 'react'
import { BrowserRouter} from 'react-router-dom'
import { AdminRouter, WebRouter} from './router/index'

export default function App() {
  return (
    <BrowserRouter>
      <AdminRouter />
      <WebRouter />
    </BrowserRouter>
  )
}
