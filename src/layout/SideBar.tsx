import React from "react";
import { Link } from "react-router-dom";

const SideBar = ({isActive}) => {
    return (
        <section className={"sidebar bg-dark fex-col " + (isActive ? 'active' : '')} >
            <header>
                Shohreh Modarresi
            </header>
            <div className="nav-list">
                <Link to="/user"><i className="fas fa-user"></i> User</Link>
                <Link to="/blog"><i className="far fa-clipboard"></i> Article</Link>
                <Link to="/comment"><i className="fas fa-comments"></i> Comments</Link>
            </div>
        </section>
    )
}

export default SideBar;