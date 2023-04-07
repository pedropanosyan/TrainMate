package com.trainmateback.trainmateback.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

import java.util.Date;

@Entity
public class TrainWorkout {

    @Id
    @Column(nullable = false, unique = true)
    private String username;

    @Column
    private int series;

    @Column
    private int reps;

    @Column
    private Date fecha;

    public TrainWorkout(String username, int series, int reps) {
        this.username = username;
        this.series = series;
        this.reps = reps;
    }

    public TrainWorkout() {

    }
}
