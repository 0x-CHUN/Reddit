package com.chun.reddit.repository;

import com.chun.reddit.model.Comment;
import com.chun.reddit.model.Post;
import com.chun.reddit.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommentRepository extends JpaRepository<Comment, Long> {
    List<Comment> findByPost(Post post);

    List<Comment> findAllByUser(User user);
}
