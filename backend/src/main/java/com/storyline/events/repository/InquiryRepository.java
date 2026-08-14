package com.storyline.events.repository;

import com.storyline.events.model.Inquiry;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface InquiryRepository extends JpaRepository<Inquiry, Long> {
    List<Inquiry> findByEnquiryType(String enquiryType);
    List<Inquiry> findByStatus(String status);
    List<Inquiry> findAllByOrderByCreatedAtDesc();
}
