package com.example.demo.model;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class User  {
	
	
	private String username;
	private String password;
	private String role;
	private String woname;
	private String wophone;
	
	
	public List<String> getRoleList(){
		if (this.role.length() > 0) {
		 return Arrays.asList(this.role.split(","));	
		}
		return new ArrayList<>();
	}
	
	
	
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	public String getWoname() {
		return woname;
	}
	public void setWoname(String woname) {
		this.woname = woname;
	}
	public String getWophone() {
		return wophone;
	}
	public void setWophone(String wophone) {
		this.wophone = wophone;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	

	

}
