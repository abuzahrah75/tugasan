import React,{useContext} from 'react'
import {MyAppsContext} from './Store'

export default function Testcomponent() {
    const context = useContext(MyAppsContext);
    const [myApps] = context
    // console.log(myApps)
    return (
        <div>
            <h1>{myApps.tajuk_test}</h1>
        </div>
    )
}
