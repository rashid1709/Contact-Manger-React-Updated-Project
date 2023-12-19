
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Header from './Components/Header';
import AddContact from './Components/AddContact';
import { useEffect, useState } from 'react';
import CotnactList from './Components/CotnactList';
import uuid4  from 'uuid4';

function App() {
  const localStorageKey="Contact";
  const [contact,setContact] = useState(()=>{
   return JSON.parse(localStorage.getItem(localStorageKey))
  || [] });
  
 
  useEffect(()=>{
    localStorage.setItem(localStorageKey,JSON.stringify(contact));
  },[contact])
  const addContact =(data) => {
    setContact([...contact,{id:uuid4(),data}]);
    console.log('contact',contact);
  }
  const removeContact = (id) => {
    const updatedList = contact.filter((val)=>{
        return val.id!==id;
    })
    setContact(updatedList);

  }
  return (
    <div className="container">
      <Header />
      <AddContact addContact={addContact} />
      <CotnactList contact={contact} removeContact={removeContact} />
    </div>
  );
}

export default App;
