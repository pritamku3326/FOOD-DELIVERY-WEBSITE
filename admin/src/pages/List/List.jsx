import React, { useEffect, useState } from 'react';
import './List.css';
import axios from 'axios';
import { toast } from "react-toastify"

const List = ({url}) => {

  const [list, setList] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [tempPrice, setTempPrice] = useState("");

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`);
    if(response.data.success){
      setList(response.data.data);
    }
    else{
      toast.error("Error")
    }
  }

  const removeFood = async(foodId) => {
    const response = await axios.post(`${url}/api/food/remove`,{id:foodId});
    await fetchList();
    if(response.data.success){
      toast.success(response.data.message);
    }
    else{
      toast.error("Error");
    }
  }

  const handleEditClick = (item) => {
    setEditingId(item._id);
    setTempPrice(item.price);
  };

  const handleSaveClick = async (id) => {
    try {
      const response = await axios.post(`${url}/api/food/update-price`, { id, price: tempPrice });
      if (response.data.success) {
        toast.success("Price updated successfully");
        setEditingId(null);
        await fetchList();
      } else {
        toast.error("Error updating price");
      }
    } catch (error) {
      toast.error("Error updating price");
    }
  };

  useEffect(() => {
    fetchList();
  },[])

  return (
    <div className='list add flex-col'>
      <p>All Foods List (Click price to edit)</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item,index)=>{
          return(
            <div key={index} id={index} className="list-table-format">
              <img src={`${url}/images/`+item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              {editingId === item._id ? (
                <div className="price-edit-container">
                  <input
                    type="number"
                    value={tempPrice}
                    onChange={(e) => setTempPrice(e.target.value)}
                    className="price-input"
                  />
                  <button onClick={() => handleSaveClick(item._id)} className="save-btn">✓</button>
                </div>
              ) : (
                <p onClick={() => handleEditClick(item)} className="price-text cursor">
                  ${item.price} ✎
                </p>
              )}
              <p onClick={()=>removeFood(item._id)} className='cursor'>X</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default List