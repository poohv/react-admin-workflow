package com.example.demo.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;
import org.springframework.web.filter.CorsFilter;

import com.example.demo.filter.Myfilter;
import com.example.demo.jwt.JwtAuthenticationFilter;
import com.example.demo.jwt.JwtTokenprovider;
import com.example.demo.model.User;

import lombok.RequiredArgsConstructor;
import lombok.extern.java.Log;

@Log
@EnableWebSecurity
@Configuration
@RequiredArgsConstructor
public class SecurityConfig extends WebSecurityConfigurerAdapter {

	private final CorsFilter corsFilter;
	
	@Autowired
	JwtTokenprovider JwtTokenprovider;
	
	
	
	@Bean	
	public BCryptPasswordEncoder encodePwd() {
		return new BCryptPasswordEncoder();
		
	}

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		log.info("security config.........start");
		//http.addFilterBefore(new Myfilter(), BasicAuthenticationFilter.class);
		
		http.
		csrf().disable() // csrf 사용 안 함 == REST API 사용하기 때문에 
		.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS) // JWT인증사용하므로 세션사용 안함
		.and()
		.addFilter(corsFilter) // @CrossOring(인증x , 시큐리티 필터에 등록 인증(ㅇ))
		
		.addFilterBefore(new JwtAuthenticationFilter(JwtTokenprovider),UsernamePasswordAuthenticationFilter.class) //시큐리티 필터가 제일 먼저 실행 된다.
		
		//.addFilter(new JwtAuthenticationFilter(authenticationManager())) //AuthenticationManager 파라미터를 던져줘야함
		.formLogin().disable()
		.httpBasic().disable()	// id/pw 세션 저장 비활성화
		.authorizeRequests() 	// 다음 리퀘스트에 대한 사용권한 체크
		.antMatchers("/api/join","/api/login","/login").permitAll()
		.anyRequest().authenticated()
		//.anyRequest().hasRole("USER") // 그외 나머지 요청은 모두 인증된 회원만 접근 가능
		
		
		//.formLogin()
		//.loginProcessingUrl("/api/login")
		//.defaultSuccessUrl("http://localhost:8080/")
		;
						
	}

	
}
