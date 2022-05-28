import React from 'react'

const FormInput = (props) => {
  return (
    <>
      <label htmlFor={props.id}>
          {props.children}
      </label>
      <input
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      /> 
      {props.error && <label htmlFor={props.id}>{props.error}</label> }
    </>
  )
}

export default FormInput