package com.chance.backend.controller;

import com.chance.backend.model.Product;
import com.chance.backend.model.ProductType;
import com.chance.backend.service.ProductService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Product>> getAllProducts(@RequestParam(required = false) Long typeId) {
        List<Product> products;
        if (typeId != null) {
            products = productService.getProductsByTypeId(typeId);
        } else {
            products = productService.getAllProducts();
        }
        return ResponseEntity.ok(products);
    }
}
