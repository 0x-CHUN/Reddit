package com.chun.reddit.repository;

import com.chun.reddit.model.Post;
import com.chun.reddit.model.User;
import com.chun.reddit.model.Vote;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface VoteRepository extends JpaRepository<Vote, Long> {
    Optional<Vote> findTopByPostAndUserOrderByVoteIdDesc(Post post, User currentUser);
}
