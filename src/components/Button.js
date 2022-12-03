import React from "react";
import '../App.css';

const Button = (props) => {
    return (
        <button>
            {props.text}
        </button>
    );
}

export default Button;