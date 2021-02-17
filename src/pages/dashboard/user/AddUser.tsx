import React, { Fragment, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ModalTemplate from "../../../components/modal/Modal";
import { userActions } from "../../../actions";
import Loading from "../../../components/loading/Loading";
import Alert from "../../../components/alert/Alert";

const AddUser = (userSelected) => {
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
  });
  const [showModal, setShowModal] = useState(false);
  const [showBtn, setShowBtn] = useState(true);

  const newUser = useSelector((state) => state.addUserReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if(userSelected){
      setInputs(userSelected);
    }
  },[userSelected]);

  const onInputChanges = (e) => {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

  const onSubmit = () =>{
      dispatch(userActions.addUser(inputs));
      setShowBtn(false);
  }

  const onHideModal = () => {
    setShowModal(false);
  };

  return (
    <Fragment>
      { !userSelected && <button className="btn btn-success" onClick={() => setShowModal(true)}>
        <i className="fas fa-plus"></i> Add new user
      </button>}

      { userSelected && <button className="btn btn-primary ml-2" ><i className="fas fa-pen"></i> Update</button>}
      <ModalTemplate
        closeModalText="Submit"
        title="Add User"
        show={showModal}
        closeModalFunc={onHideModal}
        onSubmit={onSubmit}
        showBtn={showBtn}
      >
        {newUser.loading && <Loading />}
        {newUser.error && <Alert message={newUser.error} type="danger" />}
        {newUser && Object.keys(newUser).length === 0 && <form className="form-container">
          <div className="form-group">
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              value={inputs.firstName}
              onChange={onInputChanges}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={inputs.lastName}
              onChange={onInputChanges}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={inputs.username}
              onChange={onInputChanges}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={inputs.password}
              onChange={onInputChanges}
            />
          </div>
        </form>}
      </ModalTemplate>
    </Fragment>
  );
};

export default AddUser;
