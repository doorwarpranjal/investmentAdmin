import React from 'react'
import './Auth.css'
import ResetForm from './forms/ResetForm'

export default function ForgotPasswordScreen() {
    return (
        <div>
          <div className="container" style={{marginTop : '5vh' , marginBottom : '5vh'}}>
              <div className="row">
                  <div className="col-lg-6">
                      <img style={{width : '90%'}} src="https://image.freepik.com/free-vector/sign-page-abstract-concept-illustration_335657-2242.jpg" />
                  </div>
                  <div className="col-lg-6">
                      <ResetForm />
                  </div>
              </div>
          </div>
        </div>
    )
}