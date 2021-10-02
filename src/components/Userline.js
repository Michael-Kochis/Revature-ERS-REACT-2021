import React from 'react';
import { loginAsManager } from '../utils/authUtils';

import axiosWithAuth from '../utils/axiosWithAuth';
import { RoleToString } from '../utils/enumToString';

function Userline(props) {
    let {el} = props;
    const {trigger, setTrigger} = props; 
    
    return (<tr>
        <td>{el.ERS_USER_ID}</td>
        <td>{el.ERS_USERNAME}</td>
        <td>{el.USER_FIRST_NAME}</td>
        <td>{el.USER_LAST_NAME}</td>
        <td>{el.USER_EMAIL}</td>
        <td>{RoleToString(el.USER_ROLE_ID)}</td>
                
         {/* {( loginAsManager() && 
            <>
                <button onClick={approve}>Approve</button>
                <button onClick={deny}>Deny</button>
            </>
        } */}
    </tr>)
}

export {
    Userline
}
