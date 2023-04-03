package com.trainmateback.trainmateback.model;

import jakarta.persistence.*;

import java.util.List;

@Entity
public class Routine {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column
    private boolean isActive;

    @Column
    private String name;

    @OneToMany(cascade = CascadeType.ALL)
    private List<RoutineWorkout> workouts;

    @Transient
    private String token;

    public Routine(){}

    public Routine(String name, List<RoutineWorkout> workouts, String token) {
        this.isActive = true;
        this.name = name;
        this.workouts = workouts;
        this.token = token;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public boolean isActive() {
        return isActive;
    }

    public void setActive(boolean active) {
        isActive = active;
    }

    public List<RoutineWorkout> getWorkouts() {
        return workouts;
    }

    public void setWorkouts(List<RoutineWorkout> workouts) {
        this.workouts = workouts;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void addWorkout(RoutineWorkout routineWorkout){
        workouts.add(routineWorkout);
    }
}