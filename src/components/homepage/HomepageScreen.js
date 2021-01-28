import React from "react";

import FourFeatures from '../ReusableComponents/FourFeatures'

import Subscribe from "../ReusableComponents/Subscribe";

export default function HomepageScreen() {
  return (
  <div>
       {/* Banner Section Start */}
       <section className="banner-2 section-padding">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-12 col-xl-6 col-lg-6">
                <div className="banner-content">
                  <span className="subheading">Expert instruction</span>
                  <h1>Convenient easy way of learning new skills!</h1>
                  <p>The ultimate planning solution for busy women who want to reach their personal goals.Effortless comfortable eye-catching unique detail </p>
                  <a href="#" className="btn btn-main">Invest Now </a>  
                </div>
              </div>
              <div className="col-md-12 col-xl-6 col-lg-6">
                <div className="banner-img-round mt-5 mt-lg-0">
                  <img src="https://image.freepik.com/free-vector/investing-concept-illustration_114360-3218.jpg" alt="" className="img-fluid" />
                </div>
              </div>
            </div> {/* / .row */}
          </div> {/* / .container */}
        </section>
        {/* Banner Section End */}
      







<FourFeatures />


{/* <TrendingCourse/> */}


{/* <FullWidthTestimonial/> */}



<Subscribe />






  </div>
  );
}
