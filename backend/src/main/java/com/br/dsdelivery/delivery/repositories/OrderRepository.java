package com.br.dsdelivery.delivery.repositories;

import com.br.dsdelivery.delivery.entities.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Long> {
}
