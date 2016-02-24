package net.mv.financeinvoice.servicedao;

import java.util.List;

import net.mv.financeinvoice.model.Customer;

public interface ServiceDao {
    public List<Customer> listEmployee();
    public void insertCustomer(Customer customer);
    public void deleteCustomer(int id);
  
}
