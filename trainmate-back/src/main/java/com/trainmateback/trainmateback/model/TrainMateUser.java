package com.trainmateback.trainmateback.model;

import jakarta.persistence.*;

import java.util.Arrays;
import java.util.List;
import java.util.Objects;

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
    private List<Train> trains;

    @Column
    private String token;

    public TrainMateUser() {}

    public TrainMateUser(String username, String email, String password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    public Train findTrain(String trainName){
        for (Train train : this.trains) {
            if (Objects.equals(train.getName(), trainName)) {
                return train;
            }
        }
        return null;
    }

    public Train findTrainById(long id){
        for (Train train : this.trains) {
            if (Objects.equals(train.getId(), id)) {
                return train;
            }
        }
        return null;
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

    public List<Train> getTrains() {
        return trains;
    }

    public void addTrain(Train train){
        this.trains.add(train);
    }

    public void setTrains(List<Train> trains) {
        this.trains = trains;
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
