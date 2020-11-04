import React from 'react';
// import Typography from '@material-ui/core/Typography'
import {Route, Switch} from 'react-router-dom'
import DocsHome from './DocsHome';

const Dokumen = () => {
    return (
        <Switch>
            <Route path="/dokumen" exact component={DocsHome} />

            
            <Route path="*" component={ ()=> "404 NOT FOUND"}/>
          </Switch>
    );
}

export default Dokumen;
