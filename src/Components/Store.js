import React, {useState, useEffect} from 'react'
import axios from './axios'
import ls from 'local-storage'

export const MytokenContext = React.createContext('')
export const VegetableContext = React.createContext('Tomato')
export const MyAppsContext = React.createContext({})

const apptoken = ls.get('apptoken')

 const Store = ({children})=>{
     const [mytoken, setMytoken]= useState('')
     const [vegetable, setVegetable]=useState('Tomato')
     const [myApps, setMyApps] = useState({})

     useEffect(() => {
        axios.get('tugasan/api/appdata').then(res => setMyApps(res.data))

        if(mytoken === '' && apptoken !==''){
            setMytoken(apptoken)
        }
      }, [setMyApps,setMytoken,mytoken])

    // console.log("TOKEN:  " + mytoken)

     return (
         <MyAppsContext.Provider value ={[myApps, setMyApps]}>
        <MytokenContext.Provider value={[mytoken, setMytoken]}>
            <VegetableContext.Provider value={[vegetable, setVegetable]}>
                {children}
            </VegetableContext.Provider>
        </MytokenContext.Provider>
        </MyAppsContext.Provider>
     )


    }

    export default Store