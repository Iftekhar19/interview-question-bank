import React from "react";
import { NavLink } from "react-router-dom";
import "./home.css";
// import { async } from "@firebase/util";

const Home = () => {
  return (
    <div className="home">
      <section className="top">
        <h1>hello codders</h1>
      </section>
      <section className="home-content">
        <section className="home-content-paragraph">
          <h1 className="header">
            welcome to the <span className="first">crack</span>
            <span className="second"> interviews</span>
          </h1>
          <p>
            hello codders welcome to this website ! this website is developed
            for codders to crack interviews easily in this website you will get
            all types of interview questions such as data structurs and
            algorithm,javascript,react js, node js and many more The purpose of
            develope this website is to help begginers as well as experience
            codders so that you don't need to search different different
            intervies questions in different diffrent website In this website
            you will be provided all interview question by category, that has
            been asked in the interviews by the industrial experts.....
          </p>
        </section>
        <section className="counter-section"> 
          <h2>get ready for next interview</h2>
          <section className="link-container">
            <NavLink to="/dsa" className="link">
              <h3 className="subject">data structures</h3>
              <h4>total questions</h4>
              <h2>{44}</h2>
            </NavLink>
            <NavLink to="/javascript" className="link">
              <h3 className="subject">javascript</h3>
              <h4>total questions</h4>
              <h2>{458}</h2>
            </NavLink>
            <NavLink to="/react" className="link">
              <h3 className="subject">react js</h3>
              <h4>total questions</h4>
              <h2>{0}</h2>
            </NavLink>
            <NavLink to="/node" className="link">
              <h3 className="subject">node js</h3>
              <h4>total questions</h4>
              <h2>{0}</h2>
            </NavLink>
          </section>
        </section>
      </section>
    </div>
  );
};

export default Home;
