import "./random-search.css";
import React, { useContext } from "react";
import ReRenderContext from "../../context/reRender.context";
import logo from "../../../assets/exchange.png";
import { useNavigate } from "react-router-dom";

export const RandomSearch = () => {
  const { handleReRender } = useContext(ReRenderContext);
  let history = useNavigate();
  function handleClick() {
    history("/home");
    handleReRender();
  }
  return (
    <>
      <div onClick={handleClick} className="containerRandomSearch">
        <p>random</p>
        <img src={logo} alt="rendomLogo" />
      </div>
    </>
  );
};
