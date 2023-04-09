package com.trainmateback.trainmateback.model;

import jakarta.persistence.*;
import org.apache.el.parser.Token;

import java.util.List;

@Entity
public class Train {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(nullable = false)
    private String name;

    @OneToMany(cascade = CascadeType.ALL)
    private List<TrainWorkout> trainWorkouts;

    @Column(nullable = false)
    private String muscle;



    public Train(){}

    public Train(String name, String muscle){
        this.name = name;
        this.muscle = muscle;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<TrainWorkout> getTrainWorkouts() {
        return trainWorkouts;
    }

    public void setTrainWorkouts(List<TrainWorkout> trainWorkouts) {
        this.trainWorkouts = trainWorkouts;
    }

    public void addTrainWorkout(TrainWorkout trainWorkout){
        this.trainWorkouts.add(trainWorkout);
    }

    public String getMuscle() {
        return muscle;
    }

    public void setMuscle(String muscle) {
        this.muscle = muscle;
    }
}
