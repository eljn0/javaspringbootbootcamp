import React, { Component } from 'react'

export class Table extends Component {
    deleteStudent(id, e){
        this.props.deleteStudent(id)
    }
    editStudent(data, e){
        this.props.editStudent(data)
    }
  render() {
      const {students} = this.props;
      console.log(students)
    return (
      <div className='container'>
          <table className='main_table'>
              <thead>
                <tr>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Father name</th>
                    <th>Age</th>
                    <th>Grade</th>
                    <th>Faculty</th>
                    <th>Buttons</th>
                </tr>
              </thead>
              <tbody>
                  {
                      students.map((student, i)=> {
                          return(
                            <tr key={i}>
                                <td>{student.name}</td>
                                <td>{student.surname}</td>
                                <td>{student.fatherName}</td>
                                <td>{student.age}</td>
                              
                                <td>{student.grade}</td>
                                <td>{student.faculty}</td>
                                <td>
                                    <button onClick={this.editStudent.bind(this, student)}>Edit</button>
                                    <button onClick={this.deleteStudent.bind(this, student.id)}>Delete</button>
                                </td>
                            </tr>
                          )
                      })
                  }
               
              </tbody>
          </table>
      </div>
    )
  }
}

export default Table