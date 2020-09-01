package com.dancelab.booking;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BookingApplication {

	public static void main(String[] args) {
		SpringApplication.run(BookingApplication.class, args);

//		BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
//		String password = "password";
//		String encodedPassword = passwordEncoder.encode(password);
//
//		System.out.println("Password is         : " + password);
//		System.out.println("Encoded Password is : " + encodedPassword);
////		System.out.println("Invalid Password is : " + encodedPassword + "junk");
//		System.out.println();
//		boolean isPasswordMatch = passwordEncoder.matches(password, encodedPassword);
//		System.out.println("Password : " + password + "   isPasswordMatch    : " + isPasswordMatch);
//
//
//		if (!Pattern.compile("\\A\\$2(a|y|b)?\\$(\\d\\d)\\$[./0-9A-Za-z]{53}").matcher(encodedPassword).matches()) {
//			System.out.println("wrong");
//		}
	}

}
