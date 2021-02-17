import React, { Fragment, useEffect , useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { userActions } from "../../../actions";
import Loading from "../../../components/loading/Loading";
import Alert from "../../../components/alert/Alert";
import AddUser from "./AddUser";
// import hamachi from '../../apis/hamachi';

const UserList = () => {
  const users = useSelector((state) => state.allUsersReducer);
  const [selectItems,setSelectItems] = useState<string[]>([]);


  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userActions.getUsers());
  }, [dispatch]);

  const onSelectUser = (e ,id) =>{
    selectItems.includes(id) ? setSelectItems(old => old.filter(row => row !== id)) : setSelectItems([...selectItems , id]);
  }

  const onSelectAllUser = () =>{
    const ids = users.item.map(i => i.id);
    selectItems.length === users.item.length ? setSelectItems([]) : setSelectItems(ids);
  }

  const onDeleteUser = () =>{
    dispatch(userActions.deleteUser(selectItems[0]));
    setSelectItems([]);
  }

  return (
    <div className="container-fluid py-4">
      {users.loading && <Loading />}
      {users.error && <Alert message={users.error} type="danger" />}
      {users.item && (
        <div>
          <div className="btn-container d-flex my-3">
            <AddUser />
            {selectItems.length === 1 && 
              <>
                <button className="btn btn-danger ml-auto" onClick={onDeleteUser}><i className="fas fa-trash-alt"></i> Delete</button>
                <AddUser userSelected={users.filter(row => row.contains(selectItems[0]))} />
              </>}
          </div>
          <table className="table table-hover">
            <thead>
              <tr>
                <th><input type="checkbox" checked={selectItems.length === users.item.length} onChange = {onSelectAllUser} /></th>
                <th>Firstname <i className="fas fa-sort-amount-up-alt"></i></th>
                <th>Lastname</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {users.item.map((user) => (
                <tr key={user.id} >
                  <th>
                    <input type="checkbox"  
                           onChange = {(e) => onSelectUser(e , user.id)}
                           checked = {selectItems.includes(user.id)} />
                  </th>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.username}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default UserList;
