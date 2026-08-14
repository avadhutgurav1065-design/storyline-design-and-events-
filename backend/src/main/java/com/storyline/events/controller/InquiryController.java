package com.storyline.events.controller;

import com.storyline.events.dto.ApiResponse;
import com.storyline.events.dto.InquiryRequest;
import com.storyline.events.model.Inquiry;
import com.storyline.events.service.InquiryService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/inquiries")
public class InquiryController {

    private final InquiryService inquiryService;

    public InquiryController(InquiryService inquiryService) {
        this.inquiryService = inquiryService;
    }

    @PostMapping
    public ResponseEntity<ApiResponse<Inquiry>> submitInquiry(@Valid @RequestBody InquiryRequest request) {
        Inquiry inquiry = inquiryService.submitInquiry(request);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(ApiResponse.success("Inquiry submitted successfully. We will get back to you within 24 hours.", inquiry));
    }

    @GetMapping
    public ResponseEntity<ApiResponse<List<Inquiry>>> getAllInquiries() {
        List<Inquiry> inquiries = inquiryService.getAllInquiries();
        return ResponseEntity.ok(ApiResponse.success("Inquiries fetched successfully", inquiries));
    }

    @GetMapping("/type/{type}")
    public ResponseEntity<ApiResponse<List<Inquiry>>> getInquiriesByType(@PathVariable String type) {
        List<Inquiry> inquiries = inquiryService.getInquiriesByType(type);
        return ResponseEntity.ok(ApiResponse.success("Inquiries fetched successfully", inquiries));
    }

    @PatchMapping("/{id}/status")
    public ResponseEntity<ApiResponse<Inquiry>> updateStatus(@PathVariable Long id, @RequestParam String status) {
        Inquiry inquiry = inquiryService.updateInquiryStatus(id, status);
        return ResponseEntity.ok(ApiResponse.success("Status updated", inquiry));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse<Void>> deleteInquiry(@PathVariable Long id) {
        inquiryService.deleteInquiry(id);
        return ResponseEntity.ok(ApiResponse.success("Inquiry deleted"));
    }
}
