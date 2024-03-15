package com.chance.backend.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import jakarta.persistence.*;

import java.util.List;

@Entity
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long productId;

    @Column(nullable = false)
    public String name;

    @Column(nullable = false)
    public double price;

    @Column(nullable = false)
    public String description;

    @Column(nullable = false)
    public int stock;

    @Column(nullable = false)
    public String imagePath;

    @ManyToOne
    @JoinColumn(name = "typeId", nullable = false)
    public ProductType typeId;

    @JsonManagedReference
    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL)
    public List<Review> reviews;
}