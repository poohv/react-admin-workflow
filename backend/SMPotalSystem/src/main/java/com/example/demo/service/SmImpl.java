package com.example.demo.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.mapper.Change;


@Service
public class SmImpl {

	@Autowired
	Change wo;

		public void Insertchage(Map<String, Object> params) {
			System.out.println("insert"+params);
			wo.Insertchage(params);
		}
		
		public void Insertuser(Map<String, Object> params) {
			
			wo.Insertuser(params);
		}
		
		
		public List<Map<String, Object>> Smlist() {
			return wo.Smlist();
		}
}
