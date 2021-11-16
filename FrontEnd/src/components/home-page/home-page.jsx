import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import AddressBookService from "../../services/addressbook- service"
import addIcon from '../../assets/icons/add-24px.svg'
import './home-page.scss';
import PageHeader from '../page-header/page-header';
import editIcon from '../../assets/icons/create-black-18dp.svg'
import deleteIcon from '../../assets/icons/delete-black-18dp.svg'
import searchIcon from '../../assets/icons/Search.png'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import "@fontsource/lato";
import applcationConstants from '../../config/application-constants';

var addressBookService = new AddressBookService();


const HomePage = () => {
    const [contacts, setContacts] = useState([])
    const [textInput, setTextInput] = useState("");

    const searchByCityOrState = (cityOrStateToSearch) => 
     {            


        addressBookService.getContactByState(cityOrStateToSearch).then((response) => 
        {
            if(response.data.data.length==0)
            {
                addressBookService.getContactByCity(cityOrStateToSearch).then((response) => 
                {
                    
                    setContacts(response.data.data);
                    
                }).catch(error =>{
                    console.log(error);
                })
            }
            setContacts(response.data.data);
            
        }).catch(error =>{
            console.log(error);
        })

         
       
      }

      const items=applcationConstants.searchItems;

      const handleOnSelect = (item) => 
      {
        console.log(item.name)
        searchByCityOrState(item.name)
    
      }
    

    
 
    useEffect(() => {

        getAllContacts();
    }, [])

    const getAllContacts = () => {
        addressBookService.getAllContact().then((response) => {
            
            setContacts(response.data.data);
            
        }).catch(error =>{
            console.log(error);
        })
    }

    const deleteContact = (contactId) => {
         
     }


        return (

            <div >
                <PageHeader />

                <div className="main-content">
                    <div className="header-content">
                        <div className="contact-detail-text">
                            Person Details <div className="contact-count"></div>
                        </div>
                        <div className="row center button box">
                            <div style={{ width: 300 }}>
                            <ReactSearchAutocomplete className="react-search"
                                items={items}
                                onSelect={handleOnSelect}
                                onClear={getAllContacts}
                                autoFocus
                            />
                       </div>

                            <Link to="address-form" className="add-button flex-row-center">
                                <img src={addIcon} alt="" />Add User
                            </Link>
                        </div>
                    </div>
                    <div className="table-main" >
                        <table id="display" className="table">
                            <tbody>
                                <tr key={-1}>
                                    <th>Full Name</th>
                                    <th>Address</th>
                                    <th>City</th>
                                    <th>State</th>
                                    <th>Zip Code</th>
                                    <th>Phone Number</th>

                                </tr>
                                {
                                    contacts && contacts.map((contact, ind) => (
                                        <tr key={ind}>
                                            <td>{contact.name}</td>
                                            <td>{contact.address}</td>
                                            <td>{contact.city}</td>
                                            <td>{contact.state}</td>
                                            <td>{contact.zip}</td>
                                            <td>{contact.phoneNumber}</td>

                                            <td>
                                                <Link   className="btn btn-info" 
                                                        to={`/edit-contact/${contact.contactId}`} >
                                                
                                                <img src ={editIcon} alt="edit"/>

                                                </Link>
                                                <img onClick={() => deleteContact(contact.contactId)} src ={deleteIcon} alt="delete"/>

                                            </td>

                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
            }

export default HomePage
