package az.course.service;

import az.course.model.Student;

import java.util.List;

public interface StudentService {
    List<Student> getStudentList();

    Long createStudent(Student student);

    Student getStudentById(int id);

    Long updateStudent(Student student);

    Long deleteStudent(int id);


}
