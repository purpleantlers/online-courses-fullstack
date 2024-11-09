package dev.forum.courses_website.repository;

import dev.forum.courses_website.models.Course;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseRepository extends JpaRepository<Course, Integer> {

}
