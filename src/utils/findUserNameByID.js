import axiosWithAuth from "./axiosWithAuth"

const FindUserNameByID = async function(USER_ID) {
    await axiosWithAuth(`/user/${USER_ID}`)
        .then(resp => {
            console.log(resp.data.ERS_USERNAME);
            return resp.data.ERS_USERNAME;
        })
}

export default FindUserNameByID;
