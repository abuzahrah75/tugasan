import React, {useContext} from 'react';
import {MytokenContext} from './Store'
import Button from '@material-ui/core/Button';

const Loginorlogout = () => {
    const context = useContext(MytokenContext);
    const [mytoken] = context
   
        if (mytoken===''){
            return (<Button color="inherit" onClick ={()=>window.location.href="/login"}>Login</Button>)
        }else {
            return (<Button color="inherit" onClick ={()=>window.location.href="/logout"}>Logout</Button>)
        }
    
}

export default Loginorlogout;
