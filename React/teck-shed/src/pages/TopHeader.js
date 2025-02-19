import "bootstrap/dist/css/bootstrap.css";
import React from 'react'
import {TruckOutlined} from '@ant-design/icons'
import './TopHeader.css'
import { useNavigate } from "react-router-dom";
export const TopHeader = () => {
  const navigate = useNavigate();
  return (
    <div>
        <nav className='navbar bg-dark navbar-expand-lg border-bottom border-body data-bs-theme="dark"'>
              <div className="container-fluid topHeaderFull">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="logo-area">
                    <TruckOutlined style={{ fontSize: "24px" }} className="text-light" />
                    <div className="text-light">Free Shipping for orders over $50</div> 
                </div>  
                  <div>
                  <ul className="navbar-nav me-auto mb-0 mb-lg-0 navigationLinks">
                    <li className="nav-item">
                    <a className={`nav-link text-light`}  onClick={() => navigate("/about")}>About</a>
                    </li>
                    <li className="nav-item">
                    <a className={`nav-link text-light`} onClick={() => navigate("/contact")}>Contact</a>
                    </li>
                    <li className="nav-item">
                      <a className={`nav-link text-light`} onClick={() => navigate("/help")}>Help Center</a>
                    </li>
                    <li className="nav-item">
                      <a className={`nav-link text-light`} href="">Call Us 123-456-7890</a>
                    </li>
                  </ul>
                  </div>
                </div>
              </div>
        </nav>
    </div>
  )
}
