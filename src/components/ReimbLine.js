import React from 'react';
import { loginAsManager } from '../utils/authUtils';

import axiosWithAuth from '../utils/axiosWithAuth';
import { StatusToString, TypeToString } from '../utils/enumToString';

function Reimbline(props) {
    let {el} = props;
    const {trigger, setTrigger} = props; 

    let submit = new Date().setTime(el.REIMB_SUBMITTED);
    let resolve = new Date().setTime(el.REIMB_RESOLVED);

    const approve = function(e) {
        e.preventDefault();

        el.REIMB_RESOLVED = Date.now();
        el.REIMB_RESOLVER = localStorage.getItem('userID');
        el.REIMB_STATUS_ID = 1;
        submitUpdate(el);
    }

    const deny = function(e) {
        //e.preventDefault();

        el.REIMB_RESOLVED = Date.now();
        el.REIMB_RESOLVER = localStorage.getItem('userID');
        el.REIMB_STATUS_ID = 2;
        submitUpdate(el);
    }

    const submitUpdate = async function (element) {
        await axiosWithAuth()
            .put(`/reimb/${el.REIMB_ID}`, el)
            .then(res => {
                el = res.data;
                setTrigger(!trigger);
            }).catch(err => {
                console.log("Update error:", err)
            })
    }
    
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
         {(el.REIMB_STATUS_ID == 0)   && loginAsManager() && 
            <>
                <button onClick={approve}>Approve</button>
                <button onClick={deny}>Deny</button>
            </>
        }
    </tr>)
}

export {
    Reimbline
}
