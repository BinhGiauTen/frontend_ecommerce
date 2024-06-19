import React, { useEffect } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link, useLocation } from "react-router-dom";
import blog from "../images/blog-1.jpg";
import { HiOutlineArrowLeft } from "react-icons/hi";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { getaBlog } from "../features/blog/blogSlice";

const SingleBlog = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const getBlogId = location.pathname.split("/")[2];
  useEffect(() => {
    if (getBlogId !== undefined) {
      dispatch(getaBlog(getBlogId));
    } else {
      console.log("Error get a blog");
    }
  }, [getBlogId]);
  const blogState = useSelector((state) => state.blog);
  return (
    <>
      <Meta title={blogState?.blogName} />
      <BreadCrumb title={blogState?.blogName} />
      <Container class1="blog-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="single-blog-card">
              <Link to="/blogs" className="d-flex align-items-center gap-10">
                <HiOutlineArrowLeft />
                <span>Go back to Blogs</span>
              </Link>
              <h3 className="title">{blogState?.blogName}</h3>
              <img src={blogState?.blogImages[0]?.url} className="w-100 img-fluid my-4" alt="blog" />
              <p>
                {blogState?.blogDesc}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SingleBlog;
