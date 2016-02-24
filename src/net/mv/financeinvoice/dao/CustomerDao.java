package net.mv.financeinvoice.dao;

import java.util.List;

import net.mv.financeinvoice.model.Customer;

public interface CustomerDao {
    
    // to insert new customer
    public void insertCustomer(Customer customer);
    
    // to get all customer
    public List<Customer> listEmployee();
    
    //to delete customer
    public void deleteCustomer(int id);
    
    
}
