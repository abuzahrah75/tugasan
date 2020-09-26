import React, {useEffect, useContext} from 'react'
import axios from './axios'
import {MyAppsContext} from './Store'

export default function Testapi() {
    // const [data, setData] = useState({});
    const context = useContext(MyAppsContext);
    const [myApps, setMyApps] = context;
 
    // useEffect(() => {
    //     const fetchData = async () => {
    //       // const result = await axios.get('tugasan/');
    //       const result = await axios.get('tugasan/api/appdata');
    //       // const result = await axios.get('tugasan', { headers: { Authorization: 'ee0f87afec9d132fa7eafefa9f435604a0004fcd' } });
    //       setMyApps(result.data);
    //     };
     
    //     fetchData();
    //   }, []);

      useEffect(() => {
        axios.get('tugasan/api/appdata').then(res => setMyApps(res.data))
      }, [setMyApps])

  // console.log(myApps)
    return (
        <>
            {myApps.appname}
        </>
    )
}
