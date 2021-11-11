package com.example.demo.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface Change {

	int Insertchage (Map<String, Object> params);
	
	int Insertuser(Map<String, Object> params);
	
	List<Map<String, Object>> Smlist();
}
