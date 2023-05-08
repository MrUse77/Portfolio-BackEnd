
package com.example.portfolio.portfolio.modelo;

import jakarta.persistence.*;
import java.util.List;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Entity(name="persona")
public class persona{
    
    
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private Long id;
    @Column
    public String user;
    @Column
    private String mail;
    @Column
    private String password;
    @Column
    private boolean genero;
    @ManyToMany
    @JoinTable(name="rol_usuario", 
               joinColumns=@JoinColumn(name="persona_id",referencedColumnName="id"), 
               inverseJoinColumns=@JoinColumn(name="rol_id",referencedColumnName="id"))
    private List<authority> Rol;

    
        public persona(String user, String mail, String password,List<authority> Rol) {
        this.user = user;
        this.mail = mail;
        this.password = password;
        this.Rol = Rol;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }

    public String getMail() {
        return mail;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public boolean isGenero() {
        return genero;
    }

    public void setGenero(boolean genero) {
        this.genero = genero;
    }

    public List<authority> getRol() {
        return Rol;
    }

    public void setRol(List<authority> Rol) {
        this.Rol = Rol;
    }
        
}
