package com.example.demo.service;

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
}
