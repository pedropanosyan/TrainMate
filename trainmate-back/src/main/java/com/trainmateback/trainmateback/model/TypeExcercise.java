package com.trainmateback.trainmateback.model;

import jakarta.persistence.*;

import java.util.List;

@Entity
public class TypeExcercise {
    @Id
    @Column(nullable = false, unique = true)
    private String username;
    @OneToMany(cascade = CascadeType.ALL)
    private List<TrainWorkout> workouts;


}
