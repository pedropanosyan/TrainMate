package com.trainmateback.trainmateback.repository;

import com.trainmateback.trainmateback.model.ForumPost;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ForumRepository extends JpaRepository<ForumPost, Long> {
    ForumPost findForumPostByTitle(String title);
    ForumPost findForumPostByContent(String content);
}
