package com.chun.reddit.repository;

import com.chun.reddit.model.Post;
import com.chun.reddit.model.Subreddit;
import com.chun.reddit.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PostRepository extends JpaRepository<Post, Long> {
    List<Post> findAllBySubreddit(Subreddit subreddit);

    List<Post> findByUser(User user);
}
