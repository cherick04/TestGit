package net.mv.financeinvoice.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import net.mv.financeinvoice.model.Customer;
import net.mv.financeinvoice.servicedao.ServiceDao;

@Controller
@RequestMapping("/employee")
public class CustomerController {
    
    @Autowired
    private ServiceDao serviceDao;
    
   @RequestMapping(value = "/staticPage", method = RequestMethod.GET)
    public String redirect() {
       return "redirect:/static/test.html";
   }
    
    @RequestMapping(method = RequestMethod.GET)
   public String welcomeEmployee(ModelMap model) {
	model.addAttribute("name", "Hello Spring");
	model.addAttribute("greetings", "Welcome to my first spring MVC!!! @Author: Simon Kifle");
	return "hello";
    }
    
    @RequestMapping(value = "/listCustomer", method =  RequestMethod.GET)
    public String listCustomers(ModelMap model) {
	model.addAttribute("customerList", serviceDao.listEmployee());
	return "employee";
    }
    
    @RequestMapping(value = "/addemployee", method = RequestMethod.GET)
    public ModelAndView addEmployee(ModelMap model) {
	return new ModelAndView("addemployee", "command", new Customer());
    }
    
    @RequestMapping(value = "/updatemployee", method = RequestMethod.POST)
    public String updateEmployee(@ModelAttribute ("customerForm") Customer customer, ModelMap model) {
	
	this.serviceDao.insertCustomer(customer);
	model.addAttribute("customerList", serviceDao.listEmployee());
	return "employee";
    }
    
    @RequestMapping(value = "/delete/{empId}", method = RequestMethod.GET)
	    public String deleteEmployee(@PathVariable("empId") Integer
	    empId, ModelMap model) {
	    this.serviceDao.deleteCustomer(empId);
	    model.addAttribute("customerList", serviceDao.listEmployee());
	    return "employee";
	    }
    

}
