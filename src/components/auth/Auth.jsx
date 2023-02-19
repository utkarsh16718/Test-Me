import React, { useState,useEffect, useContext, useLayoutEffect } from 'react'
import './Auth.css'
import { GameStateContext } from '../context/Context'
import axios from 'axios'
import { useNavigate } from "react-router-dom";



function Auth() {

	const navigate = useNavigate();
	const { email, setemail, registration, setregistration, login, setGame, setlogin, user, setUser, password, setPasword } = useContext(GameStateContext)
	const handleUser = (e) => {
		const val = e.target.value;
		setUser(val)
	}
	const handlePassword = (e) => {
		const val = e.target.value;
		setPasword(val)
	}
	const handleEmail = (e) => {
		const val = e.target.value;
		setemail(val)
	}
	const handleReg = (e) => {
		const val = e.target.value;
		setregistration(val)
	}
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const res = await axios.post('http://localhost:4000/register', {
				user: user,
				email: email,
				registration: registration,
				password: password
			})
			if (res.status === 201) {
				setlogin(true);
				navigate(`/home/${res.data._id}`);
				
			}
		} catch (error) {
			window.alert(error.response.data)
		}
	}

	const handleLogin = async (e) => {
		e.preventDefault();
		try {
			const res = await axios.post('http://localhost:4000/login', {
				email: email,
				password: password
			})
			if (res.status === 201) {
				setlogin(true);
				navigate(`/home/${res.data._id}`);
			}
		} catch (error) {
			window.alert(error.response.data)
		}
	}
	useEffect(() => {
		setlogin(false);
	}, [])
	
	return (
		<div className="section">
			<div className="container">
				<div className="row full-height justify-content-center">
					<div className="col-12 text-center align-self-center py-5">
						<div className="section pb-5 pt-5 pt-sm-2 text-center">
							<h6 className="mb-0 pb-3"><span>Log In </span><span>Sign Up</span></h6>
							<input className="checkbox" type="checkbox" id="reg-log" name="reg-log" />
							<label htmlFor="reg-log"></label>
							<div className="card-3d-wrap mx-auto">
								<div className="card-3d-wrapper">
									<div className="card-front">
										<div className="center-wrap">
											<div className="section text-center">
												<h4 className="mb-4 pb-3">Log In</h4>
												<form action="" onSubmit={(e) => e.preventDefault()} >
													<div className="form-group">
														<input type="email" name="logemail" className="form-style" placeholder="Your Email"  value={email} onChange={handleEmail} required />
														<i className="input-icon uil uil-at"></i>
													</div>
													<div className="form-group mt-2">
														<input type="password" name="logpass" className="form-style" placeholder="Your Password" required value={password} onChange={handlePassword} />
														<i className="input-icon uil uil-lock-alt"></i>
													</div>
													<button type='submit' onClick={handleLogin} className='btn mt-4'>Submit</button>
												</form>
											</div>
										</div>
									</div>
									<div className="card-back">
										<div className="center-wrap">
											<div className="section text-center">
												<h4 className="mb-4 pb-3">Sign Up</h4>
												<form action="">
													<div className="form-group">
														<input type="text" name="logname" className="form-style" placeholder="Your Full Name" value={user} id="logname" onChange={handleUser} required />
														<i className="input-icon uil uil-user"></i>
													</div>
													<div className="form-group mt-2">
														<input type="email" name="logemail" className="form-style" placeholder="Your Email" value={email} id="logemail" onChange={handleEmail} required />
														<i className="input-icon uil uil-at"></i>
													</div>
													<div className="form-group mt-2">
														<input type="number" name="logreg" className="form-style" placeholder="Your Regist. No." value={registration} onChange={handleReg} required />
														<i className="input-icon uil uil-dialpad-alt"></i>
													</div>
													<div className="form-group mt-2">
														<input type="password" name="logpass" className="form-style" placeholder="Your Password" value={password} onChange={handlePassword} id="logpass" required />
														<i className="input-icon uil uil-lock-alt"></i>
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
	)
}

export default Auth