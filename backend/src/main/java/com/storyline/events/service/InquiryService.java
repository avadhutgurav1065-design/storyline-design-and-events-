package com.storyline.events.service;

import com.storyline.events.dto.InquiryRequest;
import com.storyline.events.exception.ResourceNotFoundException;
import com.storyline.events.model.Inquiry;
import com.storyline.events.repository.InquiryRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InquiryService {

    private final InquiryRepository inquiryRepository;
    private final EmailService emailService;

    public InquiryService(InquiryRepository inquiryRepository, EmailService emailService) {
        this.inquiryRepository = inquiryRepository;
        this.emailService = emailService;
    }

    public Inquiry submitInquiry(InquiryRequest request) {
        Inquiry inquiry = new Inquiry();
        inquiry.setName(request.getName());
        inquiry.setEmail(request.getEmail());
        inquiry.setPhone(request.getPhone());
        inquiry.setCity(request.getCity());
        inquiry.setEnquiryType(request.getEnquiryType());
        inquiry.setEventDate(request.getEventDate());
        inquiry.setVenue(request.getVenue());
        inquiry.setGuestCount(request.getGuestCount());
        inquiry.setBudgetRange(request.getBudgetRange());
        inquiry.setReferenceLink(request.getReferenceLink());
        inquiry.setMessage(request.getMessage());

        Inquiry saved = inquiryRepository.save(inquiry);

        // Send email notifications asynchronously (fire-and-forget)
        emailService.sendInquiryNotification(saved.getName(), saved.getEmail(), saved.getEnquiryType(), saved.getMessage());
        emailService.sendInquiryConfirmation(saved.getEmail(), saved.getName(), saved.getEnquiryType());

        return saved;
    }

    public List<Inquiry> getAllInquiries() {
        return inquiryRepository.findAllByOrderByCreatedAtDesc();
    }

    public List<Inquiry> getInquiriesByType(String type) {
        return inquiryRepository.findByEnquiryType(type);
    }

    public List<Inquiry> getInquiriesByStatus(String status) {
        return inquiryRepository.findByStatus(status);
    }

    public Inquiry updateInquiryStatus(Long id, String status) {
        Inquiry inquiry = inquiryRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Inquiry not found with id: " + id));
        inquiry.setStatus(status);
        return inquiryRepository.save(inquiry);
    }

    public void deleteInquiry(Long id) {
        if (!inquiryRepository.existsById(id)) {
            throw new ResourceNotFoundException("Inquiry not found with id: " + id);
        }
        inquiryRepository.deleteById(id);
    }
}
