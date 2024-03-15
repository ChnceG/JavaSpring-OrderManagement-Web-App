package com.chance.backend.repository;

import com.chance.backend.model.Product;
import com.chance.backend.model.ProductType;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findByTypeId(ProductType typeId);
}
