import React, {useState} from 'react'

export const FruitContext = React.createContext('Apple')
export const VegetableContext = React.createContext('Tomato')
export const MyAppsContext = React.createContext({})

const myappData={
    tajuk: "TUGASAN",
    owner: "Abu Zahrah"
  }

 const Store = ({children})=>{
     const [fruit, setFruit]= useState('Apple')
     const [vegetable, setVegetable]=useState('Tomato')
     const [myApps, setMyApps] = useState(myappData)

     return (
         <MyAppsContext.Provider value ={[myApps, setMyApps]}>
        <FruitContext.Provider value={[fruit, setFruit]}>
            <VegetableContext.Provider value={[vegetable, setVegetable]}>
                {children}
            </VegetableContext.Provider>
        </FruitContext.Provider>
        </MyAppsContext.Provider>
     )


    }

    export default Store