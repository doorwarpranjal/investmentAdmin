import React from 'react'
import Testimonial from '../ReusableComponents/Testimonial'
import FourFeatures from '../ReusableComponents/FourFeatures'
import {counterState,userState} from '../../Atoms'
import { useRecoilState } from "recoil";

export default function AboutPage() {


const [ myUser , setmyUser ] = useRecoilState(userState)

    return (
        <div>

        <section className="page-header">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-xl-8">
                <div className="title-block">
                  <h1>Who we are</h1>
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item">
                      <a href="#">Home</a>
                    </li>
                    <li className="list-inline-item">/</li>
                    <li className="list-inline-item">
                      About Us
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
     
<FourFeatures />

        {/* About Section Start */}
        <section className="about-section section-padding">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-6">
                <div className="video-block">
                  <img src="assets/images/bg/about.jpg" alt="" className="img-fluid" />
                  <a href="#" className="video-icon"><i className="fa fa-play" /></a>
                </div>
              </div>
              <div className="col-xl-6 pl-5 col-lg-6">
                <div className="section-heading mt-4 mt-lg-0 ">
                  <span className="subheading">Changing Finance Education</span>
                  <h3>We are a team of Highly Motivated Experts.</h3>
                  <p>Our Goal is to make every teenager educate in the field of Finance.
                    Finladder is your route to learn Personal finance, Investments, Economics etc.
                  </p>
                </div>
                <ul className="about-features">
                  <li>
                    <i className="fa fa-check" />
                    <h5>High Quality Video Details</h5>
                  </li>
                  <li>
                    <i className="fa fa-check" />
                    <h5>Powerful Audiance</h5>
                  </li>
                  <li>
                    <i className="fa fa-check" />
                    <h5>Premium Content Worldwide</h5>
                  </li>
                </ul>
                <a href="#" className="btn btn-main">View Courses</a>
              </div>
            </div>
          </div>
        </section>
        {/* About Section END */}








<Testimonial/>






        </div>
    )
}
