package com.example.sftbackoffice.about;

import org.springframework.data.jpa.repository.JpaRepository;

public interface AboutRepository extends JpaRepository<About,Long> {
    void delete(About about);
}