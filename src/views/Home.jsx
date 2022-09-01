import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import "../styles/css/homepage.css";
import slowspace from "../styles/images/slowspace.mp4";
export default function Home() {
  return (
    <div className="home">
      <div className="overlay"></div>
      <video src={slowspace} autoPlay loop muted></video>
      <div className="content">
        <h1>Explore Our Galaxy</h1>
        <Link to={"/pod"} className="btn btn-primary">
          See Photos
        </Link>
      </div>
      <Footer />
    </div>
  );
}
