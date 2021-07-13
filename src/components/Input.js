import React from 'react'
import "../sass/Input.scss"

const Input = (props) => {
    return (
        <div className="input__container">
            {props.data && props.data}
        </div>
    )
}

export default Input
