package com.trainmateback.trainmateback.model;

import jakarta.persistence.*;

@Entity
public class RoutineWorkout {

    @Column
    private String routineWorkout;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column
    private int sets;

    @Column
    private int reps;

    @Column
    private String muscle;


    public RoutineWorkout() {
    }

    public RoutineWorkout(String name, int sets, int reps, String muscle) {
        this.routineWorkout = name;
        this.sets = sets;
        this.reps = reps;
        this.muscle = muscle;
    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getSets() {
        return sets;
    }

    public void setSets(int series) {
        this.sets = series;
    }

    public int getReps() {
        return reps;
    }

    public void setReps(int reps) {
        this.reps = reps;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getRoutineWorkout() {
        return routineWorkout;
    }

    public void setRoutineWorkout(String name) {
        this.routineWorkout = name;
    }

    public String getMuscle() {
        return muscle;
    }

    public void setMuscle(String muscle) {
        this.muscle = muscle;
    }
}