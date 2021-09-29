import React from 'react'
import { TypeToString } from '../utils/enumToString';

function Reimbline(props) {
    const {el} = props; 

    let submit = new Date().setTime(el.REIMB_SUBMITTED);
    let outString = submit.toLocaleString("en-US", { timeZone: 'CST'});

    return (<tr>
        <td>{el.REIMB_ID}</td>
        <td>{el.REIMB_DESCRIPTION}</td>
        <td>{el.REIMB_AMOUNT}</td>
        <td>{el.REIMB_TYPE_ID}</td>
        <td>{TypeToString(el.REIMB_TYPE_ID)}</td>
        <td>{el.REIMB_STATUS_ID}</td>
        <td>{el.REIMB_AUTHOR}</td>
        <td>{el.REIMB_RESOLVER}</td>
        <td>
            {new Intl.DateTimeFormat("en-GB", {
            year: "numeric",
            month: "long",
            day: "2-digit"
            }).format(submit)}
         </td>
        <td>{el.REIMB_RESOLVED}</td>
    </tr>)
}

export {
    Reimbline
}