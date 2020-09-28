import {useContext} from 'react'
import {MytokenContext} from './Store'

export const Processlogout=()=> {
    const context = useContext(MytokenContext)
    const [, setMytoken] = context
    return (
        ()=>{setMytoken('')}
    )
}
