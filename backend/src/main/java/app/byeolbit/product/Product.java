package app.byeolbit.product;
import jakarta.persistence.*;
@Entity @Table(name = "products")
public class Product {
 @Id @GeneratedValue(strategy = GenerationType.IDENTITY) private Long id;
 private String name; private String model; private String category; private Integer price;
 @Column(name = "original_price") private Integer originalPrice;
 private String badge; private String tone;
 protected Product() {}
 public Long getId(){return id;} public String getName(){return name;} public String getModel(){return model;}
 public String getCategory(){return category;} public Integer getPrice(){return price;}
 public Integer getOriginalPrice(){return originalPrice;} public String getBadge(){return badge;} public String getTone(){return tone;}
}
