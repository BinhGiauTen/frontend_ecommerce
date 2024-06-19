import React, {useEffect} from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../features/user/userSlice";
import { toast } from "react-toastify";


const Signup = () => {
  const dispatch = useDispatch();
  const schema = Yup.object().shape({
    firstname: Yup.string().required("First Name is required"),
    lastname: Yup.string().required("Last Name is required"),
    email: Yup.string()
      .email("Email should be valid")
      .required("Email is required"),
    mobile: Yup.number().required("Mobile number is required"),
    password: Yup.string().required("Password is required"),
  });
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      mobile: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(registerUser(values));
    },
  });

  const {  isLoading, isError, isSuccess, createdUser } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isSuccess && createdUser) {
      toast.success(" User Register Successfully!");
    }
    if (isError) {
      toast.error("Something Went Wrong!");
    }
  }, [isSuccess, isError, isLoading]);
  return (
    <>
      <Meta title={"Signup"} />
      <BreadCrumb title="Signup" />
      <Container class1="login-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center mb-3">Create Account</h3>
              <form
                action=""
                className="d-flex flex-column gap-20"
                onSubmit={formik.handleSubmit}
              >
                <CustomInput
                  type="text"
                  name="firstname"
                  label="First Name"
                  id="firstname"
                  val={formik.values.firstname}
                  onCh={formik.handleChange("firstname")}
                />
                <div className="error">
                  {formik.touched.firstname && formik.errors.firstname ? (
                    <div>{formik.errors.firstname}</div>
                  ) : null}
                </div>
                <CustomInput
                  type="text"
                  name="lastname"
                  label="Last Name"
                  id="lastname"
                  val={formik.values.lastname}
                  onCh={formik.handleChange("lastname")}
                />
                <div className="error">
                  {formik.touched.lastname && formik.errors.lastname ? (
                    <div>{formik.errors.lastname}</div>
                  ) : null}
                </div>
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
                  type="tel"
                  name="mobile"
                  label="Mobile number"
                  id="mobile"
                  val={formik.values.mobile}
                  onCh={formik.handleChange("mobile")}
                />
                <div className="error">
                  {formik.touched.mobile && formik.errors.mobile ? (
                    <div>{formik.errors.mobile}</div>
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
                  <div className="d-flex justify-content-center gap-15 align-items-center mt-3">
                    <button className="button border-0" type="submit">Create</button>
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

export default Signup;
