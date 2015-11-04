package com.easygood.home;

import java.util.Map;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.easygood.service.myService;
/**
 * Handles requests for the application home page.
 */
@Controller 
public class HomeController {
	
	// private final Logger logger = LoggerFactory.getLogger(WelcomeController.class);
	private final myService myservice;	
	
	@Autowired
	public HomeController(myService myservice) {
		this.myservice = myservice;
	}

	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String index(Map<String, Object> model) {

		// logger.debug("index() is executed!");

		model.put("title", myservice.getTitle("") );
		
		return "index";
	}

	@RequestMapping(value = "/hello/{name:.+}", method = RequestMethod.GET)
	public ModelAndView hello(@PathVariable("name") String name) {

		// logger.debug("hello() is executed - $name {}", name);

		ModelAndView model = new ModelAndView();
		model.setViewName("index");
		
		model.addObject("title", myservice.getTitle(name) );
		
		return model;

	}

}
