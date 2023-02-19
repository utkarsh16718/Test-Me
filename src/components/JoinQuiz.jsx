import axios from 'axios'
import { useNavigate } from "react-router-dom";
import React, { useContext, useState } from 'react'
import { GameStateContext } from '../components/context/Context';


function JoinQuiz() {
    const [roomid, setroomid] = useState('')
    const navigate = useNavigate();


    const { addQuestionSet, setaddQuestionSet } = useContext(GameStateContext)

    const handlechange = (e) => {
        setroomid(e.target.value)
    }
    const handleClick = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.get(`http://localhost:4000/creatQuiz?_id=${roomid}`)
            if (res.status === 201) {
                setaddQuestionSet(res.data)
                console.log(addQuestionSet)
                navigate(`/quiz`);
            }
        } catch (error) {
            window.alert(error.response.data)
        }
    }
    return (
        <>
            <input type="text" value={roomid} onChange={handlechange} placeholder='Enter Room Code' />
            <br />
            <button className="btn mt-4" onClick={handleClick} >Join Room</button>
        </>
    )
}

export default JoinQuiz