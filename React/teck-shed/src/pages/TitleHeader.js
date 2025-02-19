import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./TitleHeader.css";
import { UserOutlined, HeartOutlined, ShoppingCartOutlined} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
export const TitleHeader = () => {
  const navigate = useNavigate();
  return (
    <div>
        <div className="container-fluid title-main-container">
          <div className='title-left-container'>
          <a className="navbar-brand" onClick={() => navigate("/")} href=''>TeckShed</a>
            <div className="input-group w-50 title-search">
                <input type="search" className="form-control" placeholder="Search..." aria-label="Search" aria-describedby="button-addon2"/>
                <button className="btn btn-outline-secondary" type="button" id="button-addon2"><i className="bi bi-search"></i></button>
            </div>
          </div>
            <div className='title-right-container'>
            <a><UserOutlined className='userLogin'/> &nbsp; Log In</a>
            <a><HeartOutlined style={{fontSize:"20px"}} /></a>
            <a><ShoppingCartOutlined style={{fontSize:"25px"}}/></a>
            </div>
        </div>
    </div>
  )
}