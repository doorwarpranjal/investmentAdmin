import React from 'react'

export default function ThreeFeatures() {
    return (
        <div>
               {/* Feature section start */}
        <section className="features pt-100">
          <div className="container">
            <div className="row ">
              <div className="col-lg-3 col-md-6 col-xl-3 col-sm-6">
                <div className="feature-item">
                  <div className="feature-icon">
                    <i className="flaticon-flag" />
                  </div>
                  <div className="feature-text">
                    <h4>Expert Teacher</h4>
                    <p>Develop skills for career of various majors including computer</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-xl-3 col-sm-6">
                <div className="feature-item">
                  <div className="feature-icon">
                    <i className="flaticon-layers" />
                  </div>
                  <div className="feature-text">
                    <h4>Self Development</h4>
                    <p>Develop skills for career of various majors including computer.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-xl-3 col-sm-6">
                <div className="feature-item">
                  <div className="feature-icon">
                    <i className="flaticon-video-camera" />
                  </div>
                  <div className="feature-text">
                    <h4>Remote Learning</h4>
                    <p>Develop skills for career of various majors including language</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-xl-3 col-sm-6">
                <div className="feature-item">
                  <div className="feature-icon">
                    <i className="flaticon-help" />
                  </div>
                  <div className="feature-text">
                    <h4>Life Time Support</h4>
                    <p>Develop skills for career of various majors including language</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Feature section End */}
        </div>
    )
}
