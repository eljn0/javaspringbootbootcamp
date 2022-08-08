import { main_api } from "../Main_api";
import axios from 'axios';


export const insertStudents = async (data)=> {
    return await  axios.post(main_api+data.url, data).
    then(response => {
        return response.data
    }).catch(err => {
        console.log(err.response)
    })
}
export const deleteStudents = async (data)=> {
    return await  axios.post(main_api+'/delete-student', data).
    then(response => {
        return response.data
    }).catch(err => {
        console.log(err.response)
    })
}
export const getStudents = async () => {
    return await  axios.get(main_api+'/get-all').
    then(response => {
        return response.data
    }).catch(err => {
        console.log(err.response)
    })
}