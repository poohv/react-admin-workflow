package com.example.demo;

import java.awt.List;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.demo.service.SmImpl;


@Controller
public class MainController {
	@Autowired
	SmImpl sm;
	
	@ResponseBody
	@RequestMapping("/api/Insertchage")
	public void Insertchage(@RequestParam Map<String, Object> params) {	
		System.out.println("params"+params);
		
	 sm.Insertchage(params);
	}
	
}
