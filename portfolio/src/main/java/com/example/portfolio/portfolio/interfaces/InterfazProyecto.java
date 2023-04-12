
package com.example.portfolio.portfolio.interfaces;

import com.example.portfolio.portfolio.modelo.proyectos;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InterfazProyecto extends JpaRepository<proyectos, Long>{
   
}
