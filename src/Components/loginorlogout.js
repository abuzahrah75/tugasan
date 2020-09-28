import React, {useContext} from 'react';
import {MytokenContext} from './Store'
import Button from '@material-ui/core/Button';
import {useHistory} from 'react-router-dom'

const Loginorlogout = () => {
    const context = useContext(MytokenContext);
    const [mytoken, setMytoken] = context
    let history = useHistory()
    // console.log(mytoken)

    const tempLogout = () =>{
        setMytoken('')
        history.push("/")
    }
   
        if (mytoken===''){
            return (<Button color="inherit" onClick ={()=>history.push("/login")}>Login</Button>)
        }else {
            return (<Button color="inherit" onClick ={tempLogout}>Logout</Button>)
        }
    
}

export default Loginorlogout;
