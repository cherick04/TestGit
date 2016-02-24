package net.mv.financeinvoice.servicedaoimpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import net.mv.financeinvoice.dao.CustomerDao;
import net.mv.financeinvoice.model.Customer;
import net.mv.financeinvoice.servicedao.ServiceDao;


@Service
public class ServiceDaoImpl implements ServiceDao {

    @Autowired
    private CustomerDao customerDao;

    @Override
    public List<Customer> listEmployee() {
	return this.customerDao.listEmployee();
    }

    @Override
    public void insertCustomer(Customer customer) {
	
	customerDao.insertCustomer(customer);
    }

    @Override
    public void deleteCustomer(int id) {
	customerDao.deleteCustomer(id);
    }

    
    

}
