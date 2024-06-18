import React, { useState } from 'react'
import Logo from './components/Logo';
import Form from './components/Form';
import PackingList from './components/PackingList';
import Stats from './components/Stats';
import './App.css'


function App() {

  const [items, setItems] = useState([]);

  // add items
  function handleItems(item) {
    setItems((items) => [...items, item]);
  }

  // delete items
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  // item packed 
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  // Clear list
  function handleClearList(){
    setItems([ ]);
  }

  return (
    <div className='app'>
      <Logo />
      <Form onAddItems={handleItems} />
      <PackingList 
      items={items} 
      onDeleteItem={handleDeleteItem}
      onToggleItem={handleToggleItem}
      onClearList ={handleClearList}
       />
      <Stats items={items}/>
    </div>
  )
}

export default App
