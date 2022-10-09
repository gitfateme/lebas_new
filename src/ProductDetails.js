import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import MyNav from "./MyNav";
import MobileNav from "./MobileNav";
import Footer from "./Footer";
import "./styles/ProductDetails.scss";
import { Form, Label, Input, Button } from "reactstrap";
import { Link } from "react-router-dom";

export default function ProductDetails() {
  const [product, setProduct] = useState(null);
  const id = useParams().productId;
  const data = useSelector((state) => state.new.productsData);
  useEffect(() => {
    setProduct(data[id - 1]);
  }, [data, id]);
  if (product) {
    return (
      <>
        <div className="Header row">
          <div className="colored-top-bar">
            <h1 className="text-center pt-3">
              <Link to="/" style={{ textDecoration: "none", color: "#45424e" }}>
                فروشگاه لباس مینو
              </Link>
            </h1>{" "}
            <MyNav />
            <MobileNav />
          </div>
        </div>
        <div className="container ">
          <div className="row pt-md-5">
            <div className="col-12 col-md-6  order-md-2">
              <div className="row p-md-5">
                <img src={product.image} alt={product.name}></img>
              </div>
            </div>
            <div className="col-12 col-md-6 text-end pt-3 order-md-1 my-md-5">
              <h2 className="mb-3 mb-md-5">{product.name}</h2>
              <div className="d-flex flex-row-reverse">
                <span className="price-span">{product.price}</span>
                <span className="me-1">تومان</span>
              </div>
              <Form>
                <div className="row mt-md-5 mt-3">
                  <div className="col-12 col-md-6">
                    <Label for="colorSelect">انتخاب رنگ</Label>
                    <Input
                      id="colorSelect"
                      type="select"
                      name="select"
                      className="text-end"
                    >
                      <option>آبی</option>
                      <option>مشکی</option>
                      <option>صورتی</option>
                    </Input>
                  </div>
                  <div className="col-12 col-md-6">
                    <Label for="sizeSelect">انتخاب سایز</Label>
                    <Input
                      id="sizeSelect"
                      type="select"
                      name="select"
                      className="text-end"
                    >
                      <option>M</option>
                      <option>L</option>
                      <option>XL</option>
                      <option>XXL</option>
                    </Input>
                  </div>
                </div>
                <Button color="warning" className="mt-md-5 my-3 p-3 ">
                  افزودن به سبد خرید
                </Button>
              </Form>
              <Link to="/">برگشت به صفحه اصلی</Link>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  } else {
    return "Not Found";
  }
}
