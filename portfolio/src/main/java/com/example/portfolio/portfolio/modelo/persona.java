
package com.example.portfolio.portfolio.modelo;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import java.util.UUID;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@Entity
public class persona {
    
    
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private UUID id;
    @Column
    private String user;
    @Column
    private String mail;
    @Column
    private String password;
    @Column
    private boolean genero;
    @Column
    private boolean offers;
    @Column
    private boolean terms;
    

    
    
}
