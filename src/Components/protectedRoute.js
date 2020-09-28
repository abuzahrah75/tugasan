import React, {useContext} from 'react';
import {Route, Redirect } from 'react-router-dom'
import {MytokenContext} from './Store'

export const ProtectedRoute = ({component: Component, ...rest}) => {
    const context = useContext(MytokenContext)
    const [mytoken] = context

    return (
        <Route 
            {...rest}
            render= {
                props =>{
                    if(mytoken===''){
                        return <Redirect to={{
                            pathname: "/",
                            state:{
                                from: props.location
                            }
                        }}/>
                    }else{
                        return <Component {...props} />
                    } 
                }
            }
        />
    );
}

// export default protectedRoute;
