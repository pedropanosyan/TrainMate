package com.trainmateback.trainmateback.model;

import jakarta.persistence.*;

import java.util.List;

@Entity
public class Excercise {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column
    private String name;

    @Column
    private String muscle;

    @OneToOne(cascade = CascadeType.ALL)
    private Train train;

    @OneToOne(cascade = CascadeType.ALL)
    private RoutineWorkout routineWorkout;

}
