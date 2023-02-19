import './App.css'
import Auth from './components/auth/Auth'
import Home from './components/quiz/Home'
import Quiz from './components/quiz/game/Quiz'
import { GameStateContext } from './components/context/Context';
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Error from './components/Error';
import AddQuestion from './addQuestion/AddQuestion';
import ViewQuestion from './components/viewQuestions/ViewQuestion';
import RoomCode from './components/RoomCode';
import JoinQuiz from './components/JoinQuiz';




function App() {
 
  const [UserName, setUserName] = useState("")
  const [count, setCount] = useState(0)
  const [currentQues, setCurrentQues] = useState(0)
  const [login, setlogin] = useState(false)
  const [user, setUser] = useState("")
  const [password, setPasword] = useState("")
  const [registration, setregistration] = useState("");
  const [question, setQuestion] = useState("")
  const [option1, setOption1] = useState("")
  const [option2, setOption2] = useState("")
  const [option3, setOption3] = useState("")
  const [option4, setOption4] = useState("")
  const [answer, setAnswer] = useState("")
  const [email, setemail] = useState("")
  const [profile, setProfile] = useState([])
  const [allQuestions, setAllQuestions] = useState([])
  const [createRoom, setcreateRoom] = useState([])
  const [addQuestionSet, setaddQuestionSet] = useState([])
  const [code, setCode] = useState("")

  return (
    < >
      <GameStateContext.Provider value={{addQuestionSet, setaddQuestionSet,profile,code, setCode, setProfile,email, setemail,registration, setregistration,password,createRoom, setcreateRoom, setPasword, currentQues, setCurrentQues, UserName, setUserName, count, setCount, login, setlogin, user, setUser,option1,option2,option3,option4,question,answer,setOption1,setOption2,setOption3,setOption4,setAnswer,setQuestion,allQuestions, setAllQuestions }}>
       <Routes>
        <Route exact path='/' element={<Auth/>}/>  
        <Route path='/quiz' element={<Quiz/>}/>  
        <Route path='/join_Room' element={<JoinQuiz/>}/>  
        <Route path='/addQuestion' element={login?<AddQuestion/>:<Error/>}/>  
        <Route path='/home/:id' element={<Home/>}/>  
        <Route path='/questions/:id' element={<ViewQuestion/>}/>  
        <Route path='/roomcode/:id' element={<RoomCode/>}/>  
        <Route path='*' element={<Error/>} />
       </Routes>
      </GameStateContext.Provider>
    </>
  )
}

export default App
