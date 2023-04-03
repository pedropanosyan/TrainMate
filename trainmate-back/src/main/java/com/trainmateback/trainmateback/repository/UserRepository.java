package com.trainmateback.trainmateback.repository;

import com.trainmateback.trainmateback.model.TrainMateUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository  extends JpaRepository<TrainMateUser, String> {

    boolean existsByUsername(String username);

    boolean existsByUsernameAndPassword(String username, String password);

    TrainMateUser findByUsername(String username);

    TrainMateUser findByUsernameAndPassword(String username, String password);

    TrainMateUser findByToken(String token);
}
