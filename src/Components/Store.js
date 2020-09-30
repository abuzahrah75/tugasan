import React, {useState, useEffect} from 'react'
import axios from './axios'
import ls from 'local-storage'

export const MytokenContext = React.createContext('')
export const UdahLoginContext = React.createContext('')
export const MyAppsContext = React.createContext({})

const apptoken = ls.get('apptoken')
const dahLogin = ls.get('dahlogin')

 const Store = ({children})=>{
     const [mytoken, setMytoken]= useState('')
     const [udahLogin, setUdahLogin]=useState(null)
     const [myApps, setMyApps] = useState({appname: 'tugasan'})

    useEffect(() => {
        axios.get('tugasan/api/appdata').then(res => setMyApps(res.data))
      }, [setMyApps])

    // useEffect(() => {
        
        if(mytoken === '' && apptoken !==''){
            setUdahLogin(true)
            setMytoken(apptoken)
        }
    
    // // },[mytoken,udahLogin])
    // console.log("TOKENstore:  " + mytoken)
    // console.log("uDohLogin_store:  " + udahLogin)
    // console.log("################")
    // console.log("apptoken  " + apptoken)
    // console.log("dalogin " + dahLogin)
    // console.log("888888888888888888888888888")

     return (
         <MyAppsContext.Provider value ={[myApps, setMyApps]}>
        <MytokenContext.Provider value={[mytoken, setMytoken]}>
            <UdahLoginContext.Provider value={[udahLogin, setUdahLogin]}>
                {children}
            </UdahLoginContext.Provider>
        </MytokenContext.Provider>
        </MyAppsContext.Provider>
     )


    }

    export default Store