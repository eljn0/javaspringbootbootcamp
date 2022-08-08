package az.course.service;

import az.course.dao.StudentDao;
import az.course.model.Student;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentServiceImpl implements StudentService {

    private final StudentDao studentDao;

    public StudentServiceImpl(StudentDao studentDao) {
        this.studentDao = studentDao;
    }

    @Override
    public List<Student> getStudentList() {
        return studentDao.getStudentList();
    }

    @Override
    public Long createStudent(Student student) {
        Long result = studentDao.createStudent(student);
        if (result == null) {
            System.out.println("netice tapilmadi");
        }
        return result;
    }

    @Override
    public Student getStudentById(int id) {
        return studentDao.getStudentById(id);
    }

    @Override
    public Long updateStudent(Student student) {
        return studentDao.updateStudent(student);
    }

    @Override
    public Long deleteStudent(int id) {
       return studentDao.deleteStudent(id);
    }
}
