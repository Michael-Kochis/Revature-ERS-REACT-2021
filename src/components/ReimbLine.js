import React from 'react'

function Reimbline(props) {
    const {el} = props; 
    return (<tr>
        <td>{el.REIMB_ID}</td>
        <td>{el.REIMB_AMOUNT}</td>
        <td>{el.REIMB_TYPE_ID}</td>
        <td>{el.REIMB_STATUS_ID}</td>
    </tr>)
}

export {
    Reimbline
}