package net.mv;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping(value = "/customer")
public class NameController {
    
    @RequestMapping(method = RequestMethod.GET)
    public String welcomeEmployee(ModelMap model) {
	
	model.addAttribute("name", "New Hello World!");
	model.addAttribute("greetings",
		"Welcome to Packt Publishing - Spring MVC!!!");
	
	return "hello";
    }
}
