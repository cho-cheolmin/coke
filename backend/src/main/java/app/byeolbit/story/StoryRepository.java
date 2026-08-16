package app.byeolbit.story;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StoryRepository extends JpaRepository<Story, Long> {
    List<Story> findByActiveTrueOrderByDisplayOrderAscIdAsc();
}
