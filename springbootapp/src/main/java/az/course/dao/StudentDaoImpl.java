package az.course.dao;

import az.course.model.Student;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.util.List;

@Repository
public class StudentDaoImpl implements StudentDao {


    private final JdbcTemplate jdbcTemplate;

    public StudentDaoImpl(@Qualifier("courseAppDatasource") DataSource dataSource) {
        this.jdbcTemplate = new JdbcTemplate(dataSource);
    }

    @Override
    public List<Student> getStudentList() {
        String sql = "select *  from course.student s where status = 1 order by id asc";
        return jdbcTemplate.query(sql, new BeanPropertyRowMapper<>(Student.class));
    }

    @Override
    public Long createStudent(Student student) {
        String sql = "insert into course.student (surname, name, father_name, age , grade, faculty)" +
                "values(?, ?, ?, ?, ?, ?) returning id";
        return jdbcTemplate.queryForObject(sql, Long.class,
                student.getSurname(),
                student.getName(),
                student.getFatherName(),
                student.getAge(),
                student.getGrade(),
                student.getFaculty()
        );
    }

    @Override
    public Student getStudentById(int id) {
        String sql = "select *  from course.student s where status = 1 and id = ?";
        List<Student> studentList =  jdbcTemplate.query(sql, new BeanPropertyRowMapper(Student.class), id);
        if (studentList.size() > 0) {
            return studentList.get(0);
        }
        return null;
    }

    @Override
    public Long updateStudent(Student student) {
        String sql = "update student set name = ?, surname = ?, age = ? where id = ? returning id";
        return jdbcTemplate.queryForObject(sql, Long.class,
                student.getName(),
                student.getSurname(),
                student.getAge(),
                student.getId()
        );
    }

    @Override
    public Long deleteStudent(int id) {
        String sql = "update student set status = 0 where id = ? returning id";
        return jdbcTemplate.queryForObject(sql, Long.class, id);
    }
}
