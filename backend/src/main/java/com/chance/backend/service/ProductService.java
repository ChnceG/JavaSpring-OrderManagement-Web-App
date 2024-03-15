package com.chance.backend.service;

import com.chance.backend.model.Product;
import com.chance.backend.model.ProductType;
import com.chance.backend.repository.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    private final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public List<Product> getProductsByTypeId(Long typeId) {
        ProductType productType = new ProductType();
        productType.setTypeId(typeId);
        return productRepository.findByTypeId(productType);
    }
}
