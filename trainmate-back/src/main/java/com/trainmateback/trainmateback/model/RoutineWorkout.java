package com.trainmateback.trainmateback.model;

import jakarta.persistence.*;

@Entity
@Table(name = "routineWorkouts")
public class RoutineWorkout {
    @Id
    @GeneratedValue(generator = "routineWorkoutGen", strategy = GenerationType.SEQUENCE)
    private Long id;

    @Column
    private int series;

    @Column
    private int reps;

    @ManyToOne
    private Routines routine;

    @Column
    private String name;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getSeries() {
        return series;
    }

    public void setSeries(int series) {
        this.series = series;
    }

    public int getReps() {
        return reps;
    }

    public void setReps(int reps) {
        this.reps = reps;
    }

    public Routines getRoutine() {
        return routine;
    }

    public void setRoutine(Routines routine) {
        this.routine = routine;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}