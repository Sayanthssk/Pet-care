import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "./AdminDash.css";


const AdminSidebar = () => {
  return (
    <div>
        <div className="sidebar">
        <h2 className="sidebar-title">Admin Panel</h2>
        <ul className="nav flex-column">
          <li className="nav-item">
            <a href="#view-users" className="nav-link">
              <i className="bi bi-people"></i> View Users
            </a>
          </li>
          <li className="nav-item">
            <a href="#view-sellers" className="nav-link">
              <i className="bi bi-shop-window"></i> View Sellers
            </a>
          </li>
          <li className="nav-item">
            <a href="#view-shops" className="nav-link">
              <i className="bi bi-building"></i> View Shops
            </a>
          </li>
          <li className="nav-item">
            <a href="#view-doctors" className="nav-link">
              <i className="bi bi-person-badge"></i> View Doctors
            </a>
          </li>
          <li className="nav-item">
            <a href="#view-petcare" className="nav-link">
              <i className="bi bi-heart"></i> View Petcare
            </a>
          </li>
          <li className="nav-item">
            <a href="#view-complaints" className="nav-link">
              <i className="bi bi-exclamation-triangle"></i> View Complaints
            </a>
          </li>
          <li className="nav-item">
            <a href="#manage-blogs" className="nav-link">
              <i className="bi bi-journal"></i> Manage Blogs
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default AdminSidebar