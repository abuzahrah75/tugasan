import React, {useState} from 'react'

export const MytokenContext = React.createContext('Apple')
export const VegetableContext = React.createContext('Tomato')
export const MyAppsContext = React.createContext({})

// const myappData={
//     tajuk: "TUGASAN",
//     owner: "Abu Zahrah"
//   }

 const Store = ({children})=>{
     const [mytoken, setMytoken]= useState('')
     const [vegetable, setVegetable]=useState('Tomato')
     const [myApps, setMyApps] = useState({})

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