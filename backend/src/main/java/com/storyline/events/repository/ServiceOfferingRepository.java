package com.storyline.events.repository;

import com.storyline.events.model.ServiceOffering;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface ServiceOfferingRepository extends JpaRepository<ServiceOffering, Long> {
    List<ServiceOffering> findByCategoryOrderByDisplayOrderAsc(String category);
    List<ServiceOffering> findByIsActiveTrueOrderByDisplayOrderAsc();
}
