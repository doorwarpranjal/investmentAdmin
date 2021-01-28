import axios from 'axios'


const base_url = 'https://udemy-user.herokuapp.com'


export const userSignup =async(userData)=>{
    const res = await axios.post(`${base_url}/signup`,userData) ;
    return res ;
}

export const userSignin = async (userData) =>{
    const res = await axios.post(`${base_url}/signin`,userData) ;
    return res ;
}

export const forgotPasswordRequest =async(email)=>{
    const res = await axios.post(`${base_url}/forgot`,email) ;
    return res ;
}

export const forgotPasswordOtp =async(otp)=>{
    const res = await axios.post(`${base_url}/verify-otp`,otp) ;
    return res ;
}


export const resetPassword =async(data)=>{
    const res = await axios.post(`${base_url}/reset-password`,data) ;
    return res ;
}


export const getAllCourses =async()=>{
    const res = await axios.get(`${base_url}/get-all-courses-by-all-category`) ;
    return res ;
}


export const getCourseById =async(courseId)=>{
    const res = await axios.get(`${base_url}/get-course-by-classId`,{
        params : {
            courseId : courseId
        }
    }) ;
    return res ;
}


export const getCourseByUser =async(token)=>{
    const res = await axios.get(`${base_url}/getMyCart`,{
        headers :   {'Authorization': `${token}` }
    })
 
    return res ;
}


export const getMyCourseById =async(token,courseId)=>{
    const res = await axios.get(`${base_url}/getMyCart`,{
        headers :   {'Authorization': `${token}` }
    },{ courseId : courseId })
 
    return res ;
}