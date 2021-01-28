import React, { useState, useEffect } from "react";
import { MdErrorOutline, MdLock } from "react-icons/md";
import { Link } from "react-router-dom";
import Loader from "react-loader-spinner";
import {
  forgotPasswordRequest,
  forgotPasswordOtp,
  resetPassword,
} from "../../../Api";
import CustomModal from "../../CustomModal";

export default function ResetForm() {
  const [loading, setloading] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [responseMsg, setresponseMsg] = useState("");
  const [responseHeading, setresponseHeading] = useState("");
  const [responseButton, setresponseButton] = useState("");

  const [showEmailForm, setshowEmailForm] = useState(true);
  const [showOtpForm, setOtpForm] = useState(false);
  const [showResetForm, setshowResetForm] = useState(false);
  const [enteredEmail, setenteredEmail] = useState(null);
  const [enterOtp, setenterOtp] = useState(null);
  const [enterpassword, setenterpassword] = useState(null);
  const [enterConfirmPassword, setenterConfirmPassword] = useState(null);
  const [resetToken, setresetToken] = useState(null);

  // email handling and sending request
  const handleEmailSubmit = (e) => {
    e.preventDefault();
    console.log("Email entered is", enteredEmail);
    setloading(true);
    sendEmail(enteredEmail);
  };

  const sendEmail = async (email) => {
    var data = {
      email: email,
    };

    try {
      const res = await forgotPasswordRequest(data);
      setshowEmailForm(false);
      setOtpForm(true);
    } catch (e) {
      console.log("Error is catched", e.response.data.error);

      // Setting modal text and heading
      setresponseMsg(e.response.data.error);
      setresponseHeading("Oops !");
      setresponseButton("Try Again");
      setShow(true);
      // Setting modal text and heading
      setloading(false);
    }
    setloading(false);
  };

  // otp handling and sending request

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    console.log("OTP entered is", enterOtp);
    sendOtp(enterOtp);
  };

  const sendOtp = async (otp) => {
    var data = {
      otp: otp,
      email: enteredEmail,
    };

    try {
      const res = await forgotPasswordOtp(data);
      setOtpForm(false);
      setresetToken(res.data.ResetToken);
      setshowResetForm(true);
      console.log("Reset token is", res.data);
    } catch (e) {
      console.log("Error is catched", e.response.data.error);

      // Setting modal text and heading
      setresponseMsg(e.response.data.error);
      setresponseHeading("Oops !");
      setresponseButton("Try Again");
      setShow(true);
      // Setting modal text and heading
      setloading(false);
    }
    setloading(false);
  };

  // reset password handling and sending request
  const handleResetSubmit = (e) => {
    e.preventDefault();
    var data = {
      resetToken,
      password: enterpassword,
    };

    if (enterpassword === enterConfirmPassword) {
      sendResetPassword(data);
    } else {
      setresponseMsg(e.response.data.error);
      setresponseHeading("Oops !");
      setresponseMsg("Password & confirm password do not match");
      setresponseButton("Try Again");
      setShow(true);
      // Setting modal text and heading
      setloading(false);
    }
  };

  const sendResetPassword = async (password) => {
    try {
      const res = await resetPassword(password);
      setresponseHeading("Successful !");
      setresponseMsg("Password changed successfully");
      setresponseButton("Okay");
      setShow(true);
      // Setting modal text and heading
      setloading(false);
    } catch (e) {
      console.log("Error is catched", e.response.data.error);

      // Setting modal text and heading
      setresponseMsg(e.response.data.error);
      setresponseHeading("Oops !");
      setresponseButton("Try Again");
      setShow(true);
      // Setting modal text and heading
      setloading(false);
    }
    setloading(false);
  };

  return (
    <div style={{ marginTop: "8vh" }}>
      <CustomModal
        handleClose={handleClose}
        handleShow={handleShow}
        responseButton={responseButton}
        responseHeading={responseHeading}
        show={show}
        responseMsg={responseMsg}
      />

      {/* Form Column */}
      <div
        className="form-column login-form col-lg-12 col-md-12 col-sm-12"
        style={{ backgroundColor: "#e6e6e6" }}
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

          {/* Enter your register email id */}
          {showEmailForm && (
            <div className="contact-form">
              <h4 style={{ color: "#464646", fontWeight: "bold" }}>
                Enter Your Registered Email
              </h4>
              <br />
              <form id="contact-form" onSubmit={handleEmailSubmit}>
                <div className="form-group">
                  <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                    <label>Email : </label>
                    <input
                      type="email"
                      name="email"
                      className="woocommerce-Input woocommerce-Input--text input-text form-control"
                      placeholder="Email"
                      onChange={(e) => setenteredEmail(e.target.value)}
                    />
                  </p>
                </div>

                <div className="form-group">
                  <button
                    className="woocommerce-Button button login-button"
                    type="submit"
                    name="submit-form"
                  >
                    <span style={{ marginTop: "-2px" }}>
                      {" "}
                      <MdLock />
                    </span>

                    {loading ? (
                      <Loader
                        type="Puff"
                        color="#fff"
                        height={40}
                        width={100}
                      />
                    ) : (
                      "Register"
                    )}
                  </button>
                </div>
              </form>
            </div>
          )}

          {showOtpForm && (
            <div className="contact-form">
              <h4 style={{ color: "#464646", fontWeight: "bold" }}>
                Enter OTP Here
              </h4>
              <br />
              <form id="contact-form" onSubmit={handleOtpSubmit}>
                <div className="form-group">
                  <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                    <label>We sent a 6-digit code to {enteredEmail}</label>
                    <input
                      type="text"
                      className="woocommerce-Input woocommerce-Input--text input-text form-control"
                      name="otp"
                      placeholder="6-digit otp"
                      onChange={(e) => setenterOtp(e.target.value)}
                    />
                  </p>
                </div>

                <div className="form-group">
                  <button
                    className="woocommerce-Button button login-button"
                    type="submit"
                    name="submit-form"
                  >
                    <span style={{ marginTop: "-2px" }}>
                      {" "}
                      <MdLock />
                    </span>{" "}
                    Submit OTP
                  </button>
                </div>
              </form>
            </div>
          )}

          {showResetForm && (
            <div className="contact-form">
              <h4 style={{ color: "#464646", fontWeight: "bold" }}>
                Reset Password
              </h4>
              <br />
              <form id="contact-form" onSubmit={handleResetSubmit}>
                <div className="form-group">
                  <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                    <label>New Password</label>
                    <input
                      type="password"
                      className="woocommerce-Input woocommerce-Input--text input-text form-control"
                      name="email"
                      placeholder="*********"
                      onChange={(e) => setenterpassword(e.target.value)}
                    />
                  </p>{" "}
                </div>

                <div className="form-group">
                  <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                    <label>Confirm New Password</label>
                    <input
                      type="password"
                      name="email"
                      className="woocommerce-Input woocommerce-Input--text input-text form-control"
                      placeholder="*********"
                      onChange={(e) => setenterConfirmPassword(e.target.value)}
                    />
                  </p>
                </div>

                <div className="form-group login-button">
                  <button
                    className="woocommerce-Button button login-button"
                    type="submit"
                    name="submit-form"
                  >
                    <span style={{ marginTop: "-2px" }}>
                      <MdLock />{" "}
                    </span>{" "}
                    <span>Change Password</span>
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
