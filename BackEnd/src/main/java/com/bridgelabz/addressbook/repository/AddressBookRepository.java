package com.bridgelabz.addressbook.repository;

import java.util.List;

import com.bridgelabz.addressbook.model.Contact;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface AddressBookRepository extends JpaRepository<Contact,Integer>
{

    @Query(value = "select * from addressbook where state LIKE :state%",nativeQuery = true)
    List<Contact> findContactByState(String state);
    
    @Query(value = "select * from addressbook where city LIKE :city%",nativeQuery = true)
    List<Contact> findContactByCity(String city);


}
