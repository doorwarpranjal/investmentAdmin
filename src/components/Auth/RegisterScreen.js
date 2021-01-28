import React from 'react'
import RegisterForm from './forms/RegisterForm'
import './Auth.css'

export default function RegisterScreen() {
    return (
        <div>
           <div className="container mb-3">
               <div className="row">
                   <div className="col-lg-6 col-md-12 col-sm-12">
                      <RegisterForm/>
               


                   </div>
                   <div className="col-lg-6 col-md-12 col-sm-12">
                             
          
                       <img src="https://image.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg" />
                   </div>
               </div>
           </div>
        </div>
    )
}
