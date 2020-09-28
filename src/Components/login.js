import React, {useContext} from 'react';
import {MytokenContext} from './Store';
import Button from '@material-ui/core/Button';
import {useHistory} from 'react-router-dom'
import ls from 'local-storage'

const Login = () => {
    const context = useContext(MytokenContext)
    const [,setMytoken] = context
    let history = useHistory()

    
    //ini sementara je
    const tempLogin = () =>{
        setMytoken('dah-login')
        ls.set('dahlogin',true)
        ls.set('apptoken','dah-login')
        history.push("/todo")
    }
   
    return (
        <div>
            <h1>this login page !</h1>
            <p>we will try to use formik ? and material-ui ?</p>
            <Button color="inherit" onClick ={tempLogin}>Login</Button>
            
        </div>
    );
}

export default Login;
