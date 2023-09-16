import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import prodcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";
import watch from "../images/watch.jpg";
import watch2 from "../images/camera.jpg";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";
const ProductCard = (props) => {
  let location = useLocation();
  const { grid } = props;
  return (
    <div
      className={` ${
        location.pathname === "/product" ? `col-${grid}` : "col-2"
      }`}
    >
      <Link
        to={`${location.pathname !== "/product" ? "product/:id" : ":id"}`}
        className="product-card position-relative"
      >
        <div className="wishlist-icon position-absolute">
          <button className="border-0 bg-transparent">
            <img src={wish} alt="wishlist icon" />
          </button>
        </div>
        <div className="product-image">
          <img src={watch} className="img-fluid" alt="product card" />
          <img src={watch2} className="img-fluid" alt="product card" />
        </div>
        <div className="product-details">
          <h6 className="brand">Havels</h6>
          <h5 className="product-title">
            Kids headphones bulk 10 pack multi colored for students
          </h5>
          <ReactStars
            count={5}
            size={24}
            value={3}
            edit={false}
            activeColor="#ffd700"
          />
          <h4 className="description">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis preesentium voluptatum deleniti atque vero eos et
            accusamus et iusto odio dignissimos ducimus qui blanditiis
            preesentium voluptatum deleniti atque
          </h4>
          <p className="price">$100.00</p>
        </div>
        <div className="action-bar position-absolute">
          <div className="d-flex flex-column">
            <button className="border-0 bg-transparent">
              <img src={prodcompare} alt="compare" />
            </button>
            <button className="border-0 bg-transparent">
              <img src={view} alt="view" />
            </button>
            <button className="border-0 bg-transparent">
              <img src={addcart} alt="add card" />
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
