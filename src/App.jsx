 import Header from './header'
import SearchItem from './SearchItem'
import AddItem from './AddItem' 
import Footer from './Footer'
import Practice from './practice' 
import apiRequest from './apiRequest'
import './App.css'
import { useEffect, useState } from 'react'


function App() {
  const API_URL = 'http://localhost:3500/items';

  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(true);

useEffect(() =>{
  const fetchItems = async () =>{
    try{
      const response = await fetch(API_URL);
      const listItems = await response.json();
      console.log(listItems);
      setItems(listItems);
      }catch(err) {
        console.log(err.stack)
    }finally{
      setIsLoading(false);
    }
  }
  setTimeout(() => {
      (async () => await fetchItems())(); 
  }, 2000)
    
}, [])  



const addItem = async (item) => {
  const id = items.length ? Number(items[items.length -1].id) + 1 : 1;
  const myNewItem = {id, checked:false, item};
  const listItems = [...items, myNewItem];
  setItems(listItems);

const postOptions = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(myNewItem)
}
  const result = await apiRequest(API_URL, postOptions);
  if(result) setFetchError(result);
}


 const handleClick = async (id) =>{
       const listItem = items.map((item) => item.id === id? {...item, checked: !item.checked} : item);
       setItems(listItem);

       const myItem = listItem.filter((item) => item.id === id);
       const updateOptions = {
        method: 'PATCH',
        headers: {
           
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({checked: myItem[0].checked})
       };
       const reqUrl = `${API_URL}/${id}`;
       const result = await apiRequest(reqUrl, updateOptions);
       if(result) setFetchError(result);
    }

const handleDelete = async (id) =>{
    const listItem = items.filter((item) => item.id !== id );
     setItems(listItem); 

     const deleteOptions = { method: 'DELETE'};
     const reqUrl = `${API_URL}/${id}`;
     const result = await apiRequest(reqUrl, deleteOptions);
      if(result) setFetchError(result);
}


const handleSubmit = (e) =>{
    e.preventDefault();
    if(!newItem) return;
    addItem(newItem);
    setNewItem('');
}


  return (
    <div className="App">
 
  <Header title="Grocery List" />
      
       <AddItem 
       newItem={newItem}
       setNewItem={setNewItem}
       handleSubmit={handleSubmit}
       />
      <SearchItem
        search={search}
        setSearch={setSearch}
      /> 
    

      <main>
        {isLoading && <p>Loading Items...</p>}
       { !isLoading && <Practice
          items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))} 
          handleClick={handleClick}
          handleDelete={handleDelete}
          /> }

         
      </main>

      <Footer length={items.length} /> 
      
     
    </div>

  )
}

export default App 

