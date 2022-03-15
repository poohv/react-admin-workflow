package com.example.demo.jwt;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.filter.GenericFilterBean;
import org.springframework.web.filter.OncePerRequestFilter;

import com.example.demo.model.User;

import lombok.RequiredArgsConstructor;


//스프링 시큐리티에서 UsernamePasswordAuthenticationFilter 가 있음
// /login 요청해서 Username,password(post) 전송하면 UsernamePasswordAuthenticationFilter 동작함

@RequiredArgsConstructor //의존성 자동 주입
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    private final JwtTokenprovider jwtTokenProvider;	//의존성 생성 (final 붙여야함)
//	private final AuthenticationManager AuthenticationManager;
    

	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {
		System.out.println("JwtAuthenticationFilter 실행");
	
		String token = jwtTokenProvider.resolveToken(request);
		
		System.out.println("토큰: "+token);
		
		 if(token != null && jwtTokenProvider.validateToken(token)){
			 	System.out.println("토근 검증 완료");		
	            Authentication authentication = jwtTokenProvider.getAuthentication(token);
	            
	            SecurityContextHolder.getContext().setAuthentication(authentication);
	        }
		
		
		filterChain.doFilter(request, response);
		
		
	}
	
	


//	login 요청을 하면 로그인 시도를 위해서 실행되는 함수
	
	/*
	 * @Override 
	 * public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) 
	 * throws AuthenticationException {
	 * 
	 * System.out.println("JwtAuthenticationFilter 실행");
	 * 
	 * return super.attemptAuthentication(request, response); 
	 * 
	 * }
	 */
	
	
}
