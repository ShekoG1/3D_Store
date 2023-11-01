import React from 'react'
import state from '../store';
import { useSnapshot } from 'valtio';
import { getContrastingColor } from '../config/helpers';

export default function RegularButton(props){
    const snap = useSnapshot(state);
    const generateStyle = (type) =>{
        if(type === 'filled'){
            return{
                backgroundColor: snap.color,
                color: getContrastingColor(snap.color)
            }
        } else if(type === "outline"){
            return{
                borderWidth: '1px',
                borderColor: snap.color,
                color: snap.color
            }
        }
    };

    return (
        <button onClick={props.handleClick} className={`px-2 py-1.5 flex-1 rounded-md ${props.customStyle}`} style={generateStyle(props.type)}>{props.title}</button>
      )
}