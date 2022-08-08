package az.course.service;

import az.course.entity.Teacher;

import java.util.List;

public interface TeacherService {
    List<Teacher> getTeacherList();

    Teacher createTeacher(Teacher teacher);
}
