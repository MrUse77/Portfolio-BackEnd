/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.portfolio.portfolio.modelo;

import com.example.portfolio.portfolio.enums.AuthorityName;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


/**
 *
 * @author agust
 */
@Getter @Setter @NoArgsConstructor
@Entity(name="authority")
public class authority {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Enumerated(EnumType.STRING)
    private AuthorityName name;

    public authority(AuthorityName AuthorityName) {
        this.name = AuthorityName;
    }


    
    
}
