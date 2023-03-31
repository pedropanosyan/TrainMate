package com.trainmateback.trainmateback.model;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "routines")
public class Routines {

    @Id
    @GeneratedValue(generator = "routineGen", strategy = GenerationType.SEQUENCE)
    private long id;

    @Column
    private boolean isActive;

    @OneToMany
    private List<RoutineWorkout> workouts;
    public Routines (){

    }

    public Routines(boolean isActive, List<RoutineWorkout> workouts) {
        this.isActive = isActive;
        this.workouts = workouts;
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

    public void addWorkout(RoutineWorkout routineWorkout){
        workouts.add(routineWorkout);
    }
}