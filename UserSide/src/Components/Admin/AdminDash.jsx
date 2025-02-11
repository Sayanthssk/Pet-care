import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AdminDash.css";
import AdminSidebar from "./AdminSidebar";

const AdminDash = () => {
  return (
    <div className="admin-dashboard d-flex">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main Content */}
      <div className="main-content p-4">
        <div className="welcome-section mb-4">
          <h1>Welcome, Admin</h1>
          <p>Manage your platform efficiently with quick access to all modules.</p>
        </div>

        {/* Grid of Cards */}
        <div className="row g-4">
          <div className="col-md-4">
            <div className="info-card shadow">
              <h4>Users</h4>
              <p>Manage platform users efficiently.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="info-card shadow">
              <h4>Sellers</h4>
              <p>Review and approve seller profiles.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="info-card shadow">
              <h4>Shops</h4>
              <p>Monitor shop details and analytics.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="info-card shadow">
              <h4>Doctors</h4>
              <p>Manage doctor registrations and approvals.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="info-card shadow">
              <h4>Petcare</h4>
              <p>Oversee petcare services and providers.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="info-card shadow">
              <h4>Complaints</h4>
              <p>Handle user complaints and feedback.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="info-card shadow">
              <h4>Blogs</h4>
              <p>Create, edit, and manage blogs.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDash;
