package com.storyline.events.model;

import jakarta.persistence.*;

@Entity
@Table(name = "event_packages")
public class EventPackage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String tier; // SIGNATURE, BESPOKE, FULL_SCALE, ESSENTIAL, PREMIUM, FLAGSHIP

    @Column(columnDefinition = "TEXT")
    private String scope;

    @Column(name = "price_range", nullable = false)
    private String priceRange;

    @Column(nullable = false)
    private String category; // WEDDING, CORPORATE

    @Column(columnDefinition = "TEXT")
    private String features; // comma-separated feature list

    @Column(name = "is_popular")
    private Boolean isPopular = false;

    @Column(name = "display_order")
    private Integer displayOrder = 0;

    // --- Constructors ---
    public EventPackage() {}

    public EventPackage(String name, String tier, String scope, String priceRange, String category, String features, Boolean isPopular) {
        this.name = name;
        this.tier = tier;
        this.scope = scope;
        this.priceRange = priceRange;
        this.category = category;
        this.features = features;
        this.isPopular = isPopular;
    }

    // --- Getters & Setters ---
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getTier() { return tier; }
    public void setTier(String tier) { this.tier = tier; }

    public String getScope() { return scope; }
    public void setScope(String scope) { this.scope = scope; }

    public String getPriceRange() { return priceRange; }
    public void setPriceRange(String priceRange) { this.priceRange = priceRange; }

    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }

    public String getFeatures() { return features; }
    public void setFeatures(String features) { this.features = features; }

    public Boolean getIsPopular() { return isPopular; }
    public void setIsPopular(Boolean isPopular) { this.isPopular = isPopular; }

    public Integer getDisplayOrder() { return displayOrder; }
    public void setDisplayOrder(Integer displayOrder) { this.displayOrder = displayOrder; }
}
