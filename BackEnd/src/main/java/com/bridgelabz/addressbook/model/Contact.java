package com.bridgelabz.addressbook.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.bridgelabz.addressbook.dto.ContactDTO;

import lombok.Data;


@Entity
@Table(name = "addressbook")
public @Data class Contact 
{
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="contact_id")
	private int contactId;
	private String name;
    private String address;
	@Column(name="phone_number")
	private String phoneNumber;
	private String city;
	private String state;
	private String zip;

	public Contact()
	{

	}

	public Contact(ContactDTO contactDTO)
	{	
		this.updateContact(contactDTO);

	}
    
	public void updateContact(ContactDTO contactDTO) 
	{
		this.name = contactDTO.name;
		this.address = contactDTO.address;
		this.phoneNumber = contactDTO.phoneNumber;
		this.city = contactDTO.city;
		this.state = contactDTO.state;
		this.zip = contactDTO.zip;
	}


}
