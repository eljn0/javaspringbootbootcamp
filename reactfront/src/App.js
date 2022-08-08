import React, { Component } from 'react'
import Swal from 'sweetalert2'
import Form from './components/Form'
import Table from './components/Table'
import { deleteStudents, getStudents, insertStudents } from './config/MainConfig'

export class App extends Component {
  state={
    id: '',
    name: '',
    surname: '',
    age: '',
    fatherName: '',
    grade: '',
    faculty: '',
    url: '/create',
    students: []
  }
  componentDidMount(){
    getStudents()
    .then(resp=> {
      this.setState({
        students: resp
      })
    })
  }

  changeState = (name, value) =>{
    this.setState({
      [name]: value
    })
  }
  saveFormParams = () => {

    insertStudents(this.state)
    .then(resp=> {
      getStudents()
      .then(resp=> {
        this.setState({
          students: resp
        })
        
        
      })
      Swal.fire(
        this.state.id === ''? 'Insert': 'Update',
        `Student has been ${ this.state.id === ''? 'Insert': 'Update'}.`,
        'success'
      )
      this.setState({
        id: '',
        name: '',
        surname: '',
        age: '',
        fatherName: '',
        grade: '',
        faculty: '',
        url: '/create',
      })
    })
  }
  deleteStudent = (id)=> {
    console.log(id)
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        deleteStudents({id: id})
        .then(resp=> {
          getStudents()
          .then(resp=> {
            this.setState({
              students: resp
            })
            Swal.fire(
              'Deleted!',
              'Student has been deleted.',
              'success'
            )
          })
        })
        
      }
    })
    
  }

  editStudent =(data)=>{
    this.setState({
      url: '/update-student'
    })
    for(const property in data){
      this.setState({
        [property]: data[property]
      })
    }
  }
  render() {
    const {name, surname, age, fatherName, grade, faculty, students, id} = this.state
    return (
      <div>
      
        <Form 
        id={id}
          name={name} 
          surname={surname} 
          age={age} 
          fatherName={fatherName} 
          grade={grade}
          faculty={faculty}
          changeState={this.changeState}
          saveFormParams={this.saveFormParams}
        />
        <Table editStudent={this.editStudent} deleteStudent={this.deleteStudent} students={students} />
      </div>
    )
  }
}

export default App