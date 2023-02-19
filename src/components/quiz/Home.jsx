import { useEffect } from 'react'
import { useContext } from 'react'
import { GameStateContext } from '../context/Context'
import { useParams } from "react-router-dom";
import axios from 'axios'
import { useNavigate,Link } from "react-router-dom";



function Home() {
    const {login, profile, setProfile } = useContext(GameStateContext)
    const navigate = useNavigate();
    const { id } = useParams();
    const handleSubmit = async () => { 
            try {
                const res = await axios.get(`http://localhost:4000/home?_id=${id}`);
                setProfile(res.data);
            } catch (error) {
                navigate('/');
            }
        }   
    useEffect(() => {
        if(login)
        handleSubmit();
        else
        navigate('/');
    }, [])
    return (
        <div className="section">
            <div className="container">
                <div className="row full-height justify-content-center">
                    <div className="col-12 text-center align-self-center py-5">
                        <div className="section pb-5 pt-5 pt-sm-2 text-center">
                            <div className="card-3d-wrap mx-auto">

                                <div className="card-front">
                                    <div className="center-wrap">
                                        <div className="section text-center">
                                            <h3>
                                                Welcome {profile.user}
                                            </h3>
                                            <Link to='/join_Room'><button className="btn mt-4">Join Quiz</button></Link>
                                            <br />
                                            <button className="btn mt-4" onClick={()=>{ navigate(`/questions/${profile._id}`)}}>Create Quiz</button>
                                            <br />
                                            <Link to='/addQuestion'><button className="btn mt-4">Add Question</button></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home


