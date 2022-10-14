import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { up, change, create } from "./store";

const Sub = () => {
    const { word, createInput } = useSelector(state => state);
    const dispatch = useDispatch();
    console.log(createInput)

    return (
        <div>
            Now number is {word}
            <button onClick={
                () => dispatch(up())
            }>plus number</button>

            <button onClick={
                () => dispatch(change())
            }>
                change mode
            </button>

            <button onClick={
                () => dispatch(create('HI!!!!!!'))
            }>
                send value
            </button>
        </div>
    )
}

export default Sub