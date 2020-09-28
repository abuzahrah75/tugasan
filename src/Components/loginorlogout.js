import React, {useContext} from 'react';
import {MytokenContext} from './Store'
import Button from '@material-ui/core/Button';
// import {Redirect, useHistory} from 'react-router-dom'
import {useHistory} from 'react-router-dom'
import ls from 'local-storage'

const Loginorlogout = () => {
    const context = useContext(MytokenContext);
    const [,setMytoken] = context
    let history = useHistory()
    const dahLoginKe = ls.get('dahlogin')
    // const apptoken = ls.get('apptoken')

    // if(mytoken === '' && apptoken !==''){
    //     setMytoken(apptoken)
    // }

    const tempLogout = () =>{
       
        setMytoken('')
        ls.set('dahlogin', false)
        ls.set('apptoken','')
        history.push("/")
        // return <Redirect to={{
        //     pathname: "/",

            
        // }}/>
    }

    
    // console.log("TOKEN" + apptoken)
    // console.log("log status" + dahLoginKe)

        if (dahLoginKe){
            
            
            return (<Button color="inherit" onClick ={tempLogout}>Logout</Button>)
        }else {
            return (<Button color="inherit" onClick ={()=>history.push("/login")}>Login</Button>)
            
        }
    
}

export default Loginorlogout;
