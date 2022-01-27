package com.example.demo.jwt;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import lombok.RequiredArgsConstructor;


//스프링 시큐리티에서 UsernamePasswordAuthenticationFilter 가 있음
// /login 요청해서 Username,password(post) 전송하면 UsernamePasswordAuthenticationFilter 동작함

@RequiredArgsConstructor //생성자 자동 주입
public class JwtAuthenticationFilter extends UsernamePasswordAuthenticationFilter{
	
	//생성자 생성 (final 붙여야함)
	private final AuthenticationManager AuthenticationManager;

	
	//login 요청을 하면 로그인 시도를 위해서 실행되는 함수
	@Override
	public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response)
			throws AuthenticationException {
		// TODO Auto-generated method stub
		return super.attemptAuthentication(request, response);
	}

	
	
}
