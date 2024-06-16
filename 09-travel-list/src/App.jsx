import React from 'react'
import Logo from './components/Logo';
import Form from './components/Form';
import PackingList from './components/PackingList';
import Stats from './components/Stats';
import './App.css'

const initialItems = [
  { id: 1, description: "passports", quantity: 1, packed: false },
  { id: 1, description: "Camera", quantity: 2, packed: true },
  { id: 1, description: "Bags", quantity: 3, packed: false },
];

function App() {
  return (
    <div className='app'>
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  )
}

export default App
