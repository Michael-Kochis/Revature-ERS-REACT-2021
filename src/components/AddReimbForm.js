import React, { useState } from 'react'
import axiosWithAuth from '../utils/axiosWithAuth';
import { useHistory } from 'react-router-dom';
import { NavBar } from './NavBar';

const initialValues = {
    REIMB_DESCRIPTION: '',
    REIMB_AMOUNT: '',
    REIMB_TYPE_ID: 0
}

const AddReimbForm = (props) => {
    const [newReimb, setNewReimb] = useState(initialValues);
    const history = useHistory()
    const {trigger,setTrigger} = props

    const submitHandler = (e) => {
        e.preventDefault();
        newReimb.REIMB_AUTHOR = localStorage.getItem('user').USER_ID;
        newReimb.REIMB_SUBMITTED = Date.now();
        newReimb.REIMB_STATUS_ID = 0;

        axiosWithAuth()
            .post('reimb/', newReimb)
            .then(res => {
                setTrigger(!trigger)
            })
            .catch(err => {
                console.log('err: ', err.response)
            })

            history.push('./dashboard')
    }

    const changeHandler= (e) => {
        setNewReimb({...newReimb, [e.target.name]: e.target.value})
    }

    return (
        <div className='container'>
            <NavBar />
            <div className='list_div'>
                <h2>Please Add Reimb</h2>
                <p>Fill out your Reimbursement's information</p>
                <form className='form' onSubmit={submitHandler}>
                    <label htmlFor="description" />Description
                    <input
                        id="description"
                        type="text"
                        name="REIMB_DESCRIPTION"
                        placeholder="stuff for business"
                        value={newReimb.REIMB_DESCRIPTION}
                        onChange={changeHandler}
                    />
                    <label htmlFor="amount" /> Amount
                    <input
                        id="amount"
                        type="number"
                        name="REIMB_AMOUNT"
                        placeholder="0.00"
                        value={newReimb.REIMB_AMOUNT}
                        onChange={changeHandler}
                    />
                    <label htmlFor='type' />Type
                    <select id='type' name="REIMB_TYPE_ID" 
                        value={newReimb.REIMB_TYPE_ID} onChange={changeHandler} >
                            <option value='0'>Other</option>
                            <option value='1'>Lodging</option>
                            <option value='2'>Travel</option>
                            <option value='3'>Food</option>
                    </select>
                    <button type='submit'>Save</button>
                </form>
            </div>
        </div>
    )
}
export default AddReimbForm