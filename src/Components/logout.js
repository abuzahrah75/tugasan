import React, {useEffect, useContext} from 'react';
import {Redirect} from 'react-router-dom'
// import {Processlogout} from './processlogout';
import {MytokenContext,UdahLoginContext} from './Store'
import ls from 'local-storage'
import {useHistory} from 'react-router-dom'

export const Logout = () => {
    const [,setMytoken] = useContext(MytokenContext)
    const [,setUdahLogin] = useContext(UdahLoginContext)
    let history = useHistory()


    let state = {redirect: '/'}
    // useEffect(()=>{
        setMytoken('')
        setUdahLogin(false)
        ls.set('dahlogin',false)
        ls.set('apptoken','')
        
    // },[setMytoken,setUdahLogin])
   
    // return (
    // <>
    //     {/* <Processlogout /> */}
    //     <Redirect to={state.redirect} />
    // </>
    // )
    history.push("/")
    
}

// export default Logout;