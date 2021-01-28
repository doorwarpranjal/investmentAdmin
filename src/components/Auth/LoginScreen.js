import React from 'react'
import './Auth.css'
import LoginForm from './forms/LoginForm'




export default function LoginScreen() {




    return (
        <div>
          <div className="container" style={{marginTop : '5vh'}}>
              <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12" style={{flexWrap : 'wrap-reverse'}}>
                      <img style={{width : '90%'}} src="https://cdn.dribbble.com/users/1353252/screenshots/9327462/media/00b9f9aba251621f746ce69a0022991b.jpg?compress=1&resize=800x600" />
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-12">
                      <LoginForm />
                  </div>
              </div>
          </div>
        </div>
    )
}