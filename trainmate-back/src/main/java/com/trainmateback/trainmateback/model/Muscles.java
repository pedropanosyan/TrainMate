package com.trainmateback.trainmateback.model;

import jakarta.persistence.*;

import java.util.List;

@Entity
public class Muscles {
    @Id
    @Column(nullable = false, unique = true)
    private String username;

    @OneToMany(cascade = CascadeType.ALL)
    private List<TypeExcercise> typeExcercises;

    public Muscles(String username) {
        this.username = username;
    }
}
