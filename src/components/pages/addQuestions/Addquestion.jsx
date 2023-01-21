import React, { useState } from "react";
import "./addquestions.css";
import allmethods from "../external/services";

const Addquestion = () => {
  const [formData, setFormData] = useState({
    category: "",
    level: "",
    Iname: "",
    question: "",
  });
  const changeHandler = (event) => {
    let { name, value } = event.target;
    setFormData((old) => {
      return { ...old, [name]: value };
    });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    if (formData.category !== "") {
      try {
        await allmethods.addQuestion(formData);

        setFormData((old)=>
        {
          return {
            ...old,
            question:""
          }
        });
        alert("added");
      } catch (err) {
        alert("something wrong please try again later");
      }
    } else {
      alert("please choose category");
    }
  };
  return (
    <div className="add-question">
      <h2 className="headerform">add new questions</h2>
      <div className="form-container">
        {/* <div className="container"> */}
        <form
          action=""
          className="form"
          onSubmit={submitHandler}
          autoComplete="off"
        >
          <div className="cont">
            <label htmlFor="subjecr" className="label-items">
              please choose category *
            </label>
            <select
              name="category"
              id="subject"
              className="items"
              onChange={changeHandler}
              value={formData.category}
            >
              <option value="">CHOOSE CATEGORY</option>
              <option value="dsa 1">DSA 1</option>
              <option value="dsa 2">DSA 2</option>
              <option value="dsa 3">DSA 3</option>
              <option value="dsa 4">DSA 4</option>
              <option value="javascript">JAVASCRIPT</option>
              <option value="react">REACT JS</option>
              <option value="node">NODE JS</option>
            </select>
          </div>
          <div className=" cont">
            <label htmlFor="difficulty" className="label-items">
              please choose difficulty *
            </label>
            <select
              name="level"
              id="difficulty"
              className="items"
              onChange={changeHandler}
              value={formData.difficulty}
            >
              <option value="">CHOOSE DIFFICULTY</option>
              <option value="easy">EASY</option>
              <option value="medium">MEDIUM</option>
              <option value="hard">HARD</option>
              <option value="chellenge">CHELLENGE</option>
            </select>
          </div>
          <div className=" cont">
            <label htmlFor="name" className="label-items">
              please enterviewer's name *
            </label>
            <input
              id="name"
              className="items"
              name="Iname"
              value={formData.Iname}
              onChange={changeHandler}
              placeholder="ENTERVIEWER'S NAME"
              required
            />
          </div>
          <div className=" cont">
            <label htmlFor="questions" className="label-items">
              please enter question *
            </label>
            <textarea
              id="name"
              className="items"
              name="question"
              value={formData.question}
              onChange={changeHandler}
              placeholder="ENTER QUESTIONS  ONLY 1 QUESTIONS AT A TIME"
              style={{ resize: "vertical", minHeight: "200px" }}
              required
            />
          </div>
          <div className="cont btnGroupForForm">
            <input type="submit" value="Submit" classname="submitBtn" />
            <input
              type="reset"
              value="Clear"
              onClick={() =>
                setFormData({
                  category: "",
                  difficulty: "",
                  Iname: "",
                  question: "",
                })
              }
              classname="clrBtn"
            />
            <input type="button" value="Go Back" classname="backBtn" />
          </div>
        </form>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Addquestion;
