import React from 'react'

const FormInput = (props) => {
  return (
    <>
      <label htmlFor={props.type}>{props.children}</label>
      <input
        type={props.type}
        id={props.type}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />  
    </>
  )
}

export default FormInput