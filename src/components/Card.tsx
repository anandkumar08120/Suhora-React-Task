import React from "react";
import { useDispatch } from "react-redux";
import { removeCart } from "../redux/dataSlice";

interface CardProps {
  title: string;
  rating: number;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, rating, description }) => {
  const dispatch = useDispatch();
  const handledelete = () => {
  const productToRemove: CardProps = { title, rating, description };
  dispatch(removeCart(productToRemove));
  };
  return (
    <>
      <div className="card">
        <img
          src={
            "https://cdn.pixabay.com/photo/2016/11/29/06/18/home-office-1867761_1280.jpg"
          }
          alt=""
        ></img>
        <h3>Title: {title}</h3>
        <h3>Description: {description.slice(0, 20) + "..."}</h3>
        <h4>Rating: {rating}</h4>
        <button onClick={handledelete}>Delete</button>
      </div>
    </>
  );
};

export default Card;
