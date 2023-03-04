import './App.css'
import React from 'react'
import * as Pages from './pages'
import { NavBar } from './components';
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<NavBar />}>
          <Route index element={<Pages.Home />} />
          <Route path='/flashcards' element={<Pages.Flashcards />} />
          <Route path='/add' element={<Pages.AddFlashcard />} />
          <Route path='/login' element={<Pages.Login />} />
          <Route path='/categories' element={<Pages.SetCategory />} />
          <Route path='*' element={<Pages.NotFound />} />
        </Route>
      </Routes>

    </>
  )
}

export default App
