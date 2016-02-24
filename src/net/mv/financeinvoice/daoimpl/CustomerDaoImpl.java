package net.mv.financeinvoice.daoimpl;

import java.util.List;


import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.annotations.common.util.impl.LoggerFactory;
import org.jboss.logging.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import net.mv.financeinvoice.dao.CustomerDao;
import net.mv.financeinvoice.model.Customer;

@Repository
@Transactional (readOnly = true)
public class CustomerDaoImpl implements CustomerDao {
    
    private static final Logger logger = LoggerFactory.logger(CustomerDaoImpl.class);

    @Autowired
    private SessionFactory sessionFactory;

    @Override
    public List<Customer> listEmployee() {
	Session session = sessionFactory.openSession();
	String hql = "FROM Customer";
	Query query = session.createQuery(hql);
	List<Customer> custList = query.list();
	logger.info("Person List::" + custList);
	return custList;
    }

    @Override
    @Transactional(readOnly = false)
    public void insertCustomer(Customer customer) {
	Session session = sessionFactory.openSession();
	session.save(customer);
    }
    @Override
    @Transactional(readOnly = false)
    public void deleteCustomer(int id) {
	Session session = sessionFactory.openSession();
	Customer persistentInstance = (Customer) session.get(Customer.class, id);
	if(persistentInstance != null) {
	    session.delete(persistentInstance);
	}
    }

   
}
