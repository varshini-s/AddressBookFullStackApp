package com.bridgelabz.addressbook.dto;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Pattern;

import lombok.ToString;

public @ToString class ContactDTO 
{
	@NotEmpty(message = "Name cannot be null")
	@Pattern(regexp = "^[A-Z][a-z]{2,}+( +[A-Z][a-z]{2,}+)*$",message = "Name Invalid")
    public String name;
	
	@NotEmpty(message = "Address cannot be null")
	@Pattern(regexp = "(?!^\\d+$)^[A-Z,a-z,0-9, ()#-]{3,}$",message = "Address Invalid")
    public String address;

	@NotEmpty(message = "Phone number cannot be null")
	@Pattern(regexp = "^[+]?[91]{2}[ ]?[6-9][0-9]{9}$",message = "Phone number Invalid")
	public String phoneNumber;

	@NotEmpty(message = "City cannot be null")
	@Pattern(regexp = "^[A-Z][a-z]{2,}+( +[A-Z][a-z]{2,}+)*$",message = "City Invalid")
	public String city;

	@NotEmpty(message = "State cannot be null")
	@Pattern(regexp = "^[A-Z][a-z]{2,}+( +[A-Z][a-z]{2,}+)*$",message = "State Invalid")
	public String state;

	@NotEmpty(message = "Zip cannot be null")
	@Pattern(regexp = "[0-9]{3}[ ]?[0-9]{3}$",message = "Zip Invalid")
	public String zip;

	public ContactDTO( String name, String address, String phoneNumber, String city,String state, String zip) 
	{
		this.name = name;
		this.address = address;
		this.phoneNumber = phoneNumber;
		this.city = city;
		this.state = state;
		this.zip = zip;
	}
    
}
