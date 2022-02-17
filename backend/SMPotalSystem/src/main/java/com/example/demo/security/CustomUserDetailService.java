package com.example.demo.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.example.demo.model.User;
import com.example.demo.service.SmImpl;



// 시큐리티 설정에서 loginprocessingurl("/api/login");
// 요청이 오면 자동으로 UserDetailsService 타입으로 loc 되어있는 loadUserByUsername 함수가 실행한다.
@Service
public class CustomUserDetailService implements UserDetailsService {
	
	@Autowired
	SmImpl sm;
	
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		System.out.println("loadUserByUsername 실행");
		//아이디 확인
		User userentity = sm.userlogin(username);
		
		//아이디가 있으면 PrincipalDetail 클래스로 넘겨서 진행
		if (userentity != null) {
			return new PrincipalDetail(userentity);
		}
		
		return null;
	}

}
