import React, { useEffect } from "react";
import axios from "axios";
import {useState} from "react";
import { useNavigate,useLocation } from "react-router-dom";

function Add(){

    const [datas,setDatas]=useState({name:'',age:'',city:''})
    const [isupdate,setUpdate] = useState(false);
    const navigate=useNavigate();
    const location=useLocation();
    

    

    useEffect(()=>{
        if(location.state){
            setDatas(location.state.data);
            setUpdate(true);
        }
    },[]);

    


    const handleData=(e)=>{
        const {name,value}=e.target;
        setDatas({...datas,[name]:value});
    }

    const onSubmit=async ()=>{
        if(isupdate){
            await axios.put("http://localhost:8080/user",datas);
        }
        else{
            await axios.post("http://localhost:8080/user",datas);
            navigate("/list");
        }

    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                




                <input type="text" name="name" onChange={handleData} placeholder="Name" value={datas.name} />
                <input type="number" name="age" onChange={handleData} value={datas.age} placeholder="Age" />
                <input type="text" name="city" value={datas.city} onChange={handleData} placeholder="city" />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
export default Add;