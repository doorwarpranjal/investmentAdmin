import React from 'react'
import Slider from "react-slick";

export default function Testimonial() {

  var settings = {
      
    infinite: true,
    speed: 500,
    slidesToShow: 1,
   draggable : true,
    centerMode : true,
    arrows : false,
    dots : true,
  };

    return (
        <div>
               {/* Testimonial section start */}
      <section className="testimonial-2 section-padding">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 col-xl-5 mr-auto">
              <div className="section-heading">
                <span className="subheading">Testimonials</span>
                <h3>Success Stories from person</h3>
                <p>The ultimate planning solution for busy women who want to reach their personal goals.Effortless comfortable eye-catching unique detail.Take the control of their life back</p>
                <p>Help you to get the best course that fits you <a href="#" className="text-underline d-block">Free Consultation <i className="fa fa-angle-right ml-2" /></a></p>
              </div>
            </div>
            <div className="col-lg-6 col-xl-6">
              <div >






<Slider {...settings} >


<div className="testimonial-item">
                  <i className="fa fa-quote-right" />
                  <div className="client-info">
                    <img src="assets/images/clients/test-1.jpg" alt="" className="img-fluid" />
                    <div className="testionial-author">Jessica Smith - Amazon co.</div>
                  </div>
                  <div className="testimonial-info-title">
                    <h4>One of the easiest online accounting systems we've tried.</h4>
                  </div>
                  <div className="testimonial-info-desc">
                    People who build their own home tend to be very courageous. These people are curious about life.
                  </div>
                </div>

                <div className="testimonial-item">
                  <i className="fa fa-quote-right" />
                  <div className="client-info">
                    <img src="assets/images/clients/test-2.jpg" alt="" className="img-fluid" />
                    <div className="testionial-author">Jessica Smith - Amazon co.</div>
                  </div>
                  <div className="testimonial-info-title">
                    <h4>One of the easiest online accounting systems we've tried.</h4>
                  </div>
                  <div className="testimonial-info-desc">
                    People who build their own home tend to be very courageous. These people are curious about life. 
                  </div>
                </div>


                <div className="testimonial-item">
                  <i className="fa fa-quote-right" />
                  <div className="client-info">
                    <img src="assets/images/clients/test-3.jpg" alt="" className="img-fluid" />
                    <div className="testionial-author">Jessica Smith - Amazon co.</div>
                  </div>
                  <div className="testimonial-info-title">
                    <h4>One of the easiest online accounting systems we've tried.</h4>
                  </div>
                  <div className="testimonial-info-desc">
                    They're thinking about what it means to live in a house, rather than just buying a commodity and making it work.
                  </div>
                </div>

</Slider>







          
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonial section End */}
        </div>
    )
}
