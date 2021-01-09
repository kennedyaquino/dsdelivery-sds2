package com.br.dsdelivery.delivery.services;

import com.br.dsdelivery.delivery.entities.Order;
import com.br.dsdelivery.delivery.entities.Product;
import com.br.dsdelivery.delivery.entities.dto.OrderDTO;
import com.br.dsdelivery.delivery.entities.dto.ProductDTO;
import com.br.dsdelivery.delivery.entities.enums.OrderStatus;
import com.br.dsdelivery.delivery.repositories.OrderRepository;
import com.br.dsdelivery.delivery.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class OrderService {

    @Autowired
    private OrderRepository repository;

    @Autowired
    private ProductRepository productRepository;

    @Transactional(readOnly = true)
    public List<OrderDTO> findAll() {
        List<Order> list = repository.findOrderWithProducts();
        return list.stream().map(order -> new OrderDTO(order)).collect(Collectors.toList());
    }

    @Transactional
    public OrderDTO insert(OrderDTO dto) {
        Order order = new Order(
                null,
                dto.getAddress(),
                dto.getLatitude(),
                dto.getLongitude(),
                Instant.now(),
                OrderStatus.PENDING
        );

        for (ProductDTO p: dto.getProducts()) {
            Product product = productRepository.getOne(p.getId());
            order.getProducts().add(product);
        }

        order = repository.save(order);

        return new OrderDTO(order);
    }
}
