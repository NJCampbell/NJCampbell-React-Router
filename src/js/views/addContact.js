import React, { useContext, useState} from "react";
import { Context } from "../store/appContext";


import "../../styles/addContact.css";

const AddContact = ({ handleInputChange }) => {
    const { store, actions } = useContext(Context);
    const { fullName, setFullName } = useState("");
    const { email, setEmail } = useState("");
    const { phone, setPhone } = useState("");
    const { address, setAddress } = useState("");



 
   
    return (
        <>
         
            <div className="addContactContainer">             
                <h1>Add a new contact</h1>
                <div className="contact-form">                    
                        <label>
                            Full Name:
                            <input
                             type="text"
                             name="name"
                             value={fullName}
                             onChange={handleInputChange}
                             placeholder="Enter full name"></input>
                       </label>
                       <label>
                            Email:
                            <input
                             type="text"
                             name="email"
                             value={email}
                             onChange={handleInputChange}
                             placeholder="Enter email"></input>
                       </label>
                       <label>
                            Phone:
                            <input
                             type="text"
                             name="phone"
                             value={phone}
                             onChange={handleInputChange}
                             placeholder="Enter phone"></input>
                       </label>
                       <label>
                            Address:
                            <input
                             type="text"
                             name="address"
                             value={address}
                             onChange={handleInputChange}
                             placeholder="Enter address"></input>
                       </label>
                                              
                    
                </div>      
                <button onClick={() => actions.saveContact()}>Save</button>   
                                       
                
            </div>
             
        </>
         )    
};

export default AddContact;

//handleSubmit replaced the following: () => actions.saveContact()


/* <button>Cancel/Go Back</button> */ 

// deleteContact: (id) => {
//     const store
// }
// const revisedContactList = store.contacts.filter(contact => contact.id !== id);