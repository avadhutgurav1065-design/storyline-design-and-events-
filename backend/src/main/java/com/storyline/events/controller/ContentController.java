package com.storyline.events.controller;

import com.storyline.events.dto.ApiResponse;
import com.storyline.events.model.*;
import com.storyline.events.service.ContentService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class ContentController {

    private final ContentService contentService;

    public ContentController(ContentService contentService) {
        this.contentService = contentService;
    }

    // ---- Services ----
    @GetMapping("/services")
    public ResponseEntity<ApiResponse<List<ServiceOffering>>> getAllServices() {
        return ResponseEntity.ok(ApiResponse.success("Services fetched", contentService.getAllServices()));
    }

    @GetMapping("/services/category/{category}")
    public ResponseEntity<ApiResponse<List<ServiceOffering>>> getServicesByCategory(@PathVariable String category) {
        return ResponseEntity.ok(ApiResponse.success("Services fetched", contentService.getServicesByCategory(category)));
    }

    // ---- Portfolio ----
    @GetMapping("/portfolio")
    public ResponseEntity<ApiResponse<List<Portfolio>>> getAllPortfolio() {
        return ResponseEntity.ok(ApiResponse.success("Portfolio fetched", contentService.getAllPortfolio()));
    }

    @GetMapping("/portfolio/category/{category}")
    public ResponseEntity<ApiResponse<List<Portfolio>>> getPortfolioByCategory(@PathVariable String category) {
        return ResponseEntity.ok(ApiResponse.success("Portfolio fetched", contentService.getPortfolioByCategory(category)));
    }

    @GetMapping("/portfolio/featured")
    public ResponseEntity<ApiResponse<List<Portfolio>>> getFeaturedPortfolio() {
        return ResponseEntity.ok(ApiResponse.success("Featured portfolio fetched", contentService.getFeaturedPortfolio()));
    }

    @GetMapping("/portfolio/{id}")
    public ResponseEntity<ApiResponse<Portfolio>> getPortfolioById(@PathVariable Long id) {
        return ResponseEntity.ok(ApiResponse.success("Portfolio item fetched", contentService.getPortfolioById(id)));
    }

    // ---- Testimonials ----
    @GetMapping("/testimonials")
    public ResponseEntity<ApiResponse<List<Testimonial>>> getAllTestimonials() {
        return ResponseEntity.ok(ApiResponse.success("Testimonials fetched", contentService.getAllTestimonials()));
    }

    @GetMapping("/testimonials/category/{category}")
    public ResponseEntity<ApiResponse<List<Testimonial>>> getTestimonialsByCategory(@PathVariable String category) {
        return ResponseEntity.ok(ApiResponse.success("Testimonials fetched", contentService.getTestimonialsByCategory(category)));
    }

    // ---- Team ----
    @GetMapping("/team")
    public ResponseEntity<ApiResponse<List<TeamMember>>> getTeamMembers() {
        return ResponseEntity.ok(ApiResponse.success("Team fetched", contentService.getAllTeamMembers()));
    }

    // ---- Packages ----
    @GetMapping("/packages")
    public ResponseEntity<ApiResponse<List<EventPackage>>> getAllPackages() {
        return ResponseEntity.ok(ApiResponse.success("Packages fetched", contentService.getAllPackages()));
    }

    @GetMapping("/packages/category/{category}")
    public ResponseEntity<ApiResponse<List<EventPackage>>> getPackagesByCategory(@PathVariable String category) {
        return ResponseEntity.ok(ApiResponse.success("Packages fetched", contentService.getPackagesByCategory(category)));
    }

    // ---- Admin CRUD ----
    @PostMapping("/admin/portfolio")
    public ResponseEntity<ApiResponse<Portfolio>> savePortfolio(@RequestBody Portfolio portfolio) {
        return ResponseEntity.ok(ApiResponse.success("Portfolio saved", contentService.savePortfolio(portfolio)));
    }

    @DeleteMapping("/admin/portfolio/{id}")
    public ResponseEntity<ApiResponse<Void>> deletePortfolio(@PathVariable Long id) {
        contentService.deletePortfolio(id);
        return ResponseEntity.ok(ApiResponse.success("Portfolio deleted"));
    }

    @PostMapping("/admin/testimonials")
    public ResponseEntity<ApiResponse<Testimonial>> saveTestimonial(@RequestBody Testimonial testimonial) {
        return ResponseEntity.ok(ApiResponse.success("Testimonial saved", contentService.saveTestimonial(testimonial)));
    }

    @DeleteMapping("/admin/testimonials/{id}")
    public ResponseEntity<ApiResponse<Void>> deleteTestimonial(@PathVariable Long id) {
        contentService.deleteTestimonial(id);
        return ResponseEntity.ok(ApiResponse.success("Testimonial deleted"));
    }

    @PostMapping("/admin/team")
    public ResponseEntity<ApiResponse<TeamMember>> saveTeamMember(@RequestBody TeamMember member) {
        return ResponseEntity.ok(ApiResponse.success("Team member saved", contentService.saveTeamMember(member)));
    }

    @DeleteMapping("/admin/team/{id}")
    public ResponseEntity<ApiResponse<Void>> deleteTeamMember(@PathVariable Long id) {
        contentService.deleteTeamMember(id);
        return ResponseEntity.ok(ApiResponse.success("Team member deleted"));
    }
}
