package app.byeolbit.fortune;

import jakarta.persistence.*;

@Entity
@Table(name = "fortunes")
public class Fortune {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false, unique = true) private String slug;
    @Column(nullable = false) private String title;
    @Column(nullable = false) private String subtitle;
    @Column(nullable = false) private int price;
    @Column(nullable = false) private String icon;
    protected Fortune() {}
    public Long getId() { return id; }
    public String getSlug() { return slug; }
    public String getTitle() { return title; }
    public String getSubtitle() { return subtitle; }
    public int getPrice() { return price; }
    public String getIcon() { return icon; }
}

