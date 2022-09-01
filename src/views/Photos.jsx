import axios from "axios";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import "../styles/css/photos.css";
export default function Photos(props) {
  let [date, setDate] = useState(props.defaultDate);
  let [picture, setPicture] = useState(null);
  let [vid, setVid] = useState(null);
  let [description, setDescription] = useState(null);
  let [loaded, setLoaded] = useState(false);
  const handleNasaResponse = (response) => {
    if (response.data.media_type === "image") {
      setPicture(response.data.hdurl);
    } else {
      setPicture = null;
      console.log(response.data.media_type);
    }
    if (response.data.media_type === "video") {
      setVid(response.data.url);
    } else {
      setVid = null;
      console.log(response.data.media_type);
    }

    setDescription(response.data.explanation);
  };
  const search = () => {
    let My_Key_NASA = "RIhyWRtP7xMIZLYMR1TaUHb8OeQhn6ScyzolebwZ";
    let apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${My_Key_NASA}&date=${date}`;
    axios.get(apiUrl).then(handleNasaResponse);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    search();
  };
  const handleNewDate = (e) => {
    setDate(e.target.value);
  };
  const load = () => {
    setLoaded(true);
    search();
  };
  if (loaded) {
    return (
      <div className="container-fluid">
        <h1>Picture Of The Day</h1>
        <div className=" container d-flex header">
          {" "}
          <Link to={"/"} className="btn btn-primary">
            Home
          </Link>
          <form onSubmit={handleSubmit}>
            <input
              type="date"
              onChange={handleNewDate}
              defaultValue={props.defaultDate}
              className="mx-2"
            />
            <input type="submit" className="btn btn-primary" />
          </form>
        </div>

        <section className="d-flex">
          {!picture ? (
            ""
          ) : (
            <div className="container">
              <img src={picture} alt="" className="rounded fit" />
            </div>
          )}
          {!vid ? (
            ""
          ) : (
            <iframe width="420" height="315" src={vid} title="video"></iframe>
          )}

          {!description ? (
            ""
          ) : (
            <p className=" fluid descr m-5 p-3 w-75">{description}</p>
          )}
        </section>
        <Footer />
      </div>
    );
  } else {
    load();
    return "loading";
  }
}
