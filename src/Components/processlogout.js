import {useContext} from 'react'
import {MytokenContext, UdahLoginContext} from './Store'
import {useHistory} from 'react-router-dom'
import ls from 'local-storage'


const [,setMytoken] = useContext(MytokenContext)
const [,setUdahLogin] = useContext(UdahLoginContext)


export const Processlogout=()=> {
    let state = {redirect: '/'}
    // useEffect(()=>{
        setMytoken('')
        setUdahLogin(false)
        ls.set('dahlogin',false)
        ls.set('apptoken','')
        
    // },[setMytoken,setUdahLogin])
   
    return (
    <>
        {/* <Processlogout /> */}
        <Redirect to={state.redirect} />
    </>
    )
    
}
