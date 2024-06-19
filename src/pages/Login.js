import React, {useEffect} from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import * as Yup from "yup";
import CustomInput from "../components/CustomInput";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const schema = Yup.object().shape({
    email: Yup.string()
      .email("Email should be valid")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(login(values));
    },
  });

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (!user === null || isSuccess === true) {
      navigate("/");
      console.log(user)
    }
  }, [user, isLoading, isError, isSuccess, message]);
  return (
    <>
      <Meta title={"Login"} />
      <BreadCrumb title="Login" />
      <Container class1="login-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Login</h3>
              <form action="" className="d-flex flex-column gap-20" onSubmit={formik.handleSubmit}>
              <CustomInput
                  type="email"
                  name="email"
                  label="Email"
                  id="email"
                  val={formik.values.email}
                  onCh={formik.handleChange("email")}
                />
                <div className="error">
                  {formik.touched.email && formik.errors.email ? (
                    <div>{formik.errors.email}</div>
                  ) : null}
                </div>
                <CustomInput
                  type="password"
                  name="password"
                  label="Password"
                  id="password"
                  val={formik.values.password}
                  onCh={formik.handleChange("password")}
                />
                <div className="error">
                  {formik.touched.password && formik.errors.password ? (
                    <div>{formik.errors.password}</div>
                  ) : null}
                </div>
                <div>
                  <Link to="/forgot-password" className="forgot">
                    Forgot Password?
                  </Link>
                  <div className="d-flex justify-content-center gap-15 align-items-center mt-3">
                    <button className="button border-0" type="submit">Login</button>
                    <Link className="button signup" to="/signup">
                      Signup
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

export default Login;
