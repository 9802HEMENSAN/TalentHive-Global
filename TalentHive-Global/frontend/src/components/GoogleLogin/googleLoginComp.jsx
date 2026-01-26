import React from 'react'
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { serverUrl } from '../../App';

const GoogleLoginComp = (props) => {

    const navigate= useNavigate();
    const handleOnSucess = async (credResponse) => {
        const token = credResponse.credential;
        const res = await axios.post(`${serverUrl}/api/auth/google`, { token }, { 
            timeout: 60000, withCredentials: true });
        
        console.log(res );
        localStorage.setItem('isLogin', 'true');
        localStorage.setItem("userInfo", JSON.stringify(res?.data?.user));
        props.changeLoginValue(true)
        navigate('/feeds')
    }
    return (
        <div className='w-full'>
            <GoogleLogin
                onSuccess={(credentialResponse) => handleOnSucess(credentialResponse)}
                onError={() => {
                    console.log('Login Failed');
                }}
            />
        </div>
    )
}

export default GoogleLoginComp