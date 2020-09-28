import React, {useContext} from 'react';
import {MytokenContext} from './Store'
import {Redirect} from 'react-router-dom'

const Logout = () => {
    const context = useContext(MytokenContext)
    const [, setMytoken] = context
    
    setMytoken('')
        
    
    let state = {redirect: '/'}
    return <Redirect to={state.redirect} />
    
}

export default Logout;