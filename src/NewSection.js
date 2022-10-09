import React, { useState, useEffect } from "react";
import "./styles/NewSection.scss";
import PaginationButtonsRow from "./PaginationButtonsRow";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function NewSection() {
  const [items, setItems] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(null);
  const [pagesCount, setPagesCount] = useState(1);
  const [currentPage, setCurrentPage] = useState(null);
  const [currentItems, setCurrentItems] = useState([]);

  const productsData = useSelector((state) => state.new.productsData);

  useEffect(() => {
    setItems(productsData);
    setItemsPerPage(8);
    setCurrentPage(1);
  }, [productsData]);

  useEffect(() => {
    setPagesCount(Math.ceil(items.length / itemsPerPage));
    let newItems = items.slice(
      currentPage * itemsPerPage - itemsPerPage,
      currentPage * itemsPerPage
    );
    setCurrentItems(newItems);
  }, [itemsPerPage, currentPage, items]);

  function nextPage(e) {
    e.preventDefault();
    if (currentPage < pagesCount) {
      setCurrentPage(currentPage + 1);
    }
  }

  function prevPage(e) {
    e.preventDefault();
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  return (
    <>
      <div className="NewSection ">
        <div className="container">
          <hr />
          <h2>جدیدترین محصولات</h2>
          <hr className="mb-2" />
          <div className="new-pagination-container container ">
            <div className="items-container row">
              {currentItems.map((item, index) => {
                return (
                  <div className="item-wrapper col-6 col-lg-3 " key={index}>
                    <Link
                      to={`/products/${item.id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <div className="item">
                        <div className="item-image">
                          <img src={item.image} alt={item.name} />
                        </div>
                        <div className="item-details">
                          <span className="item-name">{item.name}</span>
                          <div className="price-wrapper">
                            <span>{item.price}</span>
                            <span>تومان</span>
                          </div>
                          <span className="item-btn btn btn-warning">
                            مشاهده و خرید
                          </span>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
            <PaginationButtonsRow
              currentPage={currentPage}
              pagesCount={pagesCount}
              nextPage={nextPage}
              prevPage={prevPage}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default NewSection;
