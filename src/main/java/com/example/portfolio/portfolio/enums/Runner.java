/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.portfolio.portfolio.enums;

import com.example.portfolio.portfolio.interfaces.InterfazAuthority;
import com.example.portfolio.portfolio.interfaces.InterfazPersona;
import com.example.portfolio.portfolio.modelo.authority;
import com.example.portfolio.portfolio.modelo.persona;
import java.util.List;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

/**
 *
 * @author agust
 */
@Component
public class Runner implements CommandLineRunner{
    
    private final InterfazPersona PersonaRepo;
    private final InterfazAuthority AuthRepo;

    public Runner(InterfazPersona PersonaRepo, InterfazAuthority AuthRepo) {
        this.PersonaRepo = PersonaRepo;
        this.AuthRepo = AuthRepo;
    }

    @Override
    public void run(String... args) throws Exception {
        if(this.AuthRepo.count() == 0){
            this.AuthRepo.saveAll(List.of(
            new authority(AuthorityName.ADMIN),
            new authority(AuthorityName.PUBLIC)
            ));
        }
        if (this.PersonaRepo.count()==0){
            this.PersonaRepo.saveAll(List.of(
            new persona("MrUse77","agusdor14@hotmail.com","1120712",List.of(this.AuthRepo.findByName(AuthorityName.ADMIN).get())),
            new persona("MrUse","agusdor16@hotmail.com","1234",List.of(this.AuthRepo.findByName(AuthorityName.PUBLIC).get()))
            )
            );
        }
        
    }
    
    
    
}
