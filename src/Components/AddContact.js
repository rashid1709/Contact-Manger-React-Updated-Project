import React, { useState } from 'react'

function AddContact({addContact}) {
    const [contactData,setContactData] = useState({
        name:'',
        email:''
    })
    const handleChange =(e)=>{
       if(e.target.name==='name'){
        setContactData({...contactData,name:e.target.value})
       }
       else {
        setContactData({...contactData,email:e.target.value})
       }
    }
    const handleAdd = (e) => {
            if(contactData.name==='' || contactData.email===''){
                alert('please fill all the field');
                return;
            }
            else {
                // console.log(contactData);
                 addContact(contactData);
                 setContactData({name:'',email:''})

            }
    }
  return (
    <div className='formHeader'>
        
      <h1>Add Contact</h1>
      <form>
      <label>Name</label><br/>
      <input type='text' name='name' value={contactData.name} onChange={handleChange} placeholder='enter name' /><br/>
      <label>Email</label><br/>
      <input type='text' name='email' value={contactData.email} onChange={handleChange} placeholder='enter email' /><br/>
      </form>
      <button className='btn btn-primary my-2' onClick={handleAdd}>Add Contact</button>
    </div>
  )
}

export default AddContact
