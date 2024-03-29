package com.trainmateback.trainmateback.model;

import jakarta.persistence.*;

import java.time.LocalDate;
import java.util.Date;

@Entity
public class TrainWorkout {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column
    private int sets;

    @Column
    private int reps;

    @Column
    private String weight;

    @Column
    private LocalDate date;

    @Column
    private String Muscle;

    @Column
    private String TrainName;

    public TrainWorkout(int sets, int reps, String weight, String muscle, String trainName) {
        this.sets = sets;
        this.reps = reps;
        this.weight = weight;
        this.date = LocalDate.now();
        Muscle = muscle;
        TrainName = trainName;
    }

    public TrainWorkout() {
    }

    public String getWeight() {
        return weight;
    }

    public void setWeight(String weight) {
        this.weight = weight;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public int getSets() {
        return sets;
    }

    public void setSets(int sets) {
        this.sets = sets;
    }

    public int getReps() {
        return reps;
    }

    public void setReps(int reps) {
        this.reps = reps;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public String getMuscle() {
        return Muscle;
    }

    public void setMuscle(String muscle) {
        Muscle = muscle;
    }

    public String getTrainName() {
        return TrainName;
    }

    public void setTrainName(String trainName) {
        TrainName = trainName;
    }
}
