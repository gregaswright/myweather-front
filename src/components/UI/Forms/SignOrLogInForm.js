import React, { useState } from 'react'
import FormInput from './FormInput'

const SignOrLogInForm = () => {
    const [formIsValid, setFormIsValue] = useState(false)
    const [formEmailValue, setFormEmailValue] = useState('')
    const [formPasswordValue, setFormPasswordValue] = useState('')

    const submitHandler = (event) => {
        event.preventDefault()

    }

    const emailChangeHandler = (event) => {
        setFormEmailValue(event.target.value)
    }

    const passwordChangeHandler = (event) => {
        setFormPasswordValue(event.target.value)
    }

    return (
        <form onSubmit={submitHandler}>
            <ul>
                <li>
                    <FormInput
                        type={'email'}
                        value={formEmailValue}
                        onChange={emailChangeHandler}
                        onBlur={null}
                    >Email</FormInput>
                </li>
                <li>
                    <FormInput
                        type={'password'}
                        value={formPasswordValue}
                        onChange={passwordChangeHandler}
                        onBlur={null}
                    >Password</FormInput>
                </li>
                <li>
                    
                </li>
            </ul>
        </form>
    )
}

export default SignOrLogInForm