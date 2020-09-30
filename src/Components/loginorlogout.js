import React, {useContext} from 'react';
import {MytokenContext, UdahLoginContext} from './Store'
import Button from '@material-ui/core/Button';
// import {Redirect, useHistory} from 'react-router-dom'
import {useHistory} from 'react-router-dom'
import ls from 'local-storage'

// import {Logout} from './logout'

const Loginorlogout = () => {
    const [,setMytoken] = useContext(MytokenContext);
    const [udahLogin,setUdahLogin] = useContext(UdahLoginContext)

    // const [dahLoginKe, setDahLoginKe] = useState(false)
    
    // setDahLoginKe(udahLogin)

    let history = useHistory()
    
    // const dahloginke=ls.get('dahlogin')
    
   
   

    const tempLogout = () =>{
       
        setMytoken('')
        setUdahLogin(false)
        // setDahLoginKe(false)
        ls.set('dahlogin', false)
        ls.set('apptoken','')
        history.push("/")
        
    }

    
    // console.log("TOKEN:  " + mytoken)
    // console.log("DohLogin:  " + dahLogin)

        if (udahLogin){
            
            
            return (<Button color="inherit" onClick ={tempLogout}>Logout</Button>)
        }else {
            return (<Button color="inherit" onClick ={()=>history.push("/login")}>Login</Button>)
            
        }
   
    
}

export default Loginorlogout;
