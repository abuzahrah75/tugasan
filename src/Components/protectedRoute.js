import React from 'react';
import {Route, Redirect } from 'react-router-dom'
// import {MytokenContext} from './Store'
import ls from 'local-storage'

export const ProtectedRoute = ({component: Component, ...rest}) => {
    // const context = useContext(MytokenContext)
    // const [mytoken] = context

    const dahLoginKe = ls.get('dahlogin')
    return (
        <Route 
            {...rest}
            render= {
                props =>{
                    if(dahLoginKe){
                        return <Component {...props} />
                    }else{
                        return <Redirect to={{
                            pathname: "/",
                            state:{
                                from: props.location
                            }
                        }}/>
                       
                    } 
                }
            }
        />
    );
}

// export default protectedRoute;
