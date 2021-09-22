import React from 'react'
import { Link } from 'react-router-dom'

export const RegisterScreen = () => {
    return (
        <>
        <div>
           <h3 className="auth__title">Register</h3> 
        </div>
            <form>
                <input type="text" placeholder="name" name="name" className="auth__input" autoComplete="off"/>
                <input type="text" placeholder="email" name="email" className="auth__input" autoComplete="off"/>
                <input type="password" placeholder="Password" name="password" className="auth__input" />
                <input type="password" placeholder="Confirm Password" name="password2" className="auth__input" />
                <button type="submit" className="btn btn-primary btn-block mb-5"  >
                    Register
                </button>

        
        
        <Link to="/auth/login" className="link">
            Alredy Registed?
        </Link>
            </form>
            </>
    )
}
