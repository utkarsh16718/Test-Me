import React, { useEffect } from 'react'
import { useContext } from 'react'
import { GameStateContext } from '../context/Context'
import axios from 'axios'
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function ViewQuestion() {
    const navigate = useNavigate();
    const { id } = useParams();
    const { allQuestions, setAllQuestions, code, setCode, createRoom, setcreateRoom } = useContext(GameStateContext);
    const handleSubmit = async () => {
        try {
            const res = await axios.get(`http://localhost:4000/questions?teacherId=${id}`);
            setAllQuestions(res.data);
        } catch (error) {
            navigate(-1);
        }
    }

    const handlecheckbox = (e) => {
        const { value, checked } = e.target;
        console.log(value, checked);
        if (checked) {
            setcreateRoom([...createRoom, value]);

        } else {
            setcreateRoom(createRoom.filter((e) => e !== value));
        }
        console.log(createRoom);
    }
    const handleSubmitCheck = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`http://localhost:4000/creatroom`, {
                questions: createRoom
            });
            if (res.status === 201) {
                setCode(res.data._id);
                console.log(res.data._id);
                navigate(`/roomcode/${id}`);
            }
        } catch (error) {
            navigate(-1);
        }
        setcreateRoom([])
    }
    useEffect(() => {
        handleSubmit();
    }, [])
    return (
        <div>
            {allQuestions.map((ques, id) => {
                return (
                    <ul key={id}>
                        <input type="checkbox" value={ques._id} onChange={handlecheckbox} style={{ left: "0" }} />
                        <h3 style={{ textAlign: "left" }}>
                            Q. {ques.question}
                        </h3>
                    </ul>
                )
            })}
            <button onClick={handleSubmitCheck}>Submit</button>

        </div>
    )
}

export default ViewQuestion