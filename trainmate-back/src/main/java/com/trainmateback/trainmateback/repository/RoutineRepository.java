package com.trainmateback.trainmateback.repository;

import com.trainmateback.trainmateback.model.Routine;
import com.trainmateback.trainmateback.model.TrainMateUser;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RoutineRepository extends JpaRepository<Routine, Long> {


}
