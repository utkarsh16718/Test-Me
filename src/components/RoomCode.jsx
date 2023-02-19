import React from 'react'
import { useContext } from 'react'
import { GameStateContext } from './context/Context'
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function RoomCode() {
    const navigate = useNavigate();
    const { id } = useParams();
    const { code, setCode } = useContext(GameStateContext);
    const Handlehome=()=>{
        navigate(`/home/${id}`);
    }
  return (
    <>
    <h2>Room Code</h2>
       <h3>{code}</h3>
       <button onClick={Handlehome}>Menu</button>

    </>
  )
}

export default RoomCode;