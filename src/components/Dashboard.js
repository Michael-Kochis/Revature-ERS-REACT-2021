import '../styles/login.css'
import React from 'react'
import { useState, useEffect } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import { useHistory } from "react-router-dom";

function Dashboard(props) { 
    const [reimb, setReimb] = useState(null)
    const {trigger,setTrigger} = props
    const history = useHistory()

    useEffect(()=> {
        axiosWithAuth().get('https://revature-ers-api-2021.herokuapp.com/api/reimb')
            .then(res => 
                setReimb(res.data)
            )
        console.log('Inside UseEffect')
    },[trigger])

    return(
    <div>   
            <h2>My Reimbursements</h2> 
        <div className="tablecontainer">
        {console.log(reimb)}
        <table>
            <tr>
                <th>Reimb ID</th>
                <th>Amount</th>
                <th>Type</th>
                <th>Status</th>
            </tr>
            {reimb && reimb.map(el => {
                return  <tr>
                        <td>{el.REIMB_ID}</td>
                        <td>{el.REIMB_AMOUNT}</td>
                        <td>{el.REIMB_TYPE_ID}</td>
                        <td>{el.REIMB_STATUS_ID}</td>
                    </tr>
            })}
            

        </table> 
    </div>
    </div>
    )
}

export default Dashboard;
