package com.example.demo;

import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;


@Controller
public class MainController {
	@ResponseBody
	@RequestMapping("/api")
	public Map<String, Object> api (@RequestParam Map<String, Object> params) {	
	
	return params;
	
	}
	
}
