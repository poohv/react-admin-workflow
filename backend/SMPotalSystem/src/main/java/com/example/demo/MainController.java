package com.example.demo;

import java.util.List;
import java.sql.Array;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.demo.jwt.JwtTokenprovider;
import com.example.demo.model.User;
import com.example.demo.service.SmImpl;


@Controller
public class MainController {
	@Autowired
	SmImpl sm;
	
	@Autowired
	BCryptPasswordEncoder bper;
	
	@Autowired
	JwtTokenprovider jwttoken;
	
	@RequestMapping("/api/login")
	@ResponseBody
	public Map<String, Object> loginjoin(@RequestBody User user , HttpServletResponse response) {
		User userdata = sm.userlogin(user.getUserid());
		 Map<String, Object> data = new HashMap<String, Object>();
		
		if (userdata!=null) {
			String Token = jwttoken.createToken(user.getUserid(), user.getRoleList() );
			 data.put("user", userdata);
			 data.put("Token", Token);
			System.out.println(data);
			
		}
		return data;
			
		//System.out.println(userdata.getPassword());
	}
	
	
	@RequestMapping("/api/join")
	@ResponseBody
	public void login(@RequestBody User params) {
		System.out.println("회원가입");
		//회원가입 시 패스워드 암호화 시키기
		String pw = params.getPassword();
		String enc = bper.encode(pw);
		params.setPassword(enc);		
		sm.join(params);
		
	}
	
	@RequestMapping("/api/Smlist")
	@ResponseBody
	public List<Map<String, Object>> Smlist(){	
		return sm.Smlist();
	}
	
	@ResponseBody
	@RequestMapping("/api/Insertchage")
	public void Insertchage(@RequestBody List<Map<String, Object>> params) {
		System.out.println(params);
		//chagne 변경 이력 저장
	 sm.Insertchage(params.get(0));
		//chagne user 이력 저장
	 sm.Insertuser(params.get(1));
	}

	
	@ResponseBody
	@RequestMapping("/api/detail")
	public List<Map<String, Object>> detail(@RequestBody Map<String, Object> params){
		//해당 change detail 보기
		return sm.detail(params);
	}
	
	@ResponseBody
	@RequestMapping("/api/update")
	public void update(@RequestBody Map<String, Object> params) {
		System.out.println(params);
		sm.update(params);
	}
}
