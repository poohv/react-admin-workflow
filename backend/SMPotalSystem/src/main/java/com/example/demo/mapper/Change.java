package com.example.demo.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.example.demo.model.User;

@Mapper
public interface Change {

	int Insertchage (Map<String, Object> params);
	
	int Insertuser(Map<String, Object> params);
	
	List<Map<String, Object>> Smlist();
	
	List<Map<String, Object>> detail(Map<String, Object> params);
	
	int update(Map<String, Object> params);
	
	User userlogin(String params);
	
	int join(User user);
}
