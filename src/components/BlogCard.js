import React from "react";
import { Link } from "react-router-dom";
import blog from "../images/blog-1.jpg";

const BlogCard = (props) => {
  const data = props;
  console.log(data.data);
  return (
    <>
      {data.data?.map((item, index) => {
        return (
          <div className="col-6 mb-3" key={index}>
            <div className="blog-card">
              <div className="card-image">
                <img
                  src={item?.images[0]?.url || blog}
                  className="img-fluid w-100"
                  alt="blog"
                />
              </div>
              <div className="blog-content">
                <p className="date">{new Date(item?.createdAt).toLocaleString()}</p>
                <h5 className="title">
                  {item?.title}
                </h5>
                <p className="desc" dangerouslySetInnerHTML={{ __html: item?.description }}>
                  
                </p>
                <Link to={`/blog/${item?._id}`} className="button">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default BlogCard;
