package az.course.controller;

import az.course.model.Student;
import az.course.service.StudentService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/student")
@CrossOrigin(maxAge = 3600, origins = "*")
public class StudentController {

    private final StudentService studentService;


    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    @GetMapping("/get-all")
    public List<Student> getStudentList() {
        return studentService.getStudentList();
    }

    @PostMapping("/create")
    public ResponseEntity<?> createStudent(@RequestBody Student student) {
        Long result = studentService.createStudent(student);
        if (result != null) {
            return new ResponseEntity<>("Student Added", HttpStatus.OK);
        }
        return new ResponseEntity<>("Student add failed", HttpStatus.BAD_REQUEST);
    }

    @GetMapping("/get-by-id/{id}")
    public Student getStudentById(@PathVariable int id) {
        return studentService.getStudentById(id);
    }

    @PostMapping("update-student")
    public ResponseEntity<?> updateStudent(@RequestBody Student student) {
        Long result = studentService.updateStudent(student);
        if (result != null) {
            return new ResponseEntity<>("Student Updates", HttpStatus.OK);
        }
        return new ResponseEntity<>("Student update failed", HttpStatus.BAD_REQUEST);
    }

    @PostMapping("/delete-student")
    public Long deleteStudent(@RequestBody Student student) {
        return studentService.deleteStudent(student.getId());
    }
}
