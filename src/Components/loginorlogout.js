import React, {useContext, useState, useEffect} from 'react';
import {MytokenContext, UdahLoginContext} from './Store'
import Button from '@material-ui/core/Button';
import {useHistory} from 'react-router-dom'
import ls from 'local-storage'

const Loginorlogout = () => {
    const [,setMytoken] = useContext(MytokenContext);
    const [udahLogin,setUdahLogin] = useContext(UdahLoginContext)
    const [haiDahLoginKe, setHaiDahLoginKe] = useState(false)

    let history = useHistory()
    
    useEffect( () => {
        setHaiDahLoginKe(udahLogin)
    },[setHaiDahLoginKe,udahLogin])

    const tempLogout = () =>{
       
        setMytoken('')
        setUdahLogin(false)
        ls.set('dahlogin', false)
        ls.set('apptoken','')
        history.push("/")
        
    }
// console.log(haiDahLoginKe)
// console.log("################")
        if (haiDahLoginKe){
            
            
            return (<Button color="inherit" onClick ={tempLogout}>Logout</Button>)
        }else {
            return (<Button color="inherit" onClick ={()=>history.push("/login")}>Login</Button>)
            
        }
        // return (
        //     { haiDahLoginKe ? (
        //     <Button color="inherit" onClick ={tempLogout}>Logout</Button>
        //     ) : (
        //     <Button color="inherit" onClick ={()=>history.push("/login")}>Login</Button>
        //     )}
        // )
   
    
}

export default Loginorlogout;
