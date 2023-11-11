package com.example.sftbackoffice.about;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class About {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    String title ;
    String leftText  ;
    String rightText ;

public About() {}


}
