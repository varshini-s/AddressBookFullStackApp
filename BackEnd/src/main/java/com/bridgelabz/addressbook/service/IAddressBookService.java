package com.bridgelabz.addressbook.service;

import java.util.List;

import com.bridgelabz.addressbook.dto.ContactDTO;
import com.bridgelabz.addressbook.model.Contact;



public interface IAddressBookService 
{
    List<Contact> getContact();
    Contact getContactById(int contactId);
    Contact createContact(ContactDTO contactDTO);
    Contact updateContact(int contactId,ContactDTO contactDTO);
    void deleteContact(int contactId);
    List<Contact> getContactByState(String state);
    List<Contact> getContactByCity(String city);


}
