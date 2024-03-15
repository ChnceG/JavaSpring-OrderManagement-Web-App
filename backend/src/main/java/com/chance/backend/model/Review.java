package com.chance.backend.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;

@Entity
public class Review {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long reviewId;

    public int rating;
    public String description;

    @JsonBackReference
    @ManyToOne
    @JoinColumn(name = "product_id")
    public Product product;
}
