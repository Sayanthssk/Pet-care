import React from "react";
import { motion } from "framer-motion";
import "./LoginPage.css";
import IndexHeader from "./IndexHeader";
import { Link } from "react-router-dom";


const Login = () => {
  return (
    <div>
        <IndexHeader />
    <div className="container-fluid d-flex justify-content-center login-container">
      {/* Background Video */}
      <video autoPlay muted loop className="background-video">
        <source src="/dogo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Login Form */}
      <motion.div
        className="login-form"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="title">Welcome Back</h1>
        <form>
          <div className="input-container">
            <motion.input
              type="email"
              placeholder="Email"
              className="input-field"
              whileFocus={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <div className="input-container">
            <motion.input
              type="password"
              placeholder="Password"
              className="input-field"
              whileFocus={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <motion.button
            type="submit"
            className="login-button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Login
          </motion.button>
        </form>
        <p className="signup-link">
          Don't have an account? <Link to={'/docs'}>Sign up here</Link>
        </p>
      </motion.div>
    </div>
    </div>
  );
};

export default Login;
