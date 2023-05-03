package com.trainmateback.trainmateback.repository;

import com.trainmateback.trainmateback.model.Question;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface QuestionController extends JpaRepository<Question, String> {
    Question findById(long id);
}
