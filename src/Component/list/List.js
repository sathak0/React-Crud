import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import { useNavigate,Link } from "react-router-dom";

function List(){
    const [user,setUser]=useState([]);

    const navigate=useNavigate()
    const getAllUser=async ()=>{
      await axios.get("http://localhost:8080/user").then
      ((res)=>{
        console.log(res.data);
        setUser(res.data);
      })
    };
  
    useEffect(()=>{
      getAllUser();
    },[]);

    const onEdit=(data)=>{
      navigate("/add",{state:{data}})
    }
    const deleteData=(id)=>{
      axios.delete(`http://localhost:8080/user/${id}`);
      getAllUser();
    }

    return(
        <div>
             <button> <Link to="/add"> Add</Link>   </button>
     <table className="table table-striped">
      <thead>
        <tr>
        <th>S.NO</th>
        <th>Name</th>
        <th>Age</th>
         <th>City</th>
         <th>Actions</th>
         </tr>
      </thead>
      <tbody>
      {user.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.city}</td>
              <td>
                <button onClick={()=>{onEdit(user)}}>Edit</button>
                <button onClick={()=>{deleteData(user.id)}}>Delete</button>
              </td>
            </tr>
          ))}
      </tbody>
     </table>
        </div>
    )
}
export default List;