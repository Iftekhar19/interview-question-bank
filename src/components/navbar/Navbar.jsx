import React, { useState } from "react";
import {NavLink} from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
    let [tog, setTog]=useState(false);
  return (
    <>
      <nav className="navbar">
        <section className="logo">
          {/* <a href="#"><span className="first">crack</span><span className="second">interviews</span></a> */}
          <NavLink to="/"><span className="first">crack</span><span className="second">interviews</span></NavLink>
        </section>
        <section className="nav-list dp-none">
           <ul className="list">
            <li><NavLink to="/" style={({isActive})=>{return {backgroundColor:isActive?"rgba(255,255,255,0.6)":"",color:isActive?"black":"",borderRadius:isActive?"10px":""} }}>Home</NavLink></li>
            <li><NavLink to="dsa" style={({isActive})=>{return {backgroundColor:isActive?"rgba(255,255,255,0.6)":"",color:isActive?"black":"",borderRadius:isActive?"10px":""} }}>dsa</NavLink></li>
            <li><NavLink to="javascript" style={({isActive})=>{return {backgroundColor:isActive?"rgba(255,255,255,0.6)":"",color:isActive?"black":"",borderRadius:isActive?"10px":""} }}>javascript</NavLink></li>
            <li><NavLink to="react" style={({isActive})=>{return {backgroundColor:isActive?"rgba(255,255,255,0.6)":"",color:isActive?"black":"",borderRadius:isActive?"10px":""} }}>react js</NavLink></li>
            <li><NavLink to="node" style={({isActive})=>{return {backgroundColor:isActive?"rgba(255,255,255,0.6)":"",color:isActive?"black":"",borderRadius:isActive?"10px":""} }}>node js</NavLink></li>
            <li><NavLink to="add" style={({isActive})=>{return {backgroundColor:isActive?"rgba(255,255,255,0.6)":"",color:isActive?"black":"",borderRadius:isActive?"10px":""} }}>add new</NavLink></li>
           </ul>
        </section>
        {
          ( tog && 
        
        <section className="nav-list">
           <ul className="list">
           <li><NavLink to="/" style={({isActive})=>{return {backgroundColor:isActive?"rgba(255,255,255,0.6)":"",color:isActive?"black":"",borderRadius:isActive?"10px":""} }} onClick={()=>setTog(false)}>Home</NavLink></li>
            <li><NavLink to="dsa" style={({isActive})=>{return {backgroundColor:isActive?"rgba(255,255,255,0.6)":"",color:isActive?"black":"",borderRadius:isActive?"10px":""} }} onClick={()=>setTog(false)}>dsa</NavLink></li>
            <li><NavLink to="javascript" style={({isActive})=>{return {backgroundColor:isActive?"rgba(255,255,255,0.6)":"",color:isActive?"black":"",borderRadius:isActive?"10px":""} }} onClick={()=>setTog(false)}>javascript</NavLink></li>
            <li><NavLink to="react" style={({isActive})=>{return {backgroundColor:isActive?"rgba(255,255,255,0.6)":"",color:isActive?"black":"",borderRadius:isActive?"10px":""} }} onClick={()=>setTog(false)}>react js</NavLink></li>
            <li><NavLink to="node" style={({isActive})=>{return {backgroundColor:isActive?"rgba(255,255,255,0.6)":"",color:isActive?"black":"",borderRadius:isActive?"10px":""} }} onClick={()=>setTog(false)}>node js</NavLink></li>
            <li><NavLink to="add" style={({isActive})=>{return {backgroundColor:isActive?"rgba(255,255,255,0.6)":"",color:isActive?"black":"",borderRadius:isActive?"10px":""} }} onClick={()=>setTog(false)}>add new</NavLink></li>
           </ul>
        </section>)}
        <section className="menu">
            {tog?(<i class="fa-solid fa-xmark fa" onClick={()=>setTog(!tog)}></i>):( <i class="fa-sharp fa-solid fa-bars fa" onClick={()=>setTog(!tog)}></i>)}
       
        
        </section>
      </nav>
    </>
  );
};

export default Navbar;
