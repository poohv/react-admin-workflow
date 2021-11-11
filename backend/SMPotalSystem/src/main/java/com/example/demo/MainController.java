package com.example.demo;

import java.util.List;
import java.sql.Array;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.demo.service.SmImpl;

@CrossOrigin(origins = "http://localhost:3000")
@Controller
public class MainController {
	@Autowired
	SmImpl sm;
	
	
	@RequestMapping("/api/Smlist")
	@ResponseBody
	public List<Map<String, Object>> Smlist(){	
		return sm.Smlist();
	}
	
	
	@ResponseBody
	@RequestMapping("/api/Insertchage")
	public void Insertchage(@RequestBody List<Map<String, Object>> params) {	
		//chagne 변경 이력 저장
	 sm.Insertchage(params.get(0));
		//chagne user 이력 저장
	 sm.Insertuser(params.get(1));
	}
	
}
