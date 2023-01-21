import React, { useEffect, useState } from "react";
import "./Datapage.css";
import { useParams } from "react-router-dom";
import Spinner from "../external/Spinner";
import allMethods from "../external/services";

const Datapage = () => {
  const [spin, setSpin] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [dsCaregory, setDsCategory] = useState("");
  const [allData, setAllData] = useState([]);
  const useparam = useParams();
  useEffect(() => {
    (async function () {
      try {
        const data = await allMethods.getQuestions();
        await setAllData(
          data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        );
      } catch (err) {
        alert(err);
      }
      setTimeout(() => {
        setSpin(true);
      }, 500);
    })();
  }, []);
  return (
    <div className="datapage">
      {spin ? (
        <div className="datapage-frame">
          <h3 className="frame-header">
            Interview questions of {useparam.datapage.toUpperCase()}
          </h3>
          <form action="">
          <div className="search-box">
            <div className="group">
            <p>Search By Name:</p>
            <input
              type="text"
              value={searchText}
              placeholder="Type Name..."
              onChange={(event) => {
                setSearchText(event.target.value);
              }}
            />
            </div>
            {useparam.datapage === "dsa" ? (
              <div className="group">
              <div className="dsafilter">
                <p>Select Category:</p>
                <select
                  name="dsaCategory"
                  id=""
                  onChange={(e) => setDsCategory(e.target.value)}
                >
                  <option value="">All</option>
                  <option value="Dsa 1">DSA 1</option>
                  <option value="Dsa 2">DSA 2</option>
                  <option value="Dsa 3">DSA 3</option>
                  <option value="Dsa 4">DSA 4</option>
                </select>
              </div>
              <input type="reset" onClick={()=>{setSearchText("");setDsCategory("")}} value="Reset All" className="reste"/>
              </div>
            ) :""}
          </div>
          </form>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Sr No</th>
                  <th>Question</th>
                  <th>Interviewer's Name</th>
                  <th>category</th>
                  <th>Level</th>
                </tr>
              </thead>
              <tbody>
                {useparam.datapage !== "dsa"
                  ? allData
                      .filter((ele) => {
                        return ele.category
                          .toLocaleLowerCase()
                          .includes(useparam.datapage.toLocaleLowerCase());
                      })
                      .filter((e) => {
                        return e.Iname.toLocaleLowerCase().includes(
                          searchText.toLocaleLowerCase()
                        );
                      })
                      .map((ele, ind) => {
                        return (
                          <tr key={ind + 1}>
                            <td className="firstData">{ind + 1}</td>
                            <td>{ele.question}</td>
                            <td className="thirdData">{ele.Iname}</td>
                            <td className="fourthData">{ele.category}</td>
                            <td className="fifthData">
                              {ele.level ? ele.level : "not specified"}
                            </td>
                          </tr>
                        );
                      })
                  : allData
                      .filter((e) => {
                        return e.category
                          .toLocaleLowerCase()
                          .includes(dsCaregory.toLocaleLowerCase());
                      })
                      .filter((ele) => {
                        return ele.category
                          .toLocaleLowerCase()
                          .includes(useparam.datapage.toLocaleLowerCase());
                      })
                      .filter((e) => {
                        return e.Iname.toLocaleLowerCase().includes(
                          searchText.toLocaleLowerCase()
                        );
                      })
                      .map((ele, ind) => {
                        return (
                          <tr key={ind + 1}>
                            <td className="firstData">{ind + 1}</td>
                            <td>{ele.question}</td>
                            <td className="thirdData">{ele.Iname}</td>
                            <td className="fourthData">{ele.category}</td>
                            <td className="fifthData">
                              {ele.level ? ele.level : "not specified"}
                            </td>
                          </tr>
                        );
                      })}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default Datapage;
