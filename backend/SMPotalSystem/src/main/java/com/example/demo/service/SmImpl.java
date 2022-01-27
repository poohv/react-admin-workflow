package com.example.demo.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.mapper.Change;
import com.example.demo.model.User;


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
		
		public List<Map<String, Object>> detail(Map<String, Object> params){
			
			return wo.detail(params);
		}
		
		public void update(Map<String, Object> params) {
			wo.update(params);
		}
		
		//로그인
		public User userlogin(String params){
			return wo.userlogin(params);
		}
		//회원가입
		public void join(User user) {
			 wo.join(user);
		}
}
