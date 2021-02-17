import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import ModalTemplate from "../../components/modal/Modal";
import { orderActions } from "../../actions";
import Loading from "../../components/loading/Loading";
import Alert from "../../components/alert/Alert";

const PurchaseForm = ({bookId}) => {
  const [inputs, setInputs] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
    book_id: bookId,
  });
  const [showModal, setShowModal] = useState(false);
  const [showBtn, setShowBtn] = useState(true);

  const newOrder = useSelector((state) => state.orderReducer);
  const dispatch = useDispatch();

  const onInputChanges = (e) => {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

  const onSubmit = () =>{
      dispatch(orderActions.addOrder(inputs));
      setShowBtn(false);
  }

  const onHideModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <button className="btn btn-success" onClick={() => setShowModal(true)}>
        checkout
      </button>
      <ModalTemplate
        closeModalText="Submit"
        title="Add order"
        show={showModal}
        closeModalFunc={onHideModal}
        onSubmit={onSubmit}
        showBtn={showBtn}
      >
        {newOrder.loading && <Loading />}
        {newOrder.error && <Alert message={newOrder.error} type="danger" />}
        {newOrder.item && <Alert message="Order Successful" type="success"/>}
        {newOrder && Object.keys(newOrder).length === 0 && <form className="form-container">
          <div className="form-group">
            <input
              type="text"
              placeholder="Name"
              name="fullName"
              value={inputs.fullName}
              onChange={onInputChanges}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Address"
              name="address"
              value={inputs.address}
              onChange={onInputChanges}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Phone Number"
              name="phoneNumber"
              value={inputs.phoneNumber}
              onChange={onInputChanges}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Email"
              name="email"
              value={inputs.email}
              onChange={onInputChanges}
            />
          </div>
        </form>}
      </ModalTemplate>
    </>
  );
};

export default PurchaseForm;
