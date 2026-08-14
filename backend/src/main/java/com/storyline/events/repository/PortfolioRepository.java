package com.storyline.events.repository;

import com.storyline.events.model.Portfolio;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface PortfolioRepository extends JpaRepository<Portfolio, Long> {
    List<Portfolio> findByCategoryOrderByDisplayOrderAsc(String category);
    List<Portfolio> findByIsFeaturedTrueOrderByDisplayOrderAsc();
    List<Portfolio> findAllByOrderByDisplayOrderAsc();
}
