import React from 'react'
import './AddQuestion.css'
import { useContext } from 'react'
import { GameStateContext } from '../components/context/Context'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function AddQuestion() {
	const navigate = useNavigate();
	const { setQuestion, option1, option2, option3, option4, question, answer, setOption1, setOption2, setOption3, setOption4, setAnswer, profile } = useContext(GameStateContext);

	const handleQuestion = (e) => {
		const val = e.target.value
		setQuestion(val)
	};
	const handleOption1 = (e) => {
		const val = e.target.value
		setOption1(val)
	};
	const handleOption2 = (e) => {
		const val = e.target.value
		setOption2(val)
	};
	const handleOption3 = (e) => {
		const val = e.target.value
		setOption3(val)
	};
	const handleOption4 = (e) => {
		const val = e.target.value
		setOption4(val)
	};
	const handleAnswer = (e) => {
		const val = e.target.value
		setAnswer(val)
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const res = await axios.post('http://localhost:4000/addQuestion', {
				question, option1, option2, option3, option4, answer, teacherId: profile._id

			})
			if (res.status === 201) {
				setAnswer("")
				setOption1("")
				setOption2("")
				setOption3("")
				setOption4("")
				setQuestion("")
				navigate(-1);
			}
		} catch (error) {
			window.alert(error)
		}
	}

	// console.log(profile._id);


	return (
		<>
			{/* <h1>{profile._id}</h1> */}
			<div className="section">
				<div className="container">
					<div className="row full-height justify-content-center">
						<div className="col-12 text-center align-self-center py-5">
							<div className="section pb-5 pt-5 pt-sm-2 text-center">
								<label htmlFor="reg-log"></label>
								<div className="card-3d-wrap mx-auto">
									<div className="card-3d-wrapper2">
										<div className="card-front3">
											<div className="center-wrap2">
												<div className="section text-center">
													<h4 className="mb-4 pb-3">Add Question</h4>
													<form action="" onSubmit={(e) => e.preventDefault()} >
														<div className="form-group">
															<input type="text" name="logemail" className="form-style" placeholder="Question" value={question} onChange={handleQuestion} />
															<i className="input-icon uil uil-comment-question"></i>
														</div>
														<div className="form-group mt-2">
															<input type="text" name="logpass" className="form-style" placeholder="Option 1" value={option1} onChange={handleOption1} />
															<i className="input-icon uil uil-dice-one"></i>
														</div>
														<div className="form-group mt-2">
															<input type="text" name="logpass" className="form-style" placeholder="Option 2" value={option2} onChange={handleOption2} />
															<i className="input-icon uil uil-dice-two"></i>
														</div>
														<div className="form-group mt-2">
															<input type="text" name="logpass" className="form-style" placeholder="Option 3" value={option3} onChange={handleOption3} />
															<i className="input-icon uil uil-dice-three"></i>
														</div>
														<div className="form-group mt-2">
															<input type="text" name="logpass" className="form-style" placeholder="Option 4" value={option4} onChange={handleOption4} />
															<i className="input-icon uil uil-dice-four"></i>
														</div>
														<div className="form-group mt-2">
															<input type="text" name="logpass" className="form-style" placeholder="Answer" value={answer} onChange={handleAnswer} />
															<i className="input-icon uil uil-comment-verify"></i>
														</div>
														<button type='submit' onClick={handleSubmit} className='btn mt-4'>Submit</button>
													</form>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default AddQuestion