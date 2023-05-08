/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.portfolio.portfolio.security;


import io.jsonwebtoken.Claims;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import java.util.Collections;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;

import org.springframework.security.core.userdetails.UserDetails;

/**
 *
 * @author agust
 */
public class TokenUtils {
    
    private final static String ACCESS_TOKEN_SECRET = "EZijKeZMTgT4exOw8D4MYaBbSDpWqhhjcjJBXXVCf2vkEFKbRQ5OQPdtfsuVVnq09RbSVqmvgYB5MRDuvMilFvY3bd0s5xjH5SZPnfb9vq43ZCvXIkbqg598YNC2TGM0KcL0dmYfvirUAG9hGNyV8p8CyOKdV0ESNYhayJZftGp8p7xuafbEnQyXdhd9B5SBBNaSajsPiQ1qdqhs9Ku4YQikAfp6jMmmLtV7cmCKwEy7GXuz6mUJ2iLv1en1woQo";
    
    
    public static String createToken(String username, String subject){
        Map<String,Object> extra = new HashMap<>();
        extra.put("username",username);
        
         return Jwts.builder().setClaims(extra).setSubject(subject).setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60 * 10))
                .signWith(Keys.hmacShaKeyFor(ACCESS_TOKEN_SECRET.getBytes())).compact();
        
    }
        public String extractUsername(String token) {
        return extractClaim(token, Claims::getSubject);
    }

    public Date extractExpiration(String token) {
        return extractClaim(token, Claims::getExpiration);
    }

    public <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
        final Claims claims = extractAllClaims(token);
        return claimsResolver.apply(claims);
    }

    private Claims extractAllClaims(String token) {
        return Jwts.parserBuilder().setSigningKey(ACCESS_TOKEN_SECRET.getBytes()).build().parseClaimsJws(token).getBody();
    }

    private Boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date());
    }

        public Boolean validateToken(String token, UserDetails userDetails) {
        final String username = extractUsername(token);
        return (username.equals(userDetails.getUsername()) && !isTokenExpired(token));
    }
        
        public static UsernamePasswordAuthenticationToken getAuthentication(String token){
            Claims claims = Jwts.parserBuilder()
                            .setSigningKey(ACCESS_TOKEN_SECRET.getBytes())
                            .build()
                            .parseClaimsJws(token)
                            .getBody();
                    
                 String user = claims.getSubject();
                 return new UsernamePasswordAuthenticationToken(user,null, Collections.emptyList());
        }
        
        

        }
    

