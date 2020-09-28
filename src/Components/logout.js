import React, {useEffect, useContext} from 'react';
import {Redirect} from 'react-router-dom'
// import {Processlogout} from './processlogout';
import {MytokenContext} from './Store'
const context = useContext(MytokenContext)
const [, setMytoken] = context

const Logout = () => {
    
    let state = {redirect: '/'}
    useEffect(()=>{
        setMytoken('')
    },[setMytoken])
   
    return (
    <>
        {/* <Processlogout /> */}
        <Redirect to={state.redirect} />
    </>
    )
    
    
}

export default Logout;