import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { MdErrorOutline, MdLock } from "react-icons/md";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import Loader from 'react-loader-spinner'
import { userSignin} from '../../../Api'
import CustomModal from '../../CustomModal';
import {userState} from '../../../Atoms'
import { useRecoilState } from "recoil";
import { useHistory } from 'react-router-dom'

export default function LoginForm() {


  const [ myUser , setmyUser ] = useRecoilState(userState)
  const [loading, setloading] = useState(false)
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [responseMsg, setresponseMsg] = useState('')
  const [responseHeading, setresponseHeading] = useState('')
  const [responseButton, setresponseButton] = useState('')

  const history  = useHistory()



  //formik initial values
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format !").required("Required !"),
    password: Yup.string()
      .min(8, "Minimum 8 Characters")
      .required("Password cannot be empty"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      Login(values)
    },
  });


  const Login  = async (data) => {
    setloading(true)
 
    try{
    // const res = await userSignin(data);

      // console.log('Res is ',res.data.token)
      setmyUser({ email : 'doorwarpranjal@gmail.com'  ,
      name : 'Pranjal Doorwar' , 
      userToken : 'abcd123',
      })
      // history.push('/studentdashboard')
      window.location.replace('/admindashboard')
    }catch(e){
      console.log('Error is catched',e.response.data.error)
  
  // Setting modal text and heading
      setresponseMsg(e.response.data.error)
      setresponseHeading('Oops !')
      setresponseButton('Try Again')
      setShow(true)
      // Setting modal text and heading
      setloading(false)
    }
    setloading(false)
  } 


  return (
    <div style={{ marginTop: "0vh" }}>


<CustomModal handleClose={handleClose} handleShow={handleShow} 
responseButton={responseButton} responseHeading={responseHeading} show={show} responseMsg={responseMsg}
/>


      {/* Form Column */}
      <div
        className="form-column login-form col-lg-12 col-md-12 col-sm-12"
        style={{ backgroundColor: "#e6e6e62b" }}
      >
        <div className="inner-column">
          <div className="circle-layer" />
          <div
            className="pattern-layer-one"
            style={{ backgroundImage: "url(images/icons/icon-7.png)" }}
          />
          <div
            className="pattern-layer-two"
            style={{ backgroundImage: "url(images/icons/icon-9.png)" }}
          />
          <h4 style={{ color: "#000", fontWeight: "bold" }}>Welcome Back</h4>
          <br />

          <div className="contact-form">
            <form
              method="post"
              className="woocommerce-form woocommerce-form-register register"
              onSubmit={formik.handleSubmit}
            >
              <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                <label>Email &nbsp;</label>

                {formik.errors.email && formik.touched.email && (
                  <span
                    style={{
                      color: "red",
                      display: "flex",
                      alignItems: "center ",
                    }}
                  >
                    <MdErrorOutline />
                    {formik.errors.email}
                  </span>
                )}
                <input
                  className="woocommerce-Input woocommerce-Input--text input-text form-control"
                  type="email"
                  name="email"
                  placeholder="example@gmail.com"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
              </p>

              <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                <label>Password&nbsp;</label>
                {formik.errors.password && formik.touched.password && (
                  <span
                    style={{
                      color: "red",
                      display: "flex",
                      alignItems: "center ",
                    }}
                  >
                    <MdErrorOutline />
                    {formik.errors.password}
                  </span>
                )}
                <input
                  type="password"
                  name="password"
                  className="woocommerce-Input woocommerce-Input--text input-text form-control"
                  placeholder="*******"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                />
              </p>

              <div>
              <span style={{ display: "flex", alignItems: "center" }}>
                Forgot Password ?{" "}
                <Link
                  to="/resetpassword"
                  style={{
                    color: "#007cfc",
                    fontWeight: "bold",
                    cursor: "default",
                    marginBottom: "0",
                  }}
                >
                  {" "}
                  Reset Here
                </Link>
              </span>
            </div>
            <br/>


              <p className="woocommerce-FormRow form-row">
                <input
                  type="hidden"
                  id="woocommerce-register-nonce"
                  name="woocommerce-register-nonce"
                  defaultValue="b1c661ab82"
                />
                <input
                  type="hidden"
                  name="_wp_http_referer"
                  defaultValue="/my-account/"
                />
                <button
                  type="submit"
                  className="woocommerce-Button button"
                  name="login"
                   value="Login" >
                       { loading ? (   <Loader
         type="Puff"
         color="#fff"
         height={40}
         width={100}
      
 
      />) :('Login')}
                </button>
              </p>
            </form>

            <div>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
