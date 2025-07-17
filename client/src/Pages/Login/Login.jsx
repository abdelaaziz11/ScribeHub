import React from 'react'
import './Login.css'
import login_photo from '../../Assets/download.jpeg'

const Login = () => {
    return (
        <>
        <section className='login'>
            <div className="form-login">
            <form className='login-form'>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" />
                </div>
                {/* <div class="form-group form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div> */}
                <button type="submit" class="btn btn-primary m-2">Submit</button>
            </form>
            <div className='login-photo'>
                <img src={login_photo} alt="" />
            </div>
            </div>
        </section>
        </>
    )
}

export default Login