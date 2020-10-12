import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import asyncRouteLoader from './utils/asyncLoader'
/* Import routes */
import Home from './pages/Home'
/* Import routes async */
const Settings = asyncRouteLoader(() => import("./pages/Settings"))

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/settings' element={<Settings />} />
      </Routes>
    </BrowserRouter>
  )
}
