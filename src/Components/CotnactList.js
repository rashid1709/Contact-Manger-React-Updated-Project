import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

function CotnactList(props) {
    const {contact,removeContact} = props;
    
  return (
    <div>
      <h1>Contact List</h1>
      {
        contact.map((val)=>{
            return(
                <div className='contacts'>
                    <div className='contact-name'>{val.data.name}</div>
                    <div className='contact-email'>{val.data.email}</div>
                    <span onClick={()=>removeContact(val.id)}><DeleteIcon /></span>
                </div>
            )
        })
      }
    </div>
  )
}

export default CotnactList
