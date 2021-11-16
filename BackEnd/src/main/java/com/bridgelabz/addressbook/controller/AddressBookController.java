package com.bridgelabz.addressbook.controller;

import java.util.List;

import javax.validation.Valid;

import com.bridgelabz.addressbook.dto.ContactDTO;
import com.bridgelabz.addressbook.dto.ResponseDTO;
import com.bridgelabz.addressbook.model.Contact;
import com.bridgelabz.addressbook.service.IAddressBookService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;


@CrossOrigin("*")
@RestController
@RequestMapping("/contact")
public class AddressBookController 
{
    @Autowired
    private IAddressBookService addressbookservice;

    @GetMapping
    public ResponseEntity<ResponseDTO> getContactData()
    {
        List<Contact> contactList = addressbookservice.getContact();
        ResponseDTO response = new ResponseDTO("Get call success",contactList);
        return new ResponseEntity<ResponseDTO>(response,HttpStatus.OK);

    }


    @GetMapping("/{contactId}")
    public ResponseEntity<ResponseDTO> getContactData(@PathVariable("contactId") int contactId)
    {
        Contact contact =addressbookservice.getContactById(contactId);
        ResponseDTO response = new ResponseDTO("Get call success for id",contact);
        return new ResponseEntity<ResponseDTO>(response,HttpStatus.OK);


    }

    @GetMapping("/state/{state}")
    public ResponseEntity<ResponseDTO> getContactByState(@PathVariable("state") String state)
    {
        List<Contact> contactList =addressbookservice.getContactByState(state);
        ResponseDTO response = new ResponseDTO("Get call success to get Contact by State",contactList);
        return new ResponseEntity<ResponseDTO>(response,HttpStatus.OK);

    }

    @GetMapping("/city/{city}")
    public ResponseEntity<ResponseDTO> getContactByCity(@PathVariable("city") String city)
    {
        List<Contact> contactList =addressbookservice.getContactByCity(city);
        ResponseDTO response = new ResponseDTO("Get call success to get Contact by city",contactList);
        return new ResponseEntity<ResponseDTO>(response,HttpStatus.OK);

    }


    @PostMapping
    public ResponseEntity<ResponseDTO> addContactData(@Valid @RequestBody ContactDTO contactDTO)
    {
        Contact contact = addressbookservice.createContact(contactDTO);
        ResponseDTO response = new ResponseDTO("Created contact data for",contact);
        return new ResponseEntity<ResponseDTO>(response,HttpStatus.OK);

    }

    @PutMapping("/{contactId}")
    public ResponseEntity<ResponseDTO> updateContactData(@PathVariable("contactId") int contactId,@Valid @RequestBody ContactDTO contactDTO)
    {
        Contact contact = addressbookservice.updateContact(contactId,contactDTO);
        ResponseDTO response = new ResponseDTO("Updated contact data for",contact);
        return new ResponseEntity<ResponseDTO>(response,HttpStatus.OK);

    }

    @DeleteMapping("/{contactId}")
    public ResponseEntity<ResponseDTO> deleteContactData(@PathVariable("contactId") int contactId)
    {
        addressbookservice.deleteContact(contactId);
        ResponseDTO response = new ResponseDTO("Delete call success for id ","deleted id:"+contactId);
        return new ResponseEntity<ResponseDTO>(response,HttpStatus.OK);
        
    }
}
