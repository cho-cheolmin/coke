package app.byeolbit.story;

import java.util.List;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/stories")
@CrossOrigin(origins = "http://localhost:3000")
public class StoryController {
    private final StoryRepository repository;

    public StoryController(StoryRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<Story> findAllActive() {
        return repository.findByActiveTrueOrderByDisplayOrderAscIdAsc();
    }
}
