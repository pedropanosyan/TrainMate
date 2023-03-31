package com.trainmateback.trainmateback.repository;

import com.trainmateback.trainmateback.model.RoutineWorkout;
import com.trainmateback.trainmateback.model.Routines;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoutineRepository extends JpaRepository<RoutineWorkout, Integer> {
}
