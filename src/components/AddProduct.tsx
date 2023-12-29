import React, { useState } from 'react'
import { addCart } from '../redux/dataSlice';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
const AddProduct : React.FC = () => {
    const dispatch = useDispatch(); 
    const navigate=useNavigate();
    const [title,setTitle]=useState("Title");
    const [rating,setRating]=useState(0);
    const [description,setDesc]=useState("Title");

    const handleClick=()=>{
        const product = { title, rating, description };
        dispatch(addCart(product));
        navigate("/dashboard");

    }
    
  return (
    <div className='add-container'>
        <div id="feedback-form">
            <h2 className="header">Add Product Details</h2>
            <div>
                <form>
                    <input type="text" name="title" placeholder="Title" onChange={(e)=>(setTitle(e.target.value))}></input>
                    <input type="text" name="desc" placeholder="Description" onChange={(e)=>(setDesc(e.target.value))}></input>
                    <input type="text" name="Rating" placeholder="Rating" onChange={(e)=>(setRating(parseInt(e.target.value)))}></input>
                    <button type="submit" onClick={handleClick}>Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default AddProduct