import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import validator from 'validator'
import {useDispatch } from 'react-redux'
import { removeError, setError } from '../../actions/ui'



export const RegisterScreen = () => {

    const dispatch = useDispatch()
    
    const [formValues, handleInputChange] = useForm({
        name: "",
        email: "",
        password: "",
        password2:""
        
        
    })
    
    const { name, email, password, password2 } = formValues;

    const handleRegister = (e) => {
        e.preventDefault()
        
        if (isFormValid()) {
            console.log('Formulario Correcto')
        }
    }

    const isFormValid = () => {
        if (name.trim().length === 0) {
            
            dispatch(setError('Name is required'))
            return false;
        } else if (!validator.isEmail(email)) {
            
            dispatch(setError('Email is not valid'))
            return false
        } else if (password !== password2 || password.length < 5) {
            
            dispatch(setError('Password should be at least 6 characters'))
            return  false
        }
        dispatch(removeError())
        return true;
    }
    return (
        <>
        <div>
           <h3 className="auth__title">Register</h3> 
        </div>
            <form onSubmit={handleRegister}>

                <div className="auth__alert-error"> Hola Mundo </div>
                <input type="text" placeholder="name" name="name" className="auth__input" autoComplete="off" value={name} onChange={ handleInputChange}/>
                <input type="text" placeholder="email" name="email" className="auth__input" autoComplete="off" value={email } onChange={ handleInputChange}/>
                <input type="password" placeholder="Password" name="password" className="auth__input" value={ password} onChange={ handleInputChange}/>
                <input type="password" placeholder="Confirm Password" name="password2" className="auth__input" value={password2} onChange={ handleInputChange}/>
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
