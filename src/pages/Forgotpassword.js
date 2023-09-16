import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import Container from "../components/Container";
const Forgotpassword = () => {
  return (
    <>
      <Meta title={"Forgotpassword"} />
      <BreadCrumb title="Forgotpassword" />
      <Container class1="login-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Reset Your Password</h3>
              <p className="text-center">
                We will send you an email to reset your password
              </p>
              <form action="" className="d-flex flex-column gap-20">
                <div>
                  <input
                    className="form-control"
                    type="email"
                    name="email"
                    placeholder="Email"
                  />
                </div>
                <div>
                  <div className="d-flex flex-column justify-content-center gap-15 align-items-center mt-3">
                    <button className="button border-0" type="submit">
                      Login
                    </button>
                    <Link to="/login" className="cancel-forgot">
                      Cancel
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Forgotpassword;
