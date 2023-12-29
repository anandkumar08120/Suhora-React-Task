import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import Card from "./Card";

import { useDispatch } from "react-redux";
import { Setfilter } from "../redux/dataSlice";
import { useNavigate } from "react-router-dom";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/AddProduct");
  };
  const cartData = useSelector((state: RootState) => state.cart.cartData);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const username = useSelector(
    (state: RootState) => state.user.userData["userName"]
  );

  const filteredData = cartData.filter((item) =>
    item.description.includes(searchTerm)
  );

  return (
    <>
      <div className="navbar">
        <h1>Hello {username}</h1>

        <ul className="flex">
          <button onClick={handleClick}>Add Product</button>
          <li>
            {" "}
            <input
              placeholder="Search"
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
            ></input>
            <button>Search</button>
          </li>
        </ul>
      </div>
      <div className="container">
        {filteredData.map((e: any) => (
          <Card {...e}></Card>
        ))}
      </div>
    </>
  );
};
//
export default Dashboard;
