import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { productActions } from "../../actions";
import Loading from "../../components/loading/Loading";
import Alert from "../../components/alert/Alert";
import { numberFormat } from "../../services/common.service";

import "./product.scss";

const ProductsList = () => {
  const books = useSelector((state) => state.allProductsReducer);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productActions.getProducts());
  }, [dispatch]);


  return (
    <>
      {books.loading && <Loading />}
      {books.error && <Alert message={books.error} type="danger" />}
      {books.item && (
        <div className="list-group">
          {books.item.map((book) => (
            <Link
              to={'/book/'+ book.id}
              className="list-group-item list-group-item-action flex-column align-items-start pointer"
              key= {book.id}
            >
              <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{book.title}</h5>
                <span className="bold">{numberFormat(book.price)}</span>
              </div>
              <p className="mb-1">{book.subtitle}</p>
              <div className="d-flex w-100 justify-content-between">
                <small>{book.author}</small>
                <i className="fas fa-angle-right"></i>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default ProductsList;
