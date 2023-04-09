package com.trainmateback.trainmateback.repository;

import com.trainmateback.trainmateback.model.Train;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TrainRepository extends JpaRepository<Train, String> {
}
