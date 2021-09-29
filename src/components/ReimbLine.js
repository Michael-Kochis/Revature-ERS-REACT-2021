import React from 'react'
import { StatusToString, TypeToString } from '../utils/enumToString';
//import FindUserNameByID from '../utils/findUserNameByID';

function Reimbline(props) {
    const {el} = props; 

    let submit = new Date().setTime(el.REIMB_SUBMITTED);
    let resolve = new Date().setTime(el.REIMB_RESOLVED);
    
    return (<tr>
        <td>{el.REIMB_ID}</td>
        <td>{el.REIMB_DESCRIPTION}</td>
        <td>{el.REIMB_AMOUNT}</td>
        <td>{TypeToString(el.REIMB_TYPE_ID)}</td>
        <td>{StatusToString(el.REIMB_STATUS_ID)}</td>
        <td>{el.REIMB_AUTHOR}</td>
        <td>{el.REIMB_RESOLVER}</td>
        <td>
            {new Intl.DateTimeFormat("en-GB", {
            year: "numeric",
            month: "long",
            day: "2-digit"
            }).format(submit)}
         </td>
         <td>
            {el.REIMB_RESOLVED && new Intl.DateTimeFormat("en-GB", {
            year: "numeric",
            month: "long",
            day: "2-digit"
            }).format(resolve)}
         </td>
    </tr>)
}

export {
    Reimbline
}