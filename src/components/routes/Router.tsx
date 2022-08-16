import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ViewUserArea from '../../pages/ViewUserArea/ViewUserArea'
import ViewAllArea from '../../pages/ViewAllArea/ViewAllArea'
import BookMark from '../../pages/BookMark/BookMark'

function Router() {
  return (
    <Routes>
      <Route path="/" element={<ViewUserArea />} />
      <Route path="/all" element={<ViewAllArea />} />
      <Route path="/bookmark" element={<BookMark />} />
    </Routes>
  )
}

export default Router
