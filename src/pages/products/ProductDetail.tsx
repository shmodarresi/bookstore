import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { productActions } from "../../actions";
import { numberFormat } from "../../services/common.service";
import Loading from "../../components/loading/Loading";
import Alert from "../../components/alert/Alert";
import PurchaseForm from "../purchase/PurchaseForm";

const ProductDetail = (props) => {
  const id = props.match.params.id;
  const book = useSelector((state) => state.productReducer);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productActions.getProduct(id));
  }, [dispatch, id]);

  return (
    <>
      {book.loading && <Loading />}
      {book.error && <Alert message={book.error} type="danger" />}
      {book.item && (
        <div className="card p-4">

            <div className="row">
              <div className="preview col-md-6">
                <img src={process.env.PUBLIC_URL + book.item.image} alt={book.item.title} />
              </div>
              <div className="details col-md-6">
                <h3 className="product-title">{book.item.title}</h3>
                <div className="rating">
                  <div className="stars">
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star"></span>
                    <span className="fa fa-star"></span>
                  </div>
                  <span className="review-no">41 reviews</span>
                </div>
                <p className="product-description py-4">
                    {book.item.description}
                </p>
                <h4 className="price">
                
                  current price: <span>{numberFormat(book.item.price)}</span>
                </h4>

               <div className="action">
               <button className="add-to-cart btn btn-warning disabled mr-2" type="button">
                    add to cart
                  </button>
                  <PurchaseForm bookId={book.item.id} />
                  {/* <button className="btn btn-primary" type="button">
                    checkout
                  </button> */}
                </div>
              </div>
            </div>
          
        </div>
      )}
    </>
  );
};

export default ProductDetail;
