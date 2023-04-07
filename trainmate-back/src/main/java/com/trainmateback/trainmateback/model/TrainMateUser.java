package com.trainmateback.trainmateback.model;

import jakarta.persistence.*;

import java.util.Arrays;
import java.util.List;

@Entity
public class TrainMateUser {

    @Id
    @Column(nullable = false, unique = true)
    private String username;

    @Column
    private String password;

    @Column(nullable = false, unique = true)
    private String email;

    @OneToMany(cascade = CascadeType.ALL)
    private List<Routine> routines;

    @OneToMany(cascade = CascadeType.ALL)
    private List<Muscles> musculos;
    @Column
    private String token;

    public TrainMateUser() {}

    public TrainMateUser(String username, String email, String password) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.musculos = Arrays.asList(
                new Muscles("Arms"),
                new Muscles("Chest"),
                new Muscles("Legs"),
                new Muscles("Back"),
                new Muscles("Abs")
        );
    }

    public void addRoutine(Routine routine){
        this.routines.add(routine);
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public List<Routine> getRoutines() {
        return routines;
    }

    public void setRoutines(List<Routine> routines) {
        this.routines = routines;
    }
}
