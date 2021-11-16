package com.bridgelabz.addressbook.service;

import java.util.ArrayList;
import java.util.List;

import com.bridgelabz.addressbook.dto.ContactDTO;
import com.bridgelabz.addressbook.exceptions.AddressBookException;
import com.bridgelabz.addressbook.model.Contact;
import com.bridgelabz.addressbook.repository.AddressBookRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lombok.extern.slf4j.Slf4j;
@Service
@Slf4j
public class AddressBookService implements IAddressBookService
{
    @Autowired
    private AddressBookRepository addressBookRepository;

    List<Contact> contactList = new ArrayList<>();

    @Override
    public List<Contact> getContact() 
    {
        return addressBookRepository.findAll();
    }

    @Override
    public Contact getContactById(int contactId) 
    {
        return addressBookRepository
			   .findById(contactId)
			   .orElseThrow(()->new AddressBookException("Contact with contact id "+contactId+"does not exists..!"));
    }

    @Override
    public Contact createContact(ContactDTO contactDTO) 
    {
        Contact contact = new Contact(contactDTO);
        log.debug("Contact data :"+contact.toString());
        contactList.add(contact);
        return addressBookRepository.save(contact);

    }

    @Override
    public Contact updateContact(int contactId, ContactDTO contactDTO) 
    {
        Contact contact = this.getContactById(contactId);
        contact.updateContact(contactDTO);
        return addressBookRepository.save(contact);
    }

    @Override
    public void deleteContact(int contactId) 
    {
        Contact contact = this.getContactById(contactId);
        addressBookRepository.delete(contact);
    }

    @Override
    public List<Contact> getContactByState(String state) 
    {
        return addressBookRepository.findContactByState(state);
    }

    @Override
    public List<Contact> getContactByCity(String city) 
    {
        return addressBookRepository.findContactByCity(city);

    }


}
