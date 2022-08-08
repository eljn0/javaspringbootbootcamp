import React, { Component } from 'react'
import Swal from 'sweetalert2';

export class Form extends Component {
        changeInputValue(e){
               
                this.props.changeState(e.target.name, e.target.value)
        }

        saveFormData(name, surname, age, fatherName, grade, faculty, e){
                e.preventDefault();
                if(name !== '' && 
                surname !== '' && 
                age !== '' &&
                fatherName !== '' &&
                grade !== '' &&
                faculty !== ''
                ){
                        this.props.saveFormParams()
                }else{
                        const Toast = Swal.mixin({
                                toast: true,
                                position: 'top-end',
                                showConfirmButton: false,
                                timer: 3000,
                                timerProgressBar: true,
                                didOpen: (toast) => {
                                  toast.addEventListener('mouseenter', Swal.stopTimer)
                                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                                }
                              })
                              
                              Toast.fire({
                                icon: 'error',
                                title: 'All fields are required'
                              })
                }
        }
  render() {
    const {name, surname, age, fatherName, grade, faculty, id} = this.props

    return (
      <div className='container'>
         <form className='main_form'>
            <div className='input_container'>
                    <label htmlFor='name'>Name</label>
                    <input value={name} onChange={this.changeInputValue.bind(this)} name="name" type={'text'} id="name" />
            </div>
            <div className='input_container'>
                    <label htmlFor='surname'>Surname</label>
                    <input value={surname} onChange={this.changeInputValue.bind(this)} name="surname" type={'text'} id="surname" />
            </div>
            <div className='input_container'>
                    <label htmlFor='age'>Age</label>
                    <input value={age} name="age" onChange={this.changeInputValue.bind(this)} type={'number'} id="age" />
            </div>
            <div className='input_container'>
                    <label htmlFor='father_name'>Father name</label>
                    <input value={fatherName} onChange={this.changeInputValue.bind(this)} name="fatherName" type={'text'} id="father_name" />
            </div>
            <div className='input_container'>
                    <label htmlFor='grade'>Grade</label>
                    <input value={grade} onChange={this.changeInputValue.bind(this)} name="grade" type={'number'} id="grade" />
            </div>
            <div className='input_container'>
                    <label htmlFor='faculty'>Faculty</label>
                    <input value={faculty} onChange={this.changeInputValue.bind(this)} name="faculty" type={'text'} id="faculty" />
            </div>
            <div className='input_container'>
                  <button onClick={this.saveFormData.bind(this, name, surname, age, fatherName, grade, faculty)}>{id === '' ? 'Save': 'Update'}</button>
            </div>
         </form>
         
      </div>
    )
  }
}

export default Form