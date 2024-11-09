package dev.forum.courses_website.controllers;

import dev.forum.courses_website.models.Course;
import dev.forum.courses_website.repository.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("")
public class CourseController {

    @Autowired
    private CourseRepository repo;

    @GetMapping({"", "/"})
    public String showCourses (Model model) {
        List<Course> course = repo.findAll();
        model.addAttribute("course", course);
        return "index";
    }
}
