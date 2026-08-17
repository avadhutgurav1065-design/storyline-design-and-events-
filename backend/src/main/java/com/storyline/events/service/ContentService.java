package com.storyline.events.service;

import com.storyline.events.exception.ResourceNotFoundException;
import com.storyline.events.model.*;
import com.storyline.events.repository.*;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ContentService {

    private final ServiceOfferingRepository serviceRepo;
    private final PortfolioRepository portfolioRepo;
    private final TestimonialRepository testimonialRepo;
    private final TeamMemberRepository teamRepo;
    private final EventPackageRepository packageRepo;

    public ContentService(
            ServiceOfferingRepository serviceRepo,
            PortfolioRepository portfolioRepo,
            TestimonialRepository testimonialRepo,
            TeamMemberRepository teamRepo,
            EventPackageRepository packageRepo
    ) {
        this.serviceRepo = serviceRepo;
        this.portfolioRepo = portfolioRepo;
        this.testimonialRepo = testimonialRepo;
        this.teamRepo = teamRepo;
        this.packageRepo = packageRepo;
    }

    // --- Services ---
    public List<ServiceOffering> getAllServices() {
        return serviceRepo.findByIsActiveTrueOrderByDisplayOrderAsc();
    }

    public List<ServiceOffering> getServicesByCategory(String category) {
        return serviceRepo.findByCategoryOrderByDisplayOrderAsc(category);
    }

    // --- Portfolio ---
    public List<Portfolio> getAllPortfolio() {
        return portfolioRepo.findAllByOrderByDisplayOrderAsc();
    }

    public List<Portfolio> getPortfolioByCategory(String category) {
        return portfolioRepo.findByCategoryOrderByDisplayOrderAsc(category);
    }

    public List<Portfolio> getFeaturedPortfolio() {
        return portfolioRepo.findByIsFeaturedTrueOrderByDisplayOrderAsc();
    }

    public Portfolio getPortfolioById(Long id) {
        return portfolioRepo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Portfolio item not found with id: " + id));
    }

    // --- Testimonials ---
    public List<Testimonial> getAllTestimonials() {
        return testimonialRepo.findByIsActiveTrueOrderByDisplayOrderAsc();
    }

    public List<Testimonial> getTestimonialsByCategory(String category) {
        return testimonialRepo.findByCategoryAndIsActiveTrueOrderByDisplayOrderAsc(category);
    }

    // --- Team ---
    public List<TeamMember> getAllTeamMembers() {
        return teamRepo.findByIsActiveTrueOrderByDisplayOrderAsc();
    }

    // --- Packages ---
    public List<EventPackage> getAllPackages() {
        return packageRepo.findAllByOrderByDisplayOrderAsc();
    }

    public List<EventPackage> getPackagesByCategory(String category) {
        return packageRepo.findByCategoryOrderByDisplayOrderAsc(category);
    }

    // --- Admin CRUD for Portfolio ---
    public Portfolio savePortfolio(Portfolio portfolio) {
        return portfolioRepo.save(portfolio);
    }

    public void deletePortfolio(Long id) {
        portfolioRepo.deleteById(id);
    }

    // --- Admin CRUD for Testimonials ---
    public Testimonial saveTestimonial(Testimonial testimonial) {
        return testimonialRepo.save(testimonial);
    }

    public void deleteTestimonial(Long id) {
        testimonialRepo.deleteById(id);
    }

    // --- Admin CRUD for Team ---
    public TeamMember saveTeamMember(TeamMember member) {
        return teamRepo.save(member);
    }

    public void deleteTeamMember(Long id) {
        teamRepo.deleteById(id);
    }

    // --- Admin CRUD for Services ---
    public ServiceOffering saveServiceOffering(ServiceOffering service) {
        return serviceRepo.save(service);
    }

    public void deleteServiceOffering(Long id) {
        serviceRepo.deleteById(id);
    }

    // --- Admin CRUD for Packages ---
    public EventPackage saveEventPackage(EventPackage eventPackage) {
        return packageRepo.save(eventPackage);
    }

    public void deleteEventPackage(Long id) {
        packageRepo.deleteById(id);
    }
}
