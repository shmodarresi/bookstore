import React , {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import { authActions } from "../actions";

import SideBar from './SideBar';
import './dashboard.scss'

const DashboardLayout = ({children}) => {

    const [isActive , setIsActive] = useState(false);
    const loggedIn = useSelector((state) => state.authReducer.loggedIn);
    const dispatch = useDispatch();

    const sidebarOnClick = () => {
        setIsActive(!isActive)
    }

    const onLogoutClick = (e) => {
        e.preventDefault();
        dispatch(authActions.logout());
      };

    if(!loggedIn){
        return <Redirect to="/login" />
    }

    return (
        <div className="wrapper">
            <SideBar isActive={isActive}/>
            <div className="content">
                <nav className="navbar navbar-dark bg-dark">
                    <i className={"fas text-light pointer " + (isActive ? 'fa-times': 'fa-bars')} 
                        onClick={sidebarOnClick}></i>
                    <button className="btn btn-light" onClick={onLogoutClick} >Logout <i className="fas fa-sign-out-alt"></i></button>
                </nav>
                {children}
            </div>
        </div>
    )
}

export default DashboardLayout;