package net.youssfi.webmvcproducts;

import net.youssfi.webmvcproducts.entities.Product;
import net.youssfi.webmvcproducts.repository.ProductRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class WebMvcProductsApplication {

    public static void main(String[] args) {
        SpringApplication.run(WebMvcProductsApplication.class, args);
    }
    @Bean
    CommandLineRunner commandLineRunner(ProductRepository productRepository){
       return args -> {
           Product product = Product.builder()
                   .name("Laptop Dell XPS 13").price(9500).quantity(15)
                   .build();
           productRepository.save(product);
           productRepository.save(Product.builder().name("Apple AirPods Pro").price(2400).quantity(30).build());
           productRepository.save(Product.builder().name("Samsung 4K Monitor").price(3700).quantity(20).build());
           productRepository.save(Product.builder().name("Logitech MX Master 3 Mouse").price(1120).quantity(40).build());
           productRepository.save(Product.builder().name("External SSD 1TB (SanDisk)").price(1250).quantity(25).build());
           productRepository.findAll().forEach(p-> System.out.println(p.toString()));
       } ;
    }

}
