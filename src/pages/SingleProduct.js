import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import Color from "../components/Color";
import { TbGitCompare } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import Container from "../components/Container";
const SingleProduct = () => {
  const [orderedProduct, setorderedProduct] = useState(true);
  const copyToClipboard = (text) => {
    console.log("text", text);
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };
  return (
    <>
      <Meta title={"Product Name"} />
      <BreadCrumb title="Product Name" />
      <Container class1="main-product-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-6">
            <div className="main-product-image">
              <div>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb90fSfDzY1HmdiCUKHz4_Yk4qn83N8o-DYw&usqp=CAU"
                  alt="main-product-img"
                />
              </div>
              <div className="other-product-images d-flex flex-wrap gap-15">
                <div>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb90fSfDzY1HmdiCUKHz4_Yk4qn83N8o-DYw&usqp=CAU"
                    alt="product-img"
                    className="img-fluid"
                  />
                </div>
                <div>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb90fSfDzY1HmdiCUKHz4_Yk4qn83N8o-DYw&usqp=CAU"
                    alt="product-img"
                    className="img-fluid"
                  />
                </div>
                <div>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb90fSfDzY1HmdiCUKHz4_Yk4qn83N8o-DYw&usqp=CAU"
                    alt="product-img"
                    className="img-fluid"
                  />
                </div>
                <div>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb90fSfDzY1HmdiCUKHz4_Yk4qn83N8o-DYw&usqp=CAU"
                    alt="product-img"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="main-product-details">
              <div className="border-bottom">
                <h3 className="title">
                  Kids Headphones Bulk 10 pack Multi Colored For Students
                </h3>
              </div>
              <div className="border-bottom py-3">
                <p className="price">$100</p>
                <div className="d-flex align-items-center gap-10">
                  <ReactStars
                    count={5}
                    size={24}
                    value={3}
                    edit={false}
                    activeColor="#ffd700"
                  />
                  <p className="mb-0">( 2 Reviews )</p>
                </div>
                <a className="review-btn" href="#review">
                  Write a review
                </a>
              </div>
              <div className="border-bottom py-3">
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Type:</h3>
                  <p className="mb-0 product-data">Watch</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Brand:</h3>
                  <p className="mb-0 product-data">Havels</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Categories:</h3>
                  <p className="mb-0 product-data">Watch</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Tags:</h3>
                  <p className="mb-0 product-data">Tag</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Availablity:</h3>
                  <p className="mb-0 product-data">In Stock</p>
                </div>
                <div className="d-flex gap-10 flex-column my-2">
                  <h3 className="product-heading">Size:</h3>
                  <div className="d-flex flex-wrap gap-10">
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      S
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      M
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      XL
                    </span>
                  </div>
                </div>
                <div className="d-flex gap-10 flex-column my-2">
                  <h3 className="product-heading">Color:</h3>
                  <Color />
                </div>
                <div className="d-flex align-items-center gap-15 flex-row my-2">
                  <h3 className="product-heading">Quantity:</h3>
                  <div className="input-quantity">
                    <input
                      type="number"
                      name=""
                      id=""
                      min={1}
                      max={10}
                      style={{ width: "70px" }}
                      className="form-control"
                    />
                  </div>
                  <div className="d-flex align-items-center gap-30 ms-5">
                    <button className="button border-0">ADD TO CART</button>
                    <button className="button signup">BUY IT NOW</button>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <div className="d-flex gap-10 align-items-center">
                    <AiOutlineHeart className="fs-5" />
                    <Link to="">Add to Compare</Link>
                  </div>
                  <div className="d-flex gap-10 align-items-center">
                    <TbGitCompare className="fs-5" />
                    <Link to="">Add to Wishlist</Link>
                  </div>
                </div>
                <div className="d-flex flex-column gap-10  my-2">
                  <h3 className="product-heading">Shipping & Returns :</h3>
                  <p className="mb-0 product-data">
                    Free shipping and returns available on all orders! <br />
                    We ship all US domestic orders within
                    <b>5-10 business days!</b>
                  </p>
                </div>
                <div className="d-flex flex-column gap-10  my-2">
                  <h3 className="product-heading">Product Link :</h3>
                  <Link
                    to=""
                    onClick={() => {
                      copyToClipboard(
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb90fSfDzY1HmdiCUKHz4_Yk4qn83N8o-DYw&usqp=CAU"
                      );
                    }}
                  >
                    Copy Product Link
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="description-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3>Description</h3>
            <div className="bg-white p-3">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                accumsan turpis posuere curse. ut nunc justo, faucibus eget elit
                quis, vehicula rhoncus nulla. Phasellus convallis sem nec
                facilisis commodo. Fusce ut molestie turpis. Suspendisse aliquet
                sed massa in vulputate. Quisque gravida suscipit tincidunt.
              </p>
            </div>
          </div>
        </div>
      </Container>
      <Container id="review" class1="reviews-wrapper home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3>Reviews</h3>
            <div className="review-inner-wrapper">
              <div className="review-head d-flex justify-content-between align-items-end">
                <div>
                  <h4 className="mb-2">Customer Reviews</h4>
                  <div className="d-flex gap-10 align-items-center">
                    <ReactStars
                      count={5}
                      size={24}
                      value={3}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0">Based on 2 Reviews</p>
                  </div>
                </div>
                <div>
                  {orderedProduct && (
                    <Link
                      to=""
                      className="text-right text-dark text-decoration-underline"
                    >
                      Write a Review
                    </Link>
                  )}
                </div>
              </div>
              <div className="review-form py-4">
                <h4>Write a review</h4>
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <ReactStars
                      count={5}
                      size={24}
                      value={0}
                      edit={true}
                      activeColor="#ffd700"
                    />
                  </div>
                  <div>
                    <textarea
                      name=""
                      id=""
                      className="w-100 form-control"
                      color="30"
                      rows="4"
                      placeholder="Comments"
                    ></textarea>
                  </div>
                  <div className="d-flex justify-content-end">
                    <button className="button border-0">Submit Review</button>
                  </div>
                </form>
              </div>
              <div className="reviews mt-3">
                <div className="review">
                  <div className="d-flex gap-10 align-items-center justify">
                    <h6 className="mb-0">VanBinh</h6>
                    <ReactStars
                      count={5}
                      size={24}
                      value={3}
                      edit={false}
                      activeColor="#ffd700"
                    />
                  </div>
                  <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis preesentium voluptatum deleniti atque vero
                    eos et accusamus et iusto odio dignissimos ducimus qui
                    blanditiis preesentium voluptatum deleniti atque
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular Products</h3>
          </div>
        </div>
        <div className="row">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
    </>
  );
};

export default SingleProduct;
