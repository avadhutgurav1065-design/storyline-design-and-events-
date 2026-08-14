package com.storyline.events.repository;

import com.storyline.events.model.EventPackage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface EventPackageRepository extends JpaRepository<EventPackage, Long> {
    List<EventPackage> findByCategoryOrderByDisplayOrderAsc(String category);
    List<EventPackage> findAllByOrderByDisplayOrderAsc();
}
