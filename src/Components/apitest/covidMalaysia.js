import React, {useEffect, useState} from 'react'
import axios from 'axios'
// import {format} from 'date-fns'
// import {moment} from 'moment'
import Moment from 'react-moment'
import CircularProgress from '@material-ui/core/CircularProgress'
import MaterialTable from 'material-table'


function CovidMalaysia() {
    const [myData, setMyData] = useState([])
    const [myterkini, setMyterkini] = useState('{}')

    useEffect(() =>{
        //get Malaysia latest data
        axios.get(`https://api.apify.com/v2/key-value-stores/6t65lJVfs3d8s6aKc/records/LATEST?disableRedirect=true`)
      .then(res1 => setMyterkini(res1.data))
        //get Malaysia history
      axios.get(`https://api.apify.com/v2/datasets/7Fdb90FMDLZir2ROo/items?format=json&clean=1`)
      .then(res2 => setMyData(res2.data))
      },[setMyData])
    

      //set table columns
    const columns =[
        {title: "Last Update", field: "lastUpdatedAtApify"},
        {title: "Total Positif", field:"testedPositive"},
        {title: "Recovered", field:"recovered"},
        {title: "In ICU", field:"inICU"},
        {title: "Deceased", field:"deceased"},
        {title: "Total Tested", field:"testedTotal"},
        {title: "Negatif", field:"testedNegative"}
    ]

    // console.log(myData)
    if (myData.length<1){
       return  (<><h2>Loading data ...</h2>
        <CircularProgress /></>
       )

    }else{
    return (
        <div>
            <h4>Covid-18 Data for Malaysia :  
            <Moment parse="YYYY-MM-DD HH:mm">
                { myterkini.lastUpdatedAtApify}
            </Moment>
            </h4>
            <table><tbody>
                <tr><td>Jumlah Kes Keseluruhan : </td><td>{myterkini.testedPositive}</td></tr>
                <tr><td>Jumlah Kes Sembuh : </td><td>{myterkini.recovered}</td></tr>
                <tr><td>Jumlah Kes Aktif : </td><td>{myterkini.activeCases}</td></tr>
                <tr><td>Jumlah Kes Kematian : </td><td>{myterkini.deceased}</td></tr>
                <tr><td>Jumlah Kes Dalam ICU : </td><td>{myterkini.inICU}</td></tr>
                <tr><td>Jumlah Kes Bantuan Pernafasan : </td><td>{myterkini.respiratoryAid}</td></tr>
               
            </tbody>    
            </table>

            <MaterialTable 
                title = "Covid-19 History for Malaysia"
                data = {myData}
                columns = {columns}
            />
            {/* <ul >
    { myData.map(baris => 
            <li key ={baris.lastUpdatedAtApify}>
                {baris.lastUpdatedAtApify } : {baris.testedPositive}
            </li>)
            }
        </ul> */}
        </div>
    )
    }
}

export default CovidMalaysia
