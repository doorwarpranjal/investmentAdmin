import React,{useState} from 'react'
import { useFormik } from 'formik';
import {MdErrorOutline} from 'react-icons/md'
import * as Yup from 'yup'
import {Link} from 'react-router-dom' 
import Loader from 'react-loader-spinner'
import {userSignup} from '../../../Api'
import CustomModal from '../../CustomModal';


export default function RegisterForm() {


const [loading, setloading] = useState(false)
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
const [responseMsg, setresponseMsg] = useState('')
const [responseHeading, setresponseHeading] = useState('')
const [responseButton, setresponseButton] = useState('')

//formik initial values
const initialValues = {
    name : '',
    email : '',
   mobile : '',
    password : ''
}


const validationSchema= Yup.object({
  name : Yup.string().min(4, "Name too short").required(),
  email : Yup.string().email('Invalid email format !').required('Required !'),
  mobile : Yup.string().min(10 , 'Incomplete Number').max(10,'mobile number cannot be more than 10 digits.').required(),
  password : Yup.string().min(8 , 'Minimum 8 Characters').required('Password cannot be empty')
})

const formik = useFormik({
    initialValues,
  validationSchema,
    onSubmit : values=>{
     if(!loading){
      signup(values)
     }
   
    
    }
})


const signup = async (data) => {
  setloading(true)
  // console.log('Hello')
  try{
  const res = await userSignup(data);
  setresponseMsg('Signed Up Successfully.')
  setresponseHeading('Welcome !')
  setresponseButton('Okay')
  setShow(true)
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




// console.log('formik',formik.values);

    return (
        <div style={{marginTop : '3vh'}}>


<CustomModal handleClose={handleClose} handleShow={handleShow} 
responseButton={responseButton} responseHeading={responseHeading} show={show} responseMsg={responseMsg}
/>






   {/* Form Column */}
   <div className="form-column col-lg-12 col-md-12 col-sm-12" >
 
    

{/* ending of form here */}

<div className="col-md-12">
        <h2 className="font-weight-bold mb-2">Register</h2>



        <form method="post" className="woocommerce-form woocommerce-form-register register" onSubmit={formik.handleSubmit}>
          <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
            <label>Full Name&nbsp;</label>
            { formik.errors.name && formik.touched.name &&
                <span  style={{color : 'red',display : 'flex' , alignItems : 'center '}}><MdErrorOutline /> 
                {formik.errors.name}</span> }
            <input type="text" className="woocommerce-Input woocommerce-Input--text input-text form-control" type="text" name="name" placeholder='your name' onBlur={formik.handleBlur}  value={formik.values.name} onChange={formik.handleChange} />
          </p>
          <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
            <label>Email &nbsp;</label>


            { formik.errors.email && formik.touched.email &&
                <span  style={{color : 'red',display : 'flex' , alignItems : 'center '}}><MdErrorOutline /> 
                {formik.errors.email}</span> }
                <input className="woocommerce-Input woocommerce-Input--text input-text form-control" type="email" name="email" placeholder="example@gmail.com"   value={formik.values.email} onChange={formik.handleChange}/>
             
             
         </p>


          <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
            <label>Mobile Number&nbsp;
            { formik.errors.mobile && formik.touched.mobile &&
                <span  style={{color : 'red',display : 'flex' , alignItems : 'center '}}><MdErrorOutline /> 
                {formik.errors.mobile}</span> }
                <input type="text" name="mobile" className="woocommerce-Input woocommerce-Input--text input-text form-control" placeholder="10-digit mobile number"  value={formik.values.mobile} onChange={formik.handleChange}/>
                </label>
          </p>


          <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
            <label>Password&nbsp;</label>
            { formik.errors.password && formik.touched.password &&
                <span  style={{color : 'red',display : 'flex' , alignItems : 'center '}}><MdErrorOutline /> 
                {formik.errors.password}</span> }
              <input type="password" name="password" className="woocommerce-Input woocommerce-Input--text input-text form-control" placeholder="*******"   value={formik.values.password} onChange={formik.handleChange}/>
         
         </p>


          <p className="woocommerce-FormRow form-row">
            <input type="hidden" id="woocommerce-register-nonce" name="woocommerce-register-nonce" defaultValue="b1c661ab82" /><input type="hidden" name="_wp_http_referer" defaultValue="/my-account/" />
            <button type="submit" className="woocommerce-Button button" name="register" value="Register">
             { loading ? (   <Loader
         type="Puff"
         color="#fff"
         height={40}
         width={100}
      
 
      />) :('Register')}
              </button>
          </p>
        </form>

        <div><span>Existing Customer ? <Link to="login" className="login-span"> Login here</Link></span></div>




      </div>





      </div>


















        </div>
    )
}
