import React, {useContext} from 'react';
import {MytokenContext, UdahLoginContext} from './Store';
import Button from '@material-ui/core/Button';
import {useHistory} from 'react-router-dom'
import ls from 'local-storage'
import axios from './axios'
import SignIn from './SignIn'

const Login = () => {
    // const [mytoken,setMytoken] = useContext(MytokenContext)
    // const [udahLogin, setUdahLogin]=useContext(UdahLoginContext)
    const [,setMytoken] = useContext(MytokenContext)
    const [, setUdahLogin]=useContext(UdahLoginContext)

    let history = useHistory()

    
    //ini sementara je
    const tempLogin = () =>{
        const formdata={
                    username : "albadr",
                    password : "hamisah75"
                }
                axios.post('api-token-auth/',formdata)
                .then(res => {
                    setMytoken(res.data.token)
                    setUdahLogin(true)
                    ls.set('dahlogin',true)
                    ls.set('apptoken',res.data.token)
                    history.push("/todo")
                })
                .catch((error) => {
                    if (error.response) {
                        const respon = error.response.data
                        if(respon.non_field_errors){
                            console.log("KKK" + respon.non_field_errors)
                        }
                        // Request made and server responded
                        console.log(error.response.data);
                        // console.log(error.response.status);
                        // console.log(error.response.headers);
                      }
                })
        
    }
   
    return (
        <div>
            <SignIn />
            <p>we will try to use formik ? and material-ui ?</p>
            <Button variant="contained" color="primary" onClick ={tempLogin}>Login</Button>
        </div>
    );
}

export default Login;
