import React, { useState, useEffect } from 'react'
import  useAxios from './../../../hooks/useAxios'
import Button from './../Button' 
import FormInput from './FormInput'


const SignOrLogInForm = () => {
    const [errorMessage, setErrorMessage] = useState('')
    const [formEmailValue, setFormEmailValue] = useState('')
    const [formPasswordValue, setFormPasswordValue] = useState('')
    const [formConfirmPasswordValue, setFormConfirmPasswordValue] = useState('')
    const [signUp, setSignUp] = useState(false)
    
    const { res, loading, error, operation} = useAxios()

    const formData =  {
        email: formEmailValue,
        password: formPasswordValue
    }

    const loginHandler = (event) => {
        event.preventDefault()
        console.log('login', formEmailValue, formPasswordValue);
        operation({
            method: 'POST',
            url: '/users/login',
            data: formData    
        })
    }

    const signUpHandler = (event) => {
        event.preventDefault()
        console.log('signup');
        operation({
            method: 'POST',
            url: '/users',
            data: formData
        })
    }

    // const checkToken = (event) => {
    //     event.preventDefault()
    //     operation({
    //         method: 'GET',
    //         url: '/users/login',
    //         data: {token: document.cookie}
    //     })
    // }

    useEffect(() => {
      if (res !== null) {
          console.log(res);
          document.cookie = `token=${res.token}`
            console.log(document.cookie);
      } else if (error) {
          console.log(error)
      }
    }, [res, error])
    

    const emailChangeHandler = (event) => {
        setFormEmailValue(event.target.value)
    }

    const passwordChangeHandler = (event) => {
        setFormPasswordValue(event.target.value)
    }

    const confirmPasswordChangeHandler = (event) => {
        if (formConfirmPasswordValue === formPasswordValue) {
            setFormConfirmPasswordValue(event.target.value)
        } else {
            setFormConfirmPasswordValue(event.target.value)
            setErrorMessage("Passwords must match")
        }
    }

    const handleSignUp = (event) => {
        event.preventDefault()
        setSignUp(prevState => !prevState)
    }

    return (
        <>
        <form onSubmit={signUp ? loginHandler : signUpHandler}>
            <ul>
                <li>
                    <FormInput
                        type={'email'}
                        id={'email'}
                        value={formEmailValue}
                        onChange={emailChangeHandler}
                        onBlur={null}
                    >Email</FormInput>
                </li>
                <li>
                    <FormInput
                        type={'password'}
                        id={'password'}
                        value={formPasswordValue}
                        onChange={passwordChangeHandler}
                        onBlur={null}
                    >Enter Password</FormInput>
                </li>
                {!signUp && 
                <li>
                    <FormInput
                        type={'password'}
                        id={'confirmPassword'}
                        value={formConfirmPasswordValue}
                        onChange={confirmPasswordChangeHandler}
                        onBlur={null}
                        error={errorMessage}
                    >Confirm Password</FormInput>
                </li>}
                <li>
                    {signUp ? <button  onClick={handleSignUp}>Not a user? Sign up!</button> :
                    <button onClick={handleSignUp}>Already a user? Sign in!</button>}
                </li>
            </ul>
            {signUp ? <Button type="submit">
                Login
            </Button> :
            <Button type="submit">
                Create Account
            </Button>}
        </form>
        </>
    )
}

export default SignOrLogInForm