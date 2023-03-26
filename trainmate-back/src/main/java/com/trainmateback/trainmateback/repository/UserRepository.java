package com.trainmateback.trainmateback.repository;

import com.trainmateback.trainmateback.model.TrainMateUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository  extends JpaRepository<TrainMateUser, Long> {

    boolean existsByUsername(String username);

    boolean existsByUsernameAndPassword(String username, String password);


}
