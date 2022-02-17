package com.example.demo.security;

import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.example.demo.filter.Myfilter;


// 자체 필터 기능 만들기
@Configuration
public class FilterConfig {

	
	/*
	 * @Bean 
	 * 
	 * public FilterRegistrationBean<Myfilter> filter1(){
	 * 
	 * FilterRegistrationBean<Myfilter> bean = new FilterRegistrationBean<>(new Myfilter());
	 * 
	 * bean.addUrlPatterns("/*"); 
	 * bean.setOrder(0); 
	 * 
	 * return bean; 
	 * 
	 * }
	 */
	
}
