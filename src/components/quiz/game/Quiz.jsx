import React, { useContext, useState } from 'react'
import './Quiz.css'
import { GameStateContext } from '../../context/Context';

function Quiz() {

    const { UserName, count, setCount, currentQues, setCurrentQues,   addQuestionSet } = useContext(GameStateContext)

    const [optionchoose, setOptionChoose] = useState('')

    const correct = (options) => {
        setOptionChoose(options)
    }

    const cOption = () => {
        if (addQuestionSet[currentQues].answer == optionchoose) {
            setCount(count + 1)
        }
        setCurrentQues(currentQues + 1)
        setOptionChoose("")
    }

    const result = () => {
        if (addQuestionSet[currentQues].answer == optionchoose) {
            setCount(count + 1)
        }
      
    }

    return (
        <div>
            <div className="section">

                <h2>Welcome {UserName}</h2>
                {/* <span>Total Score  {count}</span> */}
                <h5>Question </h5><h2>{currentQues + 1}/{addQuestionSet.length}</h2>
                <div className="container">
                    <div className="row full-height1 justify-content-center">
                        <div className="col-12 text-center  py-5">
                            <div className="section pb-5 pt-5 pt-sm-2 text-center">
                                <div className="card-3d-wrap1 mx-auto">
                                    <div className="card-front2">
                                        <div className='que-dev'>
                                            <h3 className="question ">{currentQues + 1 }.{addQuestionSet[currentQues].question}</h3>
                                        </div>
                                        <div className="center-wrap1">
                                            <button onClick={() => { correct('optionA') }} className="btn1" >{addQuestionSet[currentQues].option1}</button>
                                            <button onClick={() => { correct('optionB') }} className="btn1" >{addQuestionSet[currentQues].option2}</button>
                                            <button onClick={() => { correct('optionC') }} className="btn1" >{addQuestionSet[currentQues].option3}</button>
                                            <button onClick={() => { correct('optionD') }} className="btn1" >{addQuestionSet[currentQues].option4}</button>
                                            <br />
                                            <br />
                                            {currentQues == addQuestionSet.length - 1 ? <button type="button" className="button" onClick={result}>
                                                <span>End Quiz</span>
                                                <i className="bx bx-check"></i>
                                            </button> : <button type="button" className="button" onClick={cOption}>
                                                <span>Next</span>
                                                <i className="bx bx-check"></i>
                                            </button>}
                                            <br />
                                            <h3>
                                                {optionchoose}
                                            </h3>
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

export default Quiz