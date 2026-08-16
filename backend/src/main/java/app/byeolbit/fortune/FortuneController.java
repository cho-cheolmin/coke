package app.byeolbit.fortune;

import java.util.List;
import java.util.Map;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = {"http://localhost:3000"})
public class FortuneController {
    private final FortuneRepository repository;
    public FortuneController(FortuneRepository repository) { this.repository = repository; }

    @GetMapping("/health")
    public Map<String, String> health() { return Map.of("status", "ok", "service", "byeolbit-api"); }

    @GetMapping("/fortunes/recommended")
    public List<Fortune> recommended() { return repository.findAll(); }
}

