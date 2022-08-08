package az.course.dao;

import az.course.model.Student;

import java.util.List;

public interface StudentDao {
    List<Student> getStudentList();

    Long createStudent(Student student);

    Student getStudentById(int id);

    Long updateStudent(Student student);

    Long deleteStudent(int id);
}
